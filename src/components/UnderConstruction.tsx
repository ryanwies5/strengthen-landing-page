import { ZapIcon, Instagram, Youtube, Linkedin } from 'lucide-react'

export function UnderConstruction() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-lg">

        {/* Card */}
        <div className="neomorph-extruded bg-white rounded-[2rem] p-10 md:p-14 text-center">

          {/* Logo icon */}
          <div className="flex justify-center mb-8">
            <div className="neomorph-icon-recessed w-20 h-20 rounded-[1.25rem] flex items-center justify-center">
              <ZapIcon className="w-9 h-9 text-primary" />
            </div>
          </div>

          {/* Brand */}
          <h1 className="font-headline font-extrabold text-3xl text-primary tracking-tight mb-2">
            Strengthen
          </h1>

          {/* Status pill */}
          <div className="flex justify-center mb-8">
            <span className="neomorph-pressed inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold text-primary uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              In Development
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl text-[#191c1e] leading-[1.1] tracking-tight mb-5">
            Something big<br />
            <span className="text-primary">is coming.</span>
          </h2>

          {/* Description */}
          <p className="text-[#41484e] text-lg leading-relaxed max-w-sm mx-auto mb-10">
            We're building a platform to help strengthen your walk with God.
            Podcasts, motion content, courses, the Wall and more — all in one place.
          </p>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-8">
            <div className="flex-1 h-px bg-[#c0c7cf]" />
            <span className="text-xs text-[#41484e] font-bold uppercase tracking-widest">Follow Along</span>
            <div className="flex-1 h-px bg-[#c0c7cf]" />
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4">
            {[
              { Icon: Instagram, label: 'Instagram' },
              { Icon: Youtube, label: 'YouTube' },
              { Icon: Linkedin, label: 'LinkedIn' },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="neomorph-extruded h-11 w-11 rounded-full flex items-center justify-center text-primary transition-all active:scale-95"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-[#41484e] mt-6 font-medium">
          © 2026 Strengthen. All rights reserved.
        </p>

      </div>
    </div>
  )
}

