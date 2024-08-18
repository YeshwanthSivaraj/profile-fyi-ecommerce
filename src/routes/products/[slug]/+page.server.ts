import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const baseUrl = 'https://fakestoreapi.com';

export const load = (async ({ params }) => {
	try {
		const productData = await fetch(`${baseUrl}/products/${params.slug}`);
		const product = await productData.json();

		const relatedProductsData = await fetch(`${baseUrl}/products/category/${product.category}`);
		const relatedProducts = await relatedProductsData.json();

		return {
			product,
			relatedProducts
		};
	} catch (e) {
		console.error(`Couldnt load page /products/${params.slug}`);

		throw error(500, {
			message: 'Couldnt load this page'
		});
	}
}) satisfies PageServerLoad;
