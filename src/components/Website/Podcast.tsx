import { PlayCircle, Clock, Mic } from 'lucide-react'

const episodes = [
  {
    number: 'EP 042',
    title: 'Building With Intention',
    description:
      'What does it mean to build something that matters? We unpack the mindset shifts that separate focused creators from noisy ones.',
    duration: '58 min',
    date: 'Feb 20, 2026',
    tag: 'Mindset',
  },
  {
    number: 'EP 041',
    title: 'The Compound Effect of Creative Work',
    description:
      'Small daily actions produce extraordinary results. How consistency in your creative practice builds into something undeniable.',
    duration: '44 min',
    date: 'Feb 13, 2026',
    tag: 'Creativity',
  },
  {
    number: 'EP 040',
    title: 'Monetising Without Selling Out',
    description:
      'A practical guide to turning your expertise into income streams that feel authentic and serve your audience.',
    duration: '51 min',
    date: 'Feb 6, 2026',
    tag: 'Business',
  },
]

export function Podcast() {
  return (
    <section id="podcast" className="py-24 px-6 md:px-12 bg-[#eceef0]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mic className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Podcast</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-[#191c1e]">
              The Strengthen Podcast
            </h2>
            <p className="text-[#41484e] mt-3 max-w-lg text-lg">
              Weekly conversations on building, creating, and living with purpose.
            </p>
          </div>
          <button className="neomorph-extruded bg-white px-6 py-3 rounded-full text-primary font-bold text-sm shrink-0 transition-all active:scale-95">
            View All Episodes
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <div
              key={ep.number}
              className="neomorph-extruded bg-white rounded-[1.25rem] p-6 flex flex-col gap-4 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#41484e]">{ep.number}</span>
                <span className="neomorph-pressed px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {ep.tag}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-headline font-bold text-[#191c1e] leading-snug mb-2">
                  {ep.title}
                </h3>
                <p className="text-sm text-[#41484e] leading-relaxed">
                  {ep.description}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-xs text-[#41484e]">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {ep.duration}
                  </span>
                  <span>{ep.date}</span>
                </div>
                <button className="neomorph-extruded h-9 w-9 rounded-full flex items-center justify-center text-primary transition-all active:scale-95">
                  <PlayCircle className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
