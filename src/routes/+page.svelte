<script>
  import AbrirCasillero from "$lib/components/AbrirCasillero.svelte";
  import Wave1 from "$lib/components/waves/Wave1.svelte";
  import { blur } from "svelte/transition";
  import { onMount } from "svelte";

  import Fa from "svelte-fa";
  import {
    faBoxesPacking,
    faTruckFast,
    faClock,
    faComments,
    faMapLocationDot,
  } from "@fortawesome/free-solid-svg-icons";
  import { goto } from "$app/navigation";

  let precio = "$2.75";

  let servicios = [
    {
      titulo: "Comodos Horarios",
      contenido:
        "Recoja su paquete en cualquier momento después del trabajo, estamos abiertos hasta las 5:00PM",
      icono: faClock,
    },
    {
      titulo: "Servicio A Domicilio",
      contenido:
        "Entrega a domicilio en la Ciudad capital, coordinamos la entrega por encomienda al interior del país",
      icono: faTruckFast,
    },
    {
      titulo: "Servicio al Cliente",
      contenido: "Atención las 24 horas del día a través de WhatsApp",
      icono: faComments,
    },
  ];

  let direccionMapa = "https://maps.app.goo.gl/w8SLQSWZCCbS2sQa8?g_st=iw";

  let ready = false;
  onMount(() => (ready = true));
</script>

<svelte:head>
  <title>Agencia de Carga Internacional con Base en Miami y Panama</title>
</svelte:head>

<div
  class="hero min-h-screen relative"
  style="background-image: url(https://images.unsplash.com/photo-1571086291540-b137111fa1c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80);"
