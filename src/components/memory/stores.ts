import type { IconSource } from 'svelte-hero-icons';
import { writable } from 'svelte/store';

export const selectedCards = writable<App.Memory.Card[]>([]);
