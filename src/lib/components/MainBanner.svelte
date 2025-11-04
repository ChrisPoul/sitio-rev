<script>
	let { imageSrc, title } = $props();
</script>

<section class="relative w-full h-[400px] md:h-[500px] lg:h-[600px] mb-14">
	<!-- Background Image -->
	{#if imageSrc}
		<img src={imageSrc} alt="" class="w-full min-h-[400px] bg-black h-full object-cover" />
	{/if}

	<!-- Title Overlay -->
	<div class="absolute bottom-0 left-0 translate-y-14">
		<div class="bg-red-dark text-white-primary px-6 md:px-8 lg:px-10 py-4 md:py-5 lg:py-6 rounded-tr-full">
			<h1 class="text-3xl md:text-4xl lg:text-5xl">
				{@render title()}
			</h1>
		</div>
	</div>
</section>
