<script>
	let mobileMenuOpen = $state(false);

	const navLinks = [
		{ name: 'INICIO', href: '/' },
		{ name: 'NOSOTROS', href: '/nosotros' },
		{ name: 'PRODUCTOS', href: '/productos' },
		{ name: 'SERVICIOS', href: '/servicios' },
		{ name: 'GALERÍA', href: '/galeria' },
		{ name: 'CONTACTO', href: '/contacto' }
	];

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMobileMenu() {
		mobileMenuOpen = false;
	}
</script>

<nav class="bg-white-primary shadow-md sticky top-0 z-50">
	<div class="container mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex justify-between items-center h-16 md:h-20">
			<!-- Logo -->
			<a href="/" class="flex items-center">
				<span class="text-2xl md:text-3xl font-bold text-red-dark"
					>CARROCERÍAS 3G</span
				>
			</a>

			<!-- Desktop Navigation -->
			<div class="hidden md:flex md:items-center md:space-x-8">
				{#each navLinks as link}
					<a
						href={link.href}
						class="hover:text-black-primary text-red-dark font-semibold transition-colors duration-200"
					>
						{link.name}
					</a>
				{/each}
			</div>

			<!-- Mobile menu button -->
			<button
				type="button"
				class="md:hidden p-2 rounded-md text-black-primary hover:text-red-dark hover:bg-gray-light focus:outline-none focus:ring-2 focus:ring-red-dark"
				onclick={toggleMobileMenu}
				aria-label="Toggle menu"
			>
				<svg
					class="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					{#if mobileMenuOpen}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					{:else}
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h16"
						/>
					{/if}
				</svg>
			</button>
		</div>
	</div>

	<!-- Mobile Navigation Menu -->
	{#if mobileMenuOpen}
		<div class="md:hidden border-t border-gray-light bg-white-primary">
			<div class="px-2 pt-2 pb-3 space-y-1">
				{#each navLinks as link}
					<a
						href={link.href}
						class="block px-3 py-2 text-black-primary hover:text-red-dark hover:bg-gray-light font-semibold transition-colors duration-200"
						onclick={closeMobileMenu}
					>
						{link.name}
					</a>
				{/each}
			</div>
		</div>
	{/if}
</nav>
