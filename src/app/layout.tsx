import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'


const dmSans = DM_Sans({
  weight: ['300', '400', '700'],
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Makers Hackathon',
  description: 'Make your closet dream reality',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={dmSans.className}>{children}</body>
    </html>
  )
}
