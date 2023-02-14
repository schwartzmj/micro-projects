import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true
	}),

	kit: {
		adapter: adapter({
			runtime: 'edge'
		}),
		alias: {
			$components: './src/components',
			$images: './src/assets/images',
			$icons: './src/assets/icons'
		}
	}
};

export default config;
