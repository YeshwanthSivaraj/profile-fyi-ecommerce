import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface CartItem {
	id: string;
	title: string;
	price: number;
	image: string;
	quantity: number;
}

export const cartItemsStore = writable(getStorePersistance('profileFyiStore'));

cartItemsStore.subscribe((val) => {
	if (browser) {
		localStorage.setItem('profileFyiStore', JSON.stringify(val));
	}
});

function getStorePersistance(key: string): CartItem[] {
	if (!browser) {
		return [] as CartItem[];
	}

	const itemsStored: CartItem[] = JSON.parse(localStorage.getItem(key) || '{}');

	if (!itemsStored.length) {
		return [] as CartItem[];
	}

	return itemsStored;
}

export function addToCart(newItem: CartItem) {
	cartItemsStore.update((cartItems) => {
		const foundItem = cartItems.findIndex((item) => item.title === newItem.title);

		if (foundItem !== -1) {
			cartItems[foundItem].quantity += newItem.quantity;
			return cartItems;
		}

		return [...cartItems, newItem];
	});
}

export function removeFromCart(title: string) {
	cartItemsStore.update((cartItems) => {
		const items = cartItems.filter((item) => item.title !== title);

		return items;
	});
}

export function emptyCart() {
	cartItemsStore.set([]);
}
