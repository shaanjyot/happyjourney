import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { AboutSection } from '@/components/sections/AboutSection'
import { PopularDestinations } from '@/components/sections/PopularDestinations'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { CompletedJourneys } from '@/components/sections/CompletedJourneys'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { VisaAssistance } from '@/components/sections/VisaAssistance'
import { CarRentalSection } from '@/components/sections/CarRentalSection'
import { CTASection } from '@/components/sections/CTASection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#020617]">
      <Header />
      <HeroSection />
      <AboutSection />
      <PopularDestinations />
      <ServicesSection />
      <CompletedJourneys />
      <WhyChooseUs />
      <VisaAssistance />
      <CarRentalSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
