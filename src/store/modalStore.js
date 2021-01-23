import { writable } from 'svelte/store';

export const showSearchBar = writable(false, (set) => () => set(false));
