'use client'

import { motion, Variants } from 'framer-motion'
import { Tent, Ship, Mountain, Landmark, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
    {
        id: 1,
        name: 'Camping',
        description: 'Immerse yourself in nature with our guided luxury camping experiences under the stars.',
        icon: Tent,
        color: '#f4b400'
    },
    {
        id: 2,
        name: 'Boating',
        description: 'Sail through pristine waters and discover hidden coastal gems with private charters.',
        icon: Ship,
        color: '#3498db'
    },
    {
        id: 3,
        name: 'Trekking',
        description: 'Challenge yourself with breathtaking treks through majestic mountain ranges worldwide.',
        icon: Mountain,
        color: '#8bc34a'
    },
    {
        id: 4,
        name: 'Cultural Tours',
        description: 'Experience authentic local culture, ancient traditions, and vibrant heritage sites.',
        icon: Landmark,
        color: '#9b59b6'
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export function ServicesSection() {
    return (
        <section className="section-padding bg-brand-bg relative overflow-hidden">
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
                            Tailored Experiences
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-text"
                    >
                        Our Exclusive <span className="text-gold italic">Travel Services</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-brand-muted-text font-light"
                    >
                        Meticulously crafted journeys designed for the most discerning explorers.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12"
                >
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.id}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="relative z-10 p-10 h-full bg-brand-muted dark:bg-navy/40 rounded-[2.5rem] border border-brand-border hover:border-gold transition-all duration-700 hover:shadow-premium hover:-translate-y-3">
                                    <div
                                        className="mb-10 w-16 h-16 rounded-2xl bg-brand-bg shadow-sm flex items-center justify-center transition-all duration-700 transform group-hover:rotate-[360deg] group-hover:bg-gold overflow-hidden"
                                    >
                                        <Icon className="w-8 h-8 text-gold group-hover:text-navy transition-colors duration-700" style={{ color: service.color }} />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-brand-text mb-6 group-hover:text-gold transition-colors duration-500">
                                        {service.name}
                                    </h3>

                                    <p className="text-sm md:text-base text-brand-muted-text leading-relaxed mb-10 font-medium">
                                        {service.description}
                                    </p>

                                    <Link href={`/services/${service.id}`} className="inline-flex items-center space-x-3 text-xs font-bold tracking-[0.2em] uppercase text-brand-text group/link">
                                        <span className="relative">
                                            Explore Service
                                            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold scale-x-0 group-hover/link:scale-x-100 transition-transform origin-left duration-500" />
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-gold transform group-hover/link:translate-x-2 transition-transform duration-500" />
                                    </Link>
                                </div>

                                {/* Accent glow */}
                                <div
                                    className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-5 blur-[60px] transition-opacity duration-1000 pointer-events-none"
                                    style={{ backgroundColor: service.color }}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
