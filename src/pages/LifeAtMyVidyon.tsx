import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Coffee, Smile, Zap, Calendar, Gift, Users } from "lucide-react";

const LifeAtMyVidyonPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-foreground">
                                Life at <span className="text-gradient">My Vidyon</span>
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Experience a workplace where innovation meets work-life balance, and every day brings new opportunities to grow.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Perks & Benefits */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-5xl mx-auto">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="font-heading text-3xl font-bold text-center mb-12">
                                Perks & <span className="text-gradient">Benefits</span>
                            </h2>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Coffee,
                                    title: "Flexible Work",
                                    description: "Hybrid work model with flexible hours to suit your lifestyle"
                                },
                                {
                                    icon: Smile,
                                    title: "Health & Wellness",
                                    description: "Comprehensive health insurance and wellness programs"
                                },
                                {
                                    icon: Zap,
                                    title: "Learning Budget",
                                    description: "Annual budget for courses, conferences, and skill development"
                                },
                                {
                                    icon: Calendar,
                                    title: "Generous PTO",
                                    description: "Paid time off, sick leave, and festival holidays"
                                },
                                {
                                    icon: Gift,
                                    title: "Team Events",
                                    description: "Regular team outings, celebrations, and bonding activities"
                                },
                                {
                                    icon: Users,
                                    title: "Collaborative Space",
                                    description: "Modern office with collaborative workspaces and amenities"
                                }
                            ].map((perk, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                                    <div className="card-elevated p-6 text-center">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                            <perk.icon className="w-6 h-6 text-primary" />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold mb-2">{perk.title}</h3>
                                        <p className="text-sm text-muted-foreground">{perk.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default LifeAtMyVidyonPage;
