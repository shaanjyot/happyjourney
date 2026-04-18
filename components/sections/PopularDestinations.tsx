'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight, MapPin, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import { createClient } from '@/lib/supabase/client'
import { getTripRouteFromDestination } from '@/lib/trips-data'

const initialDestinations = [
    {
        name: 'DUBAI',
        country: 'United Arab Emirates',
        image_url: '/dubai.png',
        duration: '5 Days / 4 Nights',
        price: 'From ₹45,000',
        href: '/trips/destination/dubai',
        description: 'Experience luxury and adventure in the city of gold'
    },
    {
        name: 'BALI',
        country: 'Indonesia',
        image_url: '/bali.png',
        duration: '6 Days / 5 Nights',
        price: 'From ₹38,000',
        href: '/trips/destination/bali',
        description: 'Tropical paradise with stunning rice terraces and beaches'
    },
    {
        name: 'THAILAND',
        country: 'Southeast Asia',
        image_url: '/thailand.png',
        duration: '7 Days / 6 Nights',
        price: 'From ₹32,000',
        href: '/trips/destination/thailand',
        description: 'Crystal clear waters and limestone cliffs await'
    },
    {
        name: 'SINGAPORE',
        country: 'Singapore',
        image_url: '/singapore.png',
        duration: '5 Days / 4 Nights',
        price: 'From ₹45,500',
        href: '/trips/destination/singapore',
        description: 'Skyline views, attractions, and modern city escapes'
    },
    {
        name: 'MALDIVES',
        country: 'Indian Ocean',
        image_url: '/maldives.png',
        duration: '5 Days / 4 Nights',
        price: 'From ₹65,000',
        href: '/trips/destination/maldives',
        description: 'Luxury overwater stays and turquoise island serenity'
    },
    {
        name: 'VIETNAM',
        country: 'Southeast Asia',
        image_url: '/thailand.png',
        duration: '7 Days / 6 Nights',
        price: 'From ₹24,200',
        href: '/trips/destination/vietnam',
        description: 'Culture-rich cities, coastlines, and food trails'
    }
]

export function PopularDestinations() {
    const [destinations, setDestinations] = useState(initialDestinations)
    const [loading, setLoading] = useState(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const supabase = createClient()

    useEffect(() => {
        async function fetchDestinations() {
            try {
                const { data, error } = await supabase
                    .from('destinations')
                    .select('*')
                    .order('order_index', { ascending: true })

                if (data && data.length > 0) {
                    setDestinations(data)
                }
            } catch (err) {
                console.error('Error fetching destinations:', err)
            } finally {
                setLoading(false)
            }
        }
        fetchDestinations()
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            scrollContainerRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section className="section-padding bg-white dark:bg-dark-navy">
            <div className="section-container">
                <div className="flex items-center justify-between mb-8">
                    <div className="space-y-3">
                        <h2 className="text-4xl md:text-5xl font-bold text-coral dark:text-white">
                            Popular Destinations
                        </h2>
                        <p className="text-brand-muted-text dark:text-white/80 text-lg">
                            Handpicked Getaways Loved by Thousands
                        </p>
                    </div>

                    <div className="hidden md:flex items-center space-x-3">
                        <button
                            onClick={() => scroll('left')}
                            className="p-3 rounded-full bg-brand-muted hover:bg-coral hover:text-white transition-all duration-300 card-shadow"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-3 rounded-full bg-brand-muted hover:bg-coral hover:text-white transition-all duration-300 card-shadow"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div className="relative">
                    <div
                        ref={scrollContainerRef}
                        className="flex overflow-x-auto gap-6 pb-4 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {destinations.map((destination, index) => {
                            const destinationPath = getTripRouteFromDestination(destination.href || destination.name)
                            return (
                            <motion.div
                                key={destination.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="flex-shrink-0 w-[320px] md:w-[380px] snap-start"
                            >
                                <Link href={destinationPath} className="group block">
                                    <div className="rounded-2xl overflow-hidden bg-white dark:bg-dark-navy/50 transition-all duration-300 shadow-[0_14px_35px_-14px_rgba(0,0,0,0.35)] hover:shadow-[0_20px_45px_-18px_rgba(0,0,0,0.45)] border border-white/40 dark:border-white/10">
                                        <div className="relative h-64 overflow-hidden paint-dissolve-frame">
                                            <Image
                                                src={destination.image_url || '/dubai.png'}
                                                alt={destination.name}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                            <div className="absolute bottom-4 left-4 right-4">
                                                <h3 className="text-3xl font-bold text-white font-serif tracking-wide">
                                                    {destination.name}
                                                </h3>
                                                <div className="flex items-center space-x-2 mt-1">
                                                    <MapPin className="w-4 h-4 text-coral" />
                                                    <p className="text-sm text-white/90">{destination.country}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 space-y-4">
                                            <p className="text-sm text-brand-muted-text line-clamp-2">
                                                {destination.description}
                                            </p>

                                            <div className="flex items-center justify-between pt-2 border-t border-brand-border">
                                                <div className="flex items-center space-x-2 text-brand-muted-text">
                                                    <Clock className="w-4 h-4" />
                                                    <span className="text-xs font-semibold">{destination.duration}</span>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-xs text-brand-muted-text">Starting from</p>
                                                    <p className="text-lg font-bold text-coral">{destination.price}</p>
                                                </div>
                                            </div>

                                            <span className="block text-center w-full gradient-green text-white py-3 rounded-full font-bold text-sm hover:shadow-premium transition-all">
                                                View Packages
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                            )
                        })}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/trips"
                        className="inline-flex items-center space-x-2 text-coral dark:text-white hover:text-brand-text dark:hover:text-coral transition-colors font-bold text-sm tracking-wider uppercase"
                    >
                        <span>View All Destinations</span>
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }

                .paint-dissolve-frame::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    pointer-events: none;
                    z-index: 10;
                    background:
                        radial-gradient(25px 14px at 8% 6%, rgba(255, 255, 255, 0.72), transparent 70%),
                        radial-gradient(30px 16px at 94% 10%, rgba(255, 255, 255, 0.65), transparent 72%),
                        radial-gradient(26px 14px at 9% 92%, rgba(255, 255, 255, 0.62), transparent 70%),
                        radial-gradient(32px 16px at 92% 88%, rgba(255, 255, 255, 0.68), transparent 72%),
                        radial-gradient(110% 22% at 50% -6%, rgba(255, 255, 255, 0.45), transparent 68%),
                        radial-gradient(110% 22% at 50% 106%, rgba(255, 255, 255, 0.4), transparent 68%);
                    mix-blend-mode: screen;
                    opacity: 0.85;
                }

                :global(.dark) .paint-dissolve-frame::before {
                    background:
                        radial-gradient(25px 14px at 8% 6%, rgba(11, 20, 33, 0.65), transparent 70%),
                        radial-gradient(30px 16px at 94% 10%, rgba(11, 20, 33, 0.58), transparent 72%),
                        radial-gradient(26px 14px at 9% 92%, rgba(11, 20, 33, 0.52), transparent 70%),
                        radial-gradient(32px 16px at 92% 88%, rgba(11, 20, 33, 0.62), transparent 72%),
                        radial-gradient(110% 22% at 50% -6%, rgba(11, 20, 33, 0.45), transparent 68%),
                        radial-gradient(110% 22% at 50% 106%, rgba(11, 20, 33, 0.42), transparent 68%);
                    mix-blend-mode: multiply;
                    opacity: 0.78;
                }
            `}</style>
        </section>
    )
}
