import type { RequestEvent } from "./$types";
import { prisma } from "$lib/server/prisma";

export const POST = async ({ request, fetch }: RequestEvent) => {
  let { usuario } = await request.json();

  let { nombre, apellido, cedula, telefono, correo, sexo, nacimiento } =
    usuario as Usuario;

  let currUser = await prisma.usuarios.findUnique({
    where: { correo: correo },
  });

  nombre = nombre.toLowerCase();
  nombre = nombre.charAt(0).toUpperCase() + nombre.slice(1);
  apellido = apellido.toLowerCase();
  apellido = apellido.charAt(0).toUpperCase() + apellido.slice(1);

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
        telefono,
        nacimiento: fecha_nacimiento,
      },
    });
    record = await prisma.usuarios.update({
      where: {
        id: record.id,
      },
      data: {
        casillero: record.id,
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

  await fetch("/api/emails", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      nombre,
      apellido,
      casillero: record.id,
      telefono,
      correo,
      cedula,
    }),
  });

  return new Response(
    JSON.stringify({
      message:
        "Casillero Registrado Exitosamente! Pronto recibiras un correo con mas detalles. Recuerda revisar tu folder de Spam.",
      status: "success",
    }),
    {
      headers: { "Content-Type": "application/json" },
      status: 201,
    }
  );
};
