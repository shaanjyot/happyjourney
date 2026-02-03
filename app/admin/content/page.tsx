import { createClient } from '@/lib/supabase/server'
import ContentEditor from './ContentEditor'

export default async function AdminContentPage() {
    const supabase = await createClient()
    const { data: sectionContent } = await supabase.from('section_content').select('*')

    return <ContentEditor initialData={sectionContent || []} />
}
