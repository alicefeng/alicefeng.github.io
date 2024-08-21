import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { enhancedImages } from '@sveltejs/enhanced-img';

export default defineConfig({
	base: "/alicefeng.github.io/",
	plugins: [enhancedImages(), sveltekit()]
});
