'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon, Search, ChevronDown, MapPin, Globe, Compass, Star } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'

const navigation = [
    {
        name: 'Home',
        href: '/'
    },
    {
        name: 'Trips',
        href: '/trips',
        mega: [
            {
                title: 'North-East India',
                icon: MapPin,
                items: [
                    { name: 'Arunachal Pradesh', href: '/trips/arunachal' },
                    { name: 'Meghalaya Special', href: '/trips/meghalaya' },
                    { name: 'Assam Frontiers', href: '/trips/assam' },
                    { name: 'Sikkim Peaks', href: '/trips/sikkim' },
                ]
            },
            {
                title: 'International',
                icon: Globe,
                items: [
                    { name: 'Bali Paradise', href: '/trips/bali' },
                    { name: 'Swiss Alps Luxury', href: '/trips/swiss' },
                    { name: 'Dubai Adventure', href: '/trips/dubai' },
                    { name: 'Kyoto Heritage', href: '/trips/kyoto' },
                ]
            },
            {
                title: 'Specialty',
                icon: Compass,
                items: [
                    { name: 'Luxury Honeymoon', href: '/trips/honeymoon' },
                    { name: 'Family Retreats', href: '/trips/family' },
                    { name: 'Solo Expeditions', href: '/trips/solo' },
                    { name: 'Corporate Offsites', href: '/trips/corporate' },
                ]
            }
        ]
    },
    {
        name: 'Activities',
        href: '/activities',
        dropdown: [
            { name: 'Camping', href: '/activities/camping' },
            { name: 'River Rafting', href: '/activities/rafting' },
            { name: 'Trekking', href: '/activities/trekking' },
            { name: 'Paragliding', href: '/activities/paragliding' },
        ]
    },
    { name: 'Image Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
]

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)
    const pathname = usePathname()
    const headerRef = useRef<HTMLElement>(null)

    useEffect(() => {
        setMounted(true)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'h-20 bg-brand-bg/80 dark:bg-navy/80 backdrop-blur-xl border-b border-brand-border'
                : 'h-24 bg-transparent'
                }`}
            onMouseLeave={() => setActiveMegaMenu(null)}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group min-w-fit">
                    <Logo className="h-10 w-10 md:h-12 md:w-12 transition-transform duration-500 group-hover:rotate-[15deg]" />
                    <span className={`text-xl md:text-2xl font-heading font-bold tracking-tight transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-brand-text' : 'text-white'
                        }`}>
                        Happy<span className="text-gold">Journey</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
                    {navigation.map((item) => (
                        <div
                            key={item.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => item.mega || item.dropdown ? setActiveMegaMenu(item.name) : setActiveMegaMenu(null)}
                        >
                            <Link
                                href={item.href}
                                className={`flex items-center space-x-1 text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled || pathname !== '/'
                                    ? (pathname === item.href ? 'text-gold' : 'text-brand-text hover:text-gold')
                                    : (pathname === item.href ? 'text-gold' : 'text-white/90 hover:text-white')
                                    }`}
                            >
                                <span>{item.name}</span>
                                {(item.mega || item.dropdown) && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMegaMenu === item.name ? 'rotate-180' : ''}`} />}
                            </Link>

                            {pathname === item.href && (
                                <div className="absolute -bottom-6 left-0 right-0 h-[3px] bg-gold rounded-full" />
                            )}

                            {/* Individual Dropdown (for Activities) */}
                            <AnimatePresence>
                                {activeMegaMenu === item.name && item.dropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-2 bg-brand-bg dark:bg-navy shadow-mega border border-brand-border rounded-2xl p-4 min-w-[220px] overflow-hidden"
                                    >
                                        <ul className="space-y-1">
                                            {item.dropdown.map((subItem) => (
                                                <li key={subItem.name}>
                                                    <Link
                                                        href={subItem.href}
                                                        className="block px-4 py-3 text-sm font-semibold text-brand-muted-text hover:bg-gold/10 hover:text-gold rounded-xl transition-all"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center space-x-2 md:space-x-4">
                    {mounted && (
                        <button
                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                            className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? 'hover:bg-brand-muted text-brand-text' : 'hover:bg-white/10 text-white'
                                }`}
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                    )}

                    <button className={`p-2 rounded-full transition-all duration-300 ${isScrolled ? 'hover:bg-brand-muted text-brand-text' : 'hover:bg-white/10 text-white'
                        } hidden sm:block`}>
                        <Search className="w-5 h-5" />
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-full transition-all duration-300 ${isScrolled ? 'hover:bg-brand-muted text-brand-text' : 'hover:bg-white/10 text-white'
                            }`}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </nav>

            {/* Mega Menu Content (for Trips) */}
            <AnimatePresence>
                {activeMegaMenu && navigation.find(n => n.name === activeMegaMenu)?.mega && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 right-0 top-full bg-brand-bg dark:bg-navy shadow-mega border-t border-b border-brand-border py-12"
                    >
                        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12">
                            {navigation.find(n => n.name === activeMegaMenu)?.mega?.map((group) => {
                                const Icon = group.icon
                                return (
                                    <div key={group.title} className="space-y-6">
                                        <div className="flex items-center space-x-3 text-gold">
                                            <Icon className="w-5 h-5" />
                                            <h4 className="text-xs font-bold tracking-[0.2em] uppercase">{group.title}</h4>
                                        </div>
                                        <ul className="space-y-4">
                                            {group.items.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className="group flex items-center justify-between text-brand-muted-text hover:text-brand-text transition-colors"
                                                    >
                                                        <span className="text-base font-semibold">{item.name}</span>
                                                        <div className="w-6 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="max-w-7xl mx-auto px-8 mt-12 pt-12 border-t border-brand-border">
                            <div className="bg-gold/10 rounded-3xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
                                <div className="flex items-center space-x-4">
                                    <Star className="text-gold w-6 h-6 fill-gold" />
                                    <p className="text-sm font-bold text-brand-text">
                                        Early Bird Offer: Get 20% off on all North-East Indian trips for April 2025!
                                    </p>
                                </div>
                                <Link href="/offers" className="text-xs font-bold tracking-widest uppercase text-brand-text hover:text-gold transition-colors">
                                    View Offer Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu (Overhauled for Super Responsiveness) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-brand-bg md:hidden overflow-y-auto"
                    >
                        <div className="flex flex-col min-h-full p-8 pt-24">
                            <div className="flex-1 space-y-12">
                                {navigation.map((item) => (
                                    <div key={item.name} className="space-y-6">
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="text-4xl font-heading font-bold text-brand-text hover:text-gold transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                        {item.mega && (
                                            <div className="pl-4 space-y-8 border-l border-brand-border">
                                                {item.mega.map(group => (
                                                    <div key={group.title} className="space-y-4">
                                                        <p className="text-[10px] font-bold tracking-widest uppercase text-gold">{group.title}</p>
                                                        <div className="grid grid-cols-1 gap-4">
                                                            {group.items.map(subItem => (
                                                                <Link
                                                                    key={subItem.name}
                                                                    href={subItem.href}
                                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                                    className="text-lg font-medium text-brand-muted-text hover:text-brand-text"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        {item.dropdown && (
                                            <div className="pl-4 grid grid-cols-1 gap-4 border-l border-brand-border">
                                                {item.dropdown.map(subItem => (
                                                    <Link
                                                        key={subItem.name}
                                                        href={subItem.href}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                        className="text-lg font-medium text-brand-muted-text hover:text-brand-text"
                                                    >
                                                        {subItem.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="pt-12 border-t border-brand-border mt-12 space-y-6">
                                <div className="space-y-2">
                                    <p className="text-[10px] font-bold tracking-widest uppercase text-brand-muted-text">Ready to book?</p>
                                    <p className="text-2xl font-heading font-bold text-brand-text">+91 60 262 84 181</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <Link href="/login" className="text-xs font-bold tracking-widest uppercase text-brand-text">Admin Login</Link>
                                    <div className="h-4 w-[1px] bg-brand-border" />
                                    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="text-xs font-bold tracking-widest uppercase text-brand-text">
                                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Close Button For Mobile Menu */}
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 p-3 bg-brand-muted rounded-full"
                        >
                            <X className="w-6 h-6 text-brand-text" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
