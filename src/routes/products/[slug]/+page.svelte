<script lang="ts">
	import { toast } from '@zerodevx/svelte-toast';

	import ProductItem from '$lib/ProductItem.svelte';
	import ProductQuantity from '$lib/ProductQuantity.svelte';
	import { addToCart } from '$lib/stores';
	import type { CartItem } from '$lib/stores';

	export let data: any;

	$: product = data.product;
	$: relatedProducts = data.relatedProducts;
	let quantity = 1;

	function addItemToCart() {
		const item: CartItem = {
			id: product.id,
			title: product.title,
			image: `${product.image}`,
			price: product.price * 84,
			quantity: quantity
		};

		addToCart(item);
		toast.push('Added item to cart!', { duration: 2000 });
	}
</script>

<svelte:head>
	<title>{product.title} | Profile fyi Ecommerce</title>
</svelte:head>

<div class="flex flex-col mx-3 py-10 gap-5 lg:mx-10 lg:flex-row lg:gap-8">
	<div class="basis-1/2 px-8 flex">
		<img
			class="object-contain aspect-square"
			src={product.image}
			width="700"
			height="700"
			loading="lazy"
			alt="{product.title} image"
		/>
	</div>
	<div class="basis-1/2 flex flex-col gap-8 px-8">
		<h1 class="font-extrabold text-4xl mt-3">{product.title}</h1>
		<div class="flex items-end gap-2">
			<span class="text-3xl">₹{product.price * 84}</span>
		</div>

		<div class="flex flex-col gap-2">
			<p>Description</p>
			<p class="text-gray-600">
				{product.description}
			</p>
		</div>

		<div class="flex flex-col gap-2">
			<p>Quantity</p>
			<ProductQuantity bind:count={quantity} />
		</div>
		<button
			class="w-full h-12 px-6 text-black font-bold transition-colors duration-150 bg-yellow-300 focus:shadow hover:bg-yellow-500"
			on:click={() => addItemToCart()}
		>
			Add to cart
		</button>
	</div>
</div>

<div class="flex flex-col px-10">
	<div>
		<p class="font-medium text-xl uppercase text-center">Related</p>
	</div>

	<div class="grid gap-12 pr-5 py-5 grid-cols-2 md:grid-cols-3">
		{#each relatedProducts as relatedProduct}
			<ProductItem
				title={relatedProduct.title}
				image={relatedProduct.image}
				price={relatedProduct.price}
				link="/products/{relatedProduct.id}"
			/>
		{/each}
	</div>
</div>
