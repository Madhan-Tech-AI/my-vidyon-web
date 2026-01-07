import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import {
  GraduationCap,
  ClipboardList,
  Users2,
  BarChart3,
  CreditCard,
  MessageSquare,
  Calendar,
  FileText,
  Shield,
} from "lucide-react";

const modules = [
  {
    icon: GraduationCap,
    title: "Academic Management",
    description: "Manage curriculum, classes, exams, and grades from one smart academic control center.",
    features: ["Curriculum planning", "Automated timetables", "Exam & result management", "Performance analytics"],
  },
  {
    icon: ClipboardList,
    title: "Attendance Monitoring",
    description: "Accurate, real-time student attendance using AI-powered facial recognition and biometrics.",
    features: ["Facial recognition & biometrics", "Live attendance tracking", "Instant parent alerts", "Detailed attendance reports"],
    highlight: true,
  },
  {
    icon: Users2,
    title: "Student Information System",
    description: "A secure, centralized system for complete student data management.",
    features: ["Digital admissions & enrollment", "Academic & personal records", "Health & document storage", "Alumni tracking"],
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data driven dashboards that help school leaders make smarter decisions.",
    features: ["Custom dashboards", "Predictive insights", "Trend analysis", "Easy data exports"],
  },
  {
    icon: CreditCard,
    title: "Fee Management",
    description: "Simplified school fee collection with automation and transparency.",
    features: ["Online fee payments", "Automated receipts", "Fee reminders", "Financial reports"],
  },
  {
    icon: MessageSquare,
    title: "Communication Hub",
    description: "Seamless communication between schools, teachers, parents, and students.",
    features: ["Push notifications", "Group & broadcast messaging", "Announcements", "SMS integration"],
  },
  {
    icon: Calendar,
    title: "Event Management",
    description: "Plan and manage school events, holidays, and activities with ease.",
    features: ["Event calendar", "Parent RSVPs", "Resource booking", "Automated reminders"],
  },
  {
    icon: FileText,
    title: "Document Management",
    description: "Paperless document handling with secure digital storage.",
    features: ["Cloud based storage", "Transfer certificate generation", "Digital report cards", "E-signatures"],
  },
  {
    icon: Shield,
    title: "User & Access Control",
    description: "Enterprise grade security with role-based access and compliance.",
    features: ["Role & permission management", "Activity audit logs", "Encrypted data security", "GDPR-compliant system"],
  },
];

const ERPSolutions = () => {
  const [showContent, setShowContent] = useState(false);

  const handleExploreMore = () => {
    setShowContent(true);
    setTimeout(() => {
      const element = document.getElementById('modules-section');
      if (element) {
        const yOffset = -100; // Offset to show heading properly
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <main className="min-h-screen">
      <SEO
        title="ERP Solutions - 12 Integrated Modules"
        description="Explore our comprehensive school ERP modules: Admission, Fees, Transport, Academics, Communication, and more. A complete system for modern schools."
      />
      <Navbar />

      {/* Hero */}
      <section id="hero" className="h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero" />

        <div className="container-custom relative">
          <ScrollAnimation animation="fade-up">
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              ERP Solutions
            </span>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={100}>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5 max-w-4xl">
              All-in-One{" "}
              <span className="text-gradient">School ERP Platform</span>
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={200}>
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed mb-6">
              A flexible, modular school ERP that brings academics, administration, and communication into one
              powerful system. Choose only what your school needs or run the full suite for complete control.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animation="fade-up" delay={300}>
            <InteractiveHoverButton
              onClick={handleExploreMore}
              text="Explore More"
              className="w-52 px-6 py-3 text-base"
            />
          </ScrollAnimation>
        </div>
      </section>

      {showContent && (
        <>
          {/* Modules Grid */}
          <section id="modules-section" className="py-12 md:py-16">
            <div className="container-custom">
              <ScrollAnimation animation="fade-up">
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-center mb-3">
                  9 Integrated <span className="text-gradient">Modules</span>
                </h2>
              </ScrollAnimation>

              <ScrollAnimation animation="fade-up" delay={100}>
                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-10">
                  Each module is designed to work independently or as part of the complete ecosystem.
                  Start small and scale as you grow.
                </p>
              </ScrollAnimation>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {modules.map((module, index) => (
                  <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                    <div className={`card-elevated p-6 h-full hover:border-primary/30 ${module.highlight ? 'border-primary/50 relative' : ''}`}>
                      {module.highlight && (
                        <span className="absolute -top-3 right-4 text-xs font-semibold text-primary-foreground bg-primary px-3 py-1 rounded-full">
                          Most Popular
                        </span>
                      )}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
                          <module.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-heading font-semibold text-lg mb-1">{module.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {module.description}
                      </p>
                      <ul className="space-y-2">
                        {module.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
            </div>
          </section>


          <CTASection />
        </>
      )}

      <Footer />
    </main>
  );
};

export default ERPSolutions;
