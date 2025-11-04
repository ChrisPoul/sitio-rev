<script>
	let { imageSrc, title } = $props();
</script>

<section class="relative w-full h-180 mb-14">
	<!-- Background Image -->
	{#if imageSrc}
		<img src={imageSrc} alt="" class="w-full bg-black h-full object-cover" />
	{/if}

	<!-- Title Overlay -->
	<div class="absolute bottom-0 left-0 translate-y-14">
		<div class="bg-red-dark text-white-primary px-30 py-6 rounded-tr-full">
			<h1 class="text-w11">
				{@render title()}
			</h1>
		</div>
	</div>
</section>
