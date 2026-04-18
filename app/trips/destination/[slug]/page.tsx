import { notFound } from 'next/navigation'
import { getPackagesForDestinationSlug } from '@/lib/trips-data'
import { DestinationPackagesClient } from './DestinationPackagesClient'

type DestinationPageProps = {
  params: Promise<{ slug: string }>
}

export default async function DestinationPage({ params }: DestinationPageProps) {
  const { slug } = await params
  const packages = getPackagesForDestinationSlug(slug)

  if (packages.length === 0) {
    notFound()
  }

  return <DestinationPackagesClient destinationSlug={slug} />
}
