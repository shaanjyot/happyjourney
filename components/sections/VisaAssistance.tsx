'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function VisaAssistance() {
    const features = [
        'Tourist & Business Visas',
        'Document Legalization',
        'Expedited Processing',
        'Expert Consultations'
    ]

    return (
        <section className="section-padding bg-brand-muted relative overflow-hidden">
            {/* Background Topo */}
            <div className="absolute inset-0 topo-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">

                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center space-x-4">
                                <div className="h-[2px] w-12 bg-gold" />
                                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                                    Global Mobility
                                </span>
                            </div>
                            <h2 className="text-brand-text leading-tight">
                                Hassle-Free <span className="text-gold italic">Visa Assistance</span>
                            </h2>
                        </div>

                        <p className="text-brand-muted-text text-lg md:text-xl leading-relaxed font-light">
                            Don't let paperwork stand in the way of your dreams. Our specialized visa
                            support team ensures a smooth, expedited process for major destinations worldwide.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
                            {features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-4 group">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                                        <CheckCircle className="w-5 h-5 text-gold group-hover:text-navy transition-colors duration-500" />
                                    </div>
                                    <span className="text-base font-bold text-brand-text">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <Link href="/services/visa">
                                <Button size="xl" className="px-14 group">
                                    Check Eligibility
                                    <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right: Dynamic Image Grid */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="grid grid-cols-2 gap-6 relative"
                    >
                        <div className="space-y-6">
                            <div className="relative aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-mega transform -rotate-2 hover:rotate-0 transition-transform duration-700">
                                <Image src="/images/destinations/kyoto.jpg" alt="Visa USA" fill className="object-cover" />
                                <div className="absolute inset-0 bg-navy/20" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase bg-navy/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">North America</span>
                                </div>
                            </div>
                            <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-mega hover:scale-105 transition-transform duration-700">
                                <Image src="/images/destinations/santorini.jpg" alt="Visa Europe" fill className="object-cover" />
                                <div className="absolute inset-0 bg-navy/20" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase bg-navy/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Schengen Area</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6 pt-16">
                            <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-mega hover:scale-105 transition-transform duration-700">
                                <Image src="/images/destinations/swiss-alps.jpg" alt="Visa UK" fill className="object-cover" />
                                <div className="absolute inset-0 bg-navy/20" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase bg-navy/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">United Kingdom</span>
                                </div>
                            </div>
                            <div className="relative aspect-[3/4] rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-mega transform rotate-2 hover:rotate-0 transition-transform duration-700">
                                <Image src="/images/destinations/bali.jpg" alt="Visa Asia" fill className="object-cover" />
                                <div className="absolute inset-0 bg-navy/20" />
                                <div className="absolute bottom-6 left-6">
                                    <span className="text-white text-[10px] font-bold tracking-[0.2em] uppercase bg-navy/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">Southeast Asia</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
