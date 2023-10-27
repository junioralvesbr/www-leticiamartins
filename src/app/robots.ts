import { MetadataRoute } from 'next'


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://leticiamartins.com.br/sitemap.xml'
  }
}