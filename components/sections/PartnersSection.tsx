'use client'

import { motion } from 'framer-motion'

const partners = [
    'Marriott',
    'Emirates',
    'Hilton',
    'Singapore Airlines',
    'Hyatt',
    'Qatar Airways'
]

export function PartnersSection() {
    return (
        <section className="py-12 bg-white dark:bg-dark-navy border-t border-brand-border/50">
            <div className="section-container">
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
                    {partners.map((partner, index) => (
                        <motion.div
                            key={partner}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-2xl font-serif font-bold tracking-tighter text-dark-navy dark:text-white"
                        >
                            {partner}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
