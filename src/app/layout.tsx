import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import SideBar from '@/components/SideBar'
import { domains } from '@/utils/data/domains'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin - syncgym',
  description: 'Admin - syncgym',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={cn('min-h-screen w-full bg-zinc-950 text-white flex ', inter.className)}>
        <SideBar domains={domains} />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  )
}
