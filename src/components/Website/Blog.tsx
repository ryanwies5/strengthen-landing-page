import { BookOpen, ArrowRight, Clock } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ShadUI/card'
import { Badge } from '@/components/ShadUI/badge'
import { Button } from '@/components/ShadUI/button'

const posts = [
  {
    category: 'Mindset',
    title: 'The One Rule That Changed How I Create',
    excerpt:
      'I spent years chasing output. Then I learned the single principle that made everything — the work, the energy, the results — click into place.',
    readTime: '5 min read',
    date: 'Feb 22, 2026',
    accent: 'text-amber-400 border-amber-400/30 bg-amber-400/5',
  },
  {
    category: 'Growth',
    title: 'How to Build an Audience Without Going Viral',
    excerpt:
      'Virality is a lottery. Slow, deliberate audience-building is a skill — and it\'s one anyone can learn with the right framework.',
    readTime: '7 min read',
    date: 'Feb 15, 2026',
    accent: 'text-blue-400 border-blue-400/30 bg-blue-400/5',
  },
  {
    category: 'Business',
    title: 'Pricing Your Expertise: A Framework for Creators',
    excerpt:
      'Most creators undercharge. Not from lack of value, but lack of clarity. Here\'s the exact framework I use with every coaching client.',
    readTime: '6 min read',
    date: 'Feb 8, 2026',
    accent: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400 uppercase tracking-widest">
                Blog
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold">Latest Articles</h2>
            <p className="text-muted-foreground mt-3 max-w-lg text-lg">
              Clear thinking on creativity, business, and the craft of building
              something meaningful.
            </p>
          </div>
          <Button variant="outline" className="shrink-0 gap-2">
            Read All Posts
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Card
              key={post.title}
              className="group cursor-pointer transition-all"
            >
              <CardHeader>
                <Badge
                  variant="outline"
                  className={`w-fit mb-1 text-xs ${post.accent}`}
                >
                  {post.category}
                </Badge>
                <CardTitle className="text-base leading-snug">
                  {post.title}
                </CardTitle>
                <CardDescription className="leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                  <span>·</span>
                  <span>{post.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
