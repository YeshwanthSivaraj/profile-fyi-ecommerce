<script lang="ts">
	export let name = '';
	let isCollapsed = true;

	const toggleCollapse = () => {
		isCollapsed = !isCollapsed;
	};
</script>

<h2 class="mb-0">
	<button
		on:click={toggleCollapse}
		class="group relative flex w-full items-center py-4 font-medium text-lg"
		type="button"
		aria-expanded={!isCollapsed}
	>
		{name}
		<span
			class="ml-auto -mr-1 h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out {isCollapsed
				? 'rotate-0'
				: 'rotate-180'}"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				class="h-6 w-6"
			>
				<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
			</svg>
		</span>
	</button>
</h2>
<div class={!isCollapsed ? 'block' : 'hidden'}>
	<div class="pb-4">
		<slot />
	</div>
</div>
