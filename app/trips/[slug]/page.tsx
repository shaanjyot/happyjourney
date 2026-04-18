import { notFound, redirect } from "next/navigation"
import {
  getPackagesForDestinationSlug,
  getTripByExactSlug,
  getTripBySlug,
} from "@/lib/trips-data"
import { TripDetailsClient } from "./TripDetailsClient"

type TripDetailsPageProps = {
  params: Promise<{ slug: string }>
}

export default async function TripDetailsPage({ params }: TripDetailsPageProps) {
  const { slug } = await params
  const exactTrip = getTripByExactSlug(slug)
  const destinationPackages = getPackagesForDestinationSlug(slug)

  if (!exactTrip && destinationPackages.length > 0) {
    redirect(`/trips/destination/${slug}`)
  }

  const trip = getTripBySlug(slug)

  if (!trip) {
    notFound()
  }

  return <TripDetailsClient trip={trip} />
}
