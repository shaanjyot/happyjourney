'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share2, Play } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: 'Priya & Raj',
        location: 'Mumbai',
        image: '/dubai.png',
        video: true,
        likes: 1234,
        comments: 89,
        caption: 'Our Dubai honeymoon was absolutely magical! Thank you HappyJourney for making it perfect ✨'
    },
    {
        id: 2,
        name: 'Amit Kumar',
        location: 'Delhi',
        image: '/bali.png',
        video: true,
        likes: 2156,
        comments: 143,
        caption: 'Bali was a dream come true! The rice terraces, temples, and beaches were breathtaking 🌴'
    },
    {
        id: 3,
        name: 'Sneha & Family',
        location: 'Bangalore',
        image: '/thailand.png',
        video: true,
        likes: 1876,
        comments: 112,
        caption: 'Thailand trip with kids was so well organized. Every detail was taken care of! 🙏'
    },
    {
        id: 4,
        name: 'Rohit Sharma',
        location: 'Pune',
        image: '/maldives.png',
        video: true,
        likes: 3421,
        comments: 234,
        caption: 'Maldives overwater villa experience was beyond expectations! Pure luxury 🏝️'
    },
]

export function TestimonialsSection() {
    const [likedPosts, setLikedPosts] = useState<number[]>([])

    const toggleLike = (id: number) => {
        setLikedPosts(prev =>
            prev.includes(id) ? prev.filter(postId => postId !== id) : [...prev, id]
        )
    }

    return (
        <section className="section-padding bg-brand-muted dark:bg-dark-navy/50">
            <div className="section-container">
                {/* Section Header */}
                <div className="text-center mb-8 space-y-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-2"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-brand-text">
                            HappyJourney's Postcard
                        </h2>
                        <p className="text-xl text-coral font-semibold">
                            A message from the heart ❤️
                        </p>
                        <p className="text-brand-muted-text text-lg max-w-2xl mx-auto">
                            See what our travelers are saying about their unforgettable experiences
                        </p>
                    </motion.div>
                </div>

                {/* Testimonial Cards Grid - Scrollable on Mobile */}
                <div className="flex flex-nowrap overflow-x-auto pb-8 -mx-4 px-4 gap-6 snap-x snap-mandatory no-scrollbar md:grid md:grid-cols-2 lg:grid-cols-4 md:pb-0 md:mx-0 md:px-0">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="min-w-[280px] md:min-w-0 snap-center card-shadow rounded-[32px] overflow-hidden bg-white dark:bg-dark-navy group relative"
                        >
                            {/* Video/Image */}
                            <div className="relative aspect-[9/16] overflow-hidden">
                                <Image
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                                {/* Play Button Overlay */}
                                {testimonial.video && (
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center group-hover:bg-coral group-hover:scale-110 transition-all duration-300">
                                            <Play className="w-8 h-8 text-white fill-white ml-1" />
                                        </div>
                                    </div>
                                )}

                                {/* User Info */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
                                    <div className="flex items-center space-x-3">
                                        <div className="w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden relative">
                                            <Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-base leading-none">{testimonial.name}</p>
                                            <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest mt-1">{testimonial.location}</p>
                                        </div>
                                    </div>

                                    <p className="text-white/90 text-sm line-clamp-2 italic leading-relaxed">
                                        "{testimonial.caption}"
                                    </p>

                                    {/* Engagement Buttons */}
                                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                                        <button
                                            onClick={() => toggleLike(testimonial.id)}
                                            className="flex items-center space-x-2 text-white hover:text-coral transition-colors"
                                        >
                                            <Heart
                                                className={`w-5 h-5 ${likedPosts.includes(testimonial.id) ? 'fill-coral text-coral border-coral' : ''}`}
                                            />
                                            <span className="text-xs font-bold">
                                                {likedPosts.includes(testimonial.id) ? (testimonial.likes + 1).toLocaleString() : testimonial.likes.toLocaleString()}
                                            </span>
                                        </button>

                                        <button className="flex items-center space-x-2 text-white hover:text-coral transition-colors">
                                            <MessageCircle className="w-5 h-5" />
                                            <span className="text-xs font-bold">{testimonial.comments}</span>
                                        </button>

                                        <button className="text-white hover:text-coral transition-colors">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-12">
                    <button className="gradient-yellow text-dark-navy px-8 py-4 rounded-full font-bold text-sm hover:shadow-premium transition-all">
                        View All Stories
                    </button>
                </div>
            </div>
        </section>
    )
}
