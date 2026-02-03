import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const supabase = await createClient()

    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        redirect("/")
    }

    // Optional: Check if user email matches admin email
    // if (user.email !== 'admin@happyjourney.net') {
    //   redirect('/')
    // }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-navy">
            <nav className="border-b bg-white dark:bg-dark-navy">
                <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                    <h1 className="text-xl font-bold">HappyJourney Admin</h1>
                    <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium">{user.email}</span>
                    </div>
                </div>
            </nav>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    <aside className="lg:col-span-1 space-y-2">
                        {[
                            { title: 'Dashboard', href: '/admin' },
                            { title: 'Destinations', href: '/admin/destinations' },
                            { title: 'Travel Diaries', href: '/admin/journeys' },
                            { title: 'Inquiries', href: '/admin/inquiries' },
                            { title: 'Site Content', href: '/admin/content' },
                        ].map((item) => (
                            <a
                                key={item.title}
                                href={item.href}
                                className="block px-6 py-3 text-sm font-bold uppercase tracking-widest rounded-2xl transition-all hover:bg-coral/10 hover:text-coral"
                            >
                                {item.title}
                            </a>
                        ))}
                        <div className="pt-8 border-t border-gray-100 dark:border-white/10 mt-8">
                            <a href="/" className="block px-6 py-3 text-xs font-bold uppercase tracking-widest text-brand-muted-text hover:text-coral">
                                View Live Site
                            </a>
                        </div>
                    </aside>
                    <main className="lg:col-span-3">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
