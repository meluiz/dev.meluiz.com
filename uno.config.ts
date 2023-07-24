import transformerDirectives from '@unocss/transformer-directives'
import transformerVariantGroup from '@unocss/transformer-variant-group'
import { defineConfig, presetUno } from 'unocss'

import { alignment } from './lib/unocss'

export default defineConfig({
  content: {
    filesystem: ['**/*.{html,js,ts,jsx,tsx,vue,svelte,astro}'],
  },
  theme: {
    fontFamily: {
      sans: 'var(--font-schibsted-grotesk), Roboto, "Segoe UI", "Helvetica Neue", Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
      heading:
        'var(--font-outfit), Roboto, "Segoe UI", "Helvetica Neue", Arial, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
    },
    colors: {
      mauve: {
        100: 'hsl(256, 6.0%, 93.2%)',
        200: 'hsl(253, 4.0%, 63.7%)',
        300: 'hsl(247, 3.4%, 50.7%)',
        400: 'hsl(252, 4.0%, 45.2%)',
        500: 'hsl(247, 4.8%, 32.5%)',
        600: 'hsl(245, 4.9%, 25.4%)',
        700: 'hsl(244, 4.9%, 21.5%)',
        800: 'hsl(243, 4.9%, 18.8%)',
        900: 'hsl(242, 4.9%, 16.5%)',
        1000: 'hsl(241, 5.0%, 14.3%)',
        1200: 'hsl(240, 5.1%, 11.6%)',
        1300: 'hsl(246, 6.0%, 9.0%)',
      },
    },
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
  presets: [presetUno(), alignment()],
  rules: [],
})
