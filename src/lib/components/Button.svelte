<script>
	let {
		variant = 'primary',
		type = 'button',
		href,
		textSize = 'base',
		class: className = '',
		children,
		...restProps
	} = $props();

	const baseClasses =
		'inline-flex items-center justify-center px-10 py-4 rounded-full font-bold transition-colors duration-200 underline focus:outline-none focus:ring-2 focus:ring-offset-2';
	const sizeClasses = {
		sm: 'text-w5',
		base: 'text-w5',
		lg: 'text-w6',
		xl: 'text-w7',
		'2xl': 'text-w8',
		'3xl': 'text-w9',
		'4xl': 'text-w10',
		'5xl': 'text-w11'
	};
	const variantClasses = {
		primary: 'bg-red-light text-white-primary hover:bg-red-600 focus:ring-red-light',
		secondary: 'bg-white-primary text-black-primary hover:bg-gray-light focus:ring-white-primary'
	};
</script>

{#if href}
	<a
		href={href}
		class="{baseClasses} {sizeClasses[textSize]} {variantClasses[variant]} {className}"
		{...restProps}
	>
		{@render children()}
	</a>
{:else}
	<button
		{type}
		class="{baseClasses} {sizeClasses[textSize]} {variantClasses[variant]} {className}"
		{...restProps}
	>
		{@render children()}
	</button>
{/if}
