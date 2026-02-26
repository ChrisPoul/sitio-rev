<script>
	import MainBanner from '$lib/components/MainBanner.svelte';
	import Button from '$lib/components/Button.svelte';
</script>

<!-- Main Banner -->
<MainBanner imageSrc="/4.png">
	{#snippet title()}
		<b>Aliados comerciales</b> que<br />
		suman valor a tu inversión
	{/snippet}
    {#snippet paragraph()}
    En Carrocerías 3G desarrollamos y fabricamos carrocerías para el transporte de carga, 
	vendemos e instalamos equipo aliado y accesorios, mediante procesos y tecnología de 
	vanguardia y de calidad, con un enfoque de satisfacción total al cliente, el cumplimiento 
	normativo y el desarrollo de nuestros colaboradores.
    {/snippet}
</MainBanner>

<div class="mx-30 mb-20">
	<div class="flex justify-center">
		<video
			class="w-full max-w-4xl h-auto"
			controls
		>
			<source src="/Carrocerias3G-final.mov" type="video/quicktime" />
			<source src="/Carrocerias3G-final.mov" type="video/mp4" />
			Tu navegador no soporta el elemento de video.
		</video>
	</div>
</div>

<div class="flex flex-col gap-8">
	<!-- First Heading - Left -->
	<div class="bg-red-dark text-white-primary px-40 py-10 rounded-tr-full self-start">
		<h2 class="text-w10">
            Contamos con un equipo de trabajo especializado, <br />
con años de experiencia en el ramo. 
        </h2>
	</div>

	<!-- Second Heading - Right -->
	<div class="bg-red-dark text-white-primary px-40 py-10 rounded-tl-full self-end">
		<h2 class="text-w10">
            El trabajo en equipo es nuestro motor para el <br />
desarrollo de cada producto entregado a usted.
        </h2>
	</div>
</div>

<div class="flex justify-center my-16">
	<Button variant="primary" textSize="3xl" href="/servicios">
		DESCUBRE CÓMO PODEMOS AYUDARTE
	</Button>
</div>

<img src="/Screenshot 2025-11-04 164050.png" alt="Nosotros" class="w-full h-full px-35 mb-20" />

<section class="mx-30 mb-20 space-y-8">
	<div class="space-y-4">
		<h2 class="text-w10 font-bold text-red-dark">Nuestra Identidad y Propósito</h2>
		<p>Nuestra filosofía organizacional define quiénes somos y hacia dónde vamos. Es el fundamento que guía cada decisión y acción en Carrocerías 3G.</p>
	</div>

	<div class="grid gap-8 md:grid-cols-3">
		<div class="space-y-3">
			<h3 class="text-2xl font-bold text-red-dark">1. Misión</h3>
			<p>
				En Carrocerías 3G desarrollamos y fabricamos carrocerías para el transporte de carga, vendemos
				e instalamos equipo aliado y accesorios, mediante procesos y tecnología de vanguardia y de
				calidad, con un enfoque de satisfacción total al cliente, el cumplimiento normativo y el
				desarrollo de nuestros colaboradores.
			</p>
		</div>

		<div class="space-y-3">
			<h3 class="text-2xl font-bold text-red-dark">2. Visión</h3>
			<p>
				Ser una empresa líder, innovadora, y sostenible con cobertura nacional que brinde soluciones
				integrales para el transporte de carga.
			</p>
		</div>

		<div class="space-y-3">
			<h3 class="text-2xl font-bold text-red-dark">3. Valores</h3>
			<p>
				<b class="text-red-dark">Integridad:</b> Creamos una cultura de trabajo idónea, que proporciona coherencia en el
				comportamiento y genera confianza con nuestros clientes y proveedores.
			</p>
			<p>
				<b class="text-red-dark">Responsabilidad:</b> Impulsamos el trabajo colaborativo para unificar las aptitudes y lograr
				una mayor eficiencia en el desarrollo de nuestros procesos.
			</p>
			<p>
				<b class="text-red-dark">Seguridad:</b> Cuidamos de nuestra gente, nuestras comunidades y nuestros recursos naturales.
			</p>
			<p>
				<b class="text-red-dark">Calidad:</b> Procuramos los más elevados estándares para ser los mejores, con el compromiso
				constante de la mejora continua, construyendo relaciones cercanas y de confianza con nuestros
				clientes, entendiendo sus retos y ofreciendo soluciones que excedan sus expectativas.
			</p>
		</div>
	</div>
</section>

