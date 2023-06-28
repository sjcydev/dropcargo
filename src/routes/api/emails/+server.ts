import type { RequestEvent } from "./$types";
import * as SIB from "@sendinblue/client";
import { SECRET_SIB_API_KEY } from "$env/static/private";
import BienvenidoEmail from "$lib/components/emails/BienvenidoEmail.svelte";
import CasilleroEmailAdmin from "$lib/components/emails/CasilleroEmailAdmin.svelte";
import { render } from "svelte-email";

export const POST = async ({ request }: RequestEvent) => {
  let { nombre, cedula, correo, apellido, casillero } = await request.json();

  try {
    const html = render({
      template: BienvenidoEmail,
      props: {
        nombre,
        apellido,
        casillero,
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
          email: "info@dropcargoexpress.com",
          name: "DropCargo Express",
        },
        replyTo: {
          email: "dropcargo.exp@gmail.com",
          name: "DropCargo Express",
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

    const admin = render({
      template: CasilleroEmailAdmin,
      props: {
        nombre,
        apellido,
        casillero,
        cedula,
        correo,
      },
    });

    await sibAPI.sendTransacEmail({
      sender: {
        email: "info@dropcargoexpress.com",
        name: "DropCargo Express",
      },
      to: [{ email: "dropcargo.exp@gmail.com" }],
      subject: "Nuevo Casillero Registrado",
      htmlContent: admin,
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
