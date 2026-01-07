'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Calendar, User, MoveRight } from 'lucide-react'

const journeys = [
    {
        id: 1,
        title: 'Serbian Explorer',
        excerpt: 'An immersive cultural odyssey through the historic heart of the Balkans, exploring ancient architecture and local traditions.',
        image: '/images/destinations/iceland.jpg',
        date: 'Dec 2024',
        author: 'Elena Rossi'
    },
    {
        id: 2,
        title: 'Maldives Paradise',
        excerpt: 'Discovering the ultimate relaxation in turquoise waters, featuring luxury overwater villas and vibrant coral reef adventures.',
        image: '/images/destinations/bali.jpg',
        date: 'Nov 2024',
        author: 'Mark Sterling'
    },
    {
        id: 3,
        title: 'Dubai Desert Safari',
        excerpt: 'Thrilling adventures across the golden dunes, combining luxury desert camping with authentic Bedouin cultural hospitality.',
        image: '/images/hero-bg.jpg',
        date: 'Oct 2024',
        author: 'Sarah Jenkins'
    }
]

export function CompletedJourneys() {
    return (
        <section className="section-padding bg-brand-muted relative overflow-hidden">
            {/* Background Topo */}
            <div className="absolute inset-0 topo-bg opacity-40 pointer-events-none" />

            <div className="relative z-10 section-container">
                {/* Section Header */}
                <div className="max-w-3xl mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-4 mb-4"
                    >
                        <div className="h-[2px] w-12 bg-gold" />
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                            Travel Diaries
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-text"
                    >
                        Memories From <span className="text-gold italic">Completed Journeys</span>
                    </motion.h2>
                </div>

                {/* Journeys List */}
                <div className="space-y-32 md:space-y-48">
                    {journeys.map((journey, idx) => (
                        <motion.div
                            key={journey.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-100px' }}
                            transition={{ duration: 0.8 }}
                            className={`flex flex-col ${idx % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center`}
                        >
                            {/* Image Side */}
                            <div className="w-full lg:w-1/2 group">
                                <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] md:rounded-[4rem] shadow-mega">
                                    <Image
                                        src={journey.image}
                                        alt={journey.title}
                                        fill
                                        className="object-cover transition-transform duration-[2.5s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-1000" />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="w-full lg:w-1/2 space-y-8 lg:px-6">
                                <div className="flex flex-wrap items-center gap-6 text-xs font-bold tracking-[0.2em] uppercase text-brand-muted-text">
                                    <div className="flex items-center space-x-3">
                                        <Calendar className="w-4 h-4 text-gold" />
                                        <span>{journey.date}</span>
                                    </div>
                                    <div className="w-1 h-1 rounded-full bg-gold/50" />
                                    <div className="flex items-center space-x-3">
                                        <User className="w-4 h-4 text-gold" />
                                        <span>{journey.author}</span>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <h3 className="text-3xl lg:text-5xl font-heading font-bold text-brand-text transition-colors group-hover:text-gold">
                                        {journey.title}
                                    </h3>
                                    <p className="text-brand-muted-text text-lg md:text-xl leading-relaxed font-light">
                                        {journey.excerpt}
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <Link href={`/blog/${journey.id}`} className="group inline-flex items-center space-x-6">
                                        <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-brand-text">
                                            Read Full Story
                                        </span>
                                        <div className="w-14 h-14 rounded-full bg-brand-bg shadow-premium flex items-center justify-center group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                            <MoveRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
