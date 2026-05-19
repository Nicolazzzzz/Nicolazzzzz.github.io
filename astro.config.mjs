// @ts-check
import { defineConfig } from 'astro/config';
<<<<<<< HEAD

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  // base: '/',
=======
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

export default defineConfig({
>>>>>>> 00138c0224718a80ed7cea361988b3fd4a77e437
  site: 'https://Nicolazzzzz.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
<<<<<<< HEAD

=======
>>>>>>> 00138c0224718a80ed7cea361988b3fd4a77e437
  integrations: [icon()]
});
