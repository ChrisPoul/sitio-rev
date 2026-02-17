<script>
	import MainBanner from '$lib/components/MainBanner.svelte';

	let { data } = $props();

	let modalProduct = $state(null);

	function toSlug(text) {
		return text
			.toLowerCase()
			.normalize('NFD')
			.replace(/\p{Diacritic}/gu, '')
			.replace(/[/\s]+/g, '-')
			.replace(/[^a-z0-9-]/g, '');
	}

	function openModal(product) {
		if (!product) return;
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

	function findProductByHash(hash) {
		if (!hash || !hash.includes('--')) return null;
		const [categorySlug, productSlug] = hash.slice(1).split('--');
		for (const category of data.categories) {
			if (toSlug(category.title) !== categorySlug) continue;
			const product = category.products.find((p) => toSlug(p.name) === productSlug);
			if (product) return product;
		}
		return null;
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

	$effect(() => {
		if (typeof window === 'undefined') return;
		const hash = window.location.hash;
		const product = findProductByHash(hash);
		if (product) {
			modalProduct = product;
			document.body.style.overflow = 'hidden';
			const id = hash.slice(1);
			requestAnimationFrame(() => {
				const el = document.getElementById(id);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
			});
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
				{#each category.products as product}
					<button
						type="button"
						id="{toSlug(category.title)}--{toSlug(product.name)}"
						class="block w-full aspect-4/3 overflow-hidden border-3 border-red-dark focus:outline-none focus:ring-2 focus:ring-red-dark focus:ring-offset-2 text-left bg-gray-light"
						onclick={() => openModal(product)}
					>
						{#if product.image}
							<img
								src={encodeURI(product.image)}
								alt={product.name}
								class="w-full h-full object-cover"
							/>
						{:else}
							<span class="flex w-full h-full items-center justify-center text-red-dark font-bold text-w6 text-center px-4">
								{product.name}
							</span>
						{/if}
					</button>
				{/each}
			</div>
		</section>
	{/each}
</div>

{#if modalProduct}
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
			class="relative bg-white-primary max-w-4xl w-full min-h-[40vh] max-h-[90vh] overflow-y-auto shadow-xl"
		>
			<div class="p-6">
				{#if modalProduct.image}
					<img
						src={encodeURI(modalProduct.image)}
						alt={modalProduct.name}
						class="w-full h-auto max-h-[70vh] object-contain"
					/>
				{:else}
					<h2 id="modal-title" class="text-w10 font-bold text-red-dark">
						{modalProduct.name}
					</h2>
				{/if}
				{#if modalProduct.description}
					<p
						class="{modalProduct.image ? 'mt-6' : 'mt-4'} text-w10 lg:text-w6 text-black-primary leading-relaxed"
					>
						{modalProduct.description}
					</p>
				{/if}
			</div>
		</div>
	</div>
{/if}
