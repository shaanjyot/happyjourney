'use client'

import Link from 'next/link'
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Youtube, Linkedin, MoveUpRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'

const footerLinks = {
    about: {
        title: 'About Us',
        links: [
            { name: 'About Organization', href: '/about' },
            { name: 'Our Journeys', href: '/trips' },
            { name: 'Our Partners', href: '/partners' },
            { name: 'Achievements', href: '/achievements' },
        ]
    },
    quickLinks: {
        title: 'Quick Links',
        links: [
            { name: 'Image Gallery', href: '/gallery' },
            { name: 'Organisation Team', href: '/team' },
            { name: 'Press Enquiries', href: '/press' },
            { name: 'Useful Information', href: '/info' },
        ]
    },
    important: {
        title: 'Important Links',
        links: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Refund & Return Policy', href: '/refund' },
            { name: 'Terms & Conditions', href: '/terms' },
            { name: 'Targets & Plans', href: '/plans' },
        ]
    }
}

const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'Youtube', icon: Youtube, href: '#' },
    { name: 'Linkedin', icon: Linkedin, href: '#' },
]

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="relative bg-brand-muted dark:bg-[#020617] border-t border-brand-border overflow-hidden">
            {/* Topographic Background Overlay */}
            <div className="absolute inset-0 topo-bg opacity-30 pointer-events-none" />

            <div className="relative z-10 section-container py-24 md:py-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">

                    {/* Column 1: Brand & About Message */}
                    <div className="space-y-10">
                        <Link href="/" className="flex items-center space-x-4 group">
                            <Logo className="h-12 w-12" />
                            <span className="text-2xl font-heading font-bold text-brand-text">
                                Happy<span className="text-gold">Journey</span>
                            </span>
                        </Link>

                        <div className="space-y-6">
                            <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-text">Our Mission</h4>
                            <p className="text-base text-brand-muted-text leading-relaxed font-medium">
                                We believe in creating journeys that transform lives. Every itinerary is a masterpiece of culture, comfort, and discovery.
                            </p>
                        </div>

                        <div className="flex space-x-5">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="p-3.5 rounded-2xl bg-brand-bg shadow-sm hover:bg-gold text-brand-text hover:text-navy transition-all duration-500 transform hover:scale-110"
                                        aria-label={social.name}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Column 2 & 3: Structured Links */}
                    <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-16">
                        {[footerLinks.about, footerLinks.quickLinks, footerLinks.important].map((group) => (
                            <div key={group.title}>
                                <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-text mb-10 border-b border-brand-border pb-6">
                                    {group.title}
                                </h4>
                                <ul className="space-y-5">
                                    {group.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center text-base font-medium text-brand-muted-text hover:text-gold transition-colors duration-300"
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )).slice(0, 2)}
                        {[footerLinks.about, footerLinks.quickLinks, footerLinks.important].map((group) => (
                            <div key={group.title}>
                                <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-text mb-10 border-b border-brand-border pb-6">
                                    {group.title}
                                </h4>
                                <ul className="space-y-5">
                                    {group.links.map((link) => (
                                        <li key={link.name}>
                                            <Link
                                                href={link.href}
                                                className="group flex items-center text-base font-medium text-brand-muted-text hover:text-gold transition-colors duration-300"
                                            >
                                                <span className="relative">
                                                    {link.name}
                                                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gold transition-all duration-500 group-hover:w-full" />
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )).slice(2, 3)}
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-xs font-bold tracking-[0.3em] uppercase text-brand-text mb-10 border-b border-brand-border pb-6">
                            Contact Experience
                        </h4>
                        <div className="space-y-10">
                            <ul className="space-y-8">
                                <li className="flex items-start space-x-5 group">
                                    <div className="mt-1 p-3 rounded-xl bg-brand-bg shadow-sm text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted-text mb-1">Corporate HQ</span>
                                        <span className="text-sm font-bold text-brand-text">Panigaon Chaiali PolyRoad, <br />Nagaon, Assam- 782003</span>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-5 group">
                                    <div className="mt-1 p-3 rounded-xl bg-brand-bg shadow-sm text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted-text mb-1">Expert Hub</span>
                                        <a href="tel:+916026284181" className="text-sm font-bold text-brand-text hover:text-gold transition-colors">+91 60 262 84 181</a>
                                    </div>
                                </li>
                                <li className="flex items-start space-x-5 group">
                                    <div className="mt-1 p-3 rounded-xl bg-brand-bg shadow-sm text-gold group-hover:bg-gold group-hover:text-navy transition-all duration-500">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <span className="block text-[10px] font-bold uppercase tracking-widest text-brand-muted-text mb-1">Email Concierge</span>
                                        <a href="mailto:info@happyjourney.net" className="text-sm font-bold text-brand-text hover:text-gold transition-colors">info@happyjourney.net</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-32 pt-12 border-t border-brand-border flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                    <p className="text-[10px] tracking-[0.3em] font-bold text-brand-muted-text uppercase">
                        Copyright © 2025 - <span className="text-brand-text">Happy Journey Premium</span>
                    </p>

                    <button
                        onClick={scrollToTop}
                        className="flex items-center space-x-4 text-[10px] font-bold tracking-[0.3em] uppercase text-brand-text hover:text-gold transition-colors group"
                    >
                        <span>Back to top</span>
                        <div className="p-3 rounded-full border-2 border-brand-border group-hover:border-gold group-hover:translate-y-[-5px] transition-all">
                            <MoveUpRight className="w-4 h-4" />
                        </div>
                    </button>
                </div>
            </div>
        </footer>
    )
}