>
  <div class="hero-overlay bg-opacity-60" />
  {#if ready}
    <div
      in:blur={{ duration: 750, amount: 2 }}
      class="hero-content text-center text-primary-content flex-col
    lg:flex-row-reverse lg:gap-10 mb-32 lg:mb-0"
    >
      <div class="text-left p-4 lg:p-0">
        <h1 class="titulo mb-5 text-4xl lg:text-5xl font-medium">
          Agencia de Carga Internacional con base en Miami y Panamá
        </h1>
        <p class="mb-5">
          Te facilitamos tus compras por internet. Recibe todas tus compras del
          cualquier parte del mundo.
        </p>
      </div>
      <AbrirCasillero />
    </div>
  {/if}
  <Wave1 />
</div>

<div
  class="card text-primary-content grid place-items-center px-10 lg:px-20 mb-10"
>
  <div class="grid lg:grid-cols-2 w-full lg:w-3/4 place-items-center">
    <div>
      <div class="mb-10 grid place-items-center">
        <h2 class="text-2xl lg:text-4xl my-10">Tarifa Unica</h2>
        <Fa class="text-7xl lg:text-9xl" icon={faBoxesPacking} />
        <div class="my-10 text-center">
          <p class="text-2xl lg:text-3xl mb-3">
            {precio}
            <span class="text-lg"
              ><span class="text-xl lg:text-2xl">/</span> libra sin volumen</span
            >
          </p>
          <p class="text-base">Tarifa a nivel nacional</p>
        </div>
      </div>
    </div>
    <div>
      <p class="text-xl lg:text-2xl mb-5">
        Todo es mas <span class="font-medium">FACIL</span> con nosotros!
      </p>
      <p class="text-base lg:text-xl font-extralight mb-12">
        Solo te facturamos lo que traes. Con una sola tarifa no te tienes que
        preocupar de nada mas. Consigue tu casillero <span class="font-normal"
          >GRATIS</span
        >!
      </p>
      <div class="text-right">
        <button
          class="btn btn-primary max-[1024px]:w-full"
          on:click={() => goto("/registrar")}>Consigue tu Casillero</button
        >
      </div>
    </div>
  </div>
</div>

<div
  class="hero h-[38em] relative"
  style="background-image:
    url(https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80);"
>
  <div class="hero-overlay bg-opacity-50" />
  <div class="hero-content text-center text-primary-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-4xl lg:text-5xl font-bold">Una vez en Miami</h1>
      <p class="mb-5">Le entregamos su paquete en 48 horas!</p>
      <button class="btn btn-primary" on:click={() => goto("/registrar")}
        >Comprar en Linea</button
      >
    </div>
  </div>
  <Wave1 />
</div>

<div class="hero bg-base-100 text-primary-content p-12 lg:p-0 mb-10">
  <div class="hero-content text-center">
    <div>
      <h1 class="text-3xl lg:text-4xl font-bold mb-12">Nuestros Servicios</h1>
      <div class="grid md:grid-cols-3 place-items-center w-full gap-10">
        {#each servicios as servicio}
          <div
            class="card w-56 h-56 md:w-60 md:h-60 lg:w-72 lg:h-72 bg-base-300 shadow-xl"
          >
            <figure class="px-5 py-5 lg:px-10 lg:pt-10">
              <Fa
                class="text-3xl md:text-4xl lg:text-5xl"
                icon={servicio.icono}
              />
            </figure>
            <div class="card-body items-center text-center px-5 py-2 lg:p-8">
              <h2 class="card-title text-base lg:text-lg">{servicio.titulo}</h2>
              <p class="text-center text-sm lg:text-base">
                {servicio.contenido}
              </p>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>

<div
  class="hero lg:h-[34em] relative"
  style="background-image:
    url(https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1496&q=80);"
>
  <div class="hero-overlay bg-opacity-50" />
  <div class="hero-content text-center text-primary-content">
    <div class="max-w-md">
      <h1 class="mb-5 text-3xl lg:text-5xl font-medium">
        Abre tu cuenta totalmente
        <span class="font-bold">GRATIS</span>!
      </h1>
      <p class="mb-5">
        Te traemos todas tus compras de cualquier parte del mundo a Panamá! Abre
        tu casilla hoy, es GRATIS Ofrecemos también el servicio a domicilio, el
        costo depende del área de entrega.
      </p>
      <button class="btn btn-primary" on:click={() => goto("/registrar")}
        >Abre tu Cuenta Gratis</button
      >
    </div>
  </div>
</div>

<div class="hero lg:h-fit relative bg-base-100">
  <div class="hero-content text-primary-content">
    <div class="grid lg:grid-cols-2 place-items-center">
      <div class="w-full p-5 lg:p-20">
        <h1 class="mb-3 text-3xl font-medium">Horario</h1>
        <div>
          <div class="mb-2">
            <p class="text-lg font-medium">Lunes - Viernes</p>
            <p>9:00 AM - 5:00 PM</p>
          </div>
          <div class="mb-2">
            <p class="text-lg font-medium">Sabado</p>
            <p>10:00 AM - 4:00 PM</p>
          </div>
          <p class="text-lg font-medium">Domingo</p>
          <p>Cerrado</p>
        </div>
      </div>
      <div class="p-5 mb-10 lg:p-20">
        <h2 class="text-2xl font-medium mb-1">DropCargo Express</h2>
        <div class="grid lg:grid-cols-2 lg:gap-10 mb-3">
          <div>
            <p>Primario</p>
            <a
              href="https://wa.me/+50766302373"
              class="text-lg mb-2 flex place-items-center gap-2"
              target="_blank"
            >
              <!-- <Fa icon={faPhone} /> --> +507 6630-2373
            </a>
          </div>
          <div>
            <p>Secundario</p>
            <a
              href="https://wa.me/+50767885008"
              class="text-lg mb-2 flex place-items-center gap-2"
              target="_blank"
            >
              <!--  <Fa class="text-2xl" icon={faWhatsapp} /> --> +507 6788-5008
            </a>
          </div>
        </div>
        <p class="mb-1 text-base">Miraflores</p>
        <p class="mb-6 text-sm">Calle 79B Oeste, Casa 195</p>
        <button
          class="btn btn-neutral"
          on:click={() => window.open(direccionMapa, "_blank")}
          ><Fa icon={faMapLocationDot} /> Direccion</button
        >
      </div>
    </div>
  </div>
</div>
