'use client'

import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'

// Fallback data
const initialJourneys = [
    {
        title: 'Serbian Explorer',
        tagline: 'Culture • Heritage',
        description: 'An immersive cultural odyssey through the historic heart of the Balkans, exploring ancient architecture and local traditions.',
        image_url: '/bali.png',
    },
    {
        title: 'Maldives Paradise',
        tagline: 'Luxury • Beach',
        description: 'Discovering the ultimate relaxation in turquoise waters, featuring luxury overwater villas and vibrant coral reef adventures.',
        image_url: '/maldives.png',
    },
    {
        title: 'Dubai Desert Safari',
        tagline: 'Adventure • Desert',
        description: 'Thrilling adventures across the golden dunes, combining luxury desert camping with authentic Bedouin cultural hospitality.',
        image_url: '/dubai.png',
    }
]

export function CompletedJourneys() {
    const [journeys, setJourneys] = useState(initialJourneys)
    const [loading, setLoading] = useState(true)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const supabase = createClient()

    useEffect(() => {
        async function fetchJourneys() {
            try {
                const { data, error } = await supabase
                    .from('completed_journeys')
                    .select('*')
                    .order('order_index', { ascending: true })

                if (data && data.length > 0) {
                    setJourneys(data)
                }
            } catch (err) {
                console.error('Error fetching journeys:', err)
            } finally {
                setLoading(false)
            }
        }
        fetchJourneys()
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
        <section className="section-padding bg-white dark:bg-dark-navy relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] rounded-full border border-dark-navy/5 dark:border-white/5 pointer-events-none" />

            <div className="section-container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
                    <div className="max-w-2xl">
                        <h3 className="text-coral font-bold tracking-widest uppercase text-sm mb-4">Travel Diaries</h3>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-navy dark:text-white">
                            Memories from <br /> Completed Journeys
                        </h2>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button
                            onClick={() => scroll('left')}
                            className="p-4 rounded-full border border-dark-navy/10 dark:border-white/10 hover:bg-coral hover:text-white hover:border-coral transition-all duration-300 group"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-4 rounded-full border border-dark-navy/10 dark:border-white/10 hover:bg-coral hover:text-white hover:border-coral transition-all duration-300 group"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory scrollbar-hide no-scrollbar"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {journeys.map((journey, index) => (
                        <motion.div
                            key={journey.title}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="flex-shrink-0 w-[300px] md:w-[450px] snap-start"
                        >
                            <div className="group relative">
                                <div className="relative aspect-[16/10] rounded-[2rem] overflow-hidden shadow-premium mb-8 transform group-hover:scale-[1.02] transition-transform duration-500">
                                    <Image
                                        src={journey.image_url || '/dubai.png'}
                                        alt={journey.title}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-dark-navy/20 group-hover:bg-dark-navy/40 transition-colors duration-500" />
                                </div>

                                <div className="space-y-4 px-2">
                                    <span className="text-coral font-bold tracking-[0.2em] uppercase text-xs">
                                        {journey.tagline}
                                    </span>
                                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy dark:text-white group-hover:text-coral transition-colors">
                                        {journey.title}
                                    </h3>
                                    <p className="text-brand-muted-text text-base leading-relaxed line-clamp-3">
                                        {journey.description}
                                    </p>
                                    <button className="inline-flex items-center space-x-3 text-dark-navy dark:text-white font-bold tracking-widest uppercase text-xs hover:text-coral transition-colors pt-2 group/btn">
                                        <span>Read Full Story</span>
                                        <div className="w-8 h-[2px] bg-coral group-hover/btn:w-12 transition-all" />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
