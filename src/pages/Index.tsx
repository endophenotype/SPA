import HeroSection from '@/components/spa/HeroSection';
import BenefitsSection from '@/components/spa/BenefitsSection';
import ServicesSection from '@/components/spa/ServicesSection';
import GallerySection from '@/components/spa/GallerySection';
import AboutSection from '@/components/spa/AboutSection';
import GiftCertificateSection from '@/components/spa/GiftCertificateSection';
import TestimonialsSection from '@/components/spa/TestimonialsSection';
import BookingSection from '@/components/spa/BookingSection';
import ContactsSection from '@/components/spa/ContactsSection';
import Footer from '@/components/spa/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BenefitsSection />
      <ServicesSection />
      <GallerySection />
      <AboutSection />
      <GiftCertificateSection />
      <TestimonialsSection />
      <BookingSection />
      <ContactsSection />
      <Footer />
    </div>
  );
};

export default Index;
