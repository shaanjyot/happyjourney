'use client'

import { motion } from 'framer-motion'
import { Plane, Hotel, Globe, ShieldCheck } from 'lucide-react'

const services = [
    {
        title: 'Flight Booking',
        description: 'Worldwide flight tickets at the most competitive rates with premium airlines.',
        icon: Plane,
        color: 'text-blue-500'
    },
    {
        title: 'Luxury Stays',
        icon: Hotel,
        description: 'Handpicked hotels and resorts ensuring comfort and luxury throughout your stay.',
        color: 'text-orange-500'
    },
    {
        title: 'Visa Assistance',
        icon: Globe,
        description: 'Comprehensive support for visa processing to ensure a hassle-free journey.',
        color: 'text-green-500'
    },
    {
        title: 'Travel Insurance',
        icon: ShieldCheck,
        description: 'Reliable travel insurance coverage for peace of mind in every exploration.',
        color: 'text-purple-500'
    }
]

export function ServicesSection() {
    return (
        <section className="section-padding bg-brand-muted dark:bg-dark-navy/80 relative">
            {/* Background Circular Patterns */}
            <div className="absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-dark-navy/10 dark:border-white/10 pointer-events-none" />

            <div className="relative z-10 section-container text-center">
                <div className="max-w-3xl mx-auto mb-10 space-y-4">
                    <h3 className="text-coral font-bold tracking-widest uppercase text-sm">Services we offer</h3>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-dark-navy dark:text-white">
                        Our Exclusive Travel Services
                    </h2>
                </div>

                <div className="flex flex-nowrap overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0 md:mx-0 md:px-0 md:gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="min-w-[280px] md:min-w-0 snap-center bg-white dark:bg-dark-navy p-8 rounded-[32px] card-shadow hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="mb-6 inline-flex p-4 rounded-2xl bg-brand-muted dark:bg-dark-navy-light group hover:bg-coral transition-colors duration-300">
                                    <Icon className={`w-10 h-10 ${service.color} group-hover:text-white transition-colors`} />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-dark-navy dark:text-white">{service.title}</h3>
                                <p className="text-brand-muted-text text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
