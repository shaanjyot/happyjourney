'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, MapPin, Search, SlidersHorizontal, Sparkles, Star } from 'lucide-react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Button } from '@/components/ui/Button'
import { getDestinationLabel, getPackagesForDestinationSlug } from '@/lib/trips-data'

type DestinationPackagesClientProps = {
  destinationSlug: string
}

const dayFilters = [
  { key: '3-5', label: '3 to 5' },
  { key: '6-8', label: '6 to 8' },
  { key: '9-11', label: '9 to 11' },
  { key: '12-15', label: '12 to 15' },
  { key: '15+', label: '15+' },
]

const destinationHeroMap: Record<string, string> = {
  dubai: '/dubai.png',
  thailand: '/thailand.png',
  bali: '/bali.png',
  maldives: '/maldives.png',
  singapore: '/singapore.png',
}

export function DestinationPackagesClient({ destinationSlug }: DestinationPackagesClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCities, setSelectedCities] = useState<string[]>([])
  const [selectedHotelRatings, setSelectedHotelRatings] = useState<number[]>([])
  const [activeDayFilter, setActiveDayFilter] = useState<string[]>([])

  const destinationName = getDestinationLabel(destinationSlug)
  const destinationPackages = useMemo(
    () => getPackagesForDestinationSlug(destinationSlug),
    [destinationSlug]
  )

  const cityOptions = useMemo(
    () => Array.from(new Set(destinationPackages.flatMap((tripPackage) => tripPackage.cities))).sort(),
    [destinationPackages]
  )

  const minPackagePrice = useMemo(
    () => (destinationPackages.length ? Math.min(...destinationPackages.map((tripPackage) => tripPackage.priceValue)) : 0),
    [destinationPackages]
  )
  const maxPackagePrice = useMemo(
    () => (destinationPackages.length ? Math.max(...destinationPackages.map((tripPackage) => tripPackage.priceValue)) : 0),
    [destinationPackages]
  )

  const [selectedPriceMin, setSelectedPriceMin] = useState(minPackagePrice)
  const [selectedPriceMax, setSelectedPriceMax] = useState(maxPackagePrice)

  useEffect(() => {
    setSelectedPriceMin(minPackagePrice)
    setSelectedPriceMax(maxPackagePrice)
    setSelectedCities([])
    setSelectedHotelRatings([])
    setActiveDayFilter([])
    setSearchQuery('')
  }, [minPackagePrice, maxPackagePrice, destinationSlug])

  const matchesDurationFilter = (days: number): boolean => {
    if (activeDayFilter.length === 0) return true

    return activeDayFilter.some((rangeKey) => {
      if (rangeKey === '15+') return days >= 15
      const [min, max] = rangeKey.split('-').map((part) => Number(part))
      if (Number.isNaN(min) || Number.isNaN(max)) return true
      return days >= min && days <= max
    })
  }

  const filteredPackages = destinationPackages.filter((tripPackage) => {
    const matchesSearch =
      tripPackage.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tripPackage.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tripPackage.cities.join(' ').toLowerCase().includes(searchQuery.toLowerCase())

    const matchesCities =
      selectedCities.length === 0 ||
      tripPackage.cities.some((city) => selectedCities.includes(city))
    const hotelRating = tripPackage.hotelRating ?? 3
    const matchesHotelRating =
      selectedHotelRatings.length === 0 || selectedHotelRatings.includes(hotelRating)

    const matchesPrice =
      tripPackage.priceValue >= selectedPriceMin &&
      tripPackage.priceValue <= selectedPriceMax
    const matchesDays = matchesDurationFilter(tripPackage.days)

    return matchesSearch && matchesPrice && matchesDays && matchesCities && matchesHotelRating
  })

  const destinationHeroImage =
    destinationHeroMap[destinationSlug.replace(/^destination-/, '')] ||
    destinationPackages[0]?.image ||
    '/hero-bg.png'

  const minimumPrice = destinationPackages.length
    ? Math.min(...destinationPackages.map((tripPackage) => tripPackage.priceValue))
    : 0
  const minimumDays = destinationPackages.length
    ? Math.min(...destinationPackages.map((tripPackage) => tripPackage.days))
    : 0
  const maximumDays = destinationPackages.length
    ? Math.max(...destinationPackages.map((tripPackage) => tripPackage.days))
    : 0

  return (
    <main className="min-h-screen bg-brand-bg dark:bg-gradient-to-b dark:from-[#061220] dark:via-[#0b1e33] dark:to-[#102843]">
      <Header />

      <section className="relative pt-20">
        <div className="relative h-[320px] md:h-[420px] overflow-hidden">
          <Image src={destinationHeroImage} alt={destinationName} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-navy/20 via-dark-navy/40 to-dark-navy/90" />
          <div className="absolute inset-0 section-container flex items-center justify-center text-center">
            <div className="space-y-3 pt-8">
              <p className="text-sm font-semibold tracking-[0.2em] uppercase text-white/80">Luxury | Innovation | Skyline</p>
              <h1 className="text-5xl md:text-8xl font-heading font-bold text-yellow-mid">{destinationName}</h1>
              <p className="text-white/80 max-w-2xl mx-auto">
                Find curated packages, compare durations, and book the best itinerary for {destinationName}.
              </p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 section-container">
            <div className="grid grid-cols-3 gap-2 md:gap-3 pb-4 md:pb-6">
              <div className="bg-black/45 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 md:px-4 md:py-3 text-center">
                <p className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-[0.18em]">Ideal Season</p>
                <p className="text-xs md:text-sm font-bold text-white">Oct - Feb</p>
              </div>
              <div className="bg-black/45 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 md:px-4 md:py-3 text-center">
                <p className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-[0.18em]">Starting From</p>
                <p className="text-xs md:text-sm font-bold text-yellow-mid">
                  ₹{minimumPrice > 0 ? minimumPrice.toLocaleString('en-IN') : 'N/A'}
                </p>
              </div>
              <div className="bg-black/45 backdrop-blur-md border border-white/20 rounded-md px-3 py-2 md:px-4 md:py-3 text-center">
                <p className="text-[9px] md:text-[10px] text-white/70 uppercase tracking-[0.18em]">Duration</p>
                <p className="text-xs md:text-sm font-bold text-white">
                  {minimumDays > 0 ? `${minimumDays}-${maximumDays} Days` : 'N/A'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-container py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-8 items-start">
          <aside className="bg-white dark:bg-[#11253d] rounded-[1.5rem] p-5 md:p-6 h-fit lg:sticky lg:top-28 space-y-6 border border-brand-border dark:border-white/10 shadow-sm dark:shadow-[0_18px_36px_-24px_rgba(0,0,0,0.65)]">
            <div className="rounded-md bg-lime-50 dark:bg-[#18334f] border border-lime-100 dark:border-white/10 px-4 py-3">
              <p className="text-2xl font-heading font-bold text-coral leading-tight">Discover Your Perfect Package</p>
              <p className="text-brand-muted-text dark:text-white/75 text-sm font-semibold leading-tight">Use filters to explore the best options.</p>
            </div>

            <div className="flex items-center gap-3 pb-4 border-b border-brand-border dark:border-white/10">
              <SlidersHorizontal className="w-4 h-4 text-gold" />
              <p className="text-sm font-bold tracking-widest uppercase text-brand-text dark:text-white">Filter Packages</p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold tracking-widest uppercase text-brand-muted-text dark:text-white/60">Search</p>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-muted-text w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search package, city..."
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  className="w-full bg-brand-muted dark:bg-[#0d1b2d] border-none rounded-full h-11 pl-12 pr-4 focus:ring-2 focus:ring-gold text-brand-text dark:text-white font-medium text-sm"
                />
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-heading font-bold text-coral leading-none">Cities</p>
              <div className="space-y-2">
                {cityOptions.map((city) => {
                  const isSelected = selectedCities.includes(city)
                  const cityCount = destinationPackages.filter((tripPackage) => tripPackage.cities.includes(city)).length

                  return (
                    <label key={city} className="flex items-center justify-between cursor-pointer">
                      <span className="flex items-center gap-2 text-sm text-brand-muted-text dark:text-white/80 font-medium">
                        <span className={`w-4 h-4 border rounded-sm ${isSelected ? 'bg-coral border-coral' : 'border-brand-border dark:border-white/25'}`} />
                        {city}
                      </span>
                      <span className="text-brand-muted-text dark:text-white/70 text-sm font-semibold">({cityCount})</span>
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() =>
                          setSelectedCities((prev) =>
                            prev.includes(city)
                              ? prev.filter((item) => item !== city)
                              : [...prev, city]
                          )
                        }
                        className="sr-only"
                      />
                    </label>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-heading font-bold text-coral leading-none">Hotel Rating</p>
              <div className="flex gap-3">
                {[3, 4, 5].map((ratingValue) => {
                  const isActive = selectedHotelRatings.includes(ratingValue)
                  return (
                    <button
                      key={ratingValue}
                      onClick={() =>
                        setSelectedHotelRatings((prev) =>
                          prev.includes(ratingValue)
                            ? prev.filter((item) => item !== ratingValue)
                            : [...prev, ratingValue]
                        )
                      }
                      className={`px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all ${
                        isActive
                          ? 'border-coral text-dark-navy bg-gradient-to-r from-yellow-start to-[#FFD8B7]'
                          : 'border-brand-border dark:border-white/20 text-brand-text dark:text-white bg-white dark:bg-[#0d1b2d] hover:border-coral/50'
                      }`}
                    >
                      {ratingValue} Star
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-heading font-bold text-coral leading-none">Price Range</p>
              <div className="space-y-4">
                <input
                  type="range"
                  min={minPackagePrice}
                  max={maxPackagePrice}
                  step={500}
                  value={selectedPriceMin}
                  onChange={(event) => {
                    const nextValue = Number(event.target.value)
                    setSelectedPriceMin(Math.min(nextValue, selectedPriceMax))
                  }}
                  className="w-full accent-coral"
                />
                <input
                  type="range"
                  min={minPackagePrice}
                  max={maxPackagePrice}
                  step={500}
                  value={selectedPriceMax}
                  onChange={(event) => {
                    const nextValue = Number(event.target.value)
                    setSelectedPriceMax(Math.max(nextValue, selectedPriceMin))
                  }}
                  className="w-full accent-coral"
                />
                <div className="flex items-center justify-between text-base font-semibold">
                  <p className="text-brand-text dark:text-white">Min: ₹{selectedPriceMin.toLocaleString('en-IN')}</p>
                  <p className="text-brand-text dark:text-white">Max: ₹{selectedPriceMax.toLocaleString('en-IN')}</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-2xl font-heading font-bold text-coral leading-none">Duration (in Days)</p>
              <div className="flex flex-wrap gap-3">
                {dayFilters.map((filter) => {
                  const isActive = activeDayFilter.includes(filter.key)
                  return (
                    <button
                      key={filter.key}
                      onClick={() =>
                        setActiveDayFilter((prev) =>
                          prev.includes(filter.key)
                            ? prev.filter((item) => item !== filter.key)
                            : [...prev, filter.key]
                        )
                      }
                      className={`px-3.5 py-2 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                        isActive
                          ? 'border-coral text-dark-navy bg-gradient-to-r from-yellow-start to-[#FFD8B7]'
                          : 'border-coral/60 text-brand-text dark:text-white/80 hover:bg-coral/10'
                      }`}
                    >
                      {filter.label}
                    </button>
                  )
                })}
              </div>
            </div>

            <Button
              onClick={() => {
                setSearchQuery('')
                setSelectedCities([])
                setSelectedHotelRatings([])
                setSelectedPriceMin(minPackagePrice)
                setSelectedPriceMax(maxPackagePrice)
                setActiveDayFilter([])
              }}
              variant="outline"
              className="w-full h-11 border-2 border-coral text-coral hover:bg-coral hover:text-white"
            >
              Reset Filters
            </Button>
          </aside>

          <div className="space-y-6">
            <div className="rounded-[1rem] px-4 py-3 border border-brand-border dark:border-white/10 bg-white dark:bg-[#11253d] flex items-center justify-between">
              <p className="text-sm font-semibold text-brand-muted-text dark:text-white/80">
                Showing <span className="text-gold font-bold">{filteredPackages.length}</span> packages
              </p>
              <p className="text-xs tracking-widest uppercase text-brand-muted-text dark:text-white/70">{destinationName}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {filteredPackages.map((tripPackage) => (
                <Link
                  key={tripPackage.slug}
                  href={`/trips/${tripPackage.slug}`}
                  className="group block bg-white dark:bg-[#11253d] rounded-[1.5rem] border border-brand-border dark:border-white/10 overflow-hidden hover:shadow-xl hover:border-coral/40 transition-all duration-300"
                >
                  <div className="relative min-h-[190px]">
                    <Image
                      src={tripPackage.image}
                      alt={tripPackage.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-5 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2 text-gold">
                          <MapPin className="w-3 h-3" />
                          <span className="text-[10px] font-bold tracking-widest uppercase">{tripPackage.location}</span>
                        </div>
                        <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-brand-muted dark:bg-[#0d1b2d]">
                          <Star className="w-3 h-3 text-gold fill-gold" />
                          <span className="text-[10px] font-semibold text-brand-muted-text dark:text-white/75">{tripPackage.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-heading font-bold text-brand-text dark:text-white group-hover:text-coral transition-colors line-clamp-2">
                        {tripPackage.title}
                      </h3>
                      <p className="text-xs text-brand-muted-text dark:text-white/70">
                        {tripPackage.cities.join(' • ')}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-3 py-3 border-y border-brand-border dark:border-white/10">
                      <div className="inline-flex items-center gap-2 text-brand-muted-text dark:text-white/70">
                        <Calendar className="w-4 h-4 text-brand-muted-text dark:text-white/65" />
                        <span className="text-xs font-semibold">{tripPackage.duration}</span>
                      </div>
                      <div className="inline-flex items-center gap-1.5 text-brand-muted-text dark:text-white/70">
                        <Sparkles className="w-3.5 h-3.5 text-coral" />
                        <span className="text-[10px] font-bold tracking-widest uppercase">{tripPackage.category}</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[10px] tracking-widest uppercase text-brand-muted-text dark:text-white/60">Starting From</p>
                        <p className="text-xl font-bold text-gold">₹{tripPackage.price}</p>
                      </div>
                      <span className="inline-flex items-center justify-center h-10 px-5 rounded-full border-2 border-dark-navy dark:border-white/40 text-dark-navy dark:text-white text-xs font-bold tracking-wider uppercase group-hover:bg-dark-navy group-hover:text-white transition-all">
                        View Details
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {filteredPackages.length === 0 && (
              <div className="glass rounded-[2rem] p-12 text-center space-y-4 bg-white/80 dark:bg-white/5 border border-brand-border dark:border-white/10">
                <h3 className="text-2xl font-heading font-bold text-brand-text dark:text-white">No packages found</h3>
                <p className="text-brand-muted-text dark:text-white/75">
                  Try changing filter values for {destinationName} to view matching packages.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
