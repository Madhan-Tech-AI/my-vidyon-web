import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import { Users, Award, Globe, Heart, Building2, Sparkles, Target, TrendingUp, ArrowRight, ArrowLeft } from "lucide-react";

const WhoWeArePage = () => {


    const pillars = [
        {
            icon: Users,
            title: "Diverse Expertise",
            description: "Our ERP development team combines experts in education ERP systems, software engineering, UI/ UX design, and business automation, delivering innovative, scalable, and industry - ready ERP solutions.",
            highlights: ["50+ Team Members", "10+ Specializations", "Global Perspectives"]
        },
        {
            icon: Award,
            title: "Excellence Driven",
            description: "We deliver high-performance ERP software with a focus on security, scalability, and performance, consistently exceeding client expectations across education and enterprise sectors",
            highlights: ["Award-Winning Solutions", "Industry Recognition", "Quality Certified"]
        },
        {
            icon: Globe,
            title: "Global Impact",
            description: "Our education ERP solutions follow international standards, enabling institutions to scale operations seamlessly with future-ready ERP platforms.",
            highlights: ["Pan-India Presence", "International Standards", "Scalable Solutions"]
        },
        {
            icon: Heart,
            title: "Passionate People",
            description: "A purpose-driven ERP team committed to digital transformation in education, creating ERP solutions that drive real impact beyond technology.",
            highlights: ["Purpose-Driven", "Community Focused", "Impact Oriented"]
        }
    ];



    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Who We Are - Our Culture & Values"
                description="Discover the people and values behind My Vidyon. We are a diverse team passionate about education and technology."
            />
            <Navbar />

            {/* Hero Section - Bold Statement */}
            <section className="relative py-16 md:py-20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5" />

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

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="max-w-2xl">
                            <ScrollAnimation animation="fade-up">
                                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                                    <span className="text-primary font-semibold text-sm">About My Vidyon</span>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={100}>
                                <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                    Who We <span className="text-gradient">Are</span>
                                </h1>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={200}>
                                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                                    A team of ed-tech specialists delivering powerful ERP systems designed to simplify operations
                                    and improve educational outcomes.

                                </p>
                            </ScrollAnimation>

                            <ScrollAnimation animation="fade-up" delay={300}>
                                <div className="flex flex-wrap gap-4">
                                    <a
                                        href="/careers"
                                        className="px-8 py-4 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl"
                                        style={{ backgroundColor: '#DD0303' }}
                                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BE0202'}
                                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DD0303'}
                                    >
                                        Join Our Team
                                    </a>
                                    <a href="/contact" className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-muted transition-all">
                                        Partner With Us
                                    </a>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* Right Image */}
                        <ScrollAnimation animation="fade-left" delay={400}>
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="/uploaded_image_1767680609494.png"
                                    alt="Who We Are Team Illustration"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>



            {/* Mission Statement - Large Text Block */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <ScrollAnimation animation="fade-up">
                            <div className="text-center mb-12">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                                    Our <span className="text-gradient">Mission</span>
                                </h2>
                                <p className="text-2xl md:text-3xl font-light text-foreground/80 leading-relaxed">
                                    "To help schools run smarter every day by delivering simple, secure ERP solutions that reduce admin workload and create more time for teaching and student development."
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Four Pillars - Detailed Cards */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container-custom">
                    <ScrollAnimation animation="fade-up">
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                                Built on <span className="text-gradient">Four Pillars</span>
                            </h2>
                            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                                The foundation of our success lies in these core principles that define who we are
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-2 gap-8">
                        {pillars.map((pillar, index) => (
                            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                <div className="card-elevated p-8 hover:shadow-2xl transition-all group h-full">
                                    <div className="flex items-start gap-6 mb-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <pillar.icon className="w-8 h-8 text-primary-foreground" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-heading text-2xl font-bold mb-3">{pillar.title}</h3>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed mb-6">
                                        {pillar.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {pillar.highlights.map((highlight, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                                                {highlight}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="py-16 md:py-20 bg-gradient-to-br from-primary/10 via-background to-background">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <Target className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                                Be Part of Our Story
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Join a team that's passionate about making a difference in education
                            </p>
                            <a
                                href="/careers/job-search"
                                className="inline-flex items-center gap-2 px-8 py-4 text-white rounded-full font-semibold transition-all shadow-lg hover:gap-3"
                                style={{ backgroundColor: '#DD0303' }}
                                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#BE0202'}
                                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#DD0303'}
                            >
                                Explore Opportunities <ArrowRight className="w-5 h-5" />
                            </a>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default WhoWeArePage;
