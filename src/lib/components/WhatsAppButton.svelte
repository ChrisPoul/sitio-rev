<script>
	const whatsappNumber = '4611348623';
	const whatsappMessage = encodeURIComponent('Hola, me gustaría obtener más información sobre sus servicios.');
	const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
</script>

<a
	href={whatsappUrl}
	target="_blank"
	rel="noopener noreferrer"
	class="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
	aria-label="Contactar por WhatsApp"
>
	<img
		src="/whatsapp.svg"
		alt="WhatsApp"
		class="w-full h-full rounded-full"
	/>
</a>

<style>
	/* Ensure the button stays on top */
	:global(body) {
		position: relative;
	}
</style>
