import { productsByCategory } from '$lib/constants.js';

export function load() {
	return {
		categories: productsByCategory
	};
}
