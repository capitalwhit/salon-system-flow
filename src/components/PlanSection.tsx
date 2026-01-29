import { Search, Download, Zap, Sunrise } from "lucide-react";
import purplePaw from "@/assets/purple-paw.png";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Review Your Operations",
    description: "We start by understanding how your salon actually runs—not how it should run.",
  },
  {
    number: "02",
    icon: Download,
    title: "Adopt the System",
    description: "We deploy a standardized, modular operating system that supports your business model—without changing your grooming style or values.",
  },
  {
    number: "03",
    icon: Zap,
    title: "Stabilize the Business",
    description: "We bring consistency to people workflows, scheduling and capacity, customer communication, and service standards. So the business stops relying on you to function.",
  },
  {
    number: "04",
    icon: Sunrise,
    title: "Step Back—On Your Terms",
    description: "With the system in place, groom because you want to, reduce hours without chaos, prepare for retirement or transition, or explore selling, partnering, or simply slowing down.",
  },
];

const PlanSection = () => {
  return (
    <section id="plan" className="relative gradient-section section-padding overflow-hidden">
      {/* Decorative element */}
      <img 
        src={purplePaw} 
        alt="" 
        className="absolute top-20 left-8 w-16 opacity-10 -rotate-12"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              A Clear Path Out of the Day-to-Day
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four practical steps to reclaim your time and build a business that works without you.
            </p>
          </div>

          {/* Steps */}
          <div className="relative">
            {/* Connecting line - desktop only */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;
                
                return (
                  <div 
                    key={index}
                    className={`relative lg:flex lg:items-center lg:gap-8 ${
                      isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    {/* Card */}
                    <div className={`lg:w-[calc(50%-2rem)] ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                      <div className="bg-card p-6 md:p-8 rounded-2xl border border-border shadow-card hover:shadow-elevated transition-all duration-300">
                        <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <span className="text-secondary font-display font-bold text-sm">
                              Step {step.number}
                            </span>
                            <h3 className="font-display font-bold text-xl text-foreground">
                              {step.title}
                            </h3>
                          </div>
                        </div>
                        <p className={`text-muted-foreground ${isEven ? "lg:text-right" : ""}`}>
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center dot - desktop only */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background" />

                    {/* Spacer for alternating layout */}
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
