<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import '../app.css';
	import Navigation from '$lib/Navigation.svelte';
	import Footer from '$lib/Footer.svelte';

	const options = {
		theme: {
			'--toastColor': 'mintcream',
			'--toastBackground': 'green',
			'--toastBarBackground': '#2F855A',
			'--toastBarHeight': 0
		}
	};
</script>

<Navigation />
<slot />
<Footer />

<SvelteToast {options} />
