<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { items, itemsPerView = 2, autoplayDelay = 5000, class: className = '', renderItem } = $props();

	let currentIndex = $state(0);
	let autoPlayTimer = $state(null);
	let isPaused = $state(false);
	let carouselContainer = $state(null);
	let touchStartX = $state(0);
	let touchEndX = $state(0);
	let isDragging = $state(false);

	// Calculate total slides
	const totalSlides = Math.ceil(items.length / itemsPerView);

	function goToSlide(index) {
		currentIndex = index;
		resetAutoPlay();
	}

	function nextSlide() {
		currentIndex = (currentIndex + 1) % totalSlides;
		resetAutoPlay();
	}

	function prevSlide() {
		currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
		resetAutoPlay();
	}

	function resetAutoPlay() {
		if (autoPlayTimer) {
			clearInterval(autoPlayTimer);
		}
		if (!isPaused && autoplayDelay > 0 && browser) {
			autoPlayTimer = setInterval(() => {
				if (!isPaused) {
					nextSlide();
				}
			}, autoplayDelay);
		}
	}

	function pauseAutoPlay() {
		isPaused = true;
		if (autoPlayTimer) {
			clearInterval(autoPlayTimer);
		}
	}

	function resumeAutoPlay() {
		isPaused = false;
		resetAutoPlay();
	}

	function handleTouchStart(e) {
		if (!browser) return;
		touchStartX = e.touches[0].clientX;
		isDragging = true;
		pauseAutoPlay();
	}

	function handleTouchMove(e) {
		if (!browser || !isDragging) return;
		touchEndX = e.touches[0].clientX;
	}

	function handleTouchEnd() {
		if (!browser || !isDragging) return;
		isDragging = false;
		
		const swipeThreshold = 50;
		const diff = touchStartX - touchEndX;

		if (Math.abs(diff) > swipeThreshold) {
			if (diff > 0) {
				// Swipe left - next slide
				nextSlide();
			} else {
				// Swipe right - previous slide
				prevSlide();
			}
		}
		
		resumeAutoPlay();
	}

	onMount(() => {
		if (browser && autoplayDelay > 0) {
			resetAutoPlay();
		}
		return () => {
			if (autoPlayTimer) {
				clearInterval(autoPlayTimer);
			}
		};
	});
</script>

<div
	class="relative {className}"
	role="region"
	aria-label="Carousel de servicios"
	onmouseenter={pauseAutoPlay}
	onmouseleave={resumeAutoPlay}
	ontouchstart={handleTouchStart}
	ontouchmove={handleTouchMove}
	ontouchend={handleTouchEnd}
	bind:this={carouselContainer}
>
	<!-- Carousel Container -->
	<div class="relative overflow-hidden">
		<div
			class="flex transition-transform duration-500 ease-in-out"
			style="transform: translateX(-{currentIndex * 100}%)"
		>
			{#each Array(totalSlides) as _, slideIndex}
				<div
					class="w-full shrink-0 grid gap-8 max-md:grid-cols-1"
					style="grid-template-columns: repeat({itemsPerView}, minmax(0, 1fr))"
				>
					{#each items.slice(slideIndex * itemsPerView, (slideIndex + 1) * itemsPerView) as item}
						{@render renderItem({ item })}
					{/each}
				</div>
			{/each}
		</div>
	</div>

	<!-- Navigation Arrows -->
	{#if totalSlides > 1}
		<button
			type="button"
			onclick={prevSlide}
			class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-red-dark text-white-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-dark/90 transition-colors z-10 shadow-lg max-md:hidden"
			aria-label="Anterior"
		>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M15 19l-7-7 7-7"
				/>
			</svg>
		</button>
		<button
			type="button"
			onclick={nextSlide}
			class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-red-dark text-white-primary w-12 h-12 rounded-full flex items-center justify-center hover:bg-red-dark/90 transition-colors z-10 shadow-lg max-md:hidden"
			aria-label="Siguiente"
		>
			<svg
				class="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</button>
	{/if}

	<!-- Indicator Dots -->
	{#if totalSlides > 1}
		<div class="flex justify-center gap-2 mt-8">
			{#each Array(totalSlides) as _, index}
				<button
					type="button"
					onclick={() => goToSlide(index)}
					class="w-3 h-3 rounded-full transition-all {index === currentIndex
						? 'bg-red-dark w-8'
						: 'bg-gray-300 hover:bg-gray-400'}"
					aria-label="Ir a slide {index + 1}"
				></button>
			{/each}
		</div>
	{/if}
</div>

<style>
	/* Ensure smooth transitions */
	:global(.transition-transform) {
		transition-property: transform;
		transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
		transition-duration: 500ms;
	}
</style>
