'use client'

import Link from 'next/link'
import { Facebook, Instagram, Youtube, Linkedin, MapPin, Phone, Mail, MoveUpRight } from 'lucide-react'
import { Logo } from '@/components/ui/Logo'

const footerLinks = {
    company: [
        { name: 'About Us', href: '/about' },
        { name: 'Our Team', href: '/team' },
        { name: 'Careers', href: '/careers' },
        { name: 'Blog', href: '/blog' },
    ],
    destinations: [
        { name: 'International Tours', href: '/trips' },
        { name: 'Domestic Tours', href: '/trips' },
        { name: 'Honeymoon Packages', href: '/trips' },
        { name: 'Adventure Trips', href: '/trips' },
    ],
    support: [
        { name: 'Contact Us', href: '/contact' },
        { name: 'Privacy Policy', href: '/privacy' },
        { name: 'Terms & Conditions', href: '/terms' },
        { name: 'Travel Insurance', href: '/services' },
    ]
}

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="bg-dark-navy text-white relative overflow-hidden">
            {/* Topographic Background Overlay */}
            <div className="absolute inset-0 topo-bg opacity-10 pointer-events-none" />

            {/* Newsletter / Upper Part */}
            <div className="border-b border-white/10 relative z-10">
                <div className="section-container py-12 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-serif font-bold italic text-coral">Ready to start your journey?</h3>
                        <p className="text-gray-400 text-sm">Subscribe to get the latest travel updates and exclusive offers.</p>
                    </div>
                    <div className="flex w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-white/5 border border-white/10 px-6 py-4 rounded-l-full w-full md:w-64 focus:outline-none focus:border-coral transition-colors"
                        />
                        <button className="bg-coral text-white px-8 py-4 rounded-r-full font-bold text-sm tracking-widest uppercase hover:bg-coral/90 transition-colors">
                            Join Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="section-container py-20 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

                    {/* Brand & Social */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3 group min-w-fit">
                            <Logo className="h-12 w-12" />
                            <span className="text-2xl md:text-3xl font-heading font-bold tracking-tight text-white">
                                Happy<span className="text-coral">Journey</span>
                            </span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Creating extraordinary travel experiences since 2015. We turn your travel dreams into reality with personalized planning and luxury care.
                        </p>
                        <div className="flex space-x-4">
                            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-coral hover:border-coral transition-all duration-300">
                                    <Icon className="w-5 h-5 text-white" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Links - Company */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Company</h4>
                        <ul className="space-y-4">
                            {footerLinks.company.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-coral transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links - Support */}
                    <div>
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Support</h4>
                        <ul className="space-y-4">
                            {footerLinks.support.map(link => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-gray-400 hover:text-coral transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-sm">Get in touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-coral transition-colors duration-300">
                                    <MapPin className="w-5 h-5 text-coral group-hover:text-white" />
                                </div>
                                <p className="text-gray-400 text-sm">Panigaon Chaiali PolyRoad,<br />Nagaon, Assam- 782003</p>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-coral transition-colors duration-300">
                                    <Phone className="w-5 h-5 text-coral group-hover:text-white" />
                                </div>
                                <p className="text-gray-400 text-sm font-bold">+91 60 262 84 181</p>
                            </div>
                            <div className="flex items-center space-x-4 group">
                                <div className="p-3 rounded-xl bg-white/5 group-hover:bg-coral transition-colors duration-300">
                                    <Mail className="w-5 h-5 text-coral group-hover:text-white" />
                                </div>
                                <p className="text-gray-400 text-sm">info@happyjourney.net</p>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-400 text-xs">
                        © 2025 HappyJourney. All rights reserved. Designed with ❤️ for travelers.
                    </p>
                    <button
                        onClick={scrollToTop}
                        className="flex items-center space-x-3 text-xs font-bold tracking-widest uppercase hover:text-coral transition-colors group"
                    >
                        <span>Back to top</span>
                        <div className="p-3 rounded-full border border-white/10 group-hover:border-coral transition-colors">
                            <MoveUpRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    )
}
