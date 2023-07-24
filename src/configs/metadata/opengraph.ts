import base from './base'

export default {
  type: 'website',
  locale: 'pt-BR',
  title: base.title.default,
  siteName: 'meluiz.com',
  description: base.description,
  url: 'https://meluiz.com',
  images: [
    {
      url: 'https://meluiz.com/opengraph.jpg',
      type: 'image/jpg',
      width: 1920,
      height: 1080,
      alt: base.title.default,
    },
  ],
}
