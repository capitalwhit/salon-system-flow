import { GitFork, ShieldOff, BrainCircuit, Landmark } from "lucide-react";
import purplePaw from "@/assets/purple-paw.png";
import { landingContent } from "@/content/landing";

const { villain } = landingContent;

const consequenceIcons = [GitFork, ShieldOff, BrainCircuit, Landmark];

const VillainSection = () => {
  return (
    <section className="relative gradient-section section-padding overflow-hidden">
      <img src={purplePaw} alt="" className="absolute bottom-16 left-8 w-20 opacity-10 rotate-12" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
              {villain.headline}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              {villain.narrative.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>

          {/* Low-Agency callout */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 mb-12 text-center">
            <p className="text-foreground text-lg mb-4">{villain.consequence}</p>
            <p className="text-foreground font-medium text-lg">{villain.lowAgency}</p>
            <p className="text-muted-foreground mt-4 italic">{villain.managerGap}</p>
          </div>

          {/* Consequences */}
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
            The Consequences of a Low-Agency System
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            {villain.consequences.map((item, index) => {
              const Icon = consequenceIcons[index];
              return (
                <div key={index} className="p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h4 className="font-display font-bold text-foreground">{item.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillainSection;
