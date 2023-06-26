<script>
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Logo from "$lib/assets/logo.png";
  import LogoName from "$lib/assets/logoNombre.png";
  import Fa from "svelte-fa";
  import { faTruckPlane, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
</script>

<nav
  class="sticky hidden lg:fixed top-0 z-50 navbar w-full bg-base-200 lg:flex
  justify-between lg:px-24 lg:text-base"
>
  <a href="/">
    <img src={Logo} class="w-11 mr-2" alt="DropCargo Express Logo" />
    <img src={LogoName} class="w-32" alt="DropCargo Express Logo" />
  </a>
  <ul class="menu menu-vertical lg:menu-horizontal lg:text-base">
    <li><a href="/">Inicio</a></li>
    <li><a href="/tracking">Tracking</a></li>
    <li><a href="/registrar">Abrir Cuenta</a></li>
  </ul>
</nav>

<nav class="lg:hidden navbar p-3 bg-base-200 grid place-items-center">
  <a href="/">
    <img src={Logo} class="w-11 mr-2" alt="DropCargo Express Logo" />
    <img src={LogoName} class="w-32" alt="DropCargo Express Logo" />
  </a>
</nav>
<nav class="fixed z-50 navbar lg:hidden">
  <div class="btm-nav">
    <button
      class={$page.url.pathname === "/" ? "active" : ""}
      on:click={() => goto("/")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        ><path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        /></svg
      >
    </button>
    <button
      class={$page.url.pathname === "/tracking" ? "active" : ""}
      on:click={() => goto("/tracking")}
    >
      <Fa class="h-5 w-5" icon={faTruckPlane} />
    </button>
    <button
      class={$page.url.pathname === "/registrar" ? "active" : ""}
      on:click={() => goto("/registrar")}
    >
      <Fa class="h-5 w-5" icon={faBoxOpen} />
    </button>
  </div>
</nav>
