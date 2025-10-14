import { defineConfig } from 'astro/config';

// INICIO DE MODIFICACIÓN
import sitemap from '@astrojs/sitemap';
import compress from 'astro-compress';
// FIN DE MODIFICACIÓN

// https://astro.build/config
export default defineConfig({
  // INICIO DE MODIFICACIÓN
  site: 'https://www.wasvelt.com', // Dominio final del sitio web
  integrations: [sitemap(), compress()]
  // FIN DE MODIFICACIÓN
});