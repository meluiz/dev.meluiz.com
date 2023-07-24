import type { Metadata } from 'next'
import React from 'react'

import defaultMetadata from '@app::configs/metadata'
import { Outfit, Schibsted_Grotesk } from 'next/font/google'

import './globals.css'

const outfit = Outfit({
  variable: '--font-outfit',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const schibstedGrotesk = Schibsted_Grotesk({
  variable: '--font-schibsted-grotesk',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
})

const Layout: App.Layout = function ({ children }) {
  return (
    <html lang="en" className={`dark ${outfit.variable} ${schibstedGrotesk.variable}`}>
      <body className="w-full min-h-auto bg-white text-mauve-900 font-sans dark:bg-mauve-1300 dark:text-mauve-100">
        {children}
      </body>
    </html>
  )
}

export default Layout
export const metadata: Metadata = defaultMetadata
