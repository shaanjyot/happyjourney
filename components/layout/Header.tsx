'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X, Sun, Moon, ChevronDown, MapPin, Globe, Compass, Phone, User, LogOut, Mail, Lock } from 'lucide-react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'
import { createClient } from '@/lib/supabase/client'
import { User as SupabaseUser } from '@supabase/supabase-js'

const navigation = [
    {
        name: 'Popular Destinations',
        href: '/trips',
        dropdown: [
            { name: 'Dubai', href: '/trips/destination/dubai' },
            { name: 'Bali', href: '/trips/destination/bali' },
            { name: 'Thailand', href: '/trips/destination/thailand' },
            { name: 'Maldives', href: '/trips/destination/maldives' },
            { name: 'Singapore', href: '/trips/destination/singapore' },
        ]
    },
    {
        name: 'Around The World',
        href: '/trips',
        mega: [
            {
                title: 'South East Asia',
                icon: MapPin,
                items: [
                    { name: 'Bali Paradise', href: '/trips/destination/bali' },
                    { name: 'Thailand Beaches', href: '/trips/destination/thailand' },
                    { name: 'Singapore City', href: '/trips/destination/singapore' },
                    { name: 'Vietnam Culture', href: '/trips/destination/vietnam' },
                ]
            },
            {
                title: 'Europe',
                icon: Globe,
                items: [
                    { name: 'Swiss Alps', href: '/trips/destination/swiss' },
                    { name: 'Paris Romance', href: '/trips/destination/paris' },
                    { name: 'Italy Heritage', href: '/trips/destination/italy' },
                    { name: 'Amsterdam Canals', href: '/trips/destination/amsterdam' },
                ]
            },
            {
                title: 'Middle East',
                icon: Compass,
                items: [
                    { name: 'Dubai Luxury', href: '/trips/destination/dubai' },
                    { name: 'Abu Dhabi', href: '/trips/destination/abudhabi' },
                    { name: 'Egypt Pyramids', href: '/trips/destination/egypt' },
                    { name: 'Turkey Historic', href: '/trips/destination/turkey' },
                ]
            }
        ]
    },
    {
        name: 'Domestic Tours',
        href: '/trips',
        dropdown: [
            { name: 'Incredible India', href: '/trips/destination/india' },
            { name: 'Himalayas', href: '/trips/destination/himachal' },
            { name: 'North East India', href: '/trips/destination/assam' },
            { name: 'South India', href: '/trips/destination/south-india' },
        ]
    },
    {
        name: 'Packages by Season',
        href: '/trips',
        dropdown: [
            { name: 'Summer Escapes', href: '/trips?category=Summer%20Escapes' },
            { name: 'Winter Wonderland', href: '/trips?category=Winter%20Wonderland' },
            { name: 'Monsoon Magic', href: '/trips?category=Monsoon%20Magic' },
            { name: 'Festive Specials', href: '/trips?category=Festive%20Specials' },
        ]
    },
    { name: 'About Us', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact Us', href: '/contact' },
]

const menuPromo = {
    popular: {
        title: 'Featured Escape',
        subtitle: 'Dubai Skyline Nights',
        image: '/dubai.png'
    },
    domestic: {
        title: 'Explore India',
        subtitle: 'Mountains, coast & culture',
        image: '/thailand.png'
    }
}

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isAuthOpen, setIsAuthOpen] = useState(false)
    const [showPhone, setShowPhone] = useState(false)
    const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null)
    const [user, setUser] = useState<SupabaseUser | null>(null)
    const { resolvedTheme, setTheme } = useTheme()
    const pathname = usePathname()
    const headerRef = useRef<HTMLElement>(null)
    const supabase = createClient()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)

        // Check auth status
        supabase.auth.getUser().then(({ data: { user } }) => {
            setUser(user)
        })

        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user ?? null)
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
            subscription.unsubscribe()
        }
    }, [supabase.auth])

    const handleGoogleLogin = async () => {
        await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${window.location.origin}/auth/callback`
            }
        })
    }

    const handleLogout = async () => {
        await supabase.auth.signOut()
        setIsAuthOpen(false)
    }

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || pathname !== '/'
                ? 'bg-dark-navy/95 backdrop-blur-xl shadow-premium'
                : 'bg-dark-navy/60 backdrop-blur-md'
                }`}
            onMouseLeave={() => setActiveMegaMenu(null)}
        >
            <nav className="w-full px-4 sm:px-8 lg:px-12 h-20 flex items-center">
                {/* Logo Area */}
                <div className="flex-1 flex justify-start">
                    <Link href="/" className="flex items-center space-x-3 group min-w-fit">
                        <Logo className="h-10 w-10 md:h-11 md:w-11 transition-transform duration-500 group-hover:rotate-[15deg]" />
                        <span className="text-xl md:text-2xl font-heading font-bold tracking-tight text-white whitespace-nowrap">
                            Happy <span className="text-coral">Journey</span>
                        </span>
                    </Link>
                </div>

                {/* Primary Nav - Centered Menu */}
                <div className="hidden lg:flex flex-none items-center space-x-4 xl:space-x-8 h-full px-4">
                    {navigation.slice(0, 4).map((item) => (
                        <div
                            key={item.name}
                            className="relative h-full flex items-center"
                            onMouseEnter={() => item.mega || item.dropdown ? setActiveMegaMenu(item.name) : setActiveMegaMenu(null)}
                        >
                            <Link
                                href={item.href}
                                className="flex items-center space-x-1 text-xs font-bold text-white hover:text-coral transition-colors whitespace-nowrap uppercase tracking-wider h-full px-2"
                            >
                                <span>{item.name}</span>
                                {(item.mega || item.dropdown) && <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${activeMegaMenu === item.name ? 'rotate-180' : ''}`} />}
                            </Link>

                            {/* Dropdown Menu */}
                            <AnimatePresence>
                                {activeMegaMenu === item.name && item.dropdown && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 15 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="absolute top-full left-0 mt-2 bg-white dark:bg-dark-navy shadow-mega rounded-xl p-3 min-w-[320px] overflow-hidden border border-white/10"
                                    >
                                        <div className="space-y-3">
                                            <ul className="space-y-1">
                                                {item.dropdown.map((subItem) => (
                                                    <li key={subItem.name}>
                                                        <Link
                                                            href={subItem.href}
                                                            className="block px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-200 hover:bg-coral/10 hover:text-coral rounded-lg transition-all"
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                            {(item.name === 'Popular Destinations' || item.name === 'Domestic Tours') && (
                                                <div className="relative h-28 rounded-xl overflow-hidden border border-white/10">
                                                    <Image
                                                        src={item.name === 'Popular Destinations' ? menuPromo.popular.image : menuPromo.domestic.image}
                                                        alt="menu promo"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/75 via-dark-navy/40 to-transparent" />
                                                    <div className="absolute left-3 bottom-3">
                                                        <p className="text-[10px] uppercase tracking-widest text-white/70">
                                                            {item.name === 'Popular Destinations' ? menuPromo.popular.title : menuPromo.domestic.title}
                                                        </p>
                                                        <p className="text-sm font-bold text-white">
                                                            {item.name === 'Popular Destinations' ? menuPromo.popular.subtitle : menuPromo.domestic.subtitle}
                                                        </p>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    {navigation.slice(4).map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-xs font-bold text-white hover:text-coral transition-colors whitespace-nowrap uppercase tracking-wider"
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Action Controls - Right Aligned */}
                <div className="flex-1 flex justify-end items-center space-x-1 md:space-x-3">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                        className="p-2.5 rounded-full hover:bg-white/10 text-white transition-all"
                        aria-label="Toggle theme"
                    >
                        <Sun className="hidden w-5 h-5 dark:block" />
                        <Moon className="w-5 h-5 dark:hidden" />
                    </button>

                    {/* Phone Icon/Number Toggle - Universal */}
                    <div className="relative">
                        <button
                            onClick={() => setShowPhone(!showPhone)}
                            className={`p-2.5 rounded-full transition-all duration-300 ${showPhone ? 'bg-coral text-white scale-110' : 'hover:bg-white/10 text-white'}`}
                            aria-label="Call Us"
                        >
                            <Phone className="w-5 h-5" />
                        </button>
                        <AnimatePresence>
                            {showPhone && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                                    className="absolute top-[calc(100%+15px)] right-0 p-6 bg-dark-navy border border-white/10 rounded-[32px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] min-w-[280px] z-[60]"
                                >
                                    <div className="space-y-2">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Express Booking</p>
                                        </div>
                                        <a href="tel:+916026284181" className="text-2xl font-bold text-white block hover:text-coral transition-colors whitespace-nowrap">
                                            +91 60262 84181
                                        </a>
                                        <div className="pt-2 border-t border-white/5">
                                            <p className="text-[11px] text-coral font-medium flex items-center space-x-1">
                                                <span>●</span>
                                                <span>Available 24/7 for you</span>
                                            </p>
                                        </div>
                                    </div>
                                    {/* Triangle Pointer */}
                                    <div className="absolute -top-2 right-4 w-4 h-4 bg-dark-navy border-l border-t border-white/10 rotate-45" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Auth Trigger - Now always an Icon */}
                    <button
                        onClick={() => setIsAuthOpen(true)}
                        className={`p-2.5 rounded-full transition-all duration-300 ${isAuthOpen ? 'bg-coral text-white scale-110' : 'hover:bg-white/10 text-white'} relative`}
                        aria-label="Account"
                    >
                        <User className="w-5 h-5" />
                        {user && (
                            <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-primary rounded-full border-2 border-dark-navy" />
                        )}
                    </button>

                    {/* Mobile Menu Trigger */}
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className={`lg:hidden relative z-[10001] p-2.5 rounded-full hover:bg-white/10 text-white transition-all ${isMobileMenuOpen ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </nav>

            {/* Mega Menu Dropdown Background Fix */}
            <AnimatePresence>
                {activeMegaMenu && navigation.find(n => n.name === activeMegaMenu)?.mega && (
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 right-0 top-full bg-white dark:bg-dark-navy shadow-mega border-t border-gray-100 dark:border-white/10 py-12 z-40"
                    >
                        <div className="w-full px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
                            {navigation.find(n => n.name === activeMegaMenu)?.mega?.map((group) => {
                                const Icon = group.icon
                                return (
                                    <div key={group.title} className="space-y-6">
                                        <div className="flex items-center space-x-3 text-coral">
                                            <Icon className="w-5 h-5" />
                                            <h4 className="text-xs font-bold tracking-wider uppercase">{group.title}</h4>
                                        </div>
                                        <ul className="space-y-4">
                                            {group.items.map((item) => (
                                                <li key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        className="group flex items-center justify-between text-gray-600 dark:text-gray-300 hover:text-coral transition-colors"
                                                    >
                                                        <span className="text-base font-semibold">{item.name}</span>
                                                        <div className="w-6 h-[2px] bg-coral scale-x-0 group-hover:scale-x-100 transition-transform origin-right" />
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )
                            })}
                            <div className="space-y-4">
                                <h4 className="text-xs font-bold tracking-wider uppercase text-coral">Destination Highlights</h4>
                                <div className="space-y-3">
                                    {[
                                        { name: 'Dubai', image: '/dubai.png', href: '/trips/destination/dubai' },
                                        { name: 'Bali', image: '/bali.png', href: '/trips/destination/bali' },
                                        { name: 'Thailand', image: '/thailand.png', href: '/trips/destination/thailand' },
                                    ].map((card) => (
                                        <Link key={card.name} href={card.href} className="group block">
                                            <div className="relative h-20 rounded-xl overflow-hidden border border-white/10">
                                                <Image src={card.image} alt={card.name} fill className="object-cover group-hover:scale-105 transition-transform" />
                                                <div className="absolute inset-0 bg-gradient-to-r from-dark-navy/75 to-transparent" />
                                                <p className="absolute left-3 bottom-2 text-white text-sm font-bold">{card.name}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Auth Drawer Background Fix */}
            <AnimatePresence>
                {isAuthOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsAuthOpen(false)}
                            className="fixed inset-0 z-[200] bg-dark-navy/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 z-[201] w-full max-w-md bg-white dark:bg-dark-navy shadow-mega p-8 md:p-12 flex flex-col border-l border-gray-100 dark:border-white/10"
                        >
                            <div className="flex justify-between items-center mb-12">
                                <div className="space-y-1">
                                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-dark-navy dark:text-white">
                                        {user ? 'My Profile' : 'Welcome'}
                                    </h2>
                                    <p className="text-xs font-bold tracking-widest text-coral uppercase">
                                        {user ? user.email : 'Your Journey Continues Here'}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setIsAuthOpen(false)}
                                    className="p-3 bg-dark-navy/5 dark:bg-white/5 rounded-full hover:bg-coral/10 hover:text-coral transition-all"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex-1 space-y-8 overflow-y-auto pr-2 no-scrollbar">
                                {user ? (
                                    <div className="space-y-6">
                                        <div className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10">
                                            <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Account Overview</p>
                                            <div className="space-y-3">
                                                <button className="w-full text-left py-2 text-sm font-semibold hover:text-coral transition-colors">My Bookings</button>
                                                <button className="w-full text-left py-2 text-sm font-semibold hover:text-coral transition-colors">Wishlist</button>
                                                <button className="w-full text-left py-2 text-sm font-semibold hover:text-coral transition-colors">Settings</button>
                                            </div>
                                        </div>
                                        <button
                                            onClick={handleLogout}
                                            className="w-full flex items-center justify-center space-x-3 py-4 bg-red-500/10 text-red-500 rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-red-500 hover:text-white transition-all"
                                        >
                                            <LogOut className="w-5 h-5" />
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="space-y-4">
                                            <button
                                                onClick={handleGoogleLogin}
                                                className="w-full flex items-center justify-center space-x-3 py-4 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl font-bold text-sm tracking-wide hover:shadow-premium transition-all shadow-sm"
                                            >
                                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                                                </svg>
                                                <span className="text-dark-navy dark:text-white">Sign in with Google</span>
                                            </button>
                                        </div>

                                        <div className="relative">
                                            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200 dark:border-white/10" /></div>
                                            <div className="relative flex justify-center text-xs uppercase font-bold tracking-[0.2em]"><span className="bg-white dark:bg-dark-navy px-4 text-gray-400">Or email</span></div>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                    <input type="email" className="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-coral/30 rounded-xl py-3 pl-12 text-sm focus:outline-none transition-all dark:text-white" placeholder="name@example.com" />
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Password</label>
                                                <div className="relative">
                                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                                                    <input type="password" className="w-full bg-gray-50 dark:bg-white/5 border border-transparent focus:border-coral/30 rounded-xl py-3 pl-12 text-sm focus:outline-none transition-all dark:text-white" placeholder="••••••••" />
                                                </div>
                                            </div>
                                            <button className="w-full py-4 bg-dark-navy dark:bg-coral text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:shadow-premium transition-all">
                                                Sign In
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                            {!user && (
                                <div className="pt-8 border-t border-gray-200 dark:border-white/10">
                                    <p className="text-center text-sm text-gray-500">
                                        New to HappyJourney? <button className="text-coral font-bold">Create an account</button>
                                    </p>
                                </div>
                            )}
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            {/* Mobile Nav Overlay Background Fix */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[2147483647] h-[100dvh] w-screen bg-gradient-to-b from-white via-[#f7f9fc] to-[#eef4fb] dark:from-dark-navy dark:via-[#071727] dark:to-[#0b2137] backdrop-blur-xl lg:hidden overflow-y-auto shadow-[0_40px_120px_-20px_rgba(0,0,0,0.75)]"
                    >
                        <div className="flex flex-col min-h-full p-8 pt-24">
                            <p className="mb-6 text-xs font-bold uppercase tracking-[0.24em] text-coral">Menu</p>
                            <div className="flex-1 space-y-8">
                                {navigation.map((item) => (
                                    <div key={item.name} className="space-y-4">
                                        <div className="space-y-4">
                                            <Link
                                                href={item.href}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="text-2xl font-heading font-bold text-dark-navy dark:text-white hover:text-coral transition-colors flex items-center justify-between"
                                            >
                                                <span>{item.name}</span>
                                                {(item.mega || item.dropdown) && <ChevronDown className="w-5 h-5 opacity-50" />}
                                            </Link>
                                            {(item.dropdown || item.mega) && (
                                                <div className="pl-4 border-l-2 border-dark-navy/10 dark:border-white/10 space-y-3">
                                                    {(item.dropdown || (item.mega && item.mega.flatMap(g => g.items))).map(sub => (
                                                        <Link
                                                            key={sub.name}
                                                            href={sub.href}
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                            className="block text-gray-700 dark:text-white/75 text-lg hover:text-coral"
                                                        >
                                                            {sub.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-8 border-t border-gray-100 dark:border-white/10 mt-8 space-y-6">
                                <a href="tel:+916026284181" className="text-2xl font-heading font-bold text-dark-navy dark:text-white hover:text-coral transition-colors flex items-center space-x-3">
                                    <Phone className="w-6 h-6 text-coral" />
                                    <span>+91 60262 84181</span>
                                </a>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="absolute top-8 right-8 p-3 bg-gray-100 dark:bg-white/10 rounded-full hover:bg-coral/10 hover:text-coral transition-colors"
                        >
                            <X className="w-6 h-6 text-dark-navy dark:text-white" />
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
