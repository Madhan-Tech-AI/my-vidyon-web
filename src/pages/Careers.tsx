import { Link } from "react-router-dom";
import {
    Search,
    Bookmark,
    FileText,
    ChevronLeft,
    ChevronRight,
    MapPin,
    Briefcase,
    Users,
    TrendingUp,
    Heart,
    Award,
    Target,
    Zap,
    Globe,
    Clock,
    ArrowRight,
    GraduationCap,
    Rocket,
    Trophy,
    RefreshCw,
    Brain,
    Shield,
    Code,
    BarChart,
    Lightbulb,
    Building2,
    UserCheck
} from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ScrollAnimation from "@/components/ScrollAnimation";
import SEO from "@/components/SEO";
import { useState } from "react";

const careerAreas = [
    {
        icon: Code,
        title: "Engineering & Development",
        description: "End-to-end ERP engineering for educational institutions, built with React, Node.js, and cloud platforms to ensure scalability, security, and efficiency.",
        image: "/career_engineering_dev_1767685269978.png"
    },
    {
        icon: Lightbulb,
        title: "Product & Design",
        description: "Design intuitive, user-friendly ERP interfaces that simplify education management. Our design-driven ERP solutions enhance usability for teachers, students, and administrators through research-backed UI/UX and smart workflows.",
        image: "/career_product_design_1767685286373.png"
    },
    {
        icon: Users,
        title: "Customer Success",
        description: "Empower educational institutions to scale and succeed with My Vidyon ERP solutions. We help schools improve outcomes, streamline operations, and build long-term success.",
        image: "/career_customer_success_1767685306065.png"
    },
    {
        icon: BarChart,
        title: "Sales & Marketing",
        description: "Accelerate growth by connecting schools with My Vidyon's smart ERP platform. Drive enrollment, strengthen relationships, and expand digital adoption across institutions.",
        image: "/career_sales_marketing_1767685334991.png"
    },
    {
        icon: Brain,
        title: "AI & Analytics",
        description: "Unlock actionable insights with AI-powered analytics for education ERP. Enable data-driven decisions, performance tracking, and smarter academic planning.",
        image: "/career_ai_analytics_1767685352016.png"
    },
    {
        icon: Shield,
        title: "Security & Operations",
        description: "Deliver secure, reliable, and scalable education ERP operations. Protect student data, ensure compliance, and maintain uninterrupted platform performance.",
        image: "/career_security_operations_1767685370672.png"
    },
];

const careerStages = [
    {
        id: "students",
        icon: GraduationCap,
        title: "Students & Fresh Graduates",
        description: "Kickstart your career with a modern ERP ecosystem built for learning, innovation, and real-world impact. Gain hands-on experience, industry exposure, and career-ready skills from day one.",
        details: [
            "Paid internship programs",
            "Expert mentorship",
            "Real ERP project exposure",
            "Full-time role opportunities"
        ],
        image: "/career_stage_students_v2_1767687046851.png"
    },
    {
        id: "early-career",
        icon: Rocket,
        title: "Early Career Professionals",
        description: "Accelerate your growth with enterprise-grade ERP solutions that sharpen your technical, analytical, and problem-solving skills in a collaborative environment.",
        details: [
            "Structured onboarding",
            "Skill development workshops",
            "Cross-functional collaboration",
            "Fast-track career growth"
        ],
        image: "/career_stage_early_career_1767687077438.png"
    },
    {
        id: "experienced",
        icon: Trophy,
        title: "Experienced Professionals",
        description: "Drive digital transformation in education with scalable ERP platforms. Lead innovation, mentor teams, and shape next-generation education systems.",
        details: [
            "Strategic leadership roles",
            "Product and platform ownership",
            "Team mentorship",
            "Global impact projects"
        ],
        image: "/career_stage_experienced_1767687101444.png"
    },
    {
        id: "executive",
        icon: Target,
        title: "Executive Leaders",
        description: "Lead with vision using intelligent ERP systems designed to scale institutions and optimize operations. Influence strategy, innovation, and long-term growth.",
        details: [
            "C-suite and VP positions",
            "Enterprise decision-making",
            "Organization-wide transformation"
        ],
        image: "/career_stage_executive_1767687117424.png"
    },
    {
        id: "returners",
        icon: RefreshCw,
        title: "Career Rebooters",
        description: "Restart your career with My Vidyon's Career Reboot Program. Our ERP-focused training and flexible work models help you re-enter the workforce with confidence.",
        details: [
            "Flexible return-to-work options",
            "Skill refresher training",
            "Supportive work culture",
            "Part-time to full-time transition"
        ],
        image: "/career_stage_rebooters_1767687134207.png"
    },
];

