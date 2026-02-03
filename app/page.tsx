import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { PopularDestinations } from '@/components/sections/PopularDestinations'
import { TravelVibesSection } from '@/components/sections/TravelVibesSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { CompletedJourneys } from '@/components/sections/CompletedJourneys'
import { CTASection } from '@/components/sections/CTASection'
import { PartnersSection } from '@/components/sections/PartnersSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-dark-navy">
      <Header />
      <HeroSection />
      <PopularDestinations />
      <TravelVibesSection />
      <AboutSection />
      <ServicesSection />
      <CompletedJourneys />
      <WhyChooseUs />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
