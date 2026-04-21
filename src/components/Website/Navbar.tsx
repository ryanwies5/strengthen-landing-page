import { ZapIcon, MenuIcon } from 'lucide-react'
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
    <header className="sticky top-0 z-50 w-full glass-nav border-b border-[#c0c7cf]/30">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-headline font-extrabold text-xl text-primary shrink-0">
          <ZapIcon className="w-5 h-5 text-primary" />
          <span>Strengthen</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1 flex-1 justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-semibold text-[#41484e] hover:text-primary transition-colors rounded-full hover:bg-[#eceef0]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a href="#" className="px-4 py-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
            Sign In
          </a>
          <button className="neomorph-primary-btn px-6 py-2.5 rounded-full text-white font-bold text-sm transition-all active:scale-95">
            Get Started
          </button>
        </div>

        {/* Mobile menu */}
        <Sheet>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-full neomorph-extruded text-primary">
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#eceef0]">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 font-headline text-primary">
                <ZapIcon className="w-4 h-4 text-primary" />
                Strengthen
              </SheetTitle>
            </SheetHeader>
            <Separator className="my-4" />
            <nav className="flex flex-col px-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-semibold text-[#41484e] hover:text-primary transition-colors rounded-full hover:bg-white/70"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <Separator className="my-4" />
            <div className="px-4 flex flex-col gap-3">
              <button className="w-full py-3 rounded-full border border-primary/30 text-primary font-bold text-sm">
                Sign In
              </button>
              <button className="neomorph-primary-btn w-full py-3 rounded-full text-white font-bold text-sm transition-all active:scale-95">
                Get Started
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
