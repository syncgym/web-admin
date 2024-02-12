'use client'

import { cn } from '@/lib/utils'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'
import { usePathname } from 'next/navigation'
import { ActivityLogIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  domains: string[]
}

export default function SideBar({ className, domains }: SidebarProps) {
  const cleanDomains = domains.map((domain) => {
    const words = domain.replace(/-/g, ' ').split(' ')
    const capitalizedWords = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    const cleanedDomain = capitalizedWords.join(' ')

    return cleanedDomain
  })

  const pathname = usePathname()

  function getButtonVariant(path: string) {
    return pathname === path ? 'primary' : 'ghost'
  }

  return (
    <div className={cn('pb-4 w-52 bg-black', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Discover</h2>
          <div className="space-y-1">
            <Button asChild variant={getButtonVariant('/')} className="w-full justify-start">
              <Link href={'/'}>
                <ActivityLogIcon className="h-4 w-4 mr-2" />
                Asd
              </Link>
            </Button>
            <Button asChild variant={getButtonVariant('/1')} className="w-full justify-start">
              <Link href={'/1'}>
                <ActivityLogIcon className="h-4 w-4 mr-2" />
                Asd
              </Link>
            </Button>
            <Button asChild variant={getButtonVariant('/2')} className="w-full justify-start">
              <Link href={'/2'}>
                <ActivityLogIcon className="h-4 w-4 mr-2" />
                Asd
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">Library</h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start">
              <ActivityLogIcon className="h-4 w-4 mr-2" />
              domains
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ActivityLogIcon className="h-4 w-4 mr-2" />
              Songs
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ActivityLogIcon className="h-4 w-4 mr-2" />
              Made for You
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ActivityLogIcon className="h-4 w-4 mr-2" />
              Artists
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <ActivityLogIcon className="h-4 w-4 mr-2" />
              Albums
            </Button>
          </div>
        </div>
        <div className="py-2">
          <h2 className="relative px-7 text-lg font-semibold tracking-tight">domains</h2>
          <ScrollArea className="h-[300px] px-1">
            <div className="space-y-1 p-2">
              {domains?.map((domain, i) => (
                <Button
                  asChild
                  key={`${domain}-${i}`}
                  variant={getButtonVariant(`/domains/${domain}`)}
                  className="w-full justify-start font-normal"
                >
                  <Link href={`/domains/${domain}`}>
                    <ActivityLogIcon className="h-4 w-4 mr-2" />
                    {cleanDomains[i]}
                  </Link>
                </Button>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}
