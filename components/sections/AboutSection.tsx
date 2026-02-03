'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Play } from 'lucide-react'

export function AboutSection() {
    return (
        <section className="relative overflow-hidden section-padding bg-white dark:bg-dark-navy">
            {/* Background Pattern - Large Circular Overlay */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full border border-dark-navy/5 dark:border-white/5 pointer-events-none" />

            <div className="relative z-10 section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left: 4-Image Grid Collage */}
                    <div className="relative grid grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-premium">
                                <Image
                                    src="/dubai.png"
                                    alt="Dubai"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-premium">
                                <Image
                                    src="/thailand.png"
                                    alt="Thailand"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4 pt-12"
                        >
                            <div className="relative rounded-3xl overflow-hidden aspect-square shadow-premium">
                                <Image
                                    src="/bali.png"
                                    alt="Bali"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-premium">
                                <Image
                                    src="/singapore.png"
                                    alt="Singapore"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </motion.div>

                        {/* Play Button Overlay on one image if desired, or just branding */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <motion.button
                                whileHover={{ scale: 1.1 }}
                                className="w-16 h-16 rounded-full bg-coral text-white flex items-center justify-center shadow-mega"
                            >
                                <Play className="w-6 h-6 fill-white ml-1" />
                            </motion.button>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-6"
                    >
                        <div className="space-y-4">
                            <h3 className="text-coral font-bold tracking-widest uppercase text-sm">Welcome to our world</h3>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-dark-navy dark:text-white leading-tight">
                                We Design <span className="text-coral italic">Journeys</span> That Redefine Luxury
                            </h2>
                            <p className="text-brand-muted-text text-lg leading-relaxed max-w-xl">
                                At HappyJourney, we believe travel is an art form. Our curators spend years building relationships with local masters to ensure your experience is nothing short of extraordinary.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 py-4">
                            <div className="space-y-2 border-l-2 border-coral pl-6">
                                <h4 className="text-3xl font-bold font-serif text-dark-navy dark:text-white">12K+</h4>
                                <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted-text">Happy Travelers</p>
                            </div>
                            <div className="space-y-2 border-l-2 border-coral pl-6">
                                <h4 className="text-3xl font-bold font-serif text-dark-navy dark:text-white">500+</h4>
                                <p className="text-sm font-semibold uppercase tracking-wider text-brand-muted-text">Destinations</p>
                            </div>
                        </div>

                        <div className="pt-4">
                            <button className="gradient-green text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:shadow-premium transition-all">
                                Discover More
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
