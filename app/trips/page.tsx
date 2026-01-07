'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { MapPin, Calendar, Star, Filter, Search as SearchIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const allTrips = [
    {
        id: 1,
        title: 'Arunachal Pradesh: The Last Frontier',
        location: 'North-East India',
        price: '45,000',
        duration: '7 Days',
        rating: 4.9,
        category: 'North-East India',
        image: '/images/hero-bg.jpg',
        slug: 'arunachal'
    },
    {
        id: 2,
        title: 'Bali Paradise: Sun, Sand & Spirits',
        location: 'Indonesia',
        price: '85,000',
        duration: '6 Days',
        rating: 4.8,
        category: 'International',
        image: '/images/destinations/bali.jpg',
        slug: 'bali'
    },
    {
        id: 3,
        title: 'Swiss Alps Luxury Expedition',
        location: 'Switzerland',
        price: '1,50,000',
        duration: '10 Days',
        rating: 5.0,
        category: 'International',
        image: '/images/destinations/swiss-alps.jpg',
        slug: 'swiss'
    },
    {
        id: 4,
        title: 'Kyoto Heritage: Ancient Traditions',
        location: 'Japan',
        price: '1,20,000',
        duration: '8 Days',
        rating: 4.9,
        category: 'International',
        image: '/images/destinations/kyoto.jpg',
        slug: 'kyoto'
    },
    {
        id: 5,
        title: 'Meghalaya Special: Clouds & Caves',
        location: 'North-East India',
        price: '35,000',
        duration: '5 Days',
        rating: 4.7,
        category: 'North-East India',
        image: '/images/destinations/iceland.jpg', // Using iceland as placeholder for cold/misty vibes
        slug: 'meghalaya'
    },
    {
        id: 6,
        title: 'Luxurious Honeymoon in Maldives',
        location: 'Maldives',
        price: '2,00,000',
        duration: '5 Days',
        rating: 5.0,
        category: 'Specialty',
        image: '/images/hero-bg.jpg',
        slug: 'honeymoon'
    }
]

const categories = ['All', 'North-East India', 'International', 'Specialty']

import { Suspense } from 'react'

function TripsContent() {
    const searchParams = useSearchParams()
    const initialQuery = searchParams.get('q') || ''

    const [activeCategory, setActiveCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState(initialQuery)

    const filteredTrips = allTrips.filter(trip => {
        const matchesCategory = activeCategory === 'All' || trip.category === activeCategory
        const matchesSearch = trip.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            trip.location.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <main className="min-h-screen bg-brand-bg dark:bg-navy">
            <Header />

            {/* Hero Header */}
            <section className="relative pt-48 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/hero-bg.jpg"
                        alt="Hero Background"
                        fill
                        className="object-cover opacity-20 filter blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/0 via-brand-bg to-brand-bg dark:from-navy/0 dark:to-navy" />
                </div>

                <div className="relative z-10 section-container">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-brand-text">Explore Our <span className="text-gold">Curated Journeys</span></h1>
                        <p className="text-xl text-brand-muted-text font-light">
                            From the highest peaks to the deepest oceans, find your next extraordinary adventure.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filter & Search Bar */}
            <section className="relative z-20 -mt-12 mb-20 section-container">
                <div className="glass p-6 md:p-8 rounded-[2rem] shadow-mega flex flex-col lg:flex-row items-center gap-8">
                    {/* Categories */}
                    <div className="flex flex-wrap items-center gap-2 flex-1">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-gold text-navy shadow-lg'
                                    : 'bg-brand-muted text-brand-muted-text hover:bg-gold/20 hover:text-brand-text'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Search Input */}
                    <div className="relative w-full lg:w-[400px]">
                        <SearchIcon className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-muted-text w-5 h-5" />
                        <input
                            type="text"
                            placeholder="Search by destination or name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-brand-muted border-none rounded-full h-14 pl-16 pr-6 focus:ring-2 focus:ring-gold text-brand-text font-medium"
                        />
                    </div>
                </div>
            </section>

            {/* Trips Grid */}
            <section className="section-container pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {filteredTrips.map((trip, idx) => (
                        <motion.div
                            key={trip.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="group bg-brand-bg rounded-[2.5rem] border border-brand-border overflow-hidden hover:shadow-mega hover:border-gold transition-all duration-500"
                        >
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={trip.image}
                                    alt={trip.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-navy/80 backdrop-blur-md rounded-full border border-white/20 flex items-center space-x-2">
                                    <Star className="w-3 h-3 text-gold fill-gold" />
                                    <span className="text-white text-[10px] font-bold">{trip.rating}</span>
                                </div>
                                <div className="absolute bottom-6 right-6 px-4 py-2 bg-gold rounded-full text-navy font-bold text-xs">
                                    ₹{trip.price}
                                </div>
                            </div>

                            <div className="p-10 space-y-6">
                                <div className="space-y-3">
                                    <div className="flex items-center space-x-2 text-gold">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-[10px] font-bold tracking-widest uppercase">{trip.location}</span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-brand-text group-hover:text-gold transition-colors line-clamp-2">
                                        {trip.title}
                                    </h3>
                                </div>

                                <div className="flex items-center justify-between py-4 border-y border-brand-border">
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="w-4 h-4 text-brand-muted-text" />
                                        <span className="text-sm font-semibold text-brand-muted-text">{trip.duration}</span>
                                    </div>
                                    <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted-text">{trip.category}</span>
                                </div>

                                <Button className="w-full h-14" variant="outline">
                                    View Itinerary
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {filteredTrips.length === 0 && (
                    <div className="text-center py-20 space-y-6">
                        <div className="p-10 bg-brand-muted rounded-[3rem] inline-block">
                            <SearchIcon className="w-12 h-12 text-brand-muted-text mx-auto" />
                        </div>
                        <h3 className="text-2xl font-heading font-bold text-brand-text">No trips found matching your criteria.</h3>
                        <p className="text-brand-muted-text">Try adjusting your filters or search query.</p>
                        <Button onClick={() => { setActiveCategory('All'); setSearchQuery(''); }}>
                            Reset Filters
                        </Button>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    )
}

export default function TripsPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-brand-bg flex items-center justify-center"><p className="text-gold font-bold animate-pulse">LOADING JOURNEYS...</p></div>}>
            <TripsContent />
        </Suspense>
    )
}
