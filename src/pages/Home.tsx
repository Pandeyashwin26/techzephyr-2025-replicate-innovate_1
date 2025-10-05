import Hero from '../components/Hero'
import FeaturesSection from '../components/FeaturesSection'
import StatsSection from '../components/StatsSection'
import ShowcaseSection from '../components/ShowcaseSection'
import TestimonialCarousel from '../components/TestimonialCarousel'
import ContactSection from '../components/ContactSection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <StatsSection />
      <ShowcaseSection />
      <TestimonialCarousel />
      <ContactSection />
    </>
  )
}
