'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-brand-bg dark:bg-navy">
            <Header />

            {/* Page Header */}
            <section className="relative pt-48 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gold/5 dark:bg-gold/2" />
                    <div className="topo-bg absolute inset-0 opacity-10" />
                </div>

                <div className="relative z-10 section-container">
                    <div className="max-w-3xl space-y-6">
                        <div className="inline-flex items-center space-x-4">
                            <div className="h-[2px] w-12 bg-gold" />
                            <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs">Get In Touch</span>
                        </div>
                        <h1 className="text-brand-text">Let’s Start Your <span className="text-gold italic">Next Story</span></h1>
                        <p className="text-xl text-brand-muted-text font-light">
                            Our travel specialists are waiting to create your perfect itinerary. Reach out and let the adventure begin.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-container pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

                    {/* Contact Information */}
                    <div className="space-y-12">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-brand-muted rounded-[2.5rem] border border-brand-border space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold tracking-widest uppercase text-brand-muted-text mb-1">Call Us</h4>
                                    <p className="text-lg font-bold text-brand-text">+91 60 262 84 181</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-brand-muted rounded-[2.5rem] border border-brand-border space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold tracking-widest uppercase text-brand-muted-text mb-1">Email Us</h4>
                                    <p className="text-lg font-bold text-brand-text">info@happyjourney.net</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-brand-muted rounded-[2.5rem] border border-brand-border space-y-4 sm:col-span-2"
                            >
                                <div className="flex items-start justify-between">
                                    <div className="space-y-4">
                                        <div className="w-12 h-12 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                                            <MapPin className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-bold tracking-widest uppercase text-brand-muted-text mb-1">Corporate Office</h4>
                                            <p className="text-lg font-bold text-brand-text">Panigaon Chaiali PolyRoad, Nagaon, Assam- 782003</p>
                                        </div>
                                    </div>
                                    <div className="hidden sm:block">
                                        <Clock className="w-6 h-6 text-gold mb-2" />
                                        <span className="text-[10px] font-bold uppercase text-brand-muted-text">Open: 9 AM - 7 PM</span>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        <div className="p-10 bg-navy rounded-[3rem] text-white relative overflow-hidden">
                            <div className="relative z-10 space-y-6">
                                <div className="inline-block p-4 bg-white/10 rounded-2xl">
                                    <MessageSquare className="w-8 h-8 text-gold" />
                                </div>
                                <h3 className="text-3xl font-heading font-bold">Priority Support?</h3>
                                <p className="text-white/70 text-lg">Connect with us on WhatsApp for instant assistance and personalized quotes.</p>
                                <a
                                    href="https://wa.me/916026284181"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-3 bg-[#25D366] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
                                >
                                    <span>Chat on WhatsApp</span>
                                    <Send className="w-4 h-4" />
                                </a>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-[100px] -mr-32 -mt-32" />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-brand-bg dark:bg-black/20 p-10 md:p-16 rounded-[4rem] border border-brand-border shadow-mega"
                    >
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Full Name</label>
                                    <input type="text" placeholder="John Doe" className="w-full bg-brand-muted border-none rounded-2xl h-14 px-6 focus:ring-2 focus:ring-gold text-brand-text font-medium" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full bg-brand-muted border-none rounded-2xl h-14 px-6 focus:ring-2 focus:ring-gold text-brand-text font-medium" />
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Subject</label>
                                <select className="w-full bg-brand-muted border-none rounded-2xl h-14 px-6 focus:ring-2 focus:ring-gold text-brand-text font-medium appearance-none">
                                    <option>Booking Inquiry</option>
                                    <option>Custom Tour Package</option>
                                    <option>Group Booking</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Message</label>
                                <textarea rows={5} placeholder="Tell us about your dream journey..." className="w-full bg-brand-muted border-none rounded-[2rem] p-8 focus:ring-2 focus:ring-gold text-brand-text font-medium" />
                            </div>

                            <Button className="w-full h-16 rounded-full group">
                                Submit Inquiry
                                <Send className="ml-3 w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </Button>
                        </form>
                    </motion.div>

                </div>
            </section>

            <Footer />
        </main>
    )
}
