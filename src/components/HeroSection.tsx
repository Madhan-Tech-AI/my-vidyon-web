import { Link } from "react-router-dom";
import { ChevronRight, Play, Sparkles } from "lucide-react";
import ScrollAnimation from "./ScrollAnimation";

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <ScrollAnimation animation="fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Trusted by 500+ Educational Institutions
            </span>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={100}>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 max-w-5xl mx-auto">
            Transforming Education with{" "}
            <span className="text-gradient">Intelligent ERP</span>{" "}
            Solutions
          </h1>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={200}>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Streamline your institution's operations with our comprehensive ERP platform. 
            From automated attendance tracking to seamless administration — 
            we've got your entire ecosystem covered.
          </p>
        </ScrollAnimation>

        <ScrollAnimation animation="fade-up" delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-cta text-base">
              Request a Demo
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link to="/attendance-system" className="btn-outline text-base group">
              <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Explore Attendance System
            </Link>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default HeroSection;
