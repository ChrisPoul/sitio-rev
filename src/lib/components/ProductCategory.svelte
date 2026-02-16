<script>
	import Card from '$lib/components/Card.svelte';

	let {
		title,
		description,
		products = [],
		imageSrc,
		align = 'left'
	} = $props();
</script>

<div
	class="grid grid-cols-2 gap-8 items-center w-full {align === 'right'
		? '[&>*:nth-child(1)]:order-2 [&>*:nth-child(2)]:order-1'
		: ''}"
>
	<!-- Image column: uses first product's image for the category -->
	<Card rounded="none" class="overflow-hidden aspect-6/3 w-full shrink-0">
		<img
			src={imageSrc ? encodeURI(imageSrc) : ''}
			alt={title}
			class="w-full h-full object-cover"
			loading="lazy"
		/>
	</Card>

	<!-- Content column (title, description, products grid) -->
	<div class="flex flex-col items-start text-left">
		<h2 class="text-w9 font-bold text-black-primary mb-4">{title}</h2>
		<p class="text-w7  mb-6 leading-relaxed">{description}</p>
		<div class="grid grid-cols-2 gap-4 w-full max-w-md">
			{#each products as product}
				<div
					class="bg-red-dark text-white-primary px-5 py-3 rounded-tr-[2cqw] text-w5 font-bold text-center flex items-center justify-center {products.length === 1
						? 'col-span-2'
						: ''}"
				>
					{product.name}
				</div>
			{/each}
		</div>
	</div>
</div>
