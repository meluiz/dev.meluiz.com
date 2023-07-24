import type { Metadata } from 'next'

import base from './base'
import openGraph from './opengraph'
import robots from './robots'
import twitter from './twitter'

export default {
  ...base,
  openGraph,
  robots,
  twitter,
} as Metadata
