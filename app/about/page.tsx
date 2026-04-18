import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AboutSection } from '@/components/sections/AboutSection'
import Image from 'next/image'

const values = [
  {
    title: 'Personalized Planning',
    description: 'Every trip is designed around your timeline, budget, and preferred travel style.',
  },
  {
    title: 'Trusted Local Partners',
    description: 'From airport pickups to curated activities, we work with vetted destination experts.',
  },
  {
    title: '24/7 Travel Support',
    description: 'Our team stays available before and during your journey for smooth experiences.',
  },
]

const aboutGallery = [
  { src: '/dubai.png', title: 'Dubai Experiences' },
  { src: '/bali.png', title: 'Bali Escapes' },
  { src: '/thailand.png', title: 'Thailand Adventures' },
  { src: '/singapore.png', title: 'Singapore City Tours' },
  { src: '/maldives.png', title: 'Maldives Getaways' },
  { src: '/hero-bg.png', title: 'Signature Journeys' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-bg dark:bg-gradient-to-b dark:from-[#071424] dark:via-[#0d223a] dark:to-[#14304e]">
      <Header />

      <section className="relative pt-28 pb-12">
        <div className="section-container text-center space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">About Happy Journey</p>
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-text dark:text-white">
            Crafted Journeys. Memorable Stories.
          </h1>
          <p className="mx-auto max-w-3xl text-brand-muted-text dark:text-white/75">
            We curate destination-first travel experiences with comfort, clarity, and local expertise at every step.
          </p>
        </div>
      </section>

      <section className="pb-8">
        <div className="section-container">
          <div className="rounded-[1.6rem] border border-brand-border bg-white p-6 md:p-8 shadow-sm dark:border-white/10 dark:bg-[#11253d]">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-coral">Who We Are</h2>
            <p className="mt-4 text-brand-muted-text dark:text-white/80 leading-8">
              Happy Journey is a full-service travel agency offering complete travel solutions for individuals, families, groups, and corporate travelers, regardless of group size. As an active ETAA member and a registered IATA TIDS agent, we handle both inbound and outbound travel with transparent planning and highly affordable pricing. From flight assistance and visa support to hotels, curated itineraries, and on-ground experiences, we take care of every detail so your journey stays stress-free. Share your travel query with us anytime, and our team will always be happy to help you plan the right trip.
            </p>
          </div>
        </div>
      </section>

      <AboutSection />

      <section className="section-padding">
        <div className="section-container grid grid-cols-1 gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-[1.5rem] border border-brand-border bg-white p-6 shadow-sm dark:border-white/10 dark:bg-[#11253d]"
            >
              <h2 className="text-2xl font-heading font-bold text-coral">{value.title}</h2>
              <p className="mt-3 text-sm text-brand-muted-text dark:text-white/75">{value.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-padding pt-2 pb-24">
        <div className="section-container space-y-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral">About Gallery</p>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-text dark:text-white">
              Moments We Love Creating
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {aboutGallery.map((item) => (
              <div
                key={item.title}
                className="relative h-44 overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm dark:border-white/10 dark:bg-[#11253d] md:h-56"
              >
                <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-500 hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-dark-navy/75 to-transparent p-3">
                  <p className="text-xs font-bold tracking-wide text-white">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
