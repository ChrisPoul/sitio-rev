<script>
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ name: 'INICIO', href: '/' },
		{ name: 'NOSOTROS', href: '/nosotros' },
		{ name: 'PRODUCTOS', href: '/productos' },
		{ name: 'SERVICIOS', href: '/servicios' },
		{ name: 'GALERÍA', href: '/galeria' },
		{ name: 'CONTACTO', href: '/contacto' }
	];

	function isActive(href) {
		return $page.url.pathname === href;
	}

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="bg-white-primary shadow-md sticky top-0 z-50">
	<div class="px-28">
		<div class="flex justify-between items-center h-24">
			<!-- Logo -->
			<a href="/" class="flex items-center h-16">
				<img src="/LOGO.svg" alt="Carrocerías 3G" class="h-full w-auto" />
			</a>

			<!-- Desktop Navigation -->
			<div class="flex items-center text-w5 space-x-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="hover:text-black-primary text-red-dark font-semibold transition-colors duration-200 {isActive(link.href) ? 'underline' : ''}"
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	</div>
</nav>
