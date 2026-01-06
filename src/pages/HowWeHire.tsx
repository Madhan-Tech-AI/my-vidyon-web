import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { FileText, Users, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";

const HowWeHirePage = () => {
    const hiringSteps = [
        {
            number: "01",
            title: "Application Review",
            description: "Submit your application through our careers portal. Our team reviews every application carefully.",
            icon: FileText
        },
        {
            number: "02",
            title: "Initial Screening",
            description: "Qualified candidates receive a call from our HR team to discuss your background and interests.",
            icon: Users
        },
        {
            number: "03",
            title: "Technical/Skills Assessment",
            description: "Demonstrate your skills through a practical assessment or case study relevant to the role.",
            icon: MessageCircle
        },
        {
            number: "04",
            title: "Team Interview",
            description: "Meet with potential team members and managers to discuss the role and our culture.",
            icon: Users
        },
        {
            number: "05",
            title: "Offer & Onboarding",
            description: "Receive your offer and join our comprehensive onboarding program to set you up for success.",
            icon: CheckCircle
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                                How We <span className="text-gradient">Hire</span>
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Our hiring process is designed to be transparent, fair, and focused on finding the right fit for both you and us.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Hiring Process */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-8">
                            {hiringSteps.map((step, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                    <div className="card-elevated p-8">
                                        <div className="flex flex-col md:flex-row gap-6">
                                            <div className="flex-shrink-0">
                                                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                                                    <step.icon className="w-8 h-8 text-primary-foreground" />
                                                </div>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-3">
                                                    <span className="text-4xl font-bold text-primary/20">{step.number}</span>
                                                    <h3 className="font-heading text-2xl font-bold">{step.title}</h3>
                                                </div>
                                                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>

                        <ScrollAnimation animation="fade-up" delay={500}>
                            <div className="mt-12 text-center">
                                <a
                                    href="/careers/job-search"
                                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3 shadow-lg"
                                >
                                    Start Your Journey
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default HowWeHirePage;
