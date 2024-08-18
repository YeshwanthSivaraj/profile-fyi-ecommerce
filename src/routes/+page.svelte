<script lang="ts">
	import type { PageData } from './$types';

	import ProductItem from '$lib/ProductItem.svelte';
	import AccordionItem from '$lib/AccordionItem.svelte';

	export let data: PageData;

	$: categories = data.categories;
	$: products = data.products;
</script>

<section>
	<div class="flex justify-center items-center gap-6 m-auto p-5 flex-wrap uppercase">
		{#each categories as category}
			<a class="hover:underline underline-offset-4" href={`/category/${category}`}>{category}</a>
		{/each}
	</div>

	<hr />

	<div class="flex flex-col py-8 px-3 lg:flex-row md:px-20">
		<div class="mg-0 basis-1/6 flex flex-col pb-5 lg:mx-10">
			<h1 class="uppercase font-bold text-xl pb-4">FILTERS</h1>
			<hr />
			<AccordionItem name="Price">
				<p>TODO</p>
			</AccordionItem>
			<hr />
			<AccordionItem name="Product type">
				<p>TODO</p>
			</AccordionItem>
			<hr />
			<AccordionItem name="Availability">
				<p>TODO</p>
			</AccordionItem>
			<hr />
		</div>
		<div class="basis-5/6 flex flex-col">
			<div class="flex justify-between pb-4">
				<p>{products.length} products</p>
				<div>
					<span class="text-gray-700">Sort by</span>
					<button>New</button>
				</div>
			</div>
			<div class="grid grid-cols-2 gap-5 md:grid-cols-3">
				{#each products as product}
					<ProductItem
						title={product.title}
						image={product.image}
						price={product.price}
						link={`/products/${product.title}`}
					/>
				{/each}
			</div>
		</div>
	</div>
</section>
