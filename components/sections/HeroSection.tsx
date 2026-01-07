'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, ChevronDown, Search, Calendar as CalendarIcon, MapPin, Compass, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { DayPicker, DateRange } from 'react-day-picker'
import { format } from 'date-fns'
import 'react-day-picker/dist/style.css'

const heroImages = [
    '/images/hero-bg.jpg',
    '/images/destinations/swiss-alps.jpg',
    '/images/destinations/iceland.jpg'
]

export function HeroSection() {
    const [currentImage, setCurrentImage] = useState(0)
    const [isCalendarOpen, setIsCalendarOpen] = useState(false)
    const [dateRange, setDateRange] = useState<DateRange | undefined>()
    const [searchDestination, setSearchDestination] = useState('')
    const router = useRouter()

    // Image Slider Logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    return (
        <section className="relative min-h-[100vh] flex items-center pt-24 pb-12 bg-navy z-10">
            {/* Background Slider */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                        className="absolute inset-0"
                    >
                        <div
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] scale-110"
                            style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
                        />
                    </motion.div>
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/50 to-transparent" />
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="relative z-10 section-container w-full">
                <div className="max-w-5xl space-y-12">
                    {/* Tagline */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center space-x-4"
                    >
                        <div className="h-[2px] w-12 bg-gold" />
                        <span className="text-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm">Explore Beyond Horizons</span>
                    </motion.div>

                    {/* Headlines */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="space-y-6"
                    >
                        <h1 className="text-white leading-[1.1] tracking-tight !text-4xl md:!text-6xl lg:!text-7xl">
                            Discover <span className="text-gold italic">The World's</span>
                            <br />
                            Wild Majesty
                        </h1>
                        <p className="text-white/80 text-base md:text-xl leading-relaxed max-w-xl font-light">
                            Experience the untamed beauty of extraordinary places, where every sunset tells a story of wonder and discovery.
                        </p>
                    </motion.div>

                    {/* Destination Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative z-30 w-full max-w-4xl"
                    >
                        <div className="glass p-2 md:p-3 rounded-[2rem] md:rounded-full shadow-mega flex flex-col md:flex-row items-center gap-2">
                            {/* Destination */}
                            <div className="flex-1 flex items-center px-6 py-3 space-x-4 w-full border-b md:border-b-0 md:border-r border-white/20">
                                <MapPin className="text-gold w-5 h-5 flex-shrink-0" />
                                <div className="flex-1">
                                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-widest">Where to?</span>
                                    <input
                                        type="text"
                                        placeholder="Search Destinations"
                                        value={searchDestination}
                                        onChange={(e) => setSearchDestination(e.target.value)}
                                        className="bg-transparent border-none focus:outline-none text-white placeholder-white/40 w-full font-bold text-sm"
                                    />
                                </div>
                            </div>

                            {/* Date Selector with Calendar Popup */}
                            <div
                                className="flex-1 flex items-center px-6 py-3 space-x-4 w-full border-b md:border-b-0 md:border-r border-white/20 cursor-pointer group/date relative"
                                onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                            >
                                <CalendarIcon className="text-gold w-5 h-5 flex-shrink-0" />
                                <div className="flex-1">
                                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-widest">Travel Dates</span>
                                    <span className="block text-white font-bold text-sm whitespace-nowrap overflow-hidden">
                                        {dateRange?.from ? (
                                            dateRange.to ? (
                                                `${format(dateRange.from, 'LLL dd')} - ${format(dateRange.to, 'LLL dd')}`
                                            ) : (
                                                format(dateRange.from, 'LLL dd')
                                            )
                                        ) : (
                                            <span className="text-white/40">Select Range</span>
                                        )}
                                    </span>
                                </div>

                                {/* Date Picker Multi-Selector Popup */}
                                <AnimatePresence>
                                    {isCalendarOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            className="calendar-popup absolute top-full left-1/2 -translate-x-1/2 mt-4 p-8 bg-white dark:bg-navy rounded-[2.5rem] shadow-mega z-[9999] border border-brand-border md:min-w-[850px]"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <div className="flex items-center justify-between mb-4">
                                                <h4 className="text-xs font-bold tracking-widest uppercase text-navy dark:text-white">Choose Dates</h4>
                                                <button onClick={() => setIsCalendarOpen(false)} className="p-1 hover:bg-brand-muted rounded-full">
                                                    <X className="w-4 h-4 text-navy dark:text-white" />
                                                </button>
                                            </div>
                                            <div className="calendar-container">
                                                <DayPicker
                                                    mode="range"
                                                    selected={dateRange}
                                                    onSelect={setDateRange}
                                                    numberOfMonths={2}
                                                    className="border-none"
                                                    styles={{
                                                        day: { margin: '2px' },
                                                        head_cell: { color: '#64748b', fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }
                                                    }}
                                                />
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Activities */}
                            <div className="flex-1 flex items-center px-6 py-3 space-x-4 w-full">
                                <Compass className="text-gold w-5 h-5 flex-shrink-0" />
                                <div className="flex-1">
                                    <span className="block text-[10px] uppercase font-bold text-white/50 tracking-widest">Activities</span>
                                    <select className="bg-transparent border-none focus:outline-none text-white w-full font-bold text-sm appearance-none cursor-pointer">
                                        <option className="bg-navy">All Activities</option>
                                        <option className="bg-navy">Camping</option>
                                        <option className="bg-navy">Trekking</option>
                                        <option className="bg-navy">Cultural</option>
                                    </select>
                                </div>
                            </div>

                            <Button
                                size="lg"
                                className="rounded-full w-full md:w-auto h-14 md:h-16 px-10"
                                onClick={() => router.push(`/trips?q=${searchDestination}`)}
                            >
                                <Search className="w-5 h-5 mr-3" />
                                Search
                            </Button>
                        </div>
                    </motion.div>

                    {/* Popular Destinations Row */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex flex-wrap items-center gap-6 pt-4"
                    >
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/60">Popular:</span>
                        {['Kyoto', 'Swiss Alps', 'Bali', 'Rafting', 'Safari'].map((item) => (
                            <button
                                key={item}
                                className="px-5 py-2.5 rounded-full border border-white/20 text-white/80 text-[10px] font-bold tracking-[0.1em] uppercase hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 backdrop-blur-md"
                            >
                                {item}
                            </button>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center space-y-4 hidden md:flex"
            >
                <div className="h-16 w-[1px] bg-gradient-to-b from-white to-transparent" />
                <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 vertical-text">Scroll Down</p>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                >
                    <ChevronDown className="w-5 h-5 text-gold" />
                </motion.div>
            </motion.div>

            <style jsx>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
        }
        .glass {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .calendar-container :global(.rdp) {
          --rdp-cell-size: 44px;
          --rdp-accent-color: #f4b400;
          --rdp-background-color: #f4b400;
          --rdp-outline: 2px solid var(--rdp-accent-color);
          --rdp-outline-offset: 2px;
          margin: 0;
          background-color: transparent;
        }
        .calendar-container :global(.rdp-months) {
            display: flex !important;
            flex-direction: row !important;
            gap: 2.5rem !important;
            justify-content: center;
            width: 100%;
        }
        @media (max-width: 900px) {
            .calendar-container :global(.rdp-months) {
                flex-direction: column !important;
                gap: 1rem !important;
            }
        }
        .calendar-container :global(.rdp-day_selected), 
        .calendar-container :global(.rdp-day_selected:hover) {
          background-color: var(--rdp-accent-color);
          color: #0f2a44;
          font-weight: bold;
          border-radius: 12px;
        }
        .calendar-container :global(.rdp-day_range_middle) {
          background-color: rgba(244, 180, 0, 0.1);
          color: #f4b400;
        }
        .dark .calendar-container :global(.rdp-month) {
          color: white !important;
        }
        .dark .calendar-container :global(.rdp-caption_label) {
          color: white !important;
        }
        .dark .calendar-container :global(.rdp-day) {
          color: #f8fafc !important;
        }
        .dark .calendar-container :global(.rdp-nav_button) {
            color: #f4b400 !important;
            opacity: 1;
        }
        .dark .calendar-container :global(.rdp-head_cell) {
          color: #94a3b8 !important;
        }
        .dark .calendar-container :global(.rdp-day:hover) {
          background-color: rgba(255, 255, 255, 0.1);
        }
        .dark .calendar-container :global(.rdp-day_outside) {
            color: #475569 !important;
        }
        /* Mobile adjustment for popup */
        @media (max-width: 640px) {
            .calendar-popup {
                width: 95vw !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                padding: 1.5rem !important;
            }
        }
      `}</style>
        </section>
    )
}
