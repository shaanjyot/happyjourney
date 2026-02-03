'use client'

import { motion } from 'framer-motion'
import { PhoneCall, Calendar } from 'lucide-react'

export function CTASection() {
    return (
        <section className="section-padding bg-white dark:bg-dark-navy">
            <div className="section-container">
                <div className="relative rounded-[3rem] overflow-hidden bg-dark-navy dark:bg-dark-navy-light px-8 py-16 text-center space-y-10">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-coral/10 rounded-full blur-[100px] -mr-40 -mt-40" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-green-primary/10 rounded-full blur-[80px] -ml-20 -mb-20" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6 relative z-10"
                    >
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-white leading-tight">
                            Planning a <span className="text-coral">trip?</span> <br />
                            Let's talk to our experts
                        </h2>
                        <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            Our team of travel experts is ready to help you craft the perfect itinerary tailored to your dreams.
                        </p>
                    </motion.div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                        <button className="w-full sm:w-auto gradient-green text-white px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center space-x-3 hover:shadow-premium transition-all">
                            <Calendar className="w-5 h-5" />
                            <span>Book Consultation</span>
                        </button>
                        <a href="tel:+916026284181" className="w-full sm:w-auto bg-white text-dark-navy px-10 py-5 rounded-full font-bold text-sm tracking-widest uppercase flex items-center justify-center space-x-3 hover:bg-coral hover:text-white transition-all">
                            <PhoneCall className="w-5 h-5" />
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
