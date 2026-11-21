import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustHighlights from "@/components/TrustHighlights";
import ServicesSection from "@/components/ServicesSection";
import IssueSelector from "@/components/IssueSelector";
import PricingSection from "@/components/PricingSection";
import BrandsSection from "@/components/BrandsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import ReviewsSection from "@/components/ReviewsSection";
import FAQSection from "@/components/FAQSection";
import BookingForm from "@/components/BookingForm";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileContactBar from "@/components/MobileContactBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TrustHighlights />
        <ServicesSection />
        <IssueSelector />
        <PricingSection />
        <BrandsSection />
        <WhyChooseUs />
        <ProcessSection />
        <ServiceAreasSection />
        <ReviewsSection />
        <FAQSection />
        <BookingForm />
        <FinalCTA />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
