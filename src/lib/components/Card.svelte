<script>
	let {
		rounded = 'none',
		border = false,
		borderColor = 'dark',
		class: className = '',
		children
	} = $props();

	const roundedClasses = {
		none: '',
		partial: 'rounded-tr-[6cqw]',
		full: 'rounded-tr-[50px] rounded-bl-[50px]'
	};

	const borderClasses = border
		? borderColor === 'dark'
			? 'border-3 border-red-dark'
			: 'border-3 border-red-light'
		: '';
</script>

<div
	class="bg-white-primary {roundedClasses[rounded]} {borderClasses} {className}"
>
	{@render children()}
</div>
