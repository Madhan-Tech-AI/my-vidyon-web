import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { FileText, CheckCircle, Clock, AlertCircle, ArrowLeft } from "lucide-react";

import SEO from "@/components/SEO";

const AccessApplication = () => {
    return (
        <main className="min-h-screen bg-background">
            <SEO
                title="Access Application - Candidate Portal"
                description="Login to access your job applications and complete your candidate profile."
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="container-custom relative z-10">
                    {/* Back Button */}
                    <div className="mb-6">
                        <a
                            href="/careers"
                            className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors group"
                        >
                            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                            <span className="font-semibold">Back to Careers</span>
                        </a>
                    </div>

                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3 leading-tight text-foreground">
                                Your <span className="text-gradient">Applications</span>
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-base text-muted-foreground">
                                Track the status of your job applications
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Applications List */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center py-16">
                            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                                <FileText className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-3">No Applications Yet</h3>
                            <p className="text-muted-foreground max-w-md mx-auto mb-6">
                                You haven't submitted any applications. Start your journey by browsing our open positions.
                            </p>
                            <a
                                href="/careers/job-search"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
                            >
                                Browse Jobs
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default AccessApplication;
