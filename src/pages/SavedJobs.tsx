import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Bookmark, Trash2, MapPin, Briefcase, Clock } from "lucide-react";

const SavedJobsPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="container-custom relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <ScrollAnimation animation="fade-up">
                            <h1 className="font-heading text-3xl md:text-4xl font-bold mb-3 leading-tight text-foreground">
                                Your <span className="text-gradient">Saved Jobs</span>
                            </h1>
                        </ScrollAnimation>

                        <ScrollAnimation animation="fade-up" delay={100}>
                            <p className="text-base text-muted-foreground">
                                Keep track of positions you're interested in
                            </p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Saved Jobs List */}
            <section className="py-12 md:py-16">
                <div className="container-custom">
                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {[1, 2, 3].map((job) => (
                                <div key={job} className="card-elevated p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                        <div className="flex-1">
                                            <div className="flex items-start gap-3">
                                                <Bookmark className="w-5 h-5 text-primary mt-1 fill-primary" />
                                                <div className="flex-1">
                                                    <h3 className="font-heading text-xl font-bold mb-2">Senior Product Designer</h3>
                                                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                                                        <div className="flex items-center gap-2">
                                                            <Briefcase className="w-4 h-4" />
                                                            <span>Full-time</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <MapPin className="w-4 h-4" />
                                                            <span>Hybrid</span>
                                                        </div>
                                                        <div className="flex items-center gap-2">
                                                            <Clock className="w-4 h-4" />
                                                            <span>Saved 3 days ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:bg-primary/90 transition-all">
                                                Apply Now
                                            </button>
                                            <button className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-all">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
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

export default SavedJobsPage;
