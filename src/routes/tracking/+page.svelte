<script lang="ts">
	import { blur } from 'svelte/transition';
	import { onMount } from 'svelte';

	let trackInput = '';
	function track() {
		if (trackInput.length > 0) {
			YQV5.trackSingle({
				//Required, Specify the container ID of the carrier content.
				YQ_ContainerId: 'track17-container',
				//Optional, specify tracking result height, max height 800px, default is 560px.
				YQ_Height: 560,
				//Optional, select carrier, default to auto identify.
				YQ_Fc: '0',
				//Optional, specify UI language, default language is automatically detected based on the browser settings.
				YQ_Lang: 'es',
				//Required, specify the number needed to be tracked.
				YQ_Num: trackInput
			});
		}
	}

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Trackea Tus Paquetes</title>
	<script type="text/javascript" src="//www.17track.net/externalcall.js" defer></script>
</svelte:head>

<div
	class="hero min-h-screen"
	style="background-image: url(https://images.unsplash.com/photo-1549194388-f61be84a6e9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80)"
>
	<div class="hero-overlay bg-opacity-60" />
	{#if ready}
		<div class="hero-content text-center w-full" in:blur={{ duration: 750, amount: 2 }}>
			<div class="w-full card bg-base-100 p-10 shadow-2xl bg-opacity-90">
				<div class="text-primary-content mb-10">
					<h1 class="text-3xl lg:text-4xl mb-3 font-medium">Rastrea tu Paquete</h1>
					<h2 class="text-lg lg:text-xl">Conoce el estado actual de tu paquete</h2>
				</div>
				<form class=" join w-full" on:submit|preventDefault={track}>
					<input
						class="input input-bordered input-primary join-item w-full mb-10"
						placeholder="Codigo de Rastreo"
						bind:value={trackInput}
					/>
					<button class="btn btn-primary join-item" type="submit">Track</button>
				</form>
				<div id="track17-container" class="w-full" />
			</div>
		</div>
	{/if}
</div>
