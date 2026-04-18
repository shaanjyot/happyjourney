'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const blogHighlights = [
  {
    title: 'How to Plan a Perfect 7-Day International Escape',
    excerpt: 'A practical guide to route planning, stay selection, and budgeting without losing the luxury experience.',
    image: '/dubai.png',
    tag: 'Planning',
  },
  {
    title: 'Top Beach Destinations for Couples in 2026',
    excerpt: 'From Bali sunsets to Maldives private villas, discover romantic picks for every travel style.',
    image: '/bali.png',
    tag: 'Couples',
  },
  {
    title: 'City Breaks That Blend Culture and Comfort',
    excerpt: 'Explore destinations where architecture, food, and curated stays create unforgettable city stories.',
    image: '/singapore.png',
    tag: 'City Travel',
  },
]

export function BlogSection() {
  return (
    <section className="section-padding">
      <div className="section-container space-y-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">Travel Journal</p>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-brand-text dark:text-white">Fresh Stories from the Blog</h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full border border-coral px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-coral transition hover:bg-coral hover:text-white"
          >
            View All Posts <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {blogHighlights.map((post) => (
            <article
              key={post.title}
              className="overflow-hidden rounded-[1.4rem] border border-brand-border bg-white shadow-sm transition hover:-translate-y-1 hover:border-coral/40 hover:shadow-lg dark:border-white/10 dark:bg-[#11253d]"
            >
              <div className="relative h-48">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <span className="inline-flex rounded-full bg-brand-muted px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-brand-muted-text dark:bg-[#0d1b2d] dark:text-white/70">
                  {post.tag}
                </span>
                <h3 className="text-lg font-heading font-bold text-brand-text dark:text-white">{post.title}</h3>
                <p className="text-sm text-brand-muted-text dark:text-white/75">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
