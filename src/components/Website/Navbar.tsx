import { ZapIcon, MenuIcon } from 'lucide-react'
import { Button } from '@/components/ShadUI/button'
import { Separator } from '@/components/ShadUI/separator'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ShadUI/sheet'

const navLinks = [
  { label: 'Podcast', href: '#podcast' },
  { label: 'Motion', href: '#motion' },
  { label: 'Blog', href: '#blog' },
  { label: 'Coaching', href: '#coaching' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-bold text-xl shrink-0">
          <ZapIcon className="w-5 h-5 text-blue-400" />
          <span>Strengthen</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-2 shrink-0">
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <ZapIcon className="w-4 h-4 text-blue-400" />
                Strengthen
              </SheetTitle>
            </SheetHeader>
            <Separator />
            <nav className="flex flex-col px-4 py-2 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Separator />
            <div className="px-4 py-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full">Sign In</Button>
              <Button className="w-full">Get Started</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
