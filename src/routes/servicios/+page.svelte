<script>
	import MainBanner from '$lib/components/MainBanner.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import Button from '$lib/components/Button.svelte';
const services = [
	{
		title: 'CÁLCULO VOLUMÉTRICO',
		description:
			'Nuestro servicio de ingeniería incluye el cálculo de cupo por estiba, asegurando que el diseño de su caja fija seca aproveche al máximo cada centímetro cúbico según el tipo de carga que transporta.',
		imageSrc: '/images/calculo-volumetrico.jpg'
	},
	{
		title: 'DISTRIBUCIÓN DE CARGA',
		description:
			'Cálculo de carga exacto respetando la distribución 60-40. Diseñamos con geometría perfecta basada en las dimensiones de su chasis para lograr una carga equilibrada.',
		imageSrc: '/images/distribucion-carga.jpg'
	},
	{
		title: 'DISEÑOS PERSONALIZADOS',
		description:
			'Partimos de un diseño maestro optimizado que adaptamos con planos de fabricación específicos para cumplir con los requerimientos únicos de cada cliente y su chasis.',
		imageSrc: '/images/disenos-personalizados.jpg'
	},
	{
		title: 'INGENIERÍA INVERSA',
		description:
			'Digitalizamos su caja y la replicamos con precisión milimétrica. Creamos planos partiendo de una muestra física para fabricar más unidades idénticas.',
		imageSrc: '/images/ingenieria-inversa.jpg'
	}
];

	const additionalServices = [
		{
			title: 'SERVICIO ADICIONAL 1',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer',
			imageSrc: '/images/servicio-adicional-1.jpg'
		},
		{
			title: 'SERVICIO ADICIONAL 2',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer',
			imageSrc: '/images/servicio-adicional-2.jpg'
		},
		{
			title: 'SERVICIO ADICIONAL 3',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer',
			imageSrc: '/images/servicio-adicional-3.jpg'
		},
		{
			title: 'SERVICIO ADICIONAL 4',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuer',
			imageSrc: '/images/servicio-adicional-4.jpg'
		}
	];
</script>

<MainBanner imageSrc="/5.png" position="left">
	{#snippet title()}
		A tu lado <b>antes, durante<br />
		y después</b> de la entrega
	{/snippet}
	{#snippet paragraph()}
		Nuestra empresa cuenta con un departamento de ingeniería con experiencia a lo largo de los
		años en el ramo. Con ello podemos conseguir brindar una carrocería que satisfaga sus
		requerimientos para maximizar la vida útil, reducir costos de mantenimiento e incrementar el valor
		de su inversión.
	{/snippet}
</MainBanner>

<div class="px-40">
    <!-- CONOCE NUESTROS SERVICIOS Section -->
    <section class="bg-white-primary py-16">
        <div class="mx-auto">
            <h2 class="text-w10 font-semibold text-red-dark text-center mb-12">
                CONOCE NUESTROS SERVICIOS
            </h2>
            <div class="grid grid-cols-2 gap-x-8 gap-y-16 mx-auto">
                {#each services as service}
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        imageSrc={service.imageSrc}
                    />
                {/each}
            </div>
        </div>
    </section>

    <div class="flex justify-center my-16">
        <Button variant="primary" textSize="3xl" class="px-20">
            SOLICITA TU COTIZACIÓN
        </Button>
    </div>

    <!-- SERVICIOS ADICIONALES Section -->
    <section class="bg-white-primary py-16">
        <div class="mx-auto">
            <h2 class="text-w10 font-semibold text-black-primary text-center mb-12">
                SERVICIOS ADICIONALES
            </h2>
            <div class="grid grid-cols-2 gap-x-8 gap-y-16 mx-auto">
                {#each additionalServices as service}
                    <ServiceCard
                        title={service.title}
                        description={service.description}
                        imageSrc={service.imageSrc}
                        border
                    />
                {/each}
            </div>
        </div>
    </section>
</div>


<!-- Garantía Section -->
<section class="bg-red-dark text-white-primary py-20 my-16 w-full">
    <div class="text-center">
        <h2 class="text-w9 font-bold mb-6">
            MÁS QUE UN SERVICIO, UNA RELACIÓN A LARGO PLAZO
        </h2>
        <p class="text-w8">
            Nuestras unidades cuentan con 1 año de garantía<br />
            contra cualquier defecto de fabricación.
        </p>
    </div>
</section>

<div class="flex justify-center my-24">
    <Button variant="primary" textSize="5xl" class="px-20 py-5">
        HABLEMOS DE TU PROYECTO
    </Button>
</div>
