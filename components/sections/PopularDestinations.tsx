'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'

const destinations = [
    {
        id: 1,
        name: 'Santorini',
        country: 'Greece',
        image: '/images/destinations/santorini.jpg',
        category: 'Coastal',
    },
    {
        id: 2,
        name: 'Kyoto',
        country: 'Japan',
        image: '/images/destinations/kyoto.jpg',
        category: 'Cultural',
    },
    {
        id: 3,
        name: 'Swiss Alps',
        country: 'Switzerland',
        image: '/images/destinations/swiss-alps.jpg',
        category: 'Adventure',
    },
    {
        id: 4,
        name: 'Bali',
        country: 'Indonesia',
        image: '/images/destinations/bali.jpg',
        category: 'Tropical',
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export function PopularDestinations() {
    return (
        <section className="section-padding bg-brand-bg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-8 md:space-y-0 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl space-y-4"
                    >
                        <div className="flex items-center justify-center md:justify-start space-x-3">
                            <div className="h-[2px] w-10 bg-gold" />
                            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs">
                                Escape The Ordinary
                            </span>
                        </div>
                        <h2 className="text-brand-text">
                            Popular <span className="text-gold italic">Destinations</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex justify-center md:justify-end"
                    >
                        <Link href="/trips" className="group flex items-center space-x-4 text-xs font-bold tracking-[0.2em] uppercase text-brand-text hover:text-gold transition-colors">
                            <span>All Destinations</span>
                            <div className="p-3 rounded-full border border-brand-border group-hover:bg-gold group-hover:border-gold group-hover:text-navy transition-all">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Destinations Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
                >
                    {destinations.map((dest) => (
                        <motion.div key={dest.id} variants={itemVariants} className="group">
                            <Link href={`/destinations/${dest.id}`} className="block relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2.5rem] bg-brand-muted shadow-premium group-hover:shadow-mega transition-all duration-500">
                                {/* Image */}
                                <Image
                                    src={dest.image}
                                    alt={dest.name}
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                                />

                                {/* Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute inset-4 border border-white/0 group-hover:border-white/20 transition-all duration-700 rounded-[2rem] pointer-events-none" />

                                {/* Content */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                    <div className="space-y-4">
                                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold tracking-[0.2em] uppercase text-white border border-white/20">
                                            {dest.category}
                                        </span>
                                        <div className="transform group-hover:-translate-y-2 transition-transform duration-500">
                                            <h3 className="text-2xl font-heading font-bold text-white mb-2 group-hover:text-gold transition-colors">
                                                {dest.name}
                                            </h3>
                                            <div className="flex items-center space-x-2 text-white/70">
                                                <MapPin className="w-4 h-4 text-gold" />
                                                <span className="text-sm font-medium tracking-wide">{dest.country}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Hover Button Icon */}
                                <div className="absolute top-8 right-8 w-12 h-12 bg-gold rounded-full flex items-center justify-center opacity-0 -translate-y-4 scale-50 group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-500 shadow-xl">
                                    <ArrowUpRight className="w-6 h-6 text-navy" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
