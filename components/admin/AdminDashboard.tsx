'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { LogOut, Users, MapPin, Image, Mail, LayoutDashboard } from 'lucide-react'
import type { User } from '@supabase/supabase-js'

interface AdminDashboardProps {
    user: User
}

export default function AdminDashboard({ user }: AdminDashboardProps) {
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const supabase = createClient()

    const handleSignOut = async () => {
        setLoading(true)
        await supabase.auth.signOut()
        router.push('/auth/login')
        router.refresh()
    }

    const stats = [
        { name: 'Total Trips', value: '48', icon: MapPin, color: 'bg-blue-500' },
        { name: 'Active Users', value: '1,234', icon: Users, color: 'bg-green-500' },
        { name: 'Gallery Images', value: '326', icon: Image, color: 'bg-purple-500' },
        { name: 'Inquiries', value: '89', icon: Mail, color: 'bg-orange-500' },
    ]

    return (
        <div className="min-h-screen bg-[#f7f8f9] dark:bg-[#0a0a0a]">
            {/* Header */}
            <header className="bg-white dark:bg-[#1a1a1a] border-b border-[#e6eaee] dark:border-[#2a2a2a]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <svg
                                width="40"
                                height="40"
                                viewBox="0 0 40 40"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle cx="20" cy="20" r="18" fill="#0f2a44" />
                                <path
                                    d="M20 8L24 16H28L22 22L24 30L20 26L16 30L18 22L12 16H16L20 8Z"
                                    fill="#f4b400"
                                />
                            </svg>
                            <div>
                                <h1 className="text-xl font-heading font-bold text-[#111111] dark:text-white">
                                    Admin Dashboard
                                </h1>
                                <p className="text-sm text-[#4a5a63] dark:text-[#b0b8c0]">
                                    Welcome back, {user.email}
                                </p>
                            </div>
                        </div>
                        <Button
                            onClick={handleSignOut}
                            variant="outline"
                            disabled={loading}
                            className="flex items-center space-x-2"
                        >
                            <LogOut className="w-4 h-4" />
                            <span>{loading ? 'Signing out...' : 'Sign Out'}</span>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {stats.map((stat) => {
                        const Icon = stat.icon
                        return (
                            <div
                                key={stat.name}
                                className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                                        <Icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>
                                <h3 className="text-3xl font-heading font-bold text-[#111111] dark:text-white mb-1">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-[#4a5a63] dark:text-[#b0b8c0]">
                                    {stat.name}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Quick Actions */}
                <div className="bg-white dark:bg-[#1a1a1a] rounded-2xl p-8 shadow-md">
                    <h2 className="text-2xl font-heading font-bold text-[#111111] dark:text-white mb-6">
                        Quick Actions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <button className="p-6 border-2 border-[#e6eaee] dark:border-[#2a2a2a] rounded-xl hover:border-[#f4b400] transition-colors duration-300 text-left">
                            <LayoutDashboard className="w-8 h-8 text-[#f4b400] mb-3" />
                            <h3 className="font-heading font-semibold text-[#111111] dark:text-white mb-1">
                                Manage Trips
                            </h3>
                            <p className="text-sm text-[#4a5a63] dark:text-[#b0b8c0]">
                                Add, edit, or remove travel packages
                            </p>
                        </button>
                        <button className="p-6 border-2 border-[#e6eaee] dark:border-[#2a2a2a] rounded-xl hover:border-[#f4b400] transition-colors duration-300 text-left">
                            <Image className="w-8 h-8 text-[#f4b400] mb-3" />
                            <h3 className="font-heading font-semibold text-[#111111] dark:text-white mb-1">
                                Gallery Management
                            </h3>
                            <p className="text-sm text-[#4a5a63] dark:text-[#b0b8c0]">
                                Upload and organize gallery images
                            </p>
                        </button>
                        <button className="p-6 border-2 border-[#e6eaee] dark:border-[#2a2a2a] rounded-xl hover:border-[#f4b400] transition-colors duration-300 text-left">
                            <Mail className="w-8 h-8 text-[#f4b400] mb-3" />
                            <h3 className="font-heading font-semibold text-[#111111] dark:text-white mb-1">
                                View Inquiries
                            </h3>
                            <p className="text-sm text-[#4a5a63] dark:text-[#b0b8c0]">
                                Respond to customer messages
                            </p>
                        </button>
                    </div>
                </div>

                {/* Info Box */}
                <div className="mt-8 bg-[#f4b400]/10 border border-[#f4b400]/20 rounded-2xl p-6">
                    <h3 className="font-heading font-semibold text-[#0f2a44] dark:text-[#f4b400] mb-2">
                        🎉 Welcome to HappyJourney Admin
                    </h3>
                    <p className="text-[#4a5a63] dark:text-[#b0b8c0]">
                        This is your admin dashboard. From here, you can manage all aspects of the HappyJourney website.
                        The full CRUD functionality for trips, destinations, gallery, and user management will be implemented here.
                    </p>
                </div>
            </main>
        </div>
    )
}