const CareersPage = () => {
    const [currentCareerArea, setCurrentCareerArea] = useState(0);
    const [selectedCareerStage, setSelectedCareerStage] = useState(careerStages[0]);

    const nextCareerArea = () => {
        setCurrentCareerArea((prev) => (prev + 1) % careerAreas.length);
    };

    const prevCareerArea = () => {
        setCurrentCareerArea((prev) => (prev - 1 + careerAreas.length) % careerAreas.length);
    };

    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Careers - Join Our Team"
                description="Join My Vidyon and help shape the future of education technology. Explore job openings, our culture, and benefits."
            />
            {/* Main Navigation Bar - Same as main site */}
            <Navbar />

            {/* Secondary Careers Navigation */}
            <div className="border-b border-background/10" style={{ backgroundColor: '#DD0303' }}>
                <div className="container-custom">
                    <div className="flex items-center justify-between py-3">
                        {/* Careers Text */}
                        <div className="font-heading font-bold text-lg text-background">
                            Careers
                        </div>

                        {/* Navigation Items */}
                        <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
                            {/* Job Search */}
                            <Link
                                to="/careers/job-search"
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-background/90 hover:text-primary focus:text-primary active:text-primary hover:bg-background/10 rounded-md transition-colors whitespace-nowrap"
                            >
                                <Search className="w-4 h-4" />
                                <span className="hidden sm:inline">Job Search</span>
                            </Link>

                            {/* Saved Jobs */}
                            <Link
                                to="/careers/saved-jobs"
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-background/90 hover:text-primary focus:text-primary active:text-primary hover:bg-background/10 rounded-md transition-colors whitespace-nowrap"
                            >
                                <Bookmark className="w-4 h-4" />
                                <span className="hidden sm:inline">Saved Jobs</span>
                            </Link>

                            {/* Access Application */}
                            <Link
                                to="/careers/access-application"
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-background/90 hover:text-primary focus:text-primary active:text-primary hover:bg-background/10 rounded-md transition-colors whitespace-nowrap"
                            >
                                <FileText className="w-4 h-4" />
                                <span className="hidden sm:inline">Access Application</span>
                            </Link>

                            {/* Divider */}
                            <div className="h-6 w-px bg-background/20 mx-2 hidden md:block" />

                            {/* Who We Are */}
                            <Link
                                to="/careers/who-we-are"
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-background/90 hover:text-primary focus:text-primary active:text-primary hover:bg-background/10 rounded-md transition-colors whitespace-nowrap"
                            >
                                <Users className="w-4 h-4" />
                                <span className="hidden sm:inline">Who We Are</span>
                            </Link>

                            {/* Life at My Vidyon */}
                            <Link
                                to="/careers/life-at-my-vidyon"
                                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-background/90 hover:text-primary focus:text-primary active:text-primary hover:bg-background/10 rounded-md transition-colors whitespace-nowrap"
                            >
                                <Building2 className="w-4 h-4" />
                                <span className="hidden sm:inline">Life at My Vidyon</span>
                            </Link>


                        </div>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-foreground">
                                Your next big opportunity  <span className="text-gradient">starts here</span>
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Be part of a future-ready workplace powered by intelligent ERP systems. <br></br>We enable growth, learning,
                                and seamless collaboration through scalable enterprise resource planning solutions.
                            </p>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={200}>
                            <Link
                                to="/careers/job-search"
                                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3"
                            >
                                Search open roles
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Career Areas Carousel - "Whatever you want to do" */}
            <section id="explore" className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="text-center mb-8">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                                Whatever You Want to <span className="text-gradient">Do</span>
                            </h2>
                        </ScrollAnimation>
                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                From developers and designers to strategists and educators, there are endless opportunities for you to learn, grow and make a difference.
                            </p>
                        </ScrollAnimation>
                    </div>

                    {/* Carousel */}
                    <div className="max-w-5xl mx-auto">
                        <div className="card-elevated overflow-hidden">
                            <div className="grid md:grid-cols-2 gap-6 p-6 md:p-8">
                                {/* Left Side - Description */}
                                <div className="flex flex-col justify-center">
                                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                                        {(() => {
                                            const Icon = careerAreas[currentCareerArea].icon;
                                            return <Icon className="w-7 h-7 text-primary-foreground" />;
                                        })()}
                                    </div>
                                    <h3 className="font-heading text-xl md:text-2xl font-bold mb-3">
                                        {careerAreas[currentCareerArea].title}
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-4">
                                        {careerAreas[currentCareerArea].description}
                                    </p>
                                    <Link to="/careers/job-search" className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                        Explore opportunities
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>

                                {/* Right Side - Image */}
                                <div className="flex items-center justify-center">
                                    <div className="w-full aspect-video rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden shadow-inner">
                                        <img
                                            src={careerAreas[currentCareerArea].image}
                                            alt={careerAreas[currentCareerArea].title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Carousel Controls */}
                            <div className="flex items-center justify-between p-4 border-t border-border">
                                <button
                                    onClick={prevCareerArea}
                                    className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="w-5 h-5" />
                                </button>

                                <div className="flex items-center gap-2">
                                    {careerAreas.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => setCurrentCareerArea(index)}
                                            className={`w-2 h-2 rounded-full transition-all ${index === currentCareerArea ? 'bg-primary w-8' : 'bg-border'
                                                }`}
                                            aria-label={`Go to slide ${index + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextCareerArea}
                                    className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-all"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Stages - "Wherever you are in your career" */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container-custom">
                    <div className="text-center mb-12">
                        <ScrollAnimation animation="fade-up">
                            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
                                Wherever You Are in Your <span className="text-gradient">Career</span>
                            </h2>
                        </ScrollAnimation>
                    </div>

                    <div className="max-w-6xl mx-auto">
                        {/* Horizontal Tabs */}
                        <div className="flex flex-wrap justify-center gap-4 mb-10">
                            {careerStages.map((stage) => (
                                <button
                                    key={stage.id}
                                    onClick={() => setSelectedCareerStage(stage)}
                                    className={`flex items-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 ${selectedCareerStage.id === stage.id
                                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                        : 'bg-background hover:bg-muted border border-border hover:border-primary'
                                        }`}
                                >
                                    <stage.icon className={`w-5 h-5 ${selectedCareerStage.id === stage.id ? 'text-primary-foreground' : 'text-primary'
                                        }`} />
                                    <span className="hidden sm:inline">{stage.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Content Card */}
                        <div className="card-elevated p-8">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                {/* Left: Image */}
                                <div className="order-2 md:order-1">
                                    <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center overflow-hidden shadow-inner">
                                        <img
                                            src={selectedCareerStage.image}
                                            alt={selectedCareerStage.title}
                                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                        />
                                    </div>
                                </div>

                                {/* Right: Description */}
                                <div className="order-1 md:order-2">
                                    <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-gradient">
                                        {selectedCareerStage.title}
                                    </h3>
                                    <p className="text-muted-foreground text-base leading-relaxed mb-6">
                                        {selectedCareerStage.description}
                                    </p>

                                    {/* Details */}
                                    <div className="space-y-3 mb-6">
                                        {selectedCareerStage.details.map((detail, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                                </div>
                                                <span className="text-base text-foreground/80">{detail}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <Link
                                        to="/careers/job-search"
                                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:bg-primary/90 transition-all duration-300 hover:gap-3 shadow-md hover:shadow-lg"
                                    >
                                        View open positions
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="jobs" className="py-16 md:py-24" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="container-custom">
                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        <ScrollAnimation animation="fade-up">
                            <div className="card-elevated p-8 text-center h-full flex flex-col justify-center">
                                <Zap className="w-16 h-16 text-primary mx-auto mb-6" />
                                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                                    Join Us
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Explore open roles that match your interests and skills.
                                </p>
                                <Link to="/careers/job-search" className="btn-cta inline-flex items-center gap-2 mx-auto">
                                    Search Jobs
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <div className="card-elevated p-8 text-center h-full flex flex-col justify-center">
                                <Heart className="w-16 h-16 text-primary mx-auto mb-6" />
                                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                                    Stay in Touch
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed">
                                    Get career tips and industry-leading insights from our team.
                                </p>
                                <Link to="/contact" className="btn-cta inline-flex items-center gap-2 mx-auto">
                                    Contact Us
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CareersPage;
