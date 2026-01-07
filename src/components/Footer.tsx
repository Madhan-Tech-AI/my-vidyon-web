import { Link } from "react-router-dom";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUpRight
} from "lucide-react";

const footerLinks = {
  company: [
    { name: "About Us", path: "/about" },
    { name: "Our Team", path: "/about" },
    { name: "Careers", path: "/careers" },
  ],
  solutions: [
    { name: "ERP Solutions", path: "/erp-solutions" },
    { name: "Attendance System", path: "/attendance-system" },
  ],
  support: [
    { name: "Contact Us", path: "/contact" },
    { name: "FAQs", path: "/faq" },
    { name: "Support Portal", path: "/contact" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61585755381684", label: "Facebook" },
  { icon: Twitter, href: "https://x.com/MyVidyon", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/myvidyon/", label: "Instagram" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img src="/logo.png" alt="My Vidyon" className="h-12 w-auto" />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm leading-relaxed">
              Empowering educational institutions with intelligent ERP solutions.
              Streamline operations, enhance learning, and drive excellence.
            </p>
            <div className="space-y-3">
              <a
                href="mailto:myvidyon@gmail.com"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>myvidyon@gmail.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+91 9043988697</span>
              </a>
              <div className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 mt-0.5" />
                <span>123 Education Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-heading font-semibold text-background mb-5">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-5">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-background mb-5">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-background/70 hover:text-primary transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} My Vidyon. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background/70 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6 text-sm text-background/60">
            <Link to="/" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
