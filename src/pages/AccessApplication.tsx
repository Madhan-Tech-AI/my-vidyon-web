import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

const AccessApplicationPage = () => {
    return (
        <div className="min-h-screen bg-background">
            <Navbar />

            {/* Hero Section */}
            <section className="relative py-12 md:py-16 overflow-hidden" style={{ backgroundColor: '#FEF3E2' }}>
                <div className="container-custom relative z-10">
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
                        <div className="space-y-4">
                            {[
                                { title: "Software Engineer", status: "Under Review", icon: Clock, color: "text-primary" },
                                { title: "Product Manager", status: "Interview Scheduled", icon: CheckCircle, color: "text-green-600" },
                                { title: "UX Designer", status: "Application Submitted", icon: FileText, color: "text-blue-600" },
                            ].map((app, index) => (
                                <div key={index} className="card-elevated p-6">
                                    <div className="flex-1">
                                        <h3 className="font-heading text-xl font-bold mb-2">{app.title}</h3>
                                        <div className="flex items-center gap-2">
                                            <app.icon className={`w-5 h-5 ${app.color}`} />
                                            <span className={`font-semibold ${app.color}`}>{app.status}</span>
                                        </div>
                                        <p className="text-sm text-muted-foreground mt-2">Applied on January 3, 2026</p>
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

export default AccessApplicationPage;
