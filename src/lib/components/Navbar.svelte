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
	<div class="px-10 md:px-16 lg:px-28">
		<div class="flex justify-between items-center h-30 md:h-24">
			<!-- Logo -->
			<a href="/" class="flex items-center h-20 md:h-16">
				<img src="/LOGO.svg" alt="Carrocerías 3G" class="h-full w-auto" />
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden lg:flex items-center text-w5 space-x-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="hover:text-black-primary text-red-dark font-semibold transition-colors duration-200 {isActive(link.href) ? 'underline' : ''}"
					>
						{link.name}
					</a>
				{/each}
			</div>

			<!-- Mobile Toggle -->
			<button
				type="button"
				onclick={toggleMobileMenu}
				class="lg:hidden inline-flex items-center justify-center rounded-md p-2 text-red-dark hover:text-black-primary focus:outline-none focus:ring-2 focus:ring-red-dark focus:ring-offset-2"
				aria-controls="mobile-menu"
				aria-expanded={mobileMenuOpen}
			>
				<span class="sr-only">Abrir menú</span>
				{#if mobileMenuOpen}
					<svg class="h-16 md:h-12" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				{:else}
					<svg class="h-16 md:h-12" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-width="1.5">
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	<div id="mobile-menu" class="{mobileMenuOpen ? 'block' : 'hidden'} lg:hidden shadow-inner bg-white-primary">
		<div class="space-y-2 px-6 pb-6 pt-2">
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
