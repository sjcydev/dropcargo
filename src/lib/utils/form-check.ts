import { toast } from "@zerodevx/svelte-toast";

export default function validateAll(usuario: Usuario): boolean {
  let valid = true;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.correo)) {
    toast.push("Correo invalido", { classes: ["warning"] });
    valid = false;
  }

  return valid;
}
