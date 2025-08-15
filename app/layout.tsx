import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CleanSSR',
  description: 'Technology services with minimal design',
  keywords: ['technology', 'CleanSSR', 'minimal'],
  authors: [{ name: 'CleanSSR' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function