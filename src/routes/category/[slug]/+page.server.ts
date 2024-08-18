import type { PageServerLoad } from '../$types';
import { error } from '@sveltejs/kit';

const baseUrl = 'https://fakestoreapi.com';

export const load = (async ({ params }) => {
	try {
		const categoriesData = await fetch(`${baseUrl}/products/categories`);
		const categories = await categoriesData.json();

		const productsData = await fetch(`${baseUrl}/products/category/${params.slug}?limit=10`);
		const products = await productsData.json();

		return {
			categories,
			products
		};
	} catch (e) {
		console.error('Could not load page /shop');

		throw error(500, {
			message: 'Could not load this page'
		});
	}
}) satisfies PageServerLoad;
