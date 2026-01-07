'use client'

import { motion, Variants } from 'framer-motion'
import { Shield, Award, Users, HeartHandshake } from 'lucide-react'

const features = [
    {
        id: 1,
        name: 'Value For Money',
        description: 'We provide most affordable trip with maximum exploring so that you can make maximum memories in this life.',
        icon: Shield,
        color: '#f4b400'
    },
    {
        id: 2,
        name: 'FIT/GIT',
        description: 'We arrange both individual and group tours for all categories of people, from pilgrims to hearts.',
        icon: Users,
        color: '#8bc34a'
    },
    {
        id: 3,
        name: 'Price Match',
        description: 'Best price guarantee. If you find a better price anywhere, we will match that price.',
        icon: Award,
        color: '#3498db'
    },
    {
        id: 4,
        name: 'Seamless Support',
        description: 'We are always ready to solve your travel queries in minimum time. Feel free to contact us through our hotline.',
        icon: HeartHandshake,
        color: '#9b59b6'
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
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

export function WhyChooseUs() {
    return (
        <section className="section-padding bg-brand-bg relative overflow-hidden">
            <div className="absolute inset-0 topo-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 section-container">

                {/* Section Header */}
                <div className="max-w-4xl mb-24 space-y-8 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center md:justify-start space-x-4 mb-4"
                    >
                        <div className="h-[2px] w-12 bg-gold" />
                        <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                            The Gold Standard
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-brand-text"
                    >
                        Experience the <span className="text-gold italic">HappyJourney</span> Difference
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-brand-muted-text font-light max-w-2xl"
                    >
                        We go beyond standard itineraries to bring you travel that is truly transformative.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-14"
                >
                    {features.map((feature) => {
                        const Icon = feature.icon
                        return (
                            <motion.div
                                key={feature.id}
                                variants={itemVariants}
                                className="group relative"
                            >
                                <div className="bg-brand-muted relative z-10 p-12 md:p-14 rounded-[3rem] border border-brand-border h-full flex flex-col items-start transition-all duration-700 hover:shadow-premium group-hover:-translate-y-4 hover:border-gold/50">
                                    <div className="mb-10 w-20 h-20 rounded-[1.5rem] bg-brand-bg flex items-center justify-center transition-all duration-700 group-hover:scale-110 group-hover:rotate-6 shadow-sm">
                                        <Icon className="w-10 h-10 text-gold" style={{ color: feature.color }} />
                                    </div>

                                    <h3 className="text-2xl font-heading font-bold text-brand-text mb-6 group-hover:text-gold transition-colors duration-500">
                                        {feature.name}
                                    </h3>

                                    <p className="text-base text-brand-muted-text leading-relaxed font-medium">
                                        {feature.description}
                                    </p>

                                    <div className="mt-auto pt-10 w-full">
                                        <div className="h-[2px] w-12 bg-gold group-hover:w-full transition-all duration-1000 origin-left" />
                                    </div>
                                </div>

                                {/* Background Accent Shade */}
                                <div
                                    className="absolute inset-0 rounded-[3rem] opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-1000 pointer-events-none"
                                    style={{ backgroundColor: feature.color }}
                                />
                            </motion.div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
