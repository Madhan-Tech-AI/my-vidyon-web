import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { HelpCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const faqs = [
    {
        category: "General",
        questions: [
            {
                question: "How long does implementation take?",
                answer: "Typical implementation takes 2-4 weeks depending on the size of your institution and the modules selected. We work closely with your team to ensure a smooth transition with minimal disruption to daily operations.",
            },
            {
                question: "Do you offer training?",
                answer: "Yes! We provide comprehensive on-site and online training for administrators, teachers, and staff at no extra cost. Our training includes hands-on sessions, video tutorials, and ongoing support to ensure everyone is comfortable using the system.",
            },
            {
                question: "Can I try before I buy?",
                answer: "Absolutely. We offer a 30-day free trial with full access to all features. No credit card required. This gives you ample time to explore the platform and see how it fits your institution's needs.",
            },
        ],
    },
    {
        category: "Technical",
        questions: [
            {
                question: "What about data migration?",
                answer: "Our team handles complete data migration from your existing systems. We support imports from Excel, CSV, and most major ERP platforms. We ensure data integrity and accuracy throughout the migration process.",
            },
            {
                question: "Is my data secure?",
                answer: "Yes, security is our top priority. We use bank-level encryption (AES-256), regular security audits, automated backups, and comply with international data protection standards including GDPR and ISO 27001.",
            },
            {
                question: "What are the system requirements?",
                answer: "My Vidyon is cloud-based and works on any modern web browser (Chrome, Firefox, Safari, Edge). We also offer native mobile apps for iOS and Android. No special hardware or software installation is required.",
            },
        ],
    },
    {
        category: "Pricing & Support",
        questions: [
            {
                question: "How does pricing work?",
                answer: "We offer transparent SaaS pricing based on the number of students and modules selected. There are no hidden fees, setup charges, or long-term contracts. You can upgrade, downgrade, or cancel anytime.",
            },
            {
                question: "What kind of support do you provide?",
                answer: "We provide 24/7 email and chat support, with phone support available during business hours. Premium plans include dedicated account managers and priority support with guaranteed response times.",
            },
            {
                question: "Can I customize the platform?",
                answer: "Yes! My Vidyon is highly customizable. You can configure workflows, create custom fields, design reports, and even white-label the platform with your institution's branding, logo, and colors.",
            },
        ],
    },
    {
        category: "Features",
        questions: [
            {
                question: "Does it work offline?",
                answer: "Yes, our mobile apps support offline mode for attendance marking and basic data viewing. Changes sync automatically when you're back online, ensuring uninterrupted operation even in areas with poor connectivity.",
            },
            {
                question: "Can parents access the system?",
                answer: "Absolutely! Parents get their own portal and mobile app where they can view attendance, grades, assignments, fee status, and communicate with teachers. They receive real-time notifications about their child's activities.",
            },
            {
                question: "Do you integrate with other tools?",
                answer: "Yes, we offer integrations with popular tools like Google Workspace, Microsoft 365, Zoom, payment gateways, SMS providers, and more. We also provide a REST API for custom integrations.",
            },
        ],
    },
];

import SEO from "@/components/SEO";

const FAQ = () => {
    return (
        <main className="min-h-screen">
            <SEO
                title="Frequently Asked Questions"
                description="Find answers to common questions about My Vidyon ERP, implementation, pricing, and support. We are transparent about our services."
            />
            <Navbar />

            {/* Hero */}
            <section className="pt-28 pb-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-hero" />

                <div className="container-custom relative text-center">
                    <ScrollAnimation animation="fade-up">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <HelpCircle className="w-4 h-4 text-primary" />
                            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                                Help Center
                            </span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={100}>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-5">
                            Frequently Asked <span className="text-gradient">Questions</span>
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation animation="fade-up" delay={200}>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                            Find answers to common questions about My Vidyon. Can't find what you're looking for?
                            Feel free to <Link to="/contact" className="text-primary hover:underline">contact us</Link>.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqs.map((category, categoryIndex) => (
                            <ScrollAnimation key={categoryIndex} animation="fade-up" delay={categoryIndex * 100}>
                                <div>
                                    {/* Category Header */}
                                    <div className="mb-6">
                                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
                                            {category.category}
                                        </h2>
                                        <div className="h-1 w-20 bg-gradient-primary rounded-full mt-3" />
                                    </div>

                                    {/* Questions */}
                                    <div className="space-y-4">
                                        {category.questions.map((faq, index) => (
                                            <ScrollAnimation
                                                key={index}
                                                animation="fade-up"
                                                delay={categoryIndex * 100 + index * 50}
                                            >
                                                <div className="card-elevated p-6 hover:shadow-lg transition-shadow duration-300">
                                                    <h3 className="font-heading font-semibold text-lg mb-3 flex items-start gap-3">
                                                        <HelpCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                                        <span>{faq.question}</span>
                                                    </h3>
                                                    <p className="text-muted-foreground leading-relaxed ml-8">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </ScrollAnimation>
                                        ))}
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Still Have Questions CTA */}
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container-custom">
                    <ScrollAnimation animation="fade-up">
                        <div className="max-w-3xl mx-auto text-center card-elevated p-8 md:p-12">
                            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                            <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                                Still Have Questions?
                            </h2>
                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                Our team is here to help! Reach out to us and we'll get back to you within 24 hours.
                            </p>
                            <Link to="/contact" className="btn-cta inline-flex">
                                Contact Support
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default FAQ;
