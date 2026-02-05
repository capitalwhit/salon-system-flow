import { Search, Download, Zap, Sunrise } from "lucide-react";
import purplePaw from "@/assets/purple-paw.png";
import { landingContent } from "@/content/landing";

const { plan } = landingContent;

const stepIcons = [Search, Download, Zap, Sunrise];

const PlanSection = () => {
  return (
    <section id="plan" className="relative gradient-section section-padding overflow-hidden">
      <img src={purplePaw} alt="" className="absolute top-20 left-8 w-16 opacity-10 -rotate-12" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">{plan.headline}</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{plan.subheadline}</p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />
            <div className="space-y-8 lg:space-y-0">
              {plan.steps.map((step, index) => {
                const Icon = stepIcons[index];
                const isEven = index % 2 === 0;
                return (
                  <div key={index} className={`relative lg:flex lg:items-center lg:gap-8 ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`lg:w-[calc(50%-2rem)] ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-card hover:shadow-elevated transition-all duration-300">
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <span className="text-secondary font-display font-bold text-sm">Step {step.number}</span>
                            <h3 className="font-display font-bold text-xl text-foreground">{step.title}</h3>
                          </div>
                        </div>
                        <p className={`text-muted-foreground ${isEven ? "lg:text-right" : ""}`}>{step.description}</p>
                      </div>
                    </div>
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
