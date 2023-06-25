<script>
	import '../app.css';
	import Navbar from '$lib/components/Navbar.svelte';
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import Footer from '$lib/components/Footer.svelte';

	let options = {
		theme: {
			'--toastBarHeight': 0,
			'--toastPadding': '0 10px',
			'--toastBorderRadius': '0.5rem'
		}
	};
</script>

<SvelteToast {options} />
<Navbar />
<slot />
<Footer />

<style>
	:global(.success) {
		--toastBackground: hsl(var(--su));
		--toastColor: hsl(var(--suc));
	}

	:global(.warning) {
		--toastBackground: hsl(var(--wa));
		--toastColor: hsl(var(--wac));
	}
</style>
