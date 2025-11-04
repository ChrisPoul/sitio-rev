<script>
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import MainBanner from '$lib/components/MainBanner.svelte';
	import ContactInfo from '$lib/components/ContactInfo.svelte';
</script>

<!-- Main Banner -->
<MainBanner imageSrc="/images/hero-banner.jpg">
	{#snippet title()}
			Más que carrocerías,<br />
			<b>soluciones que impulsan tu operación</b>
		
	{/snippet}
</MainBanner>

<!-- Hero Content Section -->
<section class="py-16">
	<div class="container mx-auto px-8">
		<div class="grid grid-cols-2 gap-8 items-center">
			<!-- Image Left -->
			<Card rounded="full" class="overflow-hidden">
				<div class="bg-black-primary w-full h-96"></div>
			</Card>
			<!-- Text Right -->
			<div>
				<p class="text-w6 text-gray-700">
					Desarrollamos productos para la industria del transporte, los cuales son
					carrocerías sobre chasís fijas y desmontables. 
					<br><br>
					Contamos con un equipo de
					trabajo especializado, con años de experiencia en el ramo.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- Services Highlight Section -->
<section class="bg-white-primary">
	<div class=" mx-auto px-8">
		<h2 class="text-w10 font-semibold text-red-dark text-center mb-12">
			CONOCE NUESTROS SERVICIOS
		</h2>
		<div class="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
			<Card rounded="partial" border class="text-center px-16 py-26">
				<h3 class="text-w7 text-black-primary mb-3">
					DISEÑOS PERSONALIZADOS
				</h3>
				<div class="w-1/2 h-0.5 bg-black-primary mx-auto my-4"></div>
				<p class="text-gray-600 leading-relaxed text-w5">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer
				</p>
			</Card>
			<Card rounded="partial" border class="text-center px-16 py-26">
				<h3 class="text-w7 text-black-primary mb-3">
					CÁLCULO VOLUMÉTRICO
				</h3>
				<div class="w-1/2 h-0.5 bg-black-primary mx-auto my-4"></div>
				<p class="text-gray-600 leading-relaxed text-w5">
					Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer
				</p>
			</Card>
		</div>
		<div class="text-center mt-12">
			<Button href="/servicios" variant="primary" textSize="3xl">
				CONOCE MÁS
			</Button>
		</div>
	</div>
</section>


<!-- Conoce 3G Section -->
<section class="relative m-24">
	<div class="mx-auto px-8">
		<div class="flex justify-center">
			<video
				class="w-full max-w-4xl min-h-96"
				controls
				poster="/images/video-poster.jpg"
			>
				<source src="/videos/conoce-3g.mp4" type="video/mp4" />
				Tu navegador no soporta el elemento de video.
			</video>
		</div>
		<div class="absolute bottom-0 right-0 translate-y-1/2">
			<h2
				class="bg-red-dark w-full text-white-primary px-14 py-5 text-nowrap text-w9 font-bold rounded-tr-full rounded-bl-full"
			>
				CONOCE 3G
			</h2>
		</div>
	</div>
</section>

<section class="py-16 bg-red-light">
	<div class="container mx-auto px-8">
		<h2 class="text-w10 font-semibold text-white-primary text-center mb-6">
			Comprometidos con la calidad y la innovación día a día.
		</h2>

		<div class="grid grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
			<div class="text-center">
				<div
					class="bg-red-dark text-white-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-w9 font-bold"
				>
					E
				</div>
				<h3 class="text-w6 text-white-primary mb-2">EXPERIENCIA</h3>
			</div>
			<div class="text-center">
				<div
					class="bg-red-dark text-white-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-w9 font-bold"
				>
					C
				</div>
				<h3 class="text-w6 text-white-primary mb-2">COMPROMISO</h3>
			</div>
			<div class="text-center">
				<div
					class="bg-red-dark text-white-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-w9 font-bold"
				>
					I
				</div>
				<h3 class="text-w6 text-white-primary mb-2">INNOVACIÓN</h3>
			</div>
			<div class="text-center">
				<div
					class="bg-red-dark text-white-primary rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center text-w9 font-bold"
				>
					C
				</div>
				<h3 class="text-w6 text-white-primary mb-2">CALIDAD</h3>
			</div>
		</div>

		<div class="text-center">
			<Button href="/nosotros" variant="secondary" textSize="xl">
				DESCUBRE CÓMO TRABAJAMOS
			</Button>
		</div>
	</div>
</section>

<!-- Additional Services Section -->
<section class="py-24 bg-white-primary">
	<div class="container mx-auto px-8">
		<div class="grid grid-cols-2 gap-8 items-center">
			<!-- Text and Button Left -->
			<div class="flex flex-col items-end">
				<p class="text-w6 text-right text-gray-700 mb-6">
					Porque sabemos que el valor de tu inversión está en el día a día
					Contamos con servicios adicionales que prolongan la vida útil de tus
					carrocerías
				</p>
				<Button variant="primary" textSize="xl">
					ALARGA LA VIDA DE TUS CARROCERÍAS
				</Button>
			</div>
			<!-- Image Right -->
			<Card rounded="full" class="overflow-hidden">
				<div class="bg-black-primary w-full h-96"></div>
			</Card>
		</div>
	</div>
</section>

<!-- Final CTA Section -->
<section class="relative w-full min-h-[600px] bg-black flex items-center justify-center">
	<!-- Background Image -->
	<img
		src="/images/cta-banner.jpg"
		alt=""
		class="absolute inset-0 w-full h-full object-cover"
	/>
	<!-- Content -->
	<div class="relative z-10 flex flex-col items-center mt-32">
		<h2
			class="bg-red-dark text-white-primary px-[10%] py-[4%] text-nowrap text-w10 font-bold rounded-tr-full rounded-bl-full mb-6"
		>
			Estamos listos para trabajar contigo
		</h2>
		<Button href="/contacto" variant="primary" textSize="3xl" class="px-[10%]">
			COTIZA AHORA
		</Button>
	</div>
</section>

<!-- Contact Info Section -->
<ContactInfo />
