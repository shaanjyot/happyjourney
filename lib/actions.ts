'use server'

import { createClient } from '@/lib/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addDestination(formData: FormData) {
    const supabase = await createClient()

    const data = {
        name: formData.get('name') as string,
        country: formData.get('country') as string,
        description: formData.get('description') as string,
        image_url: formData.get('image_url') as string,
        duration: formData.get('duration') as string,
        price: formData.get('price') as string,
        is_popular: formData.get('is_popular') === 'on',
    }

    const { error } = await supabase
        .from('destinations')
        .insert([data])

    if (error) throw error

    revalidatePath('/')
    revalidatePath('/admin/destinations')
}

export async function deleteDestination(id: string) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('destinations')
        .delete()
        .eq('id', id)

    if (error) throw error

    revalidatePath('/')
    revalidatePath('/admin/destinations')
}

export async function updateSectionContent(sectionId: string, content: any) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('section_content')
        .upsert({ section_id: sectionId, content, updated_at: new Date().toISOString() })

    if (error) throw error

    revalidatePath('/')
}

export async function addJourney(formData: FormData) {
    const supabase = await createClient()

    const data = {
        title: formData.get('title') as string,
        tagline: formData.get('tagline') as string,
        description: formData.get('description') as string,
        image_url: formData.get('image_url') as string,
    }

    const { error } = await supabase
        .from('completed_journeys')
        .insert([data])

    if (error) throw error

    revalidatePath('/')
    revalidatePath('/admin/journeys')
}

export async function deleteJourney(id: string) {
    const supabase = await createClient()
    const { error } = await supabase
        .from('completed_journeys')
        .delete()
        .eq('id', id)

    if (error) throw error

    revalidatePath('/')
    revalidatePath('/admin/journeys')
}
