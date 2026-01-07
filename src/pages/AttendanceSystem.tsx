import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Camera,
  Fingerprint,
  Bell,
  Smartphone,
  Clock,
  BarChart3,
  Play,
  Puzzle
} from "lucide-react";

const features = [
  {
    icon: Camera,
    title: "AI Facial Recognition Attendance",
    description: "AI-driven facial recognition identifies students in milliseconds, even with masks or accessories, ensuring contactless and error-free attendance.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Attendance Integration",
    description: "Seamless support for fingerprint scanners and RFID cards for reliable, multi-factor attendance tracking.",
  },
  {
    icon: Bell,
    title: "Instant Parent Notifications",
    description: "Automatic SMS and app alerts notify parents in real time when students enter or exit the school campus.",
  },
  {
    icon: Smartphone,
    title: "Mobile Attendance App",
    description: "Dedicated mobile apps for teachers, students, and parents with live attendance status, history, and insights.",
  },
  {
    icon: Clock,
    title: "Late Arrival & Early Exit Tracking",
    description: "Smart rules detect late entries and early exits with configurable grace periods and automated escalation.",
  },
  {
    icon: BarChart3,
    title: "Advanced Attendance Reports",
    description: "Comprehensive attendance analytics with trend insights, absence patterns, and one-click report exports.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Capture",
    description: "Cameras or biometric devices capture student identity as they enter the premises.",
  },
  {
    step: "02",
    title: "Verify",
    description: "AI algorithms verify identity against the database in under 500 milliseconds.",
  },
  {
    step: "03",
    title: "Record",
    description: "Attendance is automatically logged with timestamp, location, and verification method.",
  },
  {
    step: "04",
    title: "Notify",
    description: "Parents and administrators receive instant notifications based on configured rules.",
  },
];




import SEO from "@/components/SEO";

const AttendanceSystem = () => {
  return (
    <main className="min-h-screen">
      <SEO
        title="AI Attendance System - Facial Recognition"
        description="Automate diverse attendance tracking with our AI-powered facial recognition system. Secure, fast, and accurate attendance for students and staff."
      />
      <Navbar />

      {/* Hero */}
      <section className="h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollAnimation animation="fade-right">
                <span className="inline-block text-sm font-semibold text-accent bg-accent/10 px-4 py-2 rounded-full mb-4">
                  Flagship Product
                </span>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={100}>
                <h1 className="font-heading text-4xl md:text-5xl font-bold mb-5">
                  Smart Attendance{" "}
                  <span className="text-gradient">Monitoring System</span>
                </h1>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={200}>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  An AI-powered school attendance system built for accuracy, speed, and trust. Automate
                  attendance using facial recognition and biometrics, eliminate proxy entries, reduce staff workload,
                  and keep parents updated in real time.
                </p>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-right" delay={300}>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-cta">
                    Request Demo
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                  <button className="btn-outline group">
                    <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    Watch Video
                  </button>
                </div>
              </ScrollAnimation>
            </div>

            {/* Dashboard Preview */}
            <ScrollAnimation animation="fade-left" delay={200}>
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-border bg-background transition-transform duration-500">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover scale-[1.35]"
                >
                  <source src="/videos/attendance.mp4" type="video/mp4" />
                </video>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FEF3E2' }}>
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              How It <span className="text-gradient">Works</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              From capture to notification in under 2 seconds. Here's the seamless flow.
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, index) => (
              <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                <div className="relative text-center card-elevated p-6 h-full">
                  <div className="text-5xl font-heading font-bold text-gradient mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Connector Line */}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-6 -right-3 w-6 h-px bg-primary/20" />
                  )}
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <ScrollAnimation animation="fade-up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
              Powerful Attendance Management <span className="text-gradient">Features</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
              Everything schools need for fast, accurate, and secure student attendance—powered by AI.
            </p>
          </ScrollAnimation>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((feature, index) => (
              <ScrollAnimation key={index} animation="scale" delay={index * 80}>
                <div className="card-elevated p-5 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits - Why Schools Love It */}
      <section className="py-12 md:py-16 relative overflow-hidden">
        {/* Subtle Background Elements to give it a 'Theme' feel without boxing */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 radial-gradient blur-3xl rounded-full pointer-events-none opacity-50" />

        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <ScrollAnimation animation="fade-up">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why Schools <span className="text-gradient">Love It</span>
              </h2>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={100}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Trusted by 500+ schools, our AI-powered attendance system delivers instant results with zero
                manual effort and maximum accuracy.
              </p>
            </ScrollAnimation>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 text-center">
            <ScrollAnimation animation="fade-up" delay={100} className="col-span-1">
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-3">
                  100%
                </div>
                <div className="h-1 w-12 bg-primary/30 rounded-full mb-4" />
                <h3 className="font-bold text-foreground mb-1">Accurate</h3>
                <p className="text-sm text-muted-foreground">Proxy-free attendance</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={200} className="col-span-1">
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-3">
                  30+
                </div>
                <div className="h-1 w-12 bg-primary/30 rounded-full mb-4" />
                <h3 className="font-bold text-foreground mb-1">Hours Saved</h3>
                <p className="text-sm text-muted-foreground">Admin time per month</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={300} className="col-span-1">
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-3">
                  85%
                </div>
                <div className="h-1 w-12 bg-primary/30 rounded-full mb-4" />
                <h3 className="font-bold text-foreground mb-1">Higher Engagement</h3>
                <p className="text-sm text-muted-foreground">Real-time alerts</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={400} className="col-span-1">
              <div className="flex flex-col items-center">
                <div className="text-5xl md:text-6xl font-heading font-bold text-gradient mb-3">
                  40%
                </div>
                <div className="h-1 w-12 bg-primary/30 rounded-full mb-4" />
                <h3 className="font-bold text-foreground mb-1">Less Late Arrivals</h3>
                <p className="text-sm text-muted-foreground">Improved discipline</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fade-up" delay={500} className="col-span-2 lg:col-span-1 flex justify-center">
              <div className="flex flex-col items-center">
                <div className="h-[3.75rem] md:h-[4.5rem] flex items-center justify-center mb-3">
                  <Puzzle className="w-14 h-14 md:w-16 md:h-16 text-primary" />
                </div>
                <div className="h-1 w-12 bg-primary/30 rounded-full mb-4" />
                <h3 className="font-bold text-foreground mb-1">Seamless</h3>
                <p className="text-sm text-muted-foreground">ERP Integration</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default AttendanceSystem;
