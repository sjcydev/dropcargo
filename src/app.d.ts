// See https://kit.svelte.dev/docs/types#app

import type { PrismaClient } from "@prisma/client";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface Platform {}
  }
  interface Usuario {
    nombre: string;
    apellido: string;
    cedula: string;
    correo: string;
    telefono: string;
    sexo: string;
    nacimiento: string;
  }
  var prisma: PrismaClient;
}

export {};
