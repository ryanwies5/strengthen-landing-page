import { PlayCircle, Clock, Mic } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ShadUI/card'
import { Badge } from '@/components/ShadUI/badge'
import { Button } from '@/components/ShadUI/button'

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
    <section id="podcast" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Mic className="h-4 w-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400 uppercase tracking-widest">
                Podcast
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">
              The Strengthen Podcast
            </h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-lg">
              Weekly conversations on building, creating, and living with purpose.
            </p>
          </div>
          <Button variant="outline" className="shrink-0">
            View All Episodes
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {episodes.map((ep) => (
            <Card key={ep.number} className="group cursor-pointer transition-all">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-muted-foreground">
                    {ep.number}
                  </span>
                  <Badge variant="secondary" className="text-xs">
                    {ep.tag}
                  </Badge>
                </div>
                <CardTitle className="text-base leading-snug">
                  {ep.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {ep.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {ep.duration}
                    </span>
                    <span>{ep.date}</span>
                  </div>
                  <button className="h-8 w-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
                    <PlayCircle className="h-5 w-5" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
