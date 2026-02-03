'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Palmtree, Mountain, Heart, Users, Briefcase, Camera } from 'lucide-react'

const travelVibes = [
    {
        title: 'Beach Escapes',
        icon: Palmtree,
        image: '/maldives.png',
        description: 'Sun, sand, and crystal clear waters',
        href: '/trips?category=beach',
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Mountain Adventures',
        icon: Mountain,
        image: '/bali.png',
        description: 'Peaks, valleys, and breathtaking views',
        href: '/trips?category=mountain',
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Romantic Getaways',
        icon: Heart,
        image: '/dubai.png',
        description: 'Perfect moments for couples',
        href: '/trips?category=romantic',
        color: 'from-pink-500 to-rose-500'
    },
    {
        title: 'Family Fun',
        icon: Users,
        image: '/singapore.png',
        description: 'Create memories together',
        href: '/trips?category=family',
        color: 'from-orange-500 to-amber-500'
    },
    {
        title: 'Corporate Retreats',
        icon: Briefcase,
        image: '/thailand.png',
        description: 'Team building and relaxation',
        href: '/trips?category=corporate',
        color: 'from-purple-500 to-violet-500'
    },
    {
        title: 'Photography Tours',
        icon: Camera,
        image: '/bali.png',
        description: 'Capture stunning moments',
        href: '/trips?category=photography',
        color: 'from-indigo-500 to-blue-500'
    },
]

export function TravelVibesSection() {
    return (
        <section className="section-padding bg-white dark:bg-dark-navy">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-10 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-3"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
                            Pick Your Travel Vibe
                        </h2>
                        <p className="text-brand-muted-text text-lg max-w-2xl mx-auto">
                            Whether you seek adventure, relaxation, or romance, we have the perfect journey for you
                        </p>
                    </motion.div>
                </div>

                {/* Vibes Grid - Scrollable on Mobile */}
                <div className="flex flex-nowrap overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-3 md:pb-0 md:mx-0 md:px-0">
                    {travelVibes.map((vibe, index) => {
                        const Icon = vibe.icon
                        return (
                            <motion.div
                                key={vibe.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="min-w-[300px] md:min-w-0 snap-center"
                            >
                                <Link href={vibe.href} className="group block">
                                    <div className="relative h-[450px] md:h-80 rounded-[32px] overflow-hidden card-shadow">
                                        {/* Background Image */}
                                        <Image
                                            src={vibe.image}
                                            alt={vibe.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                                        />

                                        {/* Gradient Overlay */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${vibe.color} opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
                                        <div className="absolute inset-0 bg-black/20" />

                                        {/* Content */}
                                        <div className="absolute inset-0 p-8 flex flex-col justify-between">
                                            <div className="flex justify-end">
                                                <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                                                    <Icon className="w-6 h-6 text-white group-hover:text-dark-navy transition-colors" />
                                                </div>
                                            </div>

                                            <div className="space-y-3 translation-all duration-300">
                                                <h3 className="text-3xl font-bold text-white tracking-tight">
                                                    {vibe.title}
                                                </h3>
                                                <p className="text-white/80 text-sm leading-relaxed max-w-[80%]">
                                                    {vibe.description}
                                                </p>
                                                <div className="pt-4 flex items-center space-x-2 text-white font-bold text-sm">
                                                    <span className="group-hover:translate-x-2 transition-transform">Explore More</span>
                                                    <span className="text-xl">→</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
