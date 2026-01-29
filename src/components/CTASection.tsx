import { Button } from "@/components/ui/button";
import { MessageCircle, Clock, Target } from "lucide-react";
import whitePaw from "@/assets/white-paw.png";

const offers = [
  {
    icon: Target,
    title: "Can Your Grooming Salon Run Without You?",
    description: "In 15 minutes, we'll assess how dependent your business is on you—and what it would take to step back without losing quality or income.",
  },
  {
    icon: Clock,
    title: "What Is Your Grooming Salon Actually Worth?",
    description: "Most grooming salons are worth far less than owners expect—not because of revenue, but because of how dependent they are on the owner.",
  },
];

const CTASection = () => {
  return (
    <section id="cta" className="relative gradient-cta section-padding overflow-hidden">
      {/* Decorative paw prints */}
      <img 
        src={whitePaw} 
        alt="" 
        className="absolute top-20 left-8 w-20 opacity-10"
        aria-hidden="true"
      />
      <img 
        src={whitePaw} 
        alt="" 
        className="absolute bottom-20 right-12 w-16 opacity-10 rotate-12"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              Let's Talk About What's Next—for You and Your Salon
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              No pressure. No obligation. Just a conversation with people who understand grooming businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href="#contact">
                  <MessageCircle className="w-5 h-5" />
                  Explore Your Options
                </a>
              </Button>
            </div>
          </div>

          {/* Offers */}
          <div className="grid md:grid-cols-2 gap-6">
            {offers.map((offer, index) => {
              const Icon = offer.icon;
              return (
                <div 
                  key={index}
                  className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8 hover:bg-card/15 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-primary-foreground mb-3">
                    {offer.title}
                  </h3>
                  <p className="text-primary-foreground/70">
                    {offer.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
