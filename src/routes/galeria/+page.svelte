<script>
	import MainBanner from '$lib/components/MainBanner.svelte';

	let { data } = $props();

	let modalProduct = $state(null);

	function openModal(product) {
		if (!product?.image) return;
		modalProduct = product;
		document.body.style.overflow = 'hidden';
	}

	function closeModal() {
		modalProduct = null;
		document.body.style.overflow = '';
	}

	function handleBackdropClick(e) {
		if (e.target === e.currentTarget) closeModal();
	}

	$effect(() => {
		const handler = (e) => {
			if (e.key === 'Escape') closeModal();
		};
		if (modalProduct) {
			window.addEventListener('keydown', handler);
			return () => window.removeEventListener('keydown', handler);
		}
	});
</script>

<MainBanner imageSrc="/5.png" position="left">
	{#snippet title()}
		<b>Galería</b><br />
		de productos
	{/snippet}
</MainBanner>

<div class="container mx-auto px-main py-16">
	{#each data.categories as category}
		<section class="mb-20">
			<h2 class="text-w10 font-bold text-black-primary text-left mb-8">
				{category.title}
			</h2>
			<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
				{#each category.products.filter((p) => p.image) as product}
					<button
						type="button"
						class="block w-full aspect-4/3 overflow-hidden border-3 border-red-dark focus:outline-none focus:ring-2 focus:ring-red-dark focus:ring-offset-2"
						onclick={() => openModal(product)}
					>
						<img
							src={encodeURI(product.image)}
							alt={product.name}
							class="w-full h-full object-cover"
						/>
					</button>
				{/each}
			</div>
		</section>
	{/each}
</div>

{#if modalProduct}
	<!-- Modal overlay -->
	<div
		role="dialog"
		aria-modal="true"
		aria-labelledby="modal-title"
		tabindex="-1"
		class="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/70"
		onclick={handleBackdropClick}
		onkeydown={(e) => e.key === 'Escape' && closeModal()}
	>
		<div
			class="relative bg-white-primary max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-xl"
		>
			<div class="p-6">
				<img
					src={encodeURI(modalProduct.image)}
					alt={modalProduct.name}
					class="w-full h-auto max-h-[70vh] object-contain"
				/>
				{#if modalProduct.description}
					<p
						id="modal-title"
						class="mt-6 text-w10 lg:text-w6 text-black-primary leading-relaxed"
					>
						{modalProduct.description}
					</p>
				{/if}
			</div>
		</div>
	</div>
{/if}
