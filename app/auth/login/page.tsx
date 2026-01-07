'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'
import { Mail, Lock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const router = useRouter()
    const supabase = createClient()

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(null)

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })

            if (error) throw error

            // Redirect to admin dashboard
            router.push('/admin')
            router.refresh()
        } catch (error: any) {
            setError(error.message || 'Failed to sign in')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f2a44] via-[#1f3a52] to-[#0f2a44] px-4">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#f4b400]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8bc34a]/10 rounded-full blur-3xl" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="relative z-10 w-full max-w-md"
            >
                {/* Back to Home */}
                <Link
                    href="/"
                    className="inline-flex items-center space-x-2 text-white/80 hover:text-white mb-8 transition-colors duration-300"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Home</span>
                </Link>

                {/* Login Card */}
                <div className="bg-white dark:bg-[#0a0a0a] rounded-2xl shadow-2xl p-8">
                    {/* Logo */}
                    <div className="flex items-center justify-center mb-8">
                        <svg
                            width="48"
                            height="48"
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
                    </div>

                    <h1 className="text-2xl font-heading font-bold text-center text-[#111111] dark:text-white mb-2">
                        Admin Login
                    </h1>
                    <p className="text-center text-[#4a5a63] dark:text-[#b0b8c0] mb-8">
                        Sign in to access the admin dashboard
                    </p>

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                            <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                        </div>
                    )}

                    {/* Login Form */}
                    <form onSubmit={handleLogin} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                            >
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4a5a63] dark:text-[#b0b8c0]" />
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-[#e6eaee] dark:border-[#2a2a2a] rounded-lg bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f4b400] transition-all duration-300"
                                    placeholder="admin@happyjourney.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-[#111111] dark:text-white mb-2"
                            >
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#4a5a63] dark:text-[#b0b8c0]" />
                                <input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    className="w-full pl-10 pr-4 py-3 border border-[#e6eaee] dark:border-[#2a2a2a] rounded-lg bg-white dark:bg-[#1a1a1a] text-[#111111] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f4b400] transition-all duration-300"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            variant="primary"
                            size="lg"
                            className="w-full"
                            disabled={loading}
                        >
                            {loading ? 'Signing in...' : 'Sign In'}
                        </Button>
                    </form>
                </div>
            </motion.div>
        </div>
    )
}
