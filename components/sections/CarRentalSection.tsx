'use client'

import { motion, Variants } from 'framer-motion'
import { Car, Fuel, ShieldCheck, Clock, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

const cars = [
    {
        id: 1,
        name: 'Range Rover Defender',
        type: 'Luxury SUV',
        price: '99',
        image: '/images/destinations/swiss-alps.jpg', // Placeholder
        features: ['Auto', 'Diesel', '4x4'],
        rating: 4.9
    },
    {
        id: 2,
        name: 'Toyota Land Cruiser',
        type: 'Safari Edition',
        price: '75',
        image: '/images/hero-bg.jpg', // Placeholder
        features: ['Manual', 'Petrol', 'Off-road'],
        rating: 4.8
    },
    {
        id: 3,
        name: 'Mercedes V-Class',
        type: 'Premium Van',
        price: '120',
        image: '/images/destinations/kyoto.jpg', // Placeholder
        features: ['Auto', 'Electric', '7 Seater'],
        rating: 5.0
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
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
}

export function CarRentalSection() {
    return (
        <section className="section-padding bg-brand-muted relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 topo-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 section-container">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-center md:items-end justify-between mb-24 space-y-8 md:space-y-0 text-center md:text-left">
                    <div className="max-w-2xl space-y-6">
                        <div className="flex items-center justify-center md:justify-start space-x-4 mb-4">
                            <div className="h-[2px] w-12 bg-gold" />
                            <span className="text-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm">
                                Luxury Mobility
                            </span>
                        </div>
                        <h2 className="text-brand-text">
                            Premium <span className="text-gold italic">Car Rentals</span>
                        </h2>
                        <p className="text-lg md:text-xl text-brand-muted-text font-light">
                            Explore your destination in comfort with our exclusive fleet of high-performance vehicles.
                        </p>
                    </div>
                    <Button variant="outline" className="h-16 px-12 group">
                        View Full Fleet
                        <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </Button>
                </div>

                {/* Cars Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14"
                >
                    {cars.map((car) => (
                        <motion.div
                            key={car.id}
                            variants={itemVariants}
                            className="group bg-brand-bg rounded-[3rem] border border-brand-border overflow-hidden hover:shadow-mega hover:border-gold transition-all duration-700 hover:-translate-y-4"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-[16/10] overflow-hidden">
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute top-6 left-6 flex items-center space-x-2 bg-navy/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                                    <Star className="w-3 h-3 text-gold fill-gold" />
                                    <span className="text-white text-[10px] font-bold">{car.rating}</span>
                                </div>
                                <div className="absolute bottom-6 right-6 px-4 py-2 bg-gold rounded-full text-navy font-bold text-xs">
                                    From ${car.price}/day
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-10 space-y-8">
                                <div className="space-y-2">
                                    <p className="text-gold text-xs font-bold tracking-[0.2em] uppercase">{car.type}</p>
                                    <h3 className="text-2xl font-heading font-bold text-brand-text group-hover:text-gold transition-colors">{car.name}</h3>
                                </div>

                                <div className="flex items-center justify-between border-y border-brand-border py-6">
                                    {car.features.map((feature, i) => (
                                        <div key={i} className="flex flex-col items-center space-y-2">
                                            <div className="text-brand-muted-text">
                                                {i === 0 && <Clock className="w-4 h-4" />}
                                                {i === 1 && <Fuel className="w-4 h-4" />}
                                                {i === 2 && <ShieldCheck className="w-4 h-4" />}
                                            </div>
                                            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted-text">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button className="w-full h-14 group">
                                    Book This Vehicle
                                    <Car className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
