'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { X, Maximize2, MapPin } from 'lucide-react'
import Image from 'next/image'

const galleryImages = [
    { id: 1, src: '/images/hero-bg.jpg', title: 'Savannah Sunset', location: 'Kenya, Africa' },
    { id: 2, src: '/images/destinations/bali.jpg', title: 'Zen Temples', location: 'Ubud, Bali' },
    { id: 3, src: '/images/destinations/kyoto.jpg', title: 'Bamboo Groves', location: 'Kyoto, Japan' },
    { id: 4, src: '/images/destinations/swiss-alps.jpg', title: 'Snowy Peaks', location: 'Zermatt, Switzerland' },
    { id: 5, src: '/images/destinations/iceland.jpg', title: 'Glacial Blue', location: 'Reykjavik, Iceland' },
    { id: 6, src: '/images/hero-bg.jpg', title: 'Mountain Bliss', location: 'Shimla, India' },
    { id: 7, src: '/images/destinations/bali.jpg', title: 'Ocean Waves', location: 'Nusa Penida, Indonesia' },
    { id: 8, src: '/images/destinations/kyoto.jpg', title: 'Autumn Colors', location: 'Nara, Japan' },
    { id: 9, src: '/images/destinations/swiss-alps.jpg', title: 'Lakeside Serenity', location: 'Lucerne, Switzerland' },
]

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

    return (
        <main className="min-h-screen bg-brand-bg dark:bg-navy text-brand-text">
            <Header />

            <section className="relative pt-48 pb-20">
                <div className="section-container text-center space-y-6">
                    <h1 className="text-brand-text">A Window to <span className="text-gold italic">Wonder</span></h1>
                    <p className="text-xl text-brand-muted-text font-light max-w-2xl mx-auto">
                        Capturing the raw beauty and unforgettable moments from across our global destinations.
                    </p>
                </div>
            </section>

            {/* Masonry Grid Simulation */}
            <section className="section-container pb-32">
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">
                    {galleryImages.map((image, idx) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            onClick={() => setSelectedImage(image)}
                            className="relative group cursor-pointer break-inside-avoid rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                width={800}
                                height={1000}
                                className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                                    <div className="flex items-center space-x-2 text-gold">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-[10px] font-bold tracking-widest uppercase">{image.location}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white">{image.title}</h3>
                                </div>
                                <div className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                                    <Maximize2 className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button className="absolute top-8 right-8 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors">
                            <X className="w-6 h-6" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-6xl w-full max-h-[80vh] aspect-[16/10]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                            />
                            <div className="absolute -bottom-20 left-0 right-0 text-center space-y-2">
                                <h2 className="text-2xl font-heading font-bold text-white">{selectedImage.title}</h2>
                                <div className="flex items-center justify-center space-x-2 text-gold">
                                    <MapPin className="w-4 h-4" />
                                    <span className="text-sm font-bold tracking-widest uppercase">{selectedImage.location}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <Footer />
        </main>
    )
}
