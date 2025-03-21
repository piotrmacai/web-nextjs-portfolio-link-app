import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ainsider.link',
  description: 'AI Resoures from Piotr Macai / Ainsider AI',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
