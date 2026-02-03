export default function AdminDashboard() {
    return (
        <div className="space-y-8">
            <div>
                <h2 className="text-3xl font-serif font-bold mb-2">Admin Dashboard</h2>
                <p className="text-gray-500">Manage your website content dynamically.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                    { title: 'Destinations', count: 'Manage', href: '/admin/destinations' },
                    { title: 'Travel Diaries', count: 'Manage', href: '/admin/journeys' },
                    { title: 'Hero & Text', count: 'Update', href: '/admin/content' },
                ].map((stat) => (
                    <a
                        key={stat.title}
                        href={stat.href}
                        className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:shadow-premium transition-all group"
                    >
                        <h3 className="text-xs font-bold uppercase tracking-widest text-coral mb-2">{stat.title}</h3>
                        <p className="text-2xl font-serif font-bold mb-4">{stat.count}</p>
                        <div className="text-xs font-bold flex items-center text-gray-400 group-hover:text-coral transition-colors">
                            Go to section →
                        </div>
                    </a>
                ))}
            </div>

            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-500/20">
                <h3 className="text-lg font-bold text-blue-900 dark:text-blue-100 mb-2">Quick Start Guide</h3>
                <p className="text-sm text-blue-800 dark:text-blue-200 leading-relaxed">
                    1. Use <strong>Destinations</strong> to add or edit the cards in the "Popular Destinations" section. <br />
                    2. <strong>Travel Diaries</strong> allows you to update the memories in the "Completed Journeys" section. <br />
                    3. <strong>Site Content</strong> is for editing text like the Hero title, descriptions, and CTA text across the home page.
                </p>
            </div>
        </div>
    )
}
