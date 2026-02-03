import { createClient } from '@/lib/supabase/server'
import { addJourney, deleteJourney } from '@/lib/actions'
import { Plus, Trash2, BookOpen } from 'lucide-react'

export default async function AdminJourneys() {
    const supabase = await createClient()
    const { data: journeys } = await supabase.from('completed_journeys').select('*').order('created_at', { ascending: false })

    return (
        <div className="space-y-12">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-serif font-bold mb-2">Travel Diaries</h2>
                    <p className="text-gray-500">Manage the memories from completed journeys.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Add Form */}
                <div className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-premium h-fit">
                    <div className="flex items-center space-x-3 mb-8">
                        <div className="w-10 h-10 rounded-full bg-coral/10 flex items-center justify-center text-coral">
                            <Plus className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl font-bold">New Diary Entry</h3>
                    </div>

                    <form action={addJourney} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Title</label>
                            <input name="title" required className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="e.g. Serbian Explorer" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Tagline</label>
                            <input name="tagline" required className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="Culture • Heritage" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Description</label>
                            <textarea name="description" required rows={4} className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" placeholder="Tell the story..." />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase tracking-widest text-gray-500">Image URL</label>
                            <input name="image_url" defaultValue="/bali.png" className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm" />
                        </div>

                        <button type="submit" className="w-full py-4 gradient-green text-white rounded-2xl font-bold text-sm tracking-widest uppercase hover:shadow-premium transition-all">
                            Save Entry
                        </button>
                    </form>
                </div>

                {/* List */}
                <div className="space-y-6">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400">Current Diaries ({journeys?.length || 0})</h3>
                    <div className="space-y-4 max-h-[800px] overflow-y-auto pr-2 no-scrollbar">
                        {journeys?.map((journey) => (
                            <div key={journey.id} className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 flex items-center justify-between group">
                                <div className="flex items-center space-x-4">
                                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                                        <img src={journey.image_url || '/dubai.png'} alt="" className="object-cover w-full h-full" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">{journey.title}</h4>
                                        <p className="text-xs text-coral font-bold tracking-wider mt-1 uppercase">{journey.tagline}</p>
                                    </div>
                                </div>
                                <form action={deleteJourney.bind(null, journey.id)}>
                                    <button className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl transition-all">
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </form>
                            </div>
                        ))}
                        {(!journeys || journeys.length === 0) && (
                            <div className="p-12 text-center border-2 border-dashed border-gray-100 dark:border-white/5 rounded-3xl">
                                <p className="text-gray-400 text-sm italic">No entries yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
