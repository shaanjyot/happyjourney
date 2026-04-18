'use client'

import { useMemo, useState } from 'react'
import Image from 'next/image'
import { Calendar, Hotel, MapPin, ShieldCheck, Sparkles, Star, Ticket } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import type { TripPackage } from '@/lib/trips-data'

type TripDetailsClientProps = {
  trip: TripPackage
}

const tabs = ['Itinerary', 'Summary', 'Hotel', 'Activity', 'Inclusions'] as const
type Tab = (typeof tabs)[number]

export function TripDetailsClient({ trip }: TripDetailsClientProps) {
  const [activeTab, setActiveTab] = useState<Tab>('Itinerary')
  const [openDay, setOpenDay] = useState<string | null>(trip.itinerary[0]?.day ?? null)

  const activityTitles = useMemo(() => trip.itinerary.map((plan) => plan.title), [trip.itinerary])

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#e7f6ff] via-[#ecfff3] to-[#fff3e6] dark:from-[#05111E] dark:via-[#0b1e33] dark:to-[#12263f]">
      <Header />

      <section className="pt-28 pb-8 section-container">
        <div className="relative rounded-[2rem] overflow-hidden border border-white/60 shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-[#062b56]/65 via-[#0a3f70]/30 to-[#18643b]/35 z-10" />
          <Image src={trip.gallery[0]} alt={trip.title} fill className="object-cover" />
          <div className="relative z-20 px-8 md:px-14 py-16 md:py-20 text-white">
            <p className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-yellow-mid">TravelXploria Inspired Package</p>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mt-2">{trip.title}</h1>
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-semibold inline-flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {trip.location}
              </span>
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-semibold inline-flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {trip.days} Days / {trip.nights} Nights
              </span>
              <span className="px-4 py-2 rounded-full bg-white/15 border border-white/30 text-sm font-semibold inline-flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-mid fill-yellow-mid" />
                {trip.rating}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container pb-10">
        <div className="bg-white/85 dark:bg-white/10 backdrop-blur-sm border border-white dark:border-white/15 rounded-[1.5rem] p-4 md:p-6 shadow-sm">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`h-11 rounded-xl text-sm font-bold tracking-wide transition-all border ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-[#ff8d6a] to-[#ffb18c] text-white border-[#ff8d6a]'
                    : 'bg-white dark:bg-[#102235] text-brand-text dark:text-white border-brand-border dark:border-white/15 hover:border-[#ff9a72]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-container pb-16">
        {activeTab === 'Itinerary' && (
          <div className="space-y-4">
            <div className="relative rounded-[1.5rem] overflow-hidden min-h-[320px] border border-white shadow-md">
              <Image src={trip.gallery[1] ?? trip.gallery[0]} alt={`${trip.title} itinerary`} fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1d2448]/75 via-[#1d2448]/20 to-transparent" />
              <div className="absolute left-8 bottom-8 text-white">
                <p className="text-7xl font-bold leading-none text-white/55">{trip.days}</p>
                <p className="text-4xl font-heading font-bold -mt-2">
                  Days in <span className="text-coral">{trip.location}</span>
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {trip.itinerary.map((dayPlan, index) => {
                const opened = openDay === dayPlan.day
                return (
                  <div key={`${dayPlan.day}-${index}`} className="rounded-xl bg-white dark:bg-[#11253d] border border-brand-border dark:border-white/10 overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenDay(opened ? null : dayPlan.day)}
                      className="w-full flex items-center justify-between px-4 py-4 text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="px-3 py-1 rounded-full bg-lime-100 text-lime-900 text-sm font-bold">
                          {dayPlan.day.replace('Day ', 'Day ')}
                        </span>
                        <span className="text-base md:text-lg font-semibold text-brand-text dark:text-white">{dayPlan.title}</span>
                      </div>
                      <span className="text-2xl text-brand-muted-text dark:text-white/70">{opened ? '−' : '+'}</span>
                    </button>
                    {opened && <p className="px-4 pb-4 text-brand-muted-text dark:text-white/75">{dayPlan.details}</p>}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {activeTab === 'Summary' && (
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
            <div className="bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 p-6">
              <h3 className="text-3xl font-heading text-coral mb-4">Trip Overview</h3>
              <p className="text-brand-text dark:text-white/85 leading-8">{trip.overview}</p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                {trip.itinerary.map((item) => (
                  <div key={item.day} className="rounded-xl bg-brand-muted dark:bg-[#0d1b2d] px-4 py-3">
                    <p className="text-xs uppercase tracking-widest text-brand-muted-text dark:text-white/65 font-bold">{item.day}</p>
                    <p className="font-semibold text-brand-text dark:text-white">{item.title}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 p-6 space-y-4 shadow-sm">
              <h4 className="text-2xl font-heading text-coral">Quick Stats</h4>
              <p className="text-brand-text dark:text-white/85 inline-flex items-center gap-2"><Ticket className="w-4 h-4 text-coral" /> {activityTitles.length} Activities</p>
              <p className="text-brand-text dark:text-white/85 inline-flex items-center gap-2"><Hotel className="w-4 h-4 text-coral" /> {trip.hotelRating ?? 3} Star Hotel</p>
              <p className="text-brand-text dark:text-white/85 inline-flex items-center gap-2"><Sparkles className="w-4 h-4 text-coral" /> Category: {trip.category}</p>
              <div className="pt-4 border-t border-brand-border dark:border-white/10 space-y-3">
                <h5 className="text-lg font-heading font-bold text-brand-text dark:text-white">Book This Package</h5>
                <input className="w-full h-11 px-4 rounded-lg border border-brand-border dark:border-white/15 bg-white dark:bg-[#0d1b2d] text-brand-text dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/40" placeholder="Full Name" />
                <input className="w-full h-11 px-4 rounded-lg border border-brand-border dark:border-white/15 bg-white dark:bg-[#0d1b2d] text-brand-text dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/40" placeholder="Email Address" />
                <input className="w-full h-11 px-4 rounded-lg border border-brand-border dark:border-white/15 bg-white dark:bg-[#0d1b2d] text-brand-text dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/40" placeholder="Phone Number" />
                <Button className="w-full border-2 border-coral bg-coral text-white hover:bg-[#ff7a62] hover:border-[#ff7a62]">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Hotel' && (
          <div className="bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 p-6 space-y-5">
            <h3 className="text-3xl font-heading text-coral">Hotel & Stay</h3>
            <div className="flex gap-3">
              {[3, 4, 5].map((rating) => (
                <span
                  key={rating}
                  className={`px-5 py-2 rounded-xl border text-lg font-semibold ${
                    (trip.hotelRating ?? 3) === rating
                      ? 'bg-gradient-to-r from-yellow-start to-[#FFD8B7] border-coral'
                      : 'border-brand-border dark:border-white/15 text-brand-text dark:text-white/85'
                  }`}
                >
                  {rating} Star
                </span>
              ))}
            </div>
            <p className="text-brand-muted-text dark:text-white/75">
              Standard check-in 3:00 PM and check-out 12:00 PM. Handpicked hotels in prime city areas with transfer support.
            </p>
          </div>
        )}

        {activeTab === 'Activity' && (
          <div className="bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 p-6">
            <h3 className="text-3xl font-heading text-coral mb-5">Activities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activityTitles.map((activityTitle, index) => (
                <div key={`${activityTitle}-${index}`} className="rounded-xl bg-brand-muted dark:bg-[#0d1b2d] p-4 border border-brand-border dark:border-white/10">
                  <p className="text-xs uppercase tracking-widest text-brand-muted-text dark:text-white/65 font-bold">Activity {index + 1}</p>
                  <p className="font-semibold text-brand-text dark:text-white">{activityTitle}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'Inclusions' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 p-6">
              <h3 className="text-3xl font-heading text-coral mb-5">Inclusions</h3>
              <ul className="space-y-2">
                {trip.inclusions.map((item) => (
                  <li key={item} className="text-brand-text dark:text-white/85 inline-flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-green-primary mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 p-6">
              <h3 className="text-3xl font-heading text-coral mb-5">Exclusions</h3>
              <ul className="space-y-2">
                {trip.exclusions.map((item) => (
                  <li key={item} className="text-brand-text dark:text-white/85">- {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </section>

      <section className="section-container pb-24">
        <div className="rounded-[1.5rem] p-6 bg-gradient-to-r from-[#0f3460] via-[#145f87] to-[#1a875a] text-white border border-white/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/70">Starting From</p>
              <p className="text-4xl font-bold">₹{trip.price}</p>
            </div>
            <div className="flex gap-3">
              <Button className="border-2 border-white bg-transparent text-white hover:bg-white/10 hover:text-white">
                Request Call Back
              </Button>
              <Button className="border-2 border-coral bg-coral text-white hover:bg-[#ff7a62] hover:border-[#ff7a62]">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
