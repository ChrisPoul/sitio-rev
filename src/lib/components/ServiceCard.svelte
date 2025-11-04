<script>
	import Card from '$lib/components/Card.svelte';

	let { title, description, imageSrc, border = false } = $props();
</script>

<div class="text-center">
	<Card rounded="none" {border} class="aspect-6/3 w-full mb-6 overflow-hidden">
		<img src={imageSrc} alt={title} class="w-full bg-black h-full object-cover" />
	</Card>
	<h3 class="text-w7 text-black-primary font-semibold mb-3 px-10">
		{title}
	</h3>
	<div class="w-1/2 h-0.5 bg-black-primary mx-auto my-4"></div>
	<p class="text-gray-600 leading-relaxed text-w5 px-20">
		{description}
	</p>
</div>
