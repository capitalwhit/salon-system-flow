import { Search, Code, Shield, Eye, Zap, BarChart3, Award } from "lucide-react";
import purplePaw from "@/assets/purple-paw.png";
import { landingContent } from "@/content/landing";

const { plan } = landingContent;

const stepIcons = [Search, Code, Shield];
const governIcons = [Eye, Zap, Award, BarChart3];

const PlanSection = () => {
  return (
    <section id="plan" className="relative gradient-section section-padding overflow-hidden">
      <img src={purplePaw} alt="" className="absolute top-20 left-8 w-16 opacity-10 -rotate-12" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {plan.headline}
            </h2>
          </div>

          {/* Steps timeline */}
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
                            <span className="text-secondary font-display font-bold text-sm">Phase {step.number}</span>
                            <h3 className="font-display font-bold text-xl text-foreground">{step.title}</h3>
                          </div>
                        </div>
                        <p className={`text-muted-foreground mb-2 ${isEven ? "lg:text-right" : ""}`}>{step.description}</p>
                        {step.extra && (
                          <p className={`text-muted-foreground text-sm italic ${isEven ? "lg:text-right" : ""}`}>{step.extra}</p>
                        )}
                        {step.bullets && (
                          <ul className="mt-3 space-y-1">
                            {step.bullets.map((b, i) => (
                              <li key={i} className="flex items-center gap-2 text-foreground text-sm">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />
                    <div className="hidden lg:block lg:w-[calc(50%-2rem)]" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* What Pawformance Governs */}
          <div className="mt-20">
            <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-4 text-center">
              {plan.governs.headline}
            </h3>
            <p className="text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
              {plan.governs.intro}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {plan.governs.items.map((item, index) => {
                const Icon = governIcons[index];
                return (
                  <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-soft">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-secondary" />
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
      </div>
    </section>
  );
};

export default PlanSection;
