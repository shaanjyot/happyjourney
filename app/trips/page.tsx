'use client'

import { Suspense, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MapPin, Calendar, Star, Search as SearchIcon, SlidersHorizontal, Sparkles } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { useRouter } from 'next/navigation'
import { tripCategories, tripPackages } from '@/lib/trips-data'

type TripsContentProps = {
    initialQuery: string
    initialCategory: string
}

function TripsContent({ initialQuery, initialCategory }: TripsContentProps) {
    const router = useRouter()
    const [activeCategory, setActiveCategory] = useState(initialCategory)
    const [searchQuery, setSearchQuery] = useState(initialQuery)

    const filteredTrips = tripPackages.filter(trip => {
        const matchesCategory = activeCategory === 'All' || trip.category === activeCategory
        const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trip.location.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const minimumPrice = useMemo(
        () => (tripPackages.length ? Math.min(...tripPackages.map((trip) => trip.priceValue)) : 0),
        []
    )

    return (
        <main className="min-h-screen bg-brand-bg dark:bg-gradient-to-b dark:from-[#061220] dark:via-[#0b1e33] dark:to-[#102843]">
            <Header />

            <section className="relative pt-20">
                <div className="relative h-[320px] md:h-[400px] overflow-hidden">
                    <Image
                        src="/hero-bg.png"
                        alt="Trips"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/15 via-dark-navy/55 to-dark-navy/90" />
                    <div className="absolute inset-0 section-container flex items-center justify-center text-center">
                        <div className="space-y-3 pt-8">
                            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">All Destinations</p>
                            <h1 className="text-5xl md:text-7xl font-heading font-bold text-yellow-mid">Tour Packages</h1>
                            <p className="text-white/85 max-w-2xl mx-auto">
                                Browse all curated journeys with destination-wise filtering and detailed package insights.
                            </p>
                        </div>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 section-container">
                        <div className="grid grid-cols-3 gap-2 md:gap-3 pb-4 md:pb-6">
                            <div className="bg-black/45 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 md:px-4 md:py-3 text-center">
                                <p className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-[0.18em]">Total Packages</p>
                                <p className="text-xs md:text-sm font-bold text-white">{tripPackages.length}</p>
                            </div>
                            <div className="bg-black/45 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 md:px-4 md:py-3 text-center">
                                <p className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-[0.18em]">Categories</p>
                                <p className="text-xs md:text-sm font-bold text-white">{tripCategories.length - 1}</p>
                            </div>
                            <div className="bg-black/45 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 md:px-4 md:py-3 text-center">
                                <p className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-[0.18em]">Starting From</p>
                                <p className="text-xs md:text-sm font-bold text-yellow-mid">
                                    ₹{minimumPrice > 0 ? minimumPrice.toLocaleString('en-IN') : 'N/A'}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-container py-12">
                <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
                    <aside className="bg-white dark:bg-[#11253d] rounded-[1.5rem] p-5 md:p-6 h-fit lg:sticky lg:top-28 space-y-6 border border-brand-border dark:border-white/10 shadow-sm dark:shadow-[0_18px_36px_-24px_rgba(0,0,0,0.65)]">
                        <div className="rounded-md bg-lime-50 dark:bg-[#18334f] border border-lime-100 dark:border-white/10 px-4 py-3">
                            <p className="text-2xl font-heading font-bold text-coral leading-tight">Find Your Perfect Package</p>
                            <p className="text-brand-muted-text dark:text-white/75 text-sm font-semibold leading-tight">Search and filter journeys instantly.</p>
                        </div>

                        <div className="flex items-center gap-3 pb-4 border-b border-brand-border dark:border-white/10">
                            <SlidersHorizontal className="w-4 h-4 text-gold" />
                            <p className="text-sm font-bold tracking-widest uppercase text-brand-text dark:text-white">Filter Packages</p>
                        </div>

                        <div className="space-y-3">
                            <p className="text-xs font-bold tracking-widest uppercase text-brand-muted-text dark:text-white/60">Search</p>
                            <div className="relative">
                                <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted-text dark:text-white/60 w-4 h-4" />
                                <input
                                    type="text"
                                    placeholder="Destination or package..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full bg-brand-muted dark:bg-[#0d1b2d] border-none rounded-full h-11 pl-12 pr-4 focus:ring-2 focus:ring-gold text-brand-text dark:text-white font-medium text-sm"
                                />
                            </div>
                        </div>

                        <div className="space-y-3">
                            <p className="text-xs font-bold tracking-widest uppercase text-brand-muted-text dark:text-white/60">Category</p>
                            <div className="flex flex-wrap gap-2">
                                {tripCategories.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveCategory(cat)}
                                        className={`px-4 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all duration-300 ${activeCategory === cat
                                            ? 'bg-gold text-navy shadow-lg'
                                            : 'bg-brand-muted dark:bg-[#0d1b2d] text-brand-muted-text dark:text-white/75 hover:bg-gold/20 hover:text-brand-text dark:hover:text-white'
                                            }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <Button
                            onClick={() => { setActiveCategory('All'); setSearchQuery('') }}
                            variant="outline"
                            className="w-full h-11 border-2 border-coral text-coral hover:bg-coral hover:text-white"
                        >
                            Reset Filters
                        </Button>
                    </aside>

                    <div className="space-y-6">
                        <div className="rounded-[1rem] px-4 py-3 border border-brand-border dark:border-white/10 bg-white dark:bg-[#11253d] flex items-center justify-between">
                            <p className="text-sm font-semibold text-brand-muted-text dark:text-white/80">
                                Showing <span className="text-gold font-bold">{filteredTrips.length}</span> packages
                            </p>
                            <p className="text-xs tracking-widest uppercase text-brand-muted-text dark:text-white/70">
                                {activeCategory === 'All' ? 'All Categories' : activeCategory}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {filteredTrips.map((trip, idx) => (
                                <motion.div
                                    key={trip.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.05 }}
                                    className="group block bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 overflow-hidden hover:shadow-xl hover:border-coral/40 transition-all duration-300"
                                >
                                    <div className="relative min-h-[190px]">
                                        <Image
                                            src={trip.image}
                                            alt={trip.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>

                                    <div className="p-5 space-y-4">
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between gap-2">
                                                <div className="flex items-center gap-2 text-gold">
                                                    <MapPin className="w-3 h-3" />
                                                    <span className="text-[10px] font-bold tracking-widest uppercase">{trip.location}</span>
                                                </div>
                                                <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-muted dark:bg-[#0d1b2d]">
                                                    <Star className="w-3 h-3 text-gold fill-gold" />
                                                    <span className="text-[10px] font-semibold text-brand-muted-text dark:text-white/75">{trip.rating}</span>
                                                </div>
                                            </div>
                                            <h3 className="text-lg font-heading font-bold text-brand-text dark:text-white group-hover:text-coral transition-colors line-clamp-2">
                                                {trip.title}
                                            </h3>
                                            <p className="text-xs text-brand-muted-text dark:text-white/70">
                                                {trip.cities.join(' • ')}
                                            </p>
                                        </div>

                                        <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-brand-border dark:border-white/10">
                                            <div className="inline-flex items-center gap-2 text-brand-muted-text dark:text-white/70">
                                                <Calendar className="w-4 h-4 text-brand-muted-text dark:text-white/65" />
                                                <span className="text-xs font-semibold">{trip.duration}</span>
                                            </div>
                                            <div className="inline-flex items-center gap-1.5 text-brand-muted-text dark:text-white/70">
                                                <Sparkles className="w-3.5 h-3.5 text-coral" />
                                                <span className="text-[10px] font-bold tracking-widest uppercase">{trip.category}</span>
                                            </div>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="text-[10px] tracking-widest uppercase text-brand-muted-text dark:text-white/60">Starting From</p>
                                                <p className="text-xl font-bold text-gold">₹{trip.price}</p>
                                            </div>
                                            <button
                                                className="inline-flex items-center justify-center h-10 px-5 rounded-full border-2 border-dark-navy dark:border-white/40 text-dark-navy dark:text-white text-xs font-bold tracking-wider uppercase group-hover:bg-dark-navy group-hover:text-white transition-all"
                                                onClick={() => router.push(`/trips/${trip.slug}`)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {filteredTrips.length === 0 && (
                            <div className="text-center py-20 space-y-6">
                                <div className="p-10 bg-brand-muted dark:bg-[#0d1b2d] rounded-[3rem] inline-block">
                                    <SearchIcon className="w-12 h-12 text-brand-muted-text dark:text-white/70 mx-auto" />
                                </div>
                                <h3 className="text-2xl font-heading font-bold text-brand-text dark:text-white">No trips found matching your criteria.</h3>
                                <p className="text-brand-muted-text dark:text-white/75">Try adjusting your filters or search query.</p>
                                <Button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
                                    Reset Filters
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}

function TripsPageInner() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get('q') || ''
    const initialCategoryParam = searchParams.get('category') || 'All'
    const initialCategory = tripCategories.includes(initialCategoryParam) ? initialCategoryParam : 'All'
    const renderKey = `${initialCategory}::${initialQuery}`

    return <TripsContent key={renderKey} initialCategory={initialCategory} initialQuery={initialQuery} />
}

export default function TripsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-bg flex items-center justify-center"><p className="text-gold font-bold animate-pulse">LOADING JOURNEYS...</p></div>}>
            <TripsPageInner />
        </Suspense>
    )
}
