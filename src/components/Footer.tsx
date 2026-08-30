import { Link } from "react-router-dom";
import purplePaw from "@/assets/purple-paw.png";
import { landingContent } from "@/content/landing";

const { header } = landingContent;

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link to="/" className="flex items-center gap-3 group">
            <img src={purplePaw} alt="Pawformance" className="w-10 h-10 transition-transform duration-300 group-hover:scale-110" />
            <span className="font-display font-bold text-2xl text-primary">Pawformance</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            {header.navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#cta" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Pawformance. Built for grooming salon owners who want results.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
