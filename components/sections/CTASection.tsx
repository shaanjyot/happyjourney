'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Compass } from 'lucide-react'
import Link from 'next/link'

export function CTASection() {
    return (
        <section className="section-padding bg-brand-bg relative overflow-hidden">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="relative rounded-[3rem] md:rounded-[5rem] overflow-hidden bg-navy px-8 py-20 md:p-32 shadow-mega"
                >
                    {/* Animated Background Elements */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/15 rounded-full blur-[150px] -mr-80 -mt-80 animate-pulse" />
                    <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-green/10 rounded-full blur-[120px] -ml-64 -mb-64 animate-pulse" />

                    <div className="absolute inset-0 topo-bg opacity-10 pointer-events-none" />

                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center text-center space-y-12">
                        <motion.div
                            initial={{ scale: 0, rotate: -45 }}
                            whileInView={{ scale: 1, rotate: 12 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3, type: 'spring', damping: 10 }}
                            className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-gold flex items-center justify-center shadow-2xl"
                        >
                            <Compass className="w-10 h-10 md:w-12 md:h-12 text-navy" />
                        </motion.div>

                        <div className="space-y-8 max-w-4xl">
                            <h2 className="text-white">
                                Your Next Extraordinary <span className="text-gold italic">Journey</span> Awaits
                            </h2>
                            <p className="text-white/70 text-lg md:text-2xl leading-relaxed font-light max-w-3xl mx-auto">
                                Why settle for a vacation when you can have an odyssey? Join thousands of discerning travelers who trust Happy Journey for their most precious memories.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-8 w-full sm:w-auto">
                            <Link href="/contact" className="w-full sm:w-auto">
                                <Button size="xl" className="w-full sm:w-auto px-16 group h-20 text-xl font-bold">
                                    Start Planning
                                    <ArrowRight className="ml-4 w-7 h-7 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                            <Link href="/trips" className="w-full sm:w-auto">
                                <Button variant="outline" size="xl" className="w-full sm:w-auto px-16 border-white/20 text-white hover:bg-white hover:text-navy h-20 text-xl font-bold backdrop-blur-md">
                                    Explore Destinations
                                </Button>
                            </Link>
                        </div>

                        <div className="pt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-24 opacity-60 w-full max-w-4xl">
                            <div className="text-center space-y-2">
                                <p className="text-white text-3xl md:text-4xl font-heading font-bold">50k+</p>
                                <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Happy Travelers</p>
                            </div>
                            <div className="text-center space-y-2 border-y sm:border-y-0 sm:border-x border-white/10 py-8 sm:py-0">
                                <p className="text-white text-3xl md:text-4xl font-heading font-bold">120+</p>
                                <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Global Locations</p>
                            </div>
                            <div className="text-center space-y-2">
                                <p className="text-white text-3xl md:text-4xl font-heading font-bold">4.9/5</p>
                                <p className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">Satisfaction Score</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
