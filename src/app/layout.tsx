import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tribo Business',
  description: 'De mulas que querem vender, para mulas que querem comprar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className='bg-slate-950 text-white'>
        {children}
      </body>
    </html>
  )
}
