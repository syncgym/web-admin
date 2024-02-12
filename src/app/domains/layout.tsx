'use client'

import { usePathname } from 'next/navigation'

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const path = usePathname()

  const cleanPath = (() => {
    const removeDomains = path.replace('/domains/', '')
    const words = removeDomains.replace(/-/g, ' ').split(' ')
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    const cleanedDomain = capitalizedWords.join(' ')

    return cleanedDomain
  })()

  return (
    <div className="hidden relative h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{cleanPath}</h2>
          <p className="text-muted-foreground">
            Here you can manage your {cleanPath.toLowerCase()}.
          </p>
        </div>
      </div>
      {children}
    </div>
  )
}
