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
		'inline-flex items-center justify-center px-[6%] py-[2%] rounded-full font-bold transition-colors duration-200 underline focus:outline-none focus:ring-2 focus:ring-offset-2';
	const sizeClasses = {
		sm: 'text-sm',
		base: 'text-base',
		lg: 'text-lg',
		xl: 'text-xl',
		'2xl': 'text-2xl',
		'3xl': 'text-3xl',
		'4xl': 'text-4xl',
		'5xl': 'text-5xl',
		'6xl': 'text-6xl',
		'7xl': 'text-7xl',
		'8xl': 'text-8xl',
		'9xl': 'text-9xl',
		'10xl': 'text-10xl',
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
