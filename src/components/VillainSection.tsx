import { AlertTriangle, TrendingDown, Users, DollarSign, LogOut, ShieldAlert } from "lucide-react";
import purplePaw from "@/assets/purple-paw.png";
import { landingContent } from "@/content/landing";

const { villain } = landingContent;

const icons = [AlertTriangle, Users, TrendingDown, DollarSign, LogOut, ShieldAlert];

const VillainSection = () => {
  return (
    <section className="relative gradient-section section-padding overflow-hidden">
      <img src={purplePaw} alt="" className="absolute bottom-16 left-8 w-20 opacity-10 rotate-12" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {villain.headline}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              {villain.description}
            </p>
          </div>

          <div className="mb-12">
            <p className="text-center text-foreground font-medium mb-8">{villain.consequencesIntro}</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {villain.consequences.map((text, index) => {
                const Icon = icons[index];
                return (
                  <div key={index} className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border shadow-soft hover:shadow-card transition-all duration-300">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-foreground font-medium">{text}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 text-center">
            <p className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">{villain.empathyTitle}</p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {villain.empathyBody}
            </p>
            <p className="text-muted-foreground mt-4">{villain.empathyExtra}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillainSection;
