<script>
	let { imageSrc, title, position = 'left', paragraph } = $props();

	const positionClasses = {
		left: 'bottom-0 left-0 translate-y-14',
		right: 'bottom-0 right-0 translate-y-14'
	};

	const roundedClasses = {
		left: 'rounded-tr-full',
		right: 'rounded-tl-full'
	};
</script>

<section class="relative w-full mb-14">
	<!-- Background Image -->
	{#if imageSrc}
		<img src={imageSrc} alt="" class="w-full bg-black h-full object-cover" />
	{/if}

	<!-- Title Overlay -->
	<div class="absolute {positionClasses[position]}">
		<div class="bg-red-dark text-white-primary min-w-200 px-30 py-6 {roundedClasses[position]}">
			<h1 class="text-w11">
				{@render title()}
			</h1>
		</div>
	</div>
</section>

{#if paragraph}
	<p class="text-w8 text-justify px-40 mx-auto w-fit py-18">
		{@render paragraph()}
	</p>
{/if}