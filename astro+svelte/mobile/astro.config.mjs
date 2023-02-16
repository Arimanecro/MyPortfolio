import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';

var DEV = 0;

export default defineConfig({
    base: DEV ? './' : '/mobile',
    outDir:  DEV ? './dist' : '../../../production/mobile',
    integrations: [svelte()]
});
