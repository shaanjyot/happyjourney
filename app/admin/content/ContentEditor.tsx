'use client'

import { useState } from 'react'
import { updateSectionContent } from '@/lib/actions'
import { Save, AlertCircle } from 'lucide-react'

const sections = [
    {
        id: 'hero',
        title: 'Hero Section',
        fields: [
            { key: 'title', label: 'Main Title', type: 'text' },
            { key: 'subtitle', label: 'Coral Text (Middle)', type: 'text' },
            { key: 'description', label: 'Description', type: 'textarea' },
        ]
    },
    {
        id: 'about',
        title: 'About Section',
        fields: [
            { key: 'title', label: 'Section Title', type: 'text' },
            { key: 'description1', label: 'Paragraph 1', type: 'textarea' },
            { key: 'description2', label: 'Paragraph 2', type: 'textarea' },
        ]
    }
]

export default function AdminContent({ initialData }: { initialData: any[] }) {
    const [data, setData] = useState<any>(
        initialData.reduce((acc, item) => ({ ...acc, [item.section_id]: item.content }), {})
    )
    const [saving, setSaving] = useState<string | null>(null)

    const handleUpdate = async (sectionId: string) => {
        setSaving(sectionId)
        try {
            await updateSectionContent(sectionId, data[sectionId])
            alert('Updated successfully!')
        } catch (err) {
            console.error(err)
            alert('Error updating content')
        } finally {
            setSaving(null)
        }
    }

    const handleChange = (sectionId: string, key: string, value: string) => {
        setData((prev: any) => ({
            ...prev,
            [sectionId]: {
                ...(prev[sectionId] || {}),
                [key]: value
            }
        }))
    }

    return (
        <div className="space-y-12">
            <div>
                <h2 className="text-3xl font-serif font-bold mb-2">Site Content</h2>
                <p className="text-gray-500">Edit text and headers across all sections of the homepage.</p>
            </div>

            <div className="space-y-8">
                {sections.map((section) => (
                    <div key={section.id} className="p-8 rounded-3xl bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 shadow-premium">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-xl font-bold">{section.title}</h3>
                            <button
                                onClick={() => handleUpdate(section.id)}
                                disabled={saving === section.id}
                                className={`flex items-center space-x-2 px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-widest transition-all ${saving === section.id ? 'bg-gray-100 text-gray-400' : 'bg-coral text-white hover:opacity-90'
                                    }`}
                            >
                                <Save className="w-4 h-4" />
                                <span>{saving === section.id ? 'Saving...' : 'Save Changes'}</span>
                            </button>
                        </div>

                        <div className="grid grid-cols-1 gap-6">
                            {section.fields.map((field) => (
                                <div key={field.key} className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-gray-500">{field.label}</label>
                                    {field.type === 'textarea' ? (
                                        <textarea
                                            value={data[section.id]?.[field.key] || ''}
                                            onChange={(e) => handleChange(section.id, field.key, e.target.value)}
                                            rows={4}
                                            className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm"
                                        />
                                    ) : (
                                        <input
                                            type="text"
                                            value={data[section.id]?.[field.key] || ''}
                                            onChange={(e) => handleChange(section.id, field.key, e.target.value)}
                                            className="w-full bg-gray-50 dark:bg-dark-navy border border-transparent focus:border-coral/20 rounded-xl py-3 px-4 text-sm"
                                        />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-100 dark:border-amber-500/20">
                <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <p className="text-sm text-amber-800 dark:text-amber-200">
                    <strong>Pro-tip:</strong> These changes are applied instantly. Make sure you don't accidentally delete important text. If you want to revert, you'll need to manually paste the old text back.
                </p>
            </div>
        </div>
    )
}
