<script lang="ts">
  import {
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
    Img,
  } from "svelte-email";

  let logo =
    "https://res.cloudinary.com/dx312n0ce/image/upload/f_auto,q_auto/wwssl6h9nifcwvmghrqy";
  let logoNombre =
    "https://res.cloudinary.com/dx312n0ce/image/upload/f_auto,q_auto/vvvwedj4hjflqnlhpwzj";

  const preview = "Correo de Bienvenida e Información del Casillero";
  export let nombre: String;
  export let apellido: String;
  export let casillero: String;

  let codigo_de_compania = "DROP";
  let nombre_de_compania = "DropCargo Express";
  let direccion = {
    direccion1: "7854 NW 46TH ST UNIT 2",
    estado: "FLORIDA",
    ciudad: "MIAMI",
    zip: "33166",
    pais: "UNITED STATES",
    tel: "+1 786-622-1058",
  };

  const fontFamily =
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif';

  const main = {
    backgroundColor: "#ffffff",
  };

  const container = {
    "max-width": "50em",
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "100%",
  };

  const heading = {
    fontFamily,
    fontSize: "24px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  };

  const heading2 = {
    fontFamily,
    fontSize: "20px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
  };

  const paragraph = {
    fontFamily,
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
  };

  const hr = {
    borderColor: "#cccccc",
    margin: "20px 0",
  };

  const logoIcon = {
    width: "2.75rem",
    height: "auto",
    "margin-right": "0.5rem",
  };

  const logoName = {
    width: "8rem",
    height: "auto",
  };

  const logoContainer = {
    display: "flex",
    width: "fit-content",
    margin: "0 auto",
  };

  const footerTitle = {
    ...paragraph,
    fontSize: "16px",
  };

  const footerText = {
    ...paragraph,
    fontSize: "14px",
  };
</script>

<Html>
  <Head />
  <Preview {preview} />
  <Section style={main}>
    <Container style={container}>
      <Container style={logoContainer}>
        <Img
          src={logo}
          width="30"
          height="30"
          style={logoIcon}
          alt="DropCargoExpress
        Logo"
        />
        <Img
          src={logoNombre}
          width="30"
          height="30"
          style={logoName}
          alt="DropCargoExpress
        Logo"
        />
      </Container>
      <Heading style={heading}
        >Bienvenido a {nombre_de_compania} ({codigo_de_compania})!</Heading
      >
      <Text style={paragraph}>
        Bienvenido {nombre},
      </Text>
      <Text style={paragraph}>
        Espero que te encuentres muy bien. Nuestra empresa esta enfocada a
        satisfacer las necesidades de nuestros clientes, brindándoles un
        servicio de alta calidad, personalizado y eficiente. Nuestra compañía
        brinda sus servicios de transporte de carga aérea y marítima con vuelos
        diarios y consolidaciones marítimas semanales de Miami a Panamá. Debajo
        encontraras la informacion de tu casillero.
      </Text>
      <Hr style={hr} />
      <Heading style={heading2}>Información del Casillero</Heading>
      <Text style={paragraph}>
        Nombre: {nombre}
        {codigo_de_compania}{casillero}
        {apellido}
        <br />
        Address Line 1: {direccion.direccion1}
        {codigo_de_compania}
        <br />
        Address Line 2: {codigo_de_compania}
        <br />
        City: {direccion.ciudad}
        <br />
        State: {direccion.estado}
        <br />
        Zip Code: {direccion.zip}
        <br />
        Country: {direccion.ciudad}
        <br />
        Tel: {direccion.tel}
      </Text>
      <Text style={paragraph}>
        Usa esta información cada vez que realizes una compra por internet.
        Recuerda que debes
        <strong
          >incluir su casillero ({codigo_de_compania}####) en la dirección</strong
        >. Sin el numero de casillero no podremos rastrear su paquete cuando
        llegue a Panamá.
      </Text>
      <Hr style={hr} />
      <Text style={footerTitle}>
        Para nosotros es un placer poder realizarles la siguiente propuesta:
      </Text>
      <ul>
        <li>
          <Text style={footerText}>
            En caso de solicitar asegurar su mercancía de alto valor (OPCIONAL)
            se le cobrara el 20% del valor total de su factura comercial previo
            aviso. (Adjuntar factura comercial).
          </Text>
        </li>
        <li>
          <Text style={footerText}>
            En caso de pérdida se hará responsable al 100 % una vez el cliente
            tenga asegurada su mercancía. De lo contrario solo nos haremos
            responsables por el 25% del valor y contamos con 8 días hábiles para
            realizar las averiguaciones pertinentes, una vez se tenga la certeza
            con firma incluida de uno de nuestros colaboradores en la bodega en
            Miami.
          </Text>
        </li>
        <li>
          <Text style={footerText}>
            NO podemos hacernos responsables por carga entregada por USPS puesto
            que no tenemos seguridad de entrega.
          </Text>
        </li>
        <li>
          <Text style={footerText}>
            No podemos hacernos responsable por daño en mercancía mal empacada
            por exportación
          </Text>
        </li>
        <li>
          <Text style={footerText}>
            No podemos hacernos responsable por paquetes, después de 1 mes de no
            ser retirado en la oficina.
          </Text>
        </li>
      </ul>
    </Container>
  </Section>
</Html>
