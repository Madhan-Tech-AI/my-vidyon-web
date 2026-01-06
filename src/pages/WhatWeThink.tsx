import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Lightbulb, TrendingUp, Users, Zap, ArrowRight, BookOpen, Target } from "lucide-react";

const WhatWeThinkPage = () => {
    const insights = [
        {
            category: "Innovation",
            title: "Transforming Education Through Technology",
            description: "How AI and automation are reshaping the future of learning and institutional management.",
            image: "gradient-1",
            color: "from-purple-500 to-pink-500"
        },
        {
            category: "Strategy",
            title: "The Future of EdTech in India",
            description: "Exploring emerging trends and opportunities in educational technology across institutions.",
            image: "gradient-2",
            color: "from-blue-500 to-cyan-500"
        },
        {
            category: "Leadership",
            title: "Building Student-Centric Solutions",
            description: "Our approach to creating technology that puts students and educators first.",
            image: "gradient-3",
            color: "from-orange-500 to-red-500"
        }
    ];

    const values = [
        {
            icon: Lightbulb,
            title: "Innovation First",
            description: "We believe in pushing boundaries and exploring new possibilities in educational technology.",
            stat: "100+",
            statLabel: "Innovative Features"
        },
        {
            icon: Target,
            title: "Student-Centric",
            description: "Every decision we make is guided by one question: How does this benefit students?",
            stat: "50K+",
            statLabel: "Students Impacted"
        },
        {
            icon: Users,
            title: "Collaborative",
            description: "The best solutions come from diverse perspectives working together.",
            stat: "200+",
            statLabel: "Institutions Served"
        },
        {
            icon: TrendingUp,
            title: "Continuous Growth",
            description: "We're committed to learning, evolving, and improving every day.",
            stat: "99%",
            statLabel: "Client Satisfaction"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section - Minimal & Bold */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
                <div className="relative w-full">
                    <div className="grid lg:grid-cols-2 min-h-[calc(100vh-80px)]">
                        {/* Left Image - Full Bleed */}
                        <ScrollAnimation animation="fade-right" delay={300}>
                            <div className="relative h-full min-h-[400px]">
                                <img
                                    src="/uploaded_image_1767677978674.png"
                                    alt="Innovation and Technology Illustration"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                />
                            </div>
                        </ScrollAnimation>


                        {/* Right Content */}
                        <div className="relative z-10 flex items-start justify-center pt-20 pb-12">
                            <div className="w-full px-6 lg:px-12">
                                <div className="max-w-2xl mx-auto text-center">
                                    <ScrollAnimation animation="fade-up">
                                        <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                                            <span className="text-primary font-semibold text-sm">Insights & Perspectives</span>
                                        </div>
                                    </ScrollAnimation>

                                    <ScrollAnimation animation="fade-up" delay={100}>
                                        <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                                            What We <span className="text-gradient">Think</span>
                                        </h1>
                                    </ScrollAnimation>

                                    <ScrollAnimation animation="fade-up" delay={200}>
                                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                            Our philosophy, values, and vision for transforming education through innovative technology solutions.
                                        </p>
                                    </ScrollAnimation>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Insights - Card Grid */}
            <section className="py-16 md:py-24 bg-muted/30">
                <div className="container-custom">
                    <ScrollAnimation animation="fade-up">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold">
                                Latest <span className="text-gradient">Insights</span>
                            </h2>
                            <a href="#" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                                View All <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </ScrollAnimation>

                    <div className="grid md:grid-cols-3 gap-8">
                        {insights.map((insight, index) => (
                            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                <div className="group card-elevated overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer">
                                    <div className={`h-48 bg-gradient-to-br ${insight.color} relative overflow-hidden`}>
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all" />
                                        <div className="absolute top-4 left-4">
                                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold">
                                                {insight.category}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-6">
                                        <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                            {insight.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                                            {insight.description}
                                        </p>
                                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                                            Read More <ArrowRight className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Values - Split Layout */}
            <section className="py-16 md:py-24">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        <ScrollAnimation animation="fade-right">
                            <div>
                                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
                                    <span className="text-primary font-semibold text-sm">Our Philosophy</span>
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
                                    Guided by <span className="text-gradient">Core Values</span>
                                </h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    At My Vidyon, our values aren't just words on a wall—they're the foundation of everything we do. They guide our decisions, shape our culture, and drive our commitment to excellence in educational technology.
                                </p>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-left">
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent flex items-center justify-center">
                                    <BookOpen className="w-32 h-32 text-primary opacity-20" />
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {values.map((value, index) => (
                            <ScrollAnimation key={index} animation="fade-up" delay={index * 100}>
                                <div className="card-elevated p-8 hover:shadow-elevated transition-all group">
                                    <div className="flex items-start gap-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <value.icon className="w-8 h-8 text-primary-foreground" />
                                            </div>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="font-heading text-2xl font-bold mb-3">{value.title}</h3>
                                            <p className="text-muted-foreground leading-relaxed mb-4">
                                                {value.description}
                                            </p>
                                            <div className="flex items-baseline gap-2">
                                                <span className="text-3xl font-bold text-primary">{value.stat}</span>
                                                <span className="text-sm text-muted-foreground">{value.statLabel}</span>
                                            </div>
                                        </div>
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
                            <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                                Ready to Transform Education?
                            </h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Join us in our mission to revolutionize educational institutions with innovative technology.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/careers/job-search" className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl">
                                    Explore Careers
                                </a>
                                <a href="/contact" className="px-8 py-4 border-2 border-border rounded-full font-semibold hover:bg-muted transition-all">
                                    Get in Touch
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

export default WhatWeThinkPage;
