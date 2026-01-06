import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Search, MapPin, Briefcase, Clock } from "lucide-react";

const JobSearchPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
                </div>

                <div className="container-custom relative z-10">
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
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((job) => (
                                <div key={job} className="card-elevated p-6 hover:shadow-elevated transition-all">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <h3 className="font-heading text-xl font-bold mb-2">Software Engineer</h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    <span>Full-time</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span>Remote</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Clock className="w-4 h-4" />
                                                    <span>Posted 2 days ago</span>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all">
                                            Apply Now
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default JobSearchPage;
