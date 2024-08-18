<script lang="ts">
	export let title: string;
	export let image: string;
	export let price: number;
	export let link: string;
</script>

<div class="flex flex-col justify-center items-center">
	<a class="aspect-square block mb-6" href={link}>
		<img
			class="object-contain aspect-square"
			width="700"
			height="700"
			loading="lazy"
			src={image}
			alt="{title} image"
		/>
	</a>
	<div class="flex flex-col justify-start flex-grow text-center leading-tight gap-1">
		<a href={link}>{title}</a>
		<div class="flex justify-center gap-3">
			<span>₹{price}</span>
		</div>
	</div>
</div>
