import { ArrowRight, PlayCircle } from 'lucide-react'
import { Button } from '@/components/ShadUI/button'
import { Badge } from '@/components/ShadUI/badge'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background min-h-[90vh] flex flex-col items-center justify-center">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-blue-900/15 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <Badge
          variant="outline"
          className="mb-8 text-emerald-400 border-emerald-400/30 bg-emerald-400/5 gap-1.5"
        >
          <PlayCircle className="h-3 w-3" />
          New Episode — "Building With Intention" is out now
        </Badge>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.05]">
          Build the life you
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            keep putting off.
          </span>
        </h1>

        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Strengthen is a platform for creators, coaches, and builders. Podcasts,
          motion content, strategic thinking, and hands-on coaching — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" className="rounded-full px-8 gap-2">
            Start Your Journey
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8 gap-2">
            <PlayCircle className="h-4 w-4" />
            Listen to Podcast
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Trusted by{' '}
          <span className="text-foreground font-medium">2,400+</span> creators
          and coaches worldwide
        </p>
      </div>
    </section>
  )
}
