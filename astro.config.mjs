import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import solid from '@astrojs/solid-js'
import tailwind from '@astrojs/tailwind'
import astroExpressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import vercel from '@astrojs/vercel/serverless'
import robotsTxt from 'astro-robots-txt'
import { i18n, filterSitemapByDefaultLocale } from 'astro-i18n-aut/integration'
import houston from './houston.theme.json'

const defaultLocale = 'en'
const locales = {
  en: 'en-US',
  zh: 'zh-CN',
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.awesomelandingpage.com/',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    i18n({
      locales,
      defaultLocale,
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    solid(),
    astroExpressiveCode({
      themes: [houston],
      frames: false,
    }),
    mdx(),
    sitemap({
      i18n: {
        locales,
        defaultLocale,
      },
      filter: (page) => {
        return (
          filterSitemapByDefaultLocale({ defaultLocale })(page) &&
          !page.includes('_components')
        )
      },
    }),
    robotsTxt(),
  ],
  image: {
    domains: ['v1.screenshot.11ty.dev', 'storage.googleapis.com'],
  },
  vite: {
    ssr: {
      noExternal: ['smartypants'],
    },
  },
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
})
