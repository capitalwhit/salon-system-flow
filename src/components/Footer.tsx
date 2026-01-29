import purplePaw from "@/assets/purple-paw.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src={purplePaw} 
              alt="Pawformance" 
              className="w-10 h-10 brightness-200 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="font-display font-bold text-2xl">
              Pawformance
            </span>
          </a>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a href="#problem" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              The Problem
            </a>
            <a href="#guide" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Our Approach
            </a>
            <a href="#plan" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              The Plan
            </a>
            <a href="#qualification" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Who It's For
            </a>
            <a href="#cta" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contact
            </a>
          </nav>
        </div>

        <div className="mt-10 pt-8 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} Pawformance. Built for grooming salon owners who want their lives back.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
