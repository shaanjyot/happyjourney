'use client'

import { motion } from 'framer-motion'
import { Heart, Globe, Users, ShieldCheck } from 'lucide-react'

const features = [
    {
        title: 'Value for Money',
        description: 'We provide affordable trips with maximum exploration possibilities.',
        icon: ShieldCheck,
        color: 'text-coral'
    },
    {
        title: 'FIT/GIT Support',
        icon: Users,
        description: 'Tours for everyone, from individuals to large group families.',
        color: 'text-green-500'
    },
    {
        title: 'Local Expertise',
        icon: Globe,
        description: 'In-depth local knowledge ensuring an authentic experience.',
        color: 'text-blue-500'
    },
    {
        title: 'Guest Care',
        icon: Heart,
        description: 'Personalized attention to every traveler\'s comfort and safety.',
        color: 'text-red-500'
    }
]

export function WhyChooseUs() {
    return (
        <section className="section-padding bg-brand-muted dark:bg-dark-navy/90 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-coral/5 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 section-container text-center">
                <div className="max-w-3xl mx-auto mb-12 space-y-4">
                    <h3 className="text-coral font-bold tracking-widest uppercase text-sm">Why choose us</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-navy dark:text-white leading-tight">
                        Experience the <br /> HappyJourney Difference
                    </h2>
                </div>

                <div className="flex flex-nowrap overflow-x-auto pb-8 -mx-4 px-4 gap-8 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0 md:mx-0 md:px-0 md:gap-12">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="min-w-[280px] md:min-w-0 snap-center space-y-6 bg-white/50 dark:bg-dark-navy/50 p-8 rounded-[32px] md:bg-transparent md:dark:bg-transparent md:p-0"
                            >
                                <div className="inline-flex p-5 rounded-3xl bg-white dark:bg-dark-navy shadow-premium mb-4">
                                    <Icon className={`w-8 h-8 ${feature.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-dark-navy dark:text-white leading-tight">{feature.title}</h3>
                                <p className="text-brand-muted-text text-sm leading-relaxed max-w-[240px] mx-auto">
                                    {feature.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
