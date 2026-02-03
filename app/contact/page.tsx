'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: 'Booking Inquiry',
        message: ''
    })

    const supabase = createClient()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const { error } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        full_name: formData.fullName,
                        email: formData.email,
                        subject: formData.subject,
                        message: formData.message,
                        created_at: new Date().toISOString()
                    }
                ])

            if (error) throw error

            setIsSuccess(true)
            setFormData({ fullName: '', email: '', subject: 'Booking Inquiry', message: '' })

            // Reset success message after 5 seconds
            setTimeout(() => setIsSuccess(false), 5000)
        } catch (error) {
            console.error('Error submitting form:', error)
            alert('There was an error sending your message. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <main className="min-h-screen bg-white dark:bg-dark-navy">
            <Header />

            {/* Premium Hero Section with Background */}
            <section className="relative pt-48 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/80 via-dark-navy/40 to-white dark:to-dark-navy z-20" />
                    <motion.div
                        initial={{ scale: 1.1 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2070')`,
                        }}
                    />
                    <div className="topo-bg absolute inset-0 opacity-40 z-30 mix-blend-overlay" />
                </div>

                <div className="relative z-30 section-container">
                    <div className="max-w-4xl mx-auto text-center space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-4"
                        >
                            <span className="text-coral font-bold tracking-[0.4em] uppercase text-xs">Direct Connection</span>
                            <h1 className="text-white text-5xl md:text-7xl font-serif leading-tight">
                                Let's Build Your <br />
                                <span className="text-coral italic">Dream Escape</span>
                            </h1>
                            <p className="text-white/80 text-xl font-light max-w-2xl mx-auto leading-relaxed">
                                Our bespoke travel designers are ready to craft a journey as unique as you are.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="relative z-40 section-container -mt-10 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="p-8 bg-brand-muted/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-brand-border/50 dark:border-white/10 space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center text-coral">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold tracking-widest uppercase text-brand-muted-text mb-1">Global Concierge</h4>
                                    <p className="text-xl font-serif font-bold text-brand-text">+91 60 262 84 181</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="p-8 bg-brand-muted/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-brand-border/50 dark:border-white/10 space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center text-coral">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold tracking-widest uppercase text-brand-muted-text mb-1">Inquiries</h4>
                                    <p className="text-xl font-serif font-bold text-brand-text">info@happyjourney.net</p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="p-8 bg-brand-muted/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-brand-border/50 dark:border-white/10 space-y-4"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center text-coral">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-xs font-bold tracking-widest uppercase text-brand-muted-text mb-1">HQ Address</h4>
                                    <p className="text-lg font-serif font-bold text-brand-text leading-tight">Panigaon Chaiali PolyRoad, Nagaon, Assam- 782003</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* WhatsApp Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="bg-dark-navy p-10 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl"
                        >
                            <div className="relative z-10 space-y-6">
                                <div className="inline-block p-4 bg-white/5 rounded-2xl group-hover:bg-coral/20 transition-colors">
                                    <MessageSquare className="w-8 h-8 text-coral" />
                                </div>
                                <h3 className="text-3xl font-serif font-bold">Priority Jet Support?</h3>
                                <p className="text-white/60 text-lg font-light leading-relaxed">
                                    Need immediate assistance? Our priority desk is active 24/7 on WhatsApp.
                                </p>
                                <a
                                    href="https://wa.me/916026284181"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-3 bg-white text-dark-navy px-10 py-5 rounded-full font-bold hover:bg-coral hover:text-white transition-all transform hover:-translate-y-1"
                                >
                                    <span>Initiate Chat</span>
                                    <Send className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-coral/10 rounded-full blur-[80px] -mr-32 -mt-32" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/5 rounded-full blur-[60px] -ml-24 -mb-24" />
                        </motion.div>
                    </div>

                    {/* Contact Form Container */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-white dark:bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[4rem] border border-brand-border dark:border-white/10 shadow-mega relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.1 }}
                                        className="h-full flex flex-col items-center justify-center text-center space-y-6 py-20"
                                    >
                                        <div className="w-24 h-24 bg-coral/20 rounded-full flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-12 h-12 text-coral" />
                                        </div>
                                        <h2 className="text-4xl font-serif font-bold text-brand-text">Inquiry Received</h2>
                                        <p className="text-brand-muted-text text-lg max-w-sm">
                                            Thank you for choosing HappyJourney. One of our destination specialists will contact you shortly.
                                        </p>
                                        <Button
                                            variant="outline"
                                            onClick={() => setIsSuccess(false)}
                                            className="mt-8 rounded-full px-10"
                                        >
                                            Send Another Message
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        onSubmit={handleSubmit}
                                        className="space-y-8 relative z-10"
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Legal Name</label>
                                                <input
                                                    required
                                                    type="text"
                                                    placeholder="Johnathan Doe"
                                                    value={formData.fullName}
                                                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                                                    className="w-full bg-brand-muted dark:bg-white/5 border border-transparent focus:border-coral/50 rounded-2xl h-16 px-8 transition-all outline-none text-brand-text font-medium"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Official Email</label>
                                                <input
                                                    required
                                                    type="email"
                                                    placeholder="john@experience.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    className="w-full bg-brand-muted dark:bg-white/5 border border-transparent focus:border-coral/50 rounded-2xl h-16 px-8 transition-all outline-none text-brand-text font-medium"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Primary Interest</label>
                                            <div className="relative">
                                                <select
                                                    value={formData.subject}
                                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                    className="w-full bg-brand-muted dark:bg-white/5 border border-transparent focus:border-coral/50 rounded-2xl h-16 px-8 transition-all outline-none text-brand-text font-medium appearance-none"
                                                >
                                                    <option>Booking Inquiry</option>
                                                    <option>Custom Tour Package</option>
                                                    <option>Corporate Retreat</option>
                                                    <option>Honeymoon Special</option>
                                                    <option>Group Expedition</option>
                                                </select>
                                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                                                    <Clock className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted-text ml-4">Detailed Requirements</label>
                                            <textarea
                                                required
                                                rows={5}
                                                value={formData.message}
                                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                placeholder="Tell us about your preferred destinations, dates, and any special requests..."
                                                className="w-full bg-brand-muted dark:bg-white/5 border border-transparent focus:border-coral/50 rounded-[2.5rem] p-8 transition-all outline-none text-brand-text font-medium resize-none shadow-inner"
                                            />
                                        </div>

                                        <button
                                            disabled={isSubmitting}
                                            className="w-full h-20 bg-dark-navy text-white rounded-full font-bold flex items-center justify-center space-x-4 hover:bg-coral transition-all transform hover:-translate-y-1 shadow-xl disabled:opacity-70 disabled:hover:translate-y-0"
                                        >
                                            {isSubmitting ? (
                                                <Loader2 className="w-6 h-6 animate-spin" />
                                            ) : (
                                                <>
                                                    <span className="uppercase tracking-[0.2em] text-sm">Seal Your Journey</span>
                                                    <Send className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                                </>
                                            )}
                                        </button>

                                        <p className="text-center text-[10px] text-brand-muted-text font-medium uppercase tracking-widest py-2">
                                            By submitting, you agree to our premium service privacy standards.
                                        </p>
                                    </motion.form>
                                )}
                            </AnimatePresence>

                            {/* Form Decor */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-coral/5 rounded-full blur-[80px] pointer-events-none" />
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
