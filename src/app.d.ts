// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	declare module '*&imagetools' {
		/**
		 * actual types
		 * - code https://github.com/JonasKruckenberg/imagetools/blob/main/packages/core/src/output-formats.ts
		 * - docs https://github.com/JonasKruckenberg/imagetools/blob/main/docs/guide/getting-started.md#metadata
		 */
		const out;
		export default out;
	}
	declare namespace Memory {
		interface Card {
			id: number;
			icon: IconSource;
		}
	}

	// interface Locals {}
	// interface PageData {}
	// interface Error {}
	// interface Platform {}
}
