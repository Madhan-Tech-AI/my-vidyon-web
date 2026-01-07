import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ERPSection from "@/components/ERPSection";


import CTASection from "@/components/CTASection";

import SEO from "@/components/SEO";

const Index = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Leading ERP Solutions for Educational Institutions"
        description="Transform your institution with My Vidyon's intelligent ERP monitoring, student management, and powerful analytics. Trusted by 500+ schools."
      />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ERPSection />

      <CTASection />
      <Footer />
    </main >
  );
};

export default Index;
