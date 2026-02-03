'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ChevronDown, Globe, Sunrise, Map, Palmtree, TowerControl, Search, X, Loader2, Calendar, Star, MapPin, Sparkles } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

const heroImages = [
    '/hero-bg.png',
    '/dubai.png',
    '/bali.png',
    '/thailand.png',
]

export function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0)
    const [content, setContent] = useState({
        title: 'WELCOME TO',
        subtitle: 'HAPPY',
        description: 'Discover the Wonders Next Door – Explore, Experience, Embrace the World'
    })
    const router = useRouter()
    const supabase = createClient()

    const [searchValue, setSearchValue] = useState('')
    const [isSearching, setIsSearching] = useState(false)
    const [aiResult, setAiResult] = useState<any>(null)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [destIndex, setDestIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const destinations = ['Dubai', 'Bali', 'Thailand', 'Maldives', 'Switzerland', 'Europe', 'India']

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 6000)

        // Fetch dynamic content
        const fetchContent = async () => {
            const { data } = await supabase
                .from('section_content')
                .select('*')
                .eq('section_id', 'hero')
                .single()

            if (data?.content) {
                setContent(data.content)
            }
        }
        fetchContent()

        return () => clearInterval(timer)
    }, [])

    // Typing Animation Effect
    useEffect(() => {
        const typingSpeed = isDeleting ? 100 : 200
        const nextChar = () => {
            const currentDest = destinations[destIndex]
            if (!isDeleting && charIndex < currentDest.length) {
                setDisplayText(prev => prev + currentDest[charIndex])
                setCharIndex(prev => prev + 1)
            } else if (isDeleting && charIndex > 0) {
                setDisplayText(prev => prev.slice(0, -1))
                setCharIndex(prev => prev - 1)
            } else if (!isDeleting && charIndex === currentDest.length) {
                setTimeout(() => setIsDeleting(true), 2000)
            } else if (isDeleting && charIndex === 0) {
                setIsDeleting(false)
                setDestIndex(prev => (prev + 1) % destinations.length)
            }
        }

        const timeout = setTimeout(nextChar, typingSpeed)
        return () => clearTimeout(timeout)
    }, [charIndex, isDeleting, destIndex])

    const handleSearch = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        if (!searchValue.trim()) return

        setIsSearching(true)
        try {
            const response = await fetch('/api/ai/search', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query: searchValue })
            })
            const data = await response.json()
            if (data.error) throw new Error(data.error)
            setAiResult(data)
        } catch (error) {
            console.error('Search failed:', error)
        } finally {
            setIsSearching(false)
        }
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 bg-dark-navy z-10">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                            style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Persistent Indian Sacred Geometry Overlay Effect */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden"
                >
                    <svg width="100%" height="100%" viewBox="0 0 100 100" className="opacity-30">
                        <defs>
                            <pattern id="geometry-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="currentColor" strokeWidth="0.1" className="text-coral" />
                                <circle cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="0.05" className="text-white" />
                                <path d="M0 0 L20 20 M20 0 L0 20" stroke="currentColor" strokeWidth="0.02" className="text-white/20" />
                            </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#geometry-pattern)" />

                        {/* Rotating Central Mandala */}
                        <motion.g
                            transform="translate(50,50)"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                        >
                            {[...Array(12)].map((_, i) => (
                                <path
                                    key={i}
                                    d="M0 0 Q5 -15 0 -30 Q-5 -15 0 0"
                                    fill="none"
                                    stroke="rgba(255,127,80,0.5)"
                                    strokeWidth="0.5"
                                    transform={`rotate(${i * 30})`}
                                />
                            ))}
                            <circle r="2" fill="coral" className="animate-pulse" />
                        </motion.g>
                    </svg>
                </motion.div>

                <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/70 via-dark-navy/40 to-dark-navy/70" />
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="relative z-10 section-container w-full text-center">
                <div className="max-w-5xl mx-auto space-y-10">
                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="space-y-6"
                    >
                        <h1 className="text-white leading-[1.1] tracking-tight text-4xl md:text-6xl lg:text-7xl font-serif">
                            {content.title}
                            <br />
                            <span className="text-coral">{content.subtitle}</span>JOURNEY
                        </h1>

                        <div className="relative max-w-2xl mx-auto mt-8">
                            <form onSubmit={handleSearch} className="relative group">
                                <input
                                    type="text"
                                    value={searchValue}
                                    onChange={(e) => setSearchValue(e.target.value)}
                                    placeholder={displayText ? "" : "Search destination..."}
                                    className="w-full bg-white/10 border border-white/20 focus:border-coral/50 py-6 px-10 rounded-full text-xl md:text-2xl text-white text-center focus:outline-none transition-all backdrop-blur-md shadow-2xl"
                                />

                                {!searchValue && (
                                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                        <div className="flex items-center space-x-3">
                                            <Search className="w-5 h-5 md:w-6 md:h-6 text-coral" />
                                            <span className="text-lg md:text-xl text-white/40 font-light">Search </span>
                                            <span className="text-lg md:text-xl text-coral font-medium">{displayText}</span>
                                            <span className="w-0.5 h-6 bg-coral animate-pulse ml-0.5" />
                                        </div>
                                    </div>
                                )}

                                {isSearching && (
                                    <div className="absolute right-6 top-1/2 -translate-y-1/2">
                                        <Loader2 className="w-6 h-6 text-coral animate-spin" />
                                    </div>
                                )}
                            </form>
                        </div>

                        <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light pt-4">
                            {content.description}
                        </p>
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
                    >
                        <Button
                            size="lg"
                            className="gradient-green text-white rounded-full px-8 py-6 text-base font-bold hover:shadow-premium transition-all"
                            onClick={() => router.push('/trips')}
                        >
                            View Packages
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="gradient-yellow border-0 text-dark-navy rounded-full px-8 py-6 text-base font-bold hover:shadow-premium transition-all"
                            onClick={() => router.push('/contact')}
                        >
                            Planning a Trip?
                        </Button>
                    </motion.div>

                    {/* Popular Quick Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="flex flex-wrap items-center justify-center gap-4 pt-8"
                    >
                        <span className="text-xs font-bold tracking-wider uppercase text-white/60">Popular:</span>
                        {[
                            { name: 'Dubai', icon: Globe },
                            { name: 'Bali', icon: Sunrise },
                            { name: 'Thailand', icon: Map },
                            { name: 'Maldives', icon: Palmtree },
                            { name: 'Singapore', icon: TowerControl }
                        ].map((item) => {
                            const Icon = item.icon
                            return (
                                <button
                                    key={item.name}
                                    onClick={() => router.push(`/trips/${item.name.toLowerCase()}`)}
                                    className="group flex items-center space-x-2 px-5 py-2.5 rounded-full border border-white/30 text-white/90 text-xs font-semibold hover:bg-coral hover:text-white hover:border-coral transition-all duration-300 backdrop-blur-md"
                                >
                                    <Icon className="w-3.5 h-3.5 text-coral group-hover:text-white transition-colors" />
                                    <span>{item.name}</span>
                                </button>
                            )
                        })}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-3 hidden md:flex"
            >
                <p className="text-xs font-semibold tracking-wider uppercase text-white/70">Scroll Down</p>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-5 h-5 text-coral" />
                </motion.div>
            </motion.div>

            {/* AI Search Result Overlay */}
            <AnimatePresence>
                {aiResult && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[150] bg-dark-navy/95 backdrop-blur-2xl overflow-y-auto"
                    >
                        <div className="min-h-screen p-6 md:p-12">
                            <div className="max-w-5xl mx-auto bg-dark-navy border border-white/10 rounded-[48px] overflow-hidden shadow-mega">
                                {/* Header with Image Background Placeholder */}
                                <div className="relative h-[300px] md:h-[450px] bg-gradient-to-br from-coral/20 to-purple-900/20">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center mix-blend-overlay opacity-60"
                                        style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?${aiResult.suggestedImageSearchTerm || aiResult.locationName}')` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-navy via-transparent to-transparent" />
                                    <button
                                        onClick={() => setAiResult(null)}
                                        className="absolute top-8 right-8 p-4 bg-white/10 rounded-full hover:bg-coral text-white transition-all z-20 backdrop-blur-md"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                    <div className="absolute bottom-12 left-12 space-y-4">
                                        <div className="flex items-center space-x-2 px-4 py-2 bg-coral/20 border border-coral/30 rounded-full w-fit">
                                            <Sparkles className="w-4 h-4 text-coral" />
                                            <span className="text-xs font-bold text-coral uppercase tracking-widest">AI Crafted Preview</span>
                                        </div>
                                        <h2 className="text-5xl md:text-7xl font-serif font-bold text-white">{aiResult.locationName}</h2>
                                        <p className="text-xl md:text-2xl text-white/80 font-light italic max-w-2xl">{aiResult.summary}</p>
                                    </div>
                                </div>

                                <div className="p-8 md:p-16 grid grid-cols-1 lg:grid-cols-3 gap-16">
                                    {/* Left Column: Details & Itinerary */}
                                    <div className="lg:col-span-2 space-y-12">
                                        <section className="space-y-6">
                                            <div className="flex items-center space-x-3 text-coral">
                                                <Calendar className="w-6 h-6" />
                                                <h3 className="text-2xl font-bold uppercase tracking-wider">Plan Your Trip</h3>
                                            </div>
                                            <p className="text-gray-400 font-medium">Best time to visit: <span className="text-white">{aiResult.bestTimeToVisit}</span></p>

                                            <div className="space-y-8 mt-10">
                                                {aiResult.itinerary?.map((item: any, idx: number) => (
                                                    <div key={idx} className="relative pl-10 border-l-2 border-coral/30">
                                                        <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-coral flex items-center justify-center">
                                                            <span className="text-[10px] font-bold text-white">{item.day}</span>
                                                        </div>
                                                        <div className="space-y-2">
                                                            <h4 className="text-xl font-bold text-white">Day {item.day}</h4>
                                                            <p className="text-gray-400 leading-relaxed">{item.activity}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </section>
                                    </div>

                                    {/* Right Column: Highlights & Quick Info */}
                                    <div className="space-y-12">
                                        <section className="p-8 bg-white/5 rounded-[32px] border border-white/10 space-y-6">
                                            <div className="flex items-center space-x-3 text-coral">
                                                <Star className="w-5 h-5 fill-coral" />
                                                <h3 className="text-xl font-bold uppercase tracking-wider">Top Highlights</h3>
                                            </div>
                                            <ul className="space-y-4">
                                                {aiResult.highlights?.map((point: string, idx: number) => (
                                                    <li key={idx} className="flex items-start space-x-3">
                                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-coral shrink-0" />
                                                        <span className="text-gray-300 text-sm leading-relaxed">{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </section>

                                        <div className="flex flex-col gap-4">
                                            <Button
                                                className="w-full py-8 text-lg gradient-green rounded-[24px]"
                                                onClick={() => router.push('/contact')}
                                            >
                                                Book This Trip
                                            </Button>
                                            <Button
                                                variant="outline"
                                                className="w-full py-8 text-lg border-white/10 text-white rounded-[24px] hover:bg-white/10"
                                                onClick={() => setAiResult(null)}
                                            >
                                                Keep Exploring
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}
