'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
    Users,
    MapPin,
    Image as ImageIcon,
    MessageSquare,
    ArrowUpRight,
    Clock,
    ChevronRight,
    Loader2
} from 'lucide-react'
import Link from 'next/link'

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        destinations: 0,
        journeys: 0,
        inquiries: 0
    })
    const [recentInquiries, setRecentInquiries] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        async function fetchDashboardData() {
            try {
                // Fetch Stats
                const [destRes, journeyRes, inquiryRes] = await Promise.all([
                    supabase.from('destinations').select('*', { count: 'exact', head: true }),
                    supabase.from('completed_journeys').select('*', { count: 'exact', head: true }),
                    supabase.from('contact_submissions').select('*', { count: 'exact', head: true })
                ])

                setStats({
                    destinations: destRes.count || 0,
                    journeys: journeyRes.count || 0,
                    inquiries: inquiryRes.count || 0
                })

                // Fetch Recent Inquiries
                const { data: inquiries } = await supabase
                    .from('contact_submissions')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(5)

                if (inquiries) setRecentInquiries(inquiries)

            } catch (error) {
                console.error('Error fetching dashboard data:', error)
            } finally {
                setIsLoading(false)
            }
        }

        fetchDashboardData()
    }, [])

    if (isLoading) {
        return (
            <div className="h-96 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-coral" />
            </div>
        )
    }

    return (
        <div className="space-y-10 pb-12">
            <div>
                <h2 className="text-4xl font-serif font-bold mb-3">Executive Overview</h2>
                <p className="text-brand-muted-text">Welcome back. Here's what's happening with HappyJourney today.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                        title: 'Total Destinations',
                        value: stats.destinations,
                        icon: MapPin,
                        color: 'bg-blue-500',
                        href: '/admin/destinations'
                    },
                    {
                        title: 'Travel Diaries',
                        value: stats.journeys,
                        icon: ImageIcon,
                        color: 'bg-emerald-500',
                        href: '/admin/journeys'
                    },
                    {
                        title: 'New Inquiries',
                        value: stats.inquiries,
                        icon: MessageSquare,
                        color: 'bg-coral',
                        href: '/admin/inquiries'
                    },
                    {
                        title: 'Active Travelers',
                        value: '1.2k',
                        icon: Users,
                        color: 'bg-purple-500',
                        href: '#'
                    },
                ].map((stat) => (
                    <Link
                        key={stat.title}
                        href={stat.href}
                        className="p-8 rounded-[2rem] bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-premium transition-all group"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div className={`p-4 rounded-2xl ${stat.color}/10 text-brand-text dark:text-white`}>
                                <stat.icon className={`w-6 h-6 text-brand-text dark:text-white`} />
                            </div>
                            <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-coral transition-colors" />
                        </div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-brand-muted-text mb-1">{stat.title}</h3>
                        <p className="text-3xl font-serif font-bold text-brand-text dark:text-white">{stat.value}</p>
                    </Link>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Inquiries Table */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h3 className="text-2xl font-serif font-bold">Recent Inquiries</h3>
                        <Link href="/admin/inquiries" className="text-xs font-bold uppercase tracking-widest text-coral hover:underline">
                            View All Inquiries
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2.5rem] overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 dark:bg-white/2 border-b border-gray-100 dark:border-white/10">
                                    <tr>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-brand-muted-text">Traveler</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-brand-muted-text">Interest</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-brand-muted-text">Date</th>
                                        <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-brand-muted-text text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-50 dark:divide-white/5">
                                    {recentInquiries.length > 0 ? recentInquiries.map((inquiry) => (
                                        <tr key={inquiry.id} className="hover:bg-gray-50/50 dark:hover:bg-white/2 transition-colors group">
                                            <td className="px-8 py-6">
                                                <div className="flex items-center space-x-4">
                                                    <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center font-bold text-coral">
                                                        {inquiry.full_name[0]}
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-bold text-brand-text dark:text-white">{inquiry.full_name}</div>
                                                        <div className="text-xs text-brand-muted-text">{inquiry.email}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-xs font-medium text-brand-text dark:text-white bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">
                                                    {inquiry.subject}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <div className="flex items-center text-xs text-brand-muted-text">
                                                    <Clock className="w-3.5 h-3.5 mr-2" />
                                                    {new Date(inquiry.created_at).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 text-right">
                                                <button className="p-2 rounded-xl bg-gray-50 dark:bg-white/5 group-hover:bg-coral group-hover:text-white transition-all">
                                                    <ChevronRight className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    )) : (
                                        <tr>
                                            <td colSpan={4} className="px-8 py-20 text-center text-brand-muted-text italic">
                                                No inquiries yet.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Quick Actions / Shortcuts */}
                <div className="space-y-6">
                    <h3 className="text-2xl font-serif font-bold">Quick Actions</h3>
                    <div className="space-y-4">
                        {[
                            { title: 'Add New Destination', desc: 'Expand the catalog', href: '/admin/destinations' },
                            { title: 'Write Travel Diary', desc: 'Share a new memory', href: '/admin/journeys' },
                            { title: 'Update Site Copy', desc: 'Refine hero & sections', href: '/admin/content' },
                        ].map((action) => (
                            <Link
                                key={action.title}
                                href={action.href}
                                className="block p-6 rounded-[1.5rem] bg-brand-muted dark:bg-white/5 border border-brand-border/50 dark:border-white/10 hover:border-coral transition-colors"
                            >
                                <h4 className="text-sm font-bold text-brand-text dark:text-white mb-1">{action.title}</h4>
                                <p className="text-xs text-brand-muted-text">{action.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="p-8 rounded-[2rem] bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20">
                        <h4 className="text-sm font-bold text-blue-900 dark:text-blue-100 mb-2">Editor Note</h4>
                        <p className="text-xs text-blue-800 dark:text-blue-200 leading-relaxed">
                            Changes saved in the admin panel are reflected instantly on the production site. Please double-check imagery and grammar before publishing.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
