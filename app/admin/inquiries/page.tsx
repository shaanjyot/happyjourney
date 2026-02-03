'use client'

import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import {
    MessageSquare,
    Search,
    Filter,
    MoreVertical,
    Mail,
    Phone,
    Calendar,
    ArrowLeft,
    Loader2,
    Trash2
} from 'lucide-react'
import Link from 'next/link'

export default function InquiriesPage() {
    const [inquiries, setInquiries] = useState<any[]>([])
    const [isLoading, setIsLoading] = useState(true)
    const [searchTerm, setSearchTerm] = useState('')
    const supabase = createClient()

    useEffect(() => {
        fetchInquiries()
    }, [])

    async function fetchInquiries() {
        setIsLoading(true)
        const { data, error } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false })

        if (data) setInquiries(data)
        setIsLoading(false)
    }

    async function deleteInquiry(id: string) {
        if (!confirm('Are you sure you want to delete this inquiry?')) return

        const { error } = await supabase
            .from('contact_submissions')
            .delete()
            .eq('id', id)

        if (!error) {
            setInquiries(inquiries.filter(i => i.id !== id))
        }
    }

    const filteredInquiries = inquiries.filter(i =>
        i.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.subject.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if (isLoading) {
        return (
            <div className="h-96 flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-coral" />
            </div>
        )
    }

    return (
        <div className="space-y-8 pb-20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                    <Link href="/admin" className="text-xs font-bold text-coral flex items-center mb-2 hover:underline">
                        <ArrowLeft className="w-3 h-3 mr-1" /> Back to Dashboard
                    </Link>
                    <h2 className="text-3xl font-serif font-bold">Contact Inquiries</h2>
                    <p className="text-brand-muted-text text-sm">Review and respond to interested travelers.</p>
                </div>

                <div className="flex items-center space-x-3">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search submissions..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-full pl-11 pr-6 h-12 text-sm outline-none focus:border-coral transition-colors w-64"
                        />
                    </div>
                    <button className="w-12 h-12 rounded-full border border-gray-100 dark:border-white/10 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                        <Filter className="w-4 h-4 text-gray-500" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
                {filteredInquiries.length > 0 ? filteredInquiries.map((inquiry) => (
                    <div
                        key={inquiry.id}
                        className="bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-[2rem] p-8 hover:shadow-premium transition-all relative group"
                    >
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            {/* Traveler Info */}
                            <div className="lg:col-span-3 space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 rounded-2xl bg-coral/10 flex items-center justify-center font-bold text-coral text-lg shadow-inner">
                                        {inquiry.full_name[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-text dark:text-white">{inquiry.full_name}</h4>
                                        <p className="text-xs text-brand-muted-text flex items-center">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(inquiry.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <a href={`mailto:${inquiry.email}`} className="flex items-center text-xs text-brand-muted-text hover:text-coral transition-colors">
                                        <Mail className="w-3.5 h-3.5 mr-2" />
                                        {inquiry.email}
                                    </a>
                                    {inquiry.phone && (
                                        <div className="flex items-center text-xs text-brand-muted-text">
                                            <Phone className="w-3.5 h-3.5 mr-2" />
                                            {inquiry.phone}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Inquiry Content */}
                            <div className="lg:col-span-7 space-y-3">
                                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
                                    {inquiry.subject}
                                </div>
                                <p className="text-brand-text dark:text-white/90 leading-relaxed italic">
                                    "{inquiry.message}"
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="lg:col-span-2 flex flex-col justify-between items-end">
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => deleteInquiry(inquiry.id)}
                                        className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all opacity-0 group-hover:opacity-100"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                    <button className="p-3 rounded-xl bg-gray-50 dark:bg-white/5 hover:bg-coral hover:text-white transition-all">
                                        <MoreVertical className="w-4 h-4" />
                                    </button>
                                </div>
                                <a
                                    href={`mailto:${inquiry.email}?subject=Re: ${inquiry.subject} - HappyJourney`}
                                    className="bg-dark-navy dark:bg-coral text-white text-xs font-bold px-6 py-3 rounded-full hover:scale-105 transition-all"
                                >
                                    Reply via Email
                                </a>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className="py-20 text-center space-y-4">
                        <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-full flex items-center justify-center mx-auto">
                            <MessageSquare className="w-8 h-8 text-gray-300" />
                        </div>
                        <p className="text-brand-muted-text font-serif italic text-xl">No inquiries found matching your search.</p>
                    </div>
                )}
            </div>
        </div>
    )
}
