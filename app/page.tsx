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
import { BlogSection } from '@/components/sections/BlogSection'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gradient-to-b dark:from-[#071424] dark:via-[#0d223a] dark:to-[#14304e]">
      <Header />
      <HeroSection />
      <PopularDestinations />
      <TravelVibesSection />
      <AboutSection />
      <ServicesSection />
      <CompletedJourneys />
      <WhyChooseUs />
      <BlogSection />
      <TestimonialsSection />
      <PartnersSection />
      <CTASection />
      <Footer />
    </main>
  )
}
