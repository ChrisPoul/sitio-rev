<script>
	import ProductCategory from '$lib/components/ProductCategory.svelte';
	import MainBanner from '$lib/components/MainBanner.svelte';
	import Button from '$lib/components/Button.svelte';

	let { data } = $props();

	function categoryToImageSlug(title) {
		return title
			.toLowerCase()
			.normalize('NFD')
			.replace(/\p{Diacritic}/gu, '')
			.replace(/[/\s]+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	}
</script>

<MainBanner imageSrc="/5.png" position="right">
	{#snippet title()}
	Aseguramos que tus unidades sigan <br />
	trabajando al máximo rendimiento
	{/snippet}
</MainBanner>

<div class="container mx-auto px-main py-16">
	<h2 class="text-w11 font-bold text-center mb-16">
		CONOCE NUESTROS PRODUCTOS
	</h2>

	<div class="flex flex-col gap-24">
		{#each data.categories as category, i}
			<ProductCategory
				title={category.title}
				description={category.description}
				products={category.products}
				imageSrc={category.products.find((p) => p.image)?.image ??
					category.image ??
					`/productos/${categoryToImageSlug(category.title)}.jpg`}
				align={i % 2 === 0 ? 'left' : 'right'}
			/>
		{/each}
	</div>
</div>

<div class="flex justify-center my-24">
	<Button variant="primary" textSize="3xl" class="px-20" href="/contacto">
		COTIZA TU PROYECTO
	</Button>
</div>
