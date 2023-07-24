import base from './base'
import opengraph from './opengraph'

export default {
  card: 'summary',
  title: base.title.default,
  siteId: 'omeluiz',
  creator: '@omeluiz',
  domain: opengraph.url,
  url: opengraph.url,
  image: opengraph.images[0].url,
  description: base.description,
}
