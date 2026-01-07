import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import { Coffee, Smile, Zap, Calendar, Gift, Users, Heart, Lightbulb, Trophy, TrendingUp, ArrowLeft } from "lucide-react";

const LifeAtMyVidyonPage = () => {
    const cultureValues = [
        {
            icon: Heart,
            title: "People First",
            description: "We prioritize employee well-being and create an environment where everyone can thrive."
        },
        {
            icon: Lightbulb,
            title: "Innovation Driven",
            description: "We encourage creative thinking and empower our team to bring innovative solutions to life."
        },
        {
            icon: Trophy,
            title: "Excellence",
            description: "We maintain high standards in everything we do, from code quality to customer service."
        },
        {
            icon: TrendingUp,
            title: "Growth Mindset",
            description: "We invest in continuous learning and career development for all team members."
        }
    ];

    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Life at My Vidyon - Employee Stories"
                description="What is it like to work at My Vidyon? Read stories from our team members and see our vibrant office culture."
            />
            <Navbar />

            {/* Hero Section - Redesigned */}
            <section className="relative py-8 md:py-12 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

                {/* Back Button */}
                <div className="container-custom relative z-10 pb-4">
                    <a
                        href="/careers"
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                    >
                        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                        <span className="font-semibold">Back to Careers</span>
                    </a>
                </div>

                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-8 md:gap-10 items-center">
                        {/* Left Content */}
                        <div>
                            <ScrollAnimation animation="fade-up">
                                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-3">
                                    <span className="text-primary font-semibold text-sm">Join Our Team</span>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={100}>
                                <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3 leading-tight text-foreground">
                                    Life at <span className="text-gradient">My Vidyon</span>
                                </h1>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={200}>
                                <p className="text-sm md:text-base text-muted-foreground mb-5 leading-relaxed">
                                    Life at My Vidyon is built around innovation, collaboration, and work-life balance. Our ERP
                                    software team works on scalable education management solutions, smart campus systems, and
                                    cloud-based ERP platforms that drive real institutional growth.
                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={300}>
                                <div className="flex flex-wrap gap-3">
                                    <a
                                        href="/careers/job-search"
                                        className="px-6 py-3 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl text-sm"
                                        style={{ backgroundColor: '#DD0303' }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BE0202'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DD0303'}
                                    >
                                        View Open Positions
                                    </a>
                                    <a href="/contact" className="px-6 py-3 border-2 border-border rounded-full font-semibold hover:bg-muted transition-all text-sm">
                                        Get in Touch
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right Image */}
                        <ScrollAnimation animation="fade-left" delay={300}>
                            <div className="relative max-w-xl mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl transform rotate-3" />
                                <img
                                    src="/life_at_vidyon_hero_1767689073086.png"
                                    alt="Life at My Vidyon"
                                    className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Culture Values */}
            <section className="py-16 md:py-24 bg-background">
                <div className="container-custom">
                    <ScrollAnimation animation="fade-up">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                                Our <span className="text-gradient">Culture</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                The values that guide us every day and shape our workplace
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cultureValues.map((value, index) => (
                            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                <div className="card-elevated p-6 text-center hover:shadow-xl transition-all group">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                                        <value.icon className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Perks & Benefits */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container-custom">
                    <div className="max-w-6xl mx-auto">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
                                Perks & <span className="text-gradient">Benefits</span>
                            </h2>
                            <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                                We offer comprehensive benefits designed to support your professional growth and personal well-being
                            </p>
                        </ScrollAnimation>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    icon: Coffee,
                                    title: "Flexible Work Model",
                                    description: "Enjoy flexible working hours and a hybrid work environment designed for ERP developers, consultants, and support teams to maximize productivity and work-life balance."
                                },
                                {
                                    icon: Smile,
                                    title: "Health & Wellness Benefits",
                                    description: "Access comprehensive health insurance and employee wellness programs tailored for IT professionals and ERP service providers."
                                },
                                {
                                    icon: Zap,
                                    title: "Learning & Upskilling Budget",
                                    description: "Annual learning budget for ERP certifications, technical courses, industry conferences, and continuous skill development."
                                },
                                {
                                    icon: Calendar,
                                    title: "Generous Paid Time Off",
                                    description: "Benefit from paid time off, sick leave, and festival holidays, supporting a healthy work-life balance in ERP consulting roles."
                                },
                                {
                                    icon: Gift,
                                    title: "Team Events & Culture",
                                    description: "Regular team outings, ERP team events, and company celebrations to promote collaboration and employee engagement."
                                },
                                {
                                    icon: Users,
                                    title: "Modern Collaborative Workspace",
                                    description: "Work in a modern office environment with collaborative spaces, high-speed connectivity, and productivity-focused amenities."
                                }
                            ].map((perk, index) => (
                                <ScrollAnimation key={index} animation="fade-up" delay={index * 50}>
                                    <div className="card-elevated p-6 hover:shadow-xl transition-all group h-full">
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-gradient-primary group-hover:scale-105 transition-all">
                                            <perk.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                                        </div>
                                        <h3 className="font-heading text-lg font-bold mb-3">{perk.title}</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">{perk.description}</p>
                                    </div>
                                </ScrollAnimation>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                                Ready to Join Our Team?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                                Explore our open positions and become part of a team that's transforming education through technology
                            </p>
                            <a
                                href="/careers/job-search"
                                className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
                                style={{ backgroundColor: '#DD0303' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BE0202'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DD0303'}
                            >
                                View Career Opportunities
                            </a>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LifeAtMyVidyonPage;
