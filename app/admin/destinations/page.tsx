import { createClient } from '@/lib/supabase/server'
import { addDestination, deleteDestination } from '@/lib/actions'
import { Plus, Trash2, MapPin, Clock } from 'lucide-react'

export default async function AdminDestinations() {
    const supabase = await createClient()
    const { data: destinations } = await supabase.from('destinations').select('*').order('created_at', { ascending: false })

    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-2">Destinations</h2>
                    <p className="text-gray-500">Manage the popular destinations shown on the homepage.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Add Form */}
                <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-premium h-fit">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                            <Plus className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold">Add New Destination</h3>
                    </div>

                    <form action={addDestination} className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Name</label>
                                <input name="name" required className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="e.g. DUBAI" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Country</label>
                                <input name="country" required className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="e.g. UAE" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Description</label>
                            <textarea name="description" required rows={3} className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="Brief overview..." />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Price (Text)</label>
                                <input name="price" required className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="From ₹45,000" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Duration (Text)</label>
                                <input name="duration" required className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="5 Days / 4 Nights" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Image URL</label>
                            <input name="image_url" defaultValue="/dubai.png" className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" />
                        </div>

                        <label className="flex items-center space-x-3 cursor-pointer group">
                            <input type="checkbox" name="is_popular" className="w-5 h-5 rounded border-gray-300 text-coral focus:ring-coral/20" defaultChecked />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-coral transition-colors">Show on Homepage</span>
                        </label>

                        <button type="submit" className="w-full py-4 gradient-green text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:shadow-premium transition-all">
                            Add Destination
                        </button>
                    </form>
                </div>

                {/* List */}
                <div className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Current Destinations ({destinations?.length || 0})</h3>
                    <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 no-scrollbar">
                        {destinations?.map((dest) => (
                            <div key={dest.id} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-between group">
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                                        <img src={dest.image_url || '/dubai.png'} alt="" className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{dest.name}</h4>
                                        <div className="flex items-center space-x-3 text-xs text-gray-400 mt-1">
                                            <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {dest.country}</span>
                                            <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {dest.duration}</span>
                                        </div>
                                    </div>
                                </div>
                                <form action={deleteDestination.bind(null, dest.id)}>
                                    <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        ))}
                        {(!destinations || destinations.length === 0) && (
                            <div className="p-12 text-center border-2 border-dashed border-gray-100 dark:border-white/5 rounded-3xl">
                                <p className="text-gray-400 text-sm italic">No destinations added yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
