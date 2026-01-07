'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function AboutSection() {
    return (
        <section className="relative overflow-hidden section-padding bg-brand-bg">
            {/* Background Topo */}
            <div className="absolute inset-0 topo-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 section-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left: Modern Image Collage */}
                    <div className="relative order-2 lg:order-1">
                        <div className="grid grid-cols-2 gap-4 md:gap-8">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="space-y-4 md:space-y-8"
                            >
                                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-premium aspect-[4/5]">
                                    <Image
                                        src="/images/destinations/santorini.jpg"
                                        alt="Luxury Travel"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-premium aspect-square">
                                    <Image
                                        src="/images/destinations/bali.jpg"
                                        alt="Tropical Paradise"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="space-y-4 md:space-y-8 pt-12 md:pt-24"
                            >
                                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-premium aspect-square">
                                    <Image
                                        src="/images/destinations/kyoto.jpg"
                                        alt="Cultural Heritage"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-premium aspect-[4/5]">
                                    <Image
                                        src="/images/destinations/swiss-alps.jpg"
                                        alt="Mountain Adventure"
                                        fill
                                        className="object-cover hover:scale-110 transition-transform duration-1000"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right: Modern Typography Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="space-y-8 order-1 lg:order-2"
                    >
                        <div className="space-y-8">
                            <div className="inline-flex items-center space-x-4">
                                <div className="h-[2px] w-12 bg-gold" />
                                <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">A Legacy of Travel</span>
                            </div>
                            <h2 className="text-brand-text leading-[1.2]">
                                We Design <span className="text-gold italic">Journeys</span> That Redefine Luxury
                            </h2>
                            <p className="text-brand-muted-text text-lg md:text-xl leading-relaxed font-light">
                                At Happy Journey, we believe travel is an art form. Our curators spend years building relationships with local masters to ensure your experience is nothing short of extraordinary.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
                            {[
                                { title: 'Bespoke Planning', desc: 'Every detail tailored to you.' },
                                { title: 'Local Immersion', desc: 'Genuine cultural connections.' },
                                { title: 'Premium Comfort', desc: 'Hand-picked luxury stays.' },
                                { title: 'Elite Support', desc: '24/7 dedicated assistance.' }
                            ].map((item, idx) => (
                                <div key={idx} className="group space-y-3">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-2 h-2 rounded-full bg-gold" />
                                        <span className="font-bold text-lg text-brand-text group-hover:text-gold transition-colors">{item.title}</span>
                                    </div>
                                    <p className="text-sm md:text-base pl-6 text-brand-muted-text font-medium leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-8 pt-6 items-start md:items-center">
                            <Button size="lg" className="px-12 group h-16">
                                Discover Our Story
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </Button>
                            <div className="flex items-center space-x-5">
                                <div className="h-14 w-14 rounded-2xl border-2 border-gold flex items-center justify-center rotate-12 bg-gold/5">
                                    <span className="text-gold font-bold text-lg">HJ</span>
                                </div>
                                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-brand-muted-text leading-tight">Partnered with<br />Global Luxury</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
