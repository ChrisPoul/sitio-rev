<script>
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import Navbar from '$lib/components/Navbar.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<Navbar />
<main class="leading-tight text-w5">{@render children()}</main>
<div class="w-full h-24 bg-red-dark"></div>
<WhatsAppButton />