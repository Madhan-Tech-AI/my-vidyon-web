import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import WhyChooseSection from "@/components/WhyChooseSection";
import { Target, Eye, Heart, Award, Users, Building2, GraduationCap, Globe } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Mission",
    description: "To help schools run smarter every day by delivering simple, secure ERP solutions that reduce admin workload and create more time for teaching and student development.",
  },
  {
    icon: Eye,
    title: "Vision",
    description: "To be the most trusted school ERP platform globally, enabling digital-first schools that are efficient, connected, and future ready.",
  },
  {
    icon: Heart,
    title: "Values",
    description: "We stand for integrity in data, innovation in learning systems, and meaningful impact in classrooms. Our technology is built to support educators, students, and parents seamlessly.",
  },
];

const stats = [
  { icon: Building2, value: "500+", label: "Institutions Served" },
  { icon: Users, value: "50,000+", label: "Active Daily Users" },
  { icon: GraduationCap, value: "1M+", label: "Students Managed" },
  { icon: Globe, value: "15+", label: "Countries" },
];

const milestones = [
  { year: "2018", title: "Founded", description: "My Vidyon was born from a vision to transform educational management." },
  { year: "2019", title: "First Product", description: "Launched our flagship Attendance Monitoring System." },
  { year: "2020", title: "Rapid Growth", description: "Expanded to 100+ institutions across 5 countries." },
  { year: "2022", title: "Full ERP Suite", description: "Released comprehensive ERP platform with 12 integrated modules." },
  { year: "2024", title: "AI Integration", description: "Introduced AI-powered analytics and facial recognition features." },
];

import SEO from "@/components/SEO";

const About = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="About Us - Transforming Education Technology"
        description="Learn about My Vidyon's mission to help schools run smarter. We provide simple, secure ERP solutions that reduce admin workload and empower educators."
      />
      <Navbar />


      {/* Hero */}
      <section className="flex items-center relative overflow-hidden py-16 md:py-20 mt-16 md:mt-0">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-custom relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <ScrollAnimation animation="fade-right">
                <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                  About Us
                </span>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={100}>
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                  Smart Technology <br />for{" "}
                  <span className="text-gradient">Smarter Schools</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                  We build intelligent school ERP solutions that simplify administration and strengthen
                  communication between school leaders, teachers, students, and parents all on one secure
                  platform.
                </p>
              </ScrollAnimation>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <ScrollAnimation animation="fade-left" delay={300}>
                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-2xl opacity-50 animate-pulse-subtle" />
                  <img
                    src="/about-hero.png"
                    alt="Transforming Education"
                    className="relative w-full max-w-sm lg:max-w-md h-auto object-contain z-10 drop-shadow-2xl"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose My Vidyon */}
      <WhyChooseSection />

      {/* Mission, Vision, Values */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="card-elevated p-6 text-center h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{item.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* Timeline */}


      {/* Why Choose Us */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <ScrollAnimation animation="fade-up">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Our Advantage
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={100}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                  Why Schools <span className="text-gradient">Choose Us</span>
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  Every school is different and our ERP adapts, not forces change.
                  We build simple, scalable solutions backed by real education experience.
                </p>
              </ScrollAnimation>
            </div>

            {/* Benefits - Vertical Timeline Style */}
            <div className="space-y-6">
              {[
                {
                  number: "01",
                  title: "Built around real school workflows",
                  description: "Our platform mirrors how schools actually operate, reducing training time and increasing adoption rates."
                },
                {
                  number: "02",
                  title: "Smooth onboarding with full training support",
                  description: "Comprehensive training programs and dedicated support ensure your team is confident from day one."
                },
                {
                  number: "03",
                  title: "Regular updates driven by school feedback",
                  description: "We listen to educators and continuously improve based on real-world usage and suggestions."
                },
                {
                  number: "04",
                  title: "Transparent pricing with zero hidden costs",
                  description: "Clear, straightforward pricing with no surprises. What you see is what you pay."
                },
              ].map((item, index) => (
                <ScrollAnimation key={index} animation="fade-up" delay={300 + index * 100}>
                  <div className="group relative">
                    {/* Main Card */}
                    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-background via-background/95 to-background/90 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-[0_0_30px_rgba(250,177,47,0.25)] transition-all duration-500 overflow-hidden">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Glowing orb */}
                      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-primary/10 blur-3xl group-hover:bg-primary/20 transition-all duration-500" />

                      <div className="relative flex items-start gap-6">
                        {/* Large Number */}
                        <div className="relative shrink-0">
                          <div className="text-7xl md:text-8xl font-heading font-black text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                            {item.number}
                          </div>
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg">
                              <Award className="w-8 h-8 text-primary" />
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 pt-2">
                          <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500" />
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>


      <CTASection />
      <Footer />
    </main >
  );
};

export default About;
