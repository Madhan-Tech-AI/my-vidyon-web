import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import {
  Zap,
  Lock,
  Cloud,
  Headphones,
  RefreshCw,
  Settings,
  Palette,
  Globe,
  Smartphone,
  Database,
  Code,
  LineChart,
  Users,
  Clock,
  CheckCircle2
} from "lucide-react";

const coreFeatures = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description: "Sub 200ms response times across all modules, even during peak school hours.",
    features: ["Optimized cloud infrastructure", "High-speed data processing", "Smooth, lag-free user experience"],
  },
  {
    icon: Lock,
    title: "Enterprise Grade Security",
    description: "Advanced protection built for sensitive school and student data.",
    features: ["256-bit data encryption", "Role-based access control", "Global data protection compliance"],
  },
  {
    icon: Cloud,
    title: "Cloud Native Reliability",
    description: "Access your school ERP anytime, anywhere with guaranteed availability.",
    features: ["99.99% uptime SLA", "Automatic failover", "Secure cloud hosting"],
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Always-on assistance to keep your school running without disruption.",
    features: ["24/7 phone, email & chat support", "Fast issue resolution", "Dedicated account managers"],
  },
  {
    icon: RefreshCw,
    title: "Automatic Updates",
    description: "Stay up to date without downtime or manual upgrades.",
    features: ["Monthly feature releases", "Performance enhancements", "Zero service interruption"],
  },
  {
    icon: Settings,
    title: "Complete Customization",
    description: "Configure the ERP to match your school’s workflow and brand.",
    features: ["100+ configuration options", "Flexible module settings", "Custom branding support"],
  },
];

const technicalFeatures = [
  {
    icon: Database,
    title: "Robust Data Management",
    description: "Secure, scalable database with automated backups and disaster recovery.",
  },
  {
    icon: Code,
    title: "Open API",
    description: "RESTful APIs for seamless integration with existing systems and third-party tools.",
  },
  {
    icon: Globe,
    title: "Multi-Language Support",
    description: "Full localization support with 15+ languages and regional date/time formats.",
  },
  {
    icon: Smartphone,
    title: "Native Mobile Apps",
    description: "Dedicated iOS and Android apps for teachers, students, and parents.",
  },
  {
    icon: Palette,
    title: "White-Label Options",
    description: "Complete branding customization including logo, colors, and domain.",
  },
  {
    icon: LineChart,
    title: "Advanced Analytics",
    description: "AI-powered insights with predictive analytics and trend forecasting.",
  },
];

const comparisonPoints = [
  { feature: "Real-time Sync", us: true, others: false },
  { feature: "AI-Powered Analytics", us: true, others: false },
  { feature: "Native Mobile Apps", us: true, others: true },
  { feature: "Offline Mode", us: true, others: false },
  { feature: "Custom Branding", us: true, others: false },
  { feature: "24/7 Support", us: true, others: false },
  { feature: "API Access", us: true, others: true },
  { feature: "No Setup Fee", us: true, others: false },
];

import SEO from "@/components/SEO";

const Features = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="Key Features - Intelligent School Management"
        description="Discover the powerful features of My Vidyon: Real-time analytics, mobile apps, secure cloud storage, and seamless communication tools."
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-custom relative text-center">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Platform Features
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 max-w-4xl mx-auto">
              Modern School ERP, <span className="text-gradient">Built for Real Classrooms</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A powerful, easy to use school ERP platform designed to simplify administration, improve
              academic management, and strengthen parent-school communication all in one system.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Core <span className="text-gradient">Capabilities</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              The Technology Backbone of Our School ERP Platform. These core features power every module of our school ERP, ensuring speed, security, reliability, and scalability for modern schools.
            </p>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {coreFeatures.map((feature, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 80}>
                <div className="group card-elevated p-6 h-full hover:border-primary/30">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
        {/* Decorative background elements */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full blur-3xl animate-pulse-subtle" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container-custom relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <ScrollAnimation animation="fade-up">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 mb-6 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-primary/70 animate-pulse" />
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    Technology Stack
                  </span>
                </div>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={100}>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-5">
                  Technical <span className="text-gradient">Excellence</span>
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={200}>
                <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
                  Under the hood, our platform is built on cutting-edge technology for reliability and scale.
                </p>
              </ScrollAnimation>
            </div>

            {/* Bento Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
              {technicalFeatures.map((feature, index) => (
                <ScrollAnimation
                  key={index}
                  animation="fade-up"
                  delay={300 + index * 100}
                >
                  <div
                    className={`group relative h-full ${index === 0 ? 'md:col-span-2' : ''
                      } ${index === 3 ? 'lg:col-span-2' : ''}`}
                  >
                    {/* Card */}
                    <div className="relative h-full p-6 rounded-3xl bg-gradient-to-br from-background/90 via-background/80 to-background/70 backdrop-blur-xl border-2 border-primary/20 hover:border-primary/40 shadow-lg hover:shadow-[0_0_40px_rgba(250,177,47,0.3)] transition-all duration-500 overflow-hidden">
                      {/* Animated gradient mesh */}
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      {/* Floating orb */}
                      <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-2xl group-hover:scale-150 transition-transform duration-700" />

                      <div className="relative">
                        {/* Icon Container */}
                        <div className="relative mb-4 inline-block">
                          {/* Rotating background shapes */}
                          <div className="absolute inset-0 bg-primary/10 rounded-2xl rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                          <div className="absolute inset-0 bg-primary/5 rounded-2xl -rotate-12 group-hover:rotate-0 transition-transform duration-700" />

                          {/* Icon bubble */}
                          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border-2 border-primary/30 flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 shadow-lg">
                            <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="font-heading text-lg md:text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>

                      {/* Bottom gradient accent */}
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
    </main>
  );
};

export default Features;
