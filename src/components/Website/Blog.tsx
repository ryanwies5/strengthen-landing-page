import { BookOpen, ArrowRight, Clock } from 'lucide-react'

const posts = [
  {
    category: 'Mindset',
    title: 'The One Rule That Changed How I Create',
    excerpt:
      'I spent years chasing output. Then I learned the single principle that made everything click into place.',
    readTime: '5 min read',
    date: 'Feb 22, 2026',
  },
  {
    category: 'Growth',
    title: 'How to Build an Audience Without Going Viral',
    excerpt:
      "Virality is a lottery. Slow, deliberate audience-building is a skill anyone can learn with the right framework.",
    readTime: '7 min read',
    date: 'Feb 15, 2026',
  },
  {
    category: 'Business',
    title: 'Pricing Your Expertise: A Framework for Creators',
    excerpt:
      "Most creators undercharge. Not from lack of value, but lack of clarity. Here's the exact framework I use with every coaching client.",
    readTime: '6 min read',
    date: 'Feb 8, 2026',
  },
]

export function Blog() {
  return (
    <section id="blog" className="py-24 px-6 md:px-12 bg-[#eceef0]">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-xs font-bold text-primary uppercase tracking-widest">Blog</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-headline font-extrabold text-[#191c1e]">
              Latest Articles
            </h2>
            <p className="text-[#41484e] mt-3 max-w-lg text-lg">
              Clear thinking on creativity, business, and the craft of building
              something meaningful.
            </p>
          </div>
          <button className="neomorph-extruded bg-white px-6 py-3 rounded-full text-primary font-bold text-sm shrink-0 flex items-center gap-2 transition-all active:scale-95">
            Read All Posts
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.title}
              className="neomorph-extruded bg-white rounded-[1.25rem] p-6 flex flex-col gap-4 cursor-pointer"
            >
              <span className="neomorph-pressed inline-block px-3 py-1 rounded-full text-xs font-bold text-primary w-fit">
                {post.category}
              </span>
              <div className="flex-1">
                <h3 className="font-headline font-bold text-[#191c1e] leading-snug mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#41484e] leading-relaxed">
                  {post.excerpt}
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#41484e]">
                <span className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {post.readTime}
                </span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

