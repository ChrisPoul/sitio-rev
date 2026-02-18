<script>
	import { page } from '$app/stores';

	let mobileMenuOpen = $state(false);

	$effect(() => {
		const handleEscape = (e) => {
			if (e.key === 'Escape') closeMobileMenu();
		};
		if (mobileMenuOpen) {
			document.addEventListener('keydown', handleEscape);
		}
		return () => document.removeEventListener('keydown', handleEscape);
	});

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
	<div class="px-10 md:px-16 md:px-28">
		<div class="flex justify-between items-center h-30 md:h-24">
			<!-- Logo -->
			<a href="/" class="flex items-center h-20 md:h-16">
				<img src="/LOGO.svg" alt="Carrocerías 3G" class="h-full w-auto" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex items-center text-w5 space-x-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="hover:text-black-primary text-red-dark font-semibold transition-colors duration-200 {isActive(link.href) ? 'underline' : ''}"
					>
						{link.name}
					</a>
				{/each}
			</div>

			<!-- Mobile Toggle - Menú hamburguesa para pantallas pequeñas -->
			<button
				type="button"
				onclick={toggleMobileMenu}
				class="md:hidden inline-flex items-center justify-center rounded-lg p-3 text-red-dark hover:bg-red-light/10 hover:text-black-primary focus:outline-none focus:ring-2 focus:ring-red-dark focus:ring-offset-2 transition-colors"
				aria-controls="mobile-menu"
				aria-expanded={mobileMenuOpen}
				aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
			>
				{#if mobileMenuOpen}
					<svg class="h-12 w-12 shrink-0" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-12 w-12 shrink-0" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu - Desplegable al hacer clic en hamburguesa -->
	<div
		id="mobile-menu"
		class="md:hidden overflow-hidden transition-all duration-300 ease-out {mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}"
		role="region"
		aria-label="Menú de navegación"
	>
		<div class="shadow-inner bg-white-primary space-y-1 px-6 pb-6 pt-2">
			{#each navLinks as link}
				<a
					href={link.href}
					onclick={closeMobileMenu}
					class="block rounded-md px-4 py-2 text-w7 font-semibold text-red-dark hover:bg-red-light/20 transition-colors duration-200 {isActive(link.href) ? 'bg-red-light/30' : ''}"
				>
					{link.name}
				</a>
			{/each}
		</div>
	</div>
</nav>
