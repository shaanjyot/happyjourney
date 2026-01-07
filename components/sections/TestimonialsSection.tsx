'use client'

import { motion, Variants } from 'framer-motion'
import { Star, Quote, CheckCircle2 } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
    {
        id: 1,
        name: 'Sarah Mitchell',
        location: 'New York, USA',
        rating: 5,
        text: 'Happy Journey transformed our family vacation into an unforgettable adventure. Every detail was perfectly planned, allowing us to truly immerse ourselves in the culture without any stress.',
        image: '/images/destinations/santorini.jpg',
    },
    {
        id: 2,
        name: 'David Chen',
        location: 'Singapore',
        rating: 5,
        text: 'The Swiss Alps trek was absolutely breathtaking. The guides were incredibly knowledgeable and safety was paramount. I have never seen such pristine beauty in my life!',
        image: '/images/destinations/swiss-alps.jpg',
    },
    {
        id: 3,
        name: 'Emma Thompson',
        location: 'London, UK',
        rating: 5,
        text: "From booking to return, everything was seamless. The team went above and beyond for our comfort, making us feel like VIPs at every destination. Can't wait for our next trip!",
        image: '/images/destinations/bali.jpg',
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 },
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

export function TestimonialsSection() {
    return (
        <section className="section-padding bg-brand-bg relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gold/5 -skew-x-12 translate-x-20 pointer-events-none" />

            <div className="relative z-10 section-container">
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 space-y-10 md:space-y-0 text-center md:text-left">
                    <div className="max-w-2xl space-y-6">
                        <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                            <div className="h-[2px] w-12 bg-gold" />
                            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                                Traveler Reviews
                            </span>
                        </div>
                        <h2 className="text-brand-text leading-tight">
                            Trust Matters Most in <br className="hidden md:block" /> <span className="text-gold italic">Every Journey</span>
                        </h2>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-4 bg-brand-muted p-8 rounded-[2rem] border border-brand-border">
                        <div className="flex items-center space-x-2">
                            {[1, 2, 3, 4, 5].map((s) => (
                                <Star key={s} className="w-6 h-6 fill-gold text-gold" />
                            ))}
                        </div>
                        <div className="space-y-1 text-center md:text-right">
                            <p className="text-lg md:text-xl font-heading font-bold text-brand-text leading-none">Rated 5.0 / 5.0</p>
                            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-brand-muted-text">By 1,250+ Global Travelers</p>
                        </div>
                    </div>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14"
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            variants={itemVariants}
                            className="h-full"
                        >
                            <div className="group relative bg-brand-muted p-10 md:p-14 rounded-[3rem] border border-brand-border h-full flex flex-col justify-between transition-all duration-700 hover:shadow-mega hover:border-gold hover:-translate-y-4">
                                <div className="space-y-10">
                                    <div className="flex items-center justify-between">
                                        <div className="w-16 h-16 rounded-2xl bg-brand-bg flex items-center justify-center shadow-sm group-hover:bg-gold transition-colors duration-700">
                                            <Quote className="w-8 h-8 text-gold group-hover:text-navy transition-colors duration-700" />
                                        </div>
                                        <div className="flex space-x-1">
                                            {[1, 2, 3, 4, 5].map((s) => (
                                                <Star key={s} className="w-4 h-4 fill-gold text-gold" />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-brand-text text-lg md:text-xl leading-relaxed italic font-light">
                                        "{testimonial.text}"
                                    </p>
                                </div>

                                <div className="mt-16 flex items-center space-x-5 pt-10 border-t border-brand-border">
                                    <div className="relative h-16 w-16 rounded-2xl overflow-hidden shadow-premium ring-4 ring-brand-bg">
                                        <Image
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <div className="space-y-1">
                                        <div className="flex items-center space-x-2">
                                            <h4 className="font-heading font-bold text-brand-text text-lg">{testimonial.name}</h4>
                                            <CheckCircle2 className="w-4 h-4 text-green-500 fill-green-500/10" />
                                        </div>
                                        <p className="text-xs font-bold tracking-[0.1em] uppercase text-brand-muted-text">{testimonial.location}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Dynamic Partner Bar */}
                <div className="mt-32 pt-16 border-t border-brand-border flex flex-wrap justify-center md:justify-between items-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
                    <span className="text-2xl font-heading font-bold tracking-tighter">TRAVEL-PRO</span>
                    <span className="text-2xl font-heading font-bold tracking-tighter">GLOBAL-INN</span>
                    <span className="text-2xl font-heading font-bold tracking-tighter">AIR-LUXURY</span>
                    <span className="text-2xl font-heading font-bold tracking-tighter">SKY-HIGH</span>
                    <span className="text-2xl font-heading font-bold tracking-tighter">WANDERLUST</span>
                </div>
            </div>
        </section>
    )
}
