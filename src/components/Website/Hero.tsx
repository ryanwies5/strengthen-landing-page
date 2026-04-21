import { ArrowRight, PlayCircle, ZapIcon } from 'lucide-react'

export function Hero() {
  return (
    <section className="bg-white py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">

        {/* Left: Text */}
        <div className="flex-1 space-y-8">
          <div className="inline-block px-4 py-1.5 neomorph-pressed rounded-full text-primary font-bold text-xs tracking-widest uppercase">
            Creators · Coaches · Builders
          </div>
          <h1 className="text-5xl md:text-6xl font-headline font-extrabold text-[#191c1e] leading-[1.1] tracking-tight">
            Build the life you{' '}
            <span className="text-primary">keep putting off.</span>
          </h1>
          <p className="text-lg text-[#41484e] max-w-xl leading-relaxed">
            Strengthen is a platform for creators, coaches, and builders.
            Podcasts, motion content, strategic thinking, and coaching —
            all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
            <button className="neomorph-primary-btn px-8 py-4 rounded-[0.875rem] text-white font-headline font-bold text-base flex items-center gap-2 transition-all active:scale-95">
              Start Your Journey
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="neomorph-extruded bg-white px-8 py-4 rounded-[0.875rem] text-primary font-headline font-bold text-base flex items-center gap-2 transition-all active:scale-95">
              <PlayCircle className="h-4 w-4" />
              Listen to Podcast
            </button>
          </div>
          <p className="text-sm text-[#41484e]">
            Trusted by{' '}
            <span className="text-primary font-semibold">2,400+</span>{' '}
            creators and coaches worldwide
          </p>
        </div>

        {/* Right: Visual */}
        <div className="flex-1 w-full flex justify-center items-center">
          <div className="relative w-full max-w-sm aspect-square neomorph-extruded bg-white rounded-[2rem] flex items-center justify-center p-12">
            <div className="w-full h-full neomorph-pressed rounded-[1.5rem] bg-white flex items-center justify-center">
              <ZapIcon className="w-20 h-20 text-primary opacity-30" />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
