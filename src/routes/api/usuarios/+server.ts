import type { RequestEvent } from "./$types";
import { prisma } from "$lib/server/prisma";
import * as SIB from "@sendinblue/client";
import { SECRET_SIB_API_KEY } from "$env/static/private";
import BienvenidoEmail from "$lib/components/emails/BienvenidoEmail.svelte";
import { render } from "svelte-email";

export const POST = async ({ request }: RequestEvent) => {
  let { usuario } = await request.json();

  const { nombre, apellido, cedula, correo, sexo, nacimiento } =
    usuario as Usuario;

  let currUser = await prisma.usuarios.findUnique({
    where: { correo: correo },
  });

  if (currUser) {
    return new Response(
      JSON.stringify({
        message: "Correo ya esta registrado",
        status: "warning",
      }),
      {
        headers: { "content-Type": "application/json" },
        status: 400,
      }
    );
  }

  let fechas = nacimiento.split("-");
  let fecha_nacimiento = new Date(
    Number(fechas[2]),
    Number(fechas[1]),
    Number(fechas[0])
  );
  let record;

  try {
    record = await prisma.usuarios.create({
      data: {
        nombre,
        apellido,
        cedula,
        correo,
        sexo,
        nacimiento: fecha_nacimiento,
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({
        message: "Hubo un error y no se pudo registar el casillero",
        status: "error",
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      }
    );
  }

  try {
    const html = render({
      template: BienvenidoEmail,
      props: {
        nombre,
        apellido,
        casillero: record.id,
      },
    });

    const sibAPI = new SIB.TransactionalEmailsApi();

    sibAPI.setApiKey(
      SIB.TransactionalEmailsApiApiKeys.apiKey,
      SECRET_SIB_API_KEY
    );

    await sibAPI
      .sendTransacEmail({
        sender: {
          email: "dropcargo.exp@gmail.com",
          name: "DCE",
        },
        to: [
          {
            email: correo,
          },
        ],
        subject: "Bienvenido a DropCargo Express",
        htmlContent: html,
      })
      .then((err) => {
        return new Response(
          JSON.stringify({ message: err, status: "warning" }),
          {
            headers: { "Content-Type": "application/json" },
            status: 500,
          }
        );
      });
  } catch (err) {
    return new Response(JSON.stringify({ message: err, status: "warning" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }

  return new Response(
    JSON.stringify({
      message:
        "Casillero Registrado Exitosamente! Pronto recibiras un correo con mas detalles.",
      status: "success",
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 201,
    }
  );
};
