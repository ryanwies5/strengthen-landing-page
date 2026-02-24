import { Film, ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ShadUI/badge'
import { Button } from '@/components/ShadUI/button'

const projects = [
  {
    title: 'Identity in Motion',
    category: 'Brand Film',
    description:
      'A 90-second brand narrative built around kinetic typography and layered visual depth.',
    gradient: 'from-indigo-600/20 to-purple-600/10',
    span: 'md:col-span-2',
  },
  {
    title: 'Rhythm & Form',
    category: 'Title Sequence',
    description:
      'Geometric composition driven by audio-reactive timing and frame-perfect motion.',
    gradient: 'from-blue-600/20 to-cyan-600/10',
    span: '',
  },
  {
    title: 'Signal',
    category: 'Loop Series',
    description:
      'A 6-part ambient loop series exploring data, noise, and the beauty of clarity.',
    gradient: 'from-violet-600/20 to-pink-600/10',
    span: '',
  },
  {
    title: 'Studio Reel 2026',
    category: 'Showreel',
    description:
      'A curated showreel of motion work produced over the past 12 months.',
    gradient: 'from-emerald-600/20 to-teal-600/10',
    span: 'md:col-span-2',
  },
]

export function MotionGraphics() {
  return (
    <section id="motion" className="py-24 bg-muted/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Film className="h-4 w-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-400 uppercase tracking-widest">
                Motion Graphics
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              Visual Storytelling
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-lg">
              Motion work that moves people before they read a single word.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View Full Portfolio
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border border-border overflow-hidden bg-gradient-to-br ${project.gradient} ${project.span} cursor-pointer hover:border-border/80 transition-all`}
            >
              <div className="aspect-video w-full bg-muted/30 flex items-center justify-center">
                <Film className="h-10 w-10 text-muted-foreground/20" />
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <Badge variant="outline" className="mb-2 text-xs">
                    {project.category}
                  </Badge>
                  <h3 className="font-semibold text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1 group-hover:text-foreground transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
