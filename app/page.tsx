import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { TrajectorySection } from "@/components/trajectory-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { MethodologySection } from "@/components/methodology-section"
import { BookSection } from "@/components/book-section"
import { BlogSection } from "@/components/blog-section"
import { LocationSection } from "@/components/location-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { RecommendationSection } from "@/components/recommendation-section"
import { TherapyAbroadSection } from "@/components/therapy-abroad-section"
import { CareerAssessmentSection } from "@/components/career-assessment-section"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TherapyAbroadSection />
        <TrajectorySection />
        <SpecialtiesSection />
        <MethodologySection />
        <CareerAssessmentSection />
        <BookSection />
        <RecommendationSection />
        <BlogSection />
        <LocationSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
