'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Tent, Waves, Mountain, Wind, CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const activities = [
    {
        id: 1,
        name: 'Luxury Camping',
        description: 'Experience the wild without sacrificing comfort. Our glamping setups feature premium bedding and private amenities.',
        icon: Tent,
        image: '/images/hero-bg.jpg',
        features: ['Private Campfires', 'Gourmet Dining', 'Starlit Nights'],
        benefits: 'Disconnect from the noise and reconnect with nature in style.'
    },
    {
        id: 2,
        name: 'River Rafting',
        description: 'Tame the wild rapids of pristine Himalayan rivers. A perfect blend of adrenaline and breathtaking scenery.',
        icon: Waves,
        image: '/images/destinations/iceland.jpg',
        features: ['Grade 3+ Rapids', 'Expert Guides', 'Safety Equipment'],
        benefits: 'Test your courage against the powerful currents.'
    },
    {
        id: 3,
        name: 'Mountain Trekking',
        description: 'Walk through ancient trails, witness hidden valleys, and reach peaks that touch the clouds.',
        icon: Mountain,
        image: '/images/destinations/swiss-alps.jpg',
        features: ['Scenic Routes', 'Hidden Villages', 'Panoramic Views'],
        benefits: 'The best views are earned through every step taken.'
    },
    {
        id: 4,
        name: 'Paragliding',
        description: 'Soar like an eagle over lush valleys and turquoise waters. Feel the ultimate freedom of flight.',
        icon: Wind,
        image: '/images/destinations/bali.jpg',
        features: ['Tandem Flights', 'HD Recording', 'Thermal Soaring'],
        benefits: 'A perspective of the world you’ve only ever dreamed of.'
    }
]

export default function ActivitiesPage() {
    return (
        <main className="min-h-screen bg-brand-bg dark:bg-navy">
            <Header />

            {/* Hero Header */}
            <section className="relative pt-48 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gold/5 dark:bg-gold/2" />
                    <div className="topo-bg absolute inset-0 opacity-20" />
                </div>

                <div className="relative z-10 section-container text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto space-y-8"
                    >
                        <div className="flex items-center justify-center space-x-4">
                            <div className="h-[2px] w-12 bg-gold" />
                            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs">Unleash Adventure</span>
                            <div className="h-[2px] w-12 bg-gold" />
                        </div>
                        <h1 className="text-brand-text">Signature <span className="text-gold italic">Experiences</span></h1>
                        <p className="text-xl text-brand-muted-text font-light max-w-2xl mx-auto">
                            Every HappyJourney trip is packed with curated activities that bring you closer to the heart of your destination.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Activities List */}
            <section className="pb-32">
                <div className="section-container space-y-32">
                    {activities.map((act, idx) => (
                        <motion.div
                            key={act.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                                }`}
                        >
                            <div className="flex-1 w-full space-y-10">
                                <div className="space-y-6">
                                    <div className="w-20 h-20 rounded-[2rem] bg-gold/10 flex items-center justify-center text-gold">
                                        <act.icon className="w-10 h-10" />
                                    </div>
                                    <h2 className="text-brand-text mb-4">{act.name}</h2>
                                    <p className="text-xl text-brand-muted-text font-light leading-relaxed">
                                        {act.description}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {act.features.map((feat) => (
                                        <div key={feat} className="flex items-center space-x-3 px-6 py-4 bg-brand-muted rounded-2xl border border-brand-border">
                                            <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0" />
                                            <span className="text-sm font-bold text-brand-text tracking-wide">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="p-8 bg-gold rounded-[2.5rem] text-navy">
                                    <h4 className="text-[10px] font-bold tracking-widest uppercase mb-2 opacity-70">The Benefit</h4>
                                    <p className="text-lg font-bold italic line-clamp-2">"{act.benefits}"</p>
                                </div>

                                <Button className="h-16 px-12 group">
                                    Enquire About {act.name}
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </div>

                            <div className="flex-1 w-full relative">
                                <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-mega">
                                    <Image
                                        src={act.image}
                                        alt={act.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold/10 rounded-full blur-[80px] -z-10" />
                                <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-navy/5 dark:bg-white/5 rounded-full blur-[100px] -z-10" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    )
}
