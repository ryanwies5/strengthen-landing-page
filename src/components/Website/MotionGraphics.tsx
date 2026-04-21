import { Film, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'Identity in Motion',
    category: 'Brand Film',
    description:
      'A 90-second brand narrative built around kinetic typography and layered visual depth.',
    span: 'md:col-span-2',
  },
  {
    title: 'Rhythm & Form',
    category: 'Title Sequence',
    description:
      'Geometric composition driven by audio-reactive timing and frame-perfect motion.',
    span: '',
  },
  {
    title: 'Signal',
    category: 'Loop Series',
    description:
      'A 6-part ambient loop series exploring data, noise, and the beauty of clarity.',
    span: '',
  },
  {
    title: 'Studio Reel 2026',
    category: 'Showreel',
    description:
      'A curated showreel of motion work produced over the past 12 months.',
    span: 'md:col-span-2',
  },
]

export function MotionGraphics() {
  return (
    <section id="motion" className="py-24 px-6 md:px-12 bg-[#eceef0]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Film className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Motion Graphics
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-[#191c1e]">
              Visual Storytelling
            </h2>
            <p className="text-[#41484e] mt-3 max-w-lg text-lg">
              Motion work that moves people before they read a single word.
            </p>
          </div>
          <button className="neomorph-extruded bg-white px-6 py-3 rounded-full text-primary font-bold text-sm shrink-0 transition-all active:scale-95">
            View Full Portfolio
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`group neomorph-extruded bg-white rounded-[1.25rem] overflow-hidden cursor-pointer ${project.span}`}
            >
              <div className="aspect-video w-full bg-[#eceef0] neomorph-pressed flex items-center justify-center">
                <Film className="h-10 w-10 text-primary opacity-20" />
              </div>
              <div className="p-5 flex items-start justify-between gap-4">
                <div>
                  <span className="neomorph-pressed inline-block px-3 py-1 rounded-full text-xs font-bold text-primary mb-2">
                    {project.category}
                  </span>
                  <h3 className="font-headline font-bold text-[#191c1e] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#41484e] leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-[#41484e] shrink-0 mt-1 group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

