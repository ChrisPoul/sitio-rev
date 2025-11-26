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
    En CARROCERIAS 3G S.A. DE C.V. desarrollamos productos para la industria <br />
    del transporte, los cuales son carrocerías sobre chasís fijas y desmontables.
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

