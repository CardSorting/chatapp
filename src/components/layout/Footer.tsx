import { Bot, Heart, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-slate-50/50 border-t">
      <div className="container px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center gap-2 transition-colors hover:opacity-90"
            >
              <div className="rounded-lg bg-primary/10 p-2">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl font-bold">AI Companion</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your safe space to explore therapy through AI-guided
              conversations. Take the first step towards mental wellness.
            </p>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                <Shield className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <Heart className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold tracking-tight">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-semibold tracking-tight">Resources</h3>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-semibold tracking-tight">Stay Updated</h3>
            <p className="text-muted-foreground text-sm">
              Get tips and resources for your mental wellness journey.
            </p>
            <Link to="/chat">
              <Button className="gap-2 w-full">
                Start Your Journey
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Companion. All rights reserved.
          </p>
          <div className="flex gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

const quickLinks = [
  { label: "Features", href: "#features" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "About Us", href: "#about" },
  { label: "Start Chat", href: "/chat" },
];

const resources = [
  { label: "Mental Health Guide", href: "#guide" },
  { label: "Therapy Resources", href: "#resources" },
  { label: "Support Articles", href: "#articles" },
  { label: "Community", href: "#community" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#privacy" },
  { label: "Terms of Service", href: "#terms" },
  { label: "Cookie Policy", href: "#cookies" },
];

export default Footer;
