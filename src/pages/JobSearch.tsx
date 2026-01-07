import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Search, MapPin, Briefcase, Clock, ArrowLeft } from "lucide-react";
import SEO from "@/components/SEO";

const JobSearchPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <SEO
                title="Search Jobs - Career Opportunities"
                description="Browse current openings at My Vidyon. Find roles in Engineering, Product, Sales, and Customer Success."
            />
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
                </div>

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
                            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-foreground">
                                Find Your <span className="text-gradient">Dream Job</span>
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-base md:text-lg text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                                Explore exciting career opportunities at My Vidyon and join our mission to transform education.
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="card-elevated p-6 mb-8">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Job title, keywords, or company"
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <div className="flex-1">
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                    />
                                </div>
                                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all">
                                    Search
                                </button>
                            </div>
                        </div>

                        {/* Job Listings */}
                        <div className="text-center py-16">
                            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                                <Search className="w-10 h-10 text-muted-foreground" />
                            </div>
                            <h3 className="font-heading text-2xl font-bold mb-3">No Jobs Available</h3>
                            <p className="text-muted-foreground max-w-md mx-auto mb-6">
                                We don't have any open positions at the moment. Check back soon or explore other sections of our careers page.
                            </p>
                            <a
                                href="/careers"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all"
                            >
                                Back to Careers
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default JobSearchPage;
