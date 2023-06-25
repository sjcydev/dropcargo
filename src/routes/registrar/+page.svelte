<script>
	import AbrirCasillero from '$lib/components/AbrirCasillero.svelte';
	import { blur } from 'svelte/transition';
	import { onMount } from 'svelte';
	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Registra tu Casillero Gratis</title>
</svelte:head>

<div
	class="hero min-h-screen relative"
	style="background-image: url(https://images.unsplash.com/photo-1556011308-d6aedab5ed8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80);"
>
	<div class="hero-overlay bg-opacity-60" />
	{#if ready}
		<div
			in:blur={{ duration: 750, amount: 2 }}
			class="hero-content text-center text-primary-content w-full"
		>
			<AbrirCasillero />
		</div>
	{/if}
</div>
