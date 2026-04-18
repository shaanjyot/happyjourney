import Image from 'next/image'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const posts = [
  {
    title: 'Dubai Essentials: What to Book Before You Fly',
    summary: 'A checklist for visas, transfers, attractions, and stay options to avoid last-minute surprises.',
    image: '/dubai.png',
    category: 'Guides',
    readTime: '6 min read',
  },
  {
    title: 'Bali for First-Time Travelers',
    summary: 'When to visit, where to stay, and how to combine beaches, temples, and adventure days.',
    image: '/bali.png',
    category: 'Destination',
    readTime: '5 min read',
  },
  {
    title: 'Singapore in 4 Days: Smart City Itinerary',
    summary: 'A compact city itinerary that balances iconic spots, food streets, and relaxation.',
    image: '/singapore.png',
    category: 'Itinerary',
    readTime: '4 min read',
  },
]

const galleryImages = [
  '/dubai.png',
  '/bali.png',
  '/thailand.png',
  '/singapore.png',
  '/maldives.png',
  '/hero-bg.png',
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-brand-bg dark:bg-gradient-to-b dark:from-[#071424] dark:via-[#0d223a] dark:to-[#14304e]">
      <Header />

      <section className="relative pt-28 pb-12">
        <div className="section-container text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Happy Journey Blog</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-text dark:text-white">
            Stories, Tips, and Travel Inspiration
          </h1>
          <p className="mx-auto max-w-3xl text-brand-muted-text dark:text-white/75">
            Explore destination guides, smart itineraries, and practical planning notes from our travel team.
          </p>
        </div>
      </section>

      <section className="section-padding pt-2">
        <div className="section-container grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[1.5rem] border border-brand-border bg-white shadow-sm dark:border-white/10 dark:bg-[#11253d]"
            >
              <div className="relative h-52">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-brand-muted-text dark:text-white/70">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-heading font-bold text-brand-text dark:text-white">{post.title}</h2>
                <p className="text-sm text-brand-muted-text dark:text-white/75">{post.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding pt-2 pb-24">
        <div className="section-container space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Image Gallery</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-text dark:text-white">
              Travel Moments in Frames
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryImages.map((src, index) => (
              <div
                key={`${src}-${index}`}
                className="relative h-44 overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm dark:border-white/10 dark:bg-[#11253d] md:h-56"
              >
                <Image src={src} alt={`Travel gallery ${index + 1}`} fill className="object-cover transition-transform duration-500 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
