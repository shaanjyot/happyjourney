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
                    <aside className="lg:col-span-1 space-y-1">
                        <a href="/admin" className="block px-4 py-2 text-sm font-medium rounded-lg bg-coral text-white">Dashboard</a>
                        <a href="/admin/destinations" className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-white/5">Destinations</a>
                        <a href="/admin/journeys" className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-white/5">Travel Diaries</a>
                        <a href="/admin/content" className="block px-4 py-2 text-sm font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-white/5">Site Content</a>
                    </aside>
                    <main className="lg:col-span-3">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}
