import { defineConfig } from "astro/config";
import svelte from '@astrojs/svelte';

var DEV = 0;

export default defineConfig({
    base: DEV ? './' : '/pc',
    outDir:  DEV ? './dist' : '../../../production/pc',
    integrations: [svelte()]
});
