import { ZapIcon, Twitter, Instagram, Youtube } from 'lucide-react'
import { Separator } from '@/components/ShadUI/separator'

const links: Record<string, string[]> = {
  Platform: ['Podcast', 'Motion Graphics', 'Blog', 'Coaching'],
  Resources: ['Newsletter', 'Templates', 'Community', 'FAQ'],
  Company: ['About', 'Contact', 'Privacy Policy', 'Terms'],
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-[#e0e3e5]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 font-headline font-extrabold text-xl text-primary mb-3">
              <ZapIcon className="w-5 h-5 text-primary" />
              <span>Strengthen</span>
            </a>
            <p className="text-sm text-[#41484e] max-w-xs leading-relaxed">
              A platform for creators, coaches, and builders. Empowering people
              to do the work that matters.
            </p>
            <div className="flex items-center gap-2 mt-5">
              {([Twitter, Instagram, Youtube] as const).map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="neomorph-extruded h-9 w-9 rounded-full flex items-center justify-center text-primary transition-all active:scale-95"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <h4 className="text-sm font-bold text-[#191c1e] mb-4">{group}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-[#41484e] hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator />

        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-[#41484e]">
          <p>© 2026 Strengthen. All rights reserved.</p>
          <p>Built with precision. Deployed on Cloud Run.</p>
        </div>
      </div>
    </footer>
  )
}
