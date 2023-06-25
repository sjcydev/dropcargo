import { toast } from '@zerodevx/svelte-toast';

export default function validateAll(usuario: Usuario): boolean {
	let valid = true;
	if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(usuario.correo)) {
		toast.push('Correo invalido', { classes: ['warning'] });
		valid = false;
	}

	if (
		!/^P$|^(?:PE|E|N|[23456789]|[23456789](?:A|P)?|1[0123]?|1[0123]?(?:A|P)?)$|^(?:PE|E|N|[23456789]|[23456789](?:AV|PI)?|1[0123]?|1[0123]?(?:AV|PI)?)-?$|^(?:PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(?:\d{1,4})-?$|^(PE|E|N|[23456789](?:AV|PI)?|1[0123]?(?:AV|PI)?)-(\d{1,4})-(\d{1,6})$/.test(
			usuario.cedula
		)
	) {
		toast.push('Cedula invalida, recuerda usar guiones', { classes: ['warning'] });
		valid = false;
	}
	return valid;
}
