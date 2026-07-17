import { Calendar, Scissors, Handshake, TrendingUp, Heart, Target, ArrowDown } from "lucide-react";
import { landingContent } from "@/content/landing";

const { howItWorks } = landingContent;

const iconMap = {
  calendar: Calendar,
  scissors: Scissors,
  handshake: Handshake,
  trendingUp: TrendingUp,
  loyalty: Heart,
};

// Bright red for the trending up "stock line" icon
const iconColorFor = (key: string) =>
  key === "trendingUp" ? "text-red-500" : "text-primary-foreground";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="bg-card section-padding">
      <div className="section-container">
        {/* Bouncing target with arrow pointing to the header */}
        <div className="flex flex-col items-center mb-8">
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl" />
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-card border-4 border-primary flex items-center justify-center shadow-lg">
              <Target className="w-10 h-10 md:w-12 md:h-12 text-secondary" strokeWidth={2.5} />
            </div>
          </div>
          <ArrowDown className="w-8 h-8 text-primary mt-3 animate-bounce" strokeWidth={2.5} />
        </div>

        {/* Header from v1 */}
        <div className="text-center mb-20">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-widest text-primary mb-4">
            {howItWorks.label}
          </h2>
          <div className="h-1 w-24 bg-secondary mx-auto rounded-full" />
          <p className="max-w-2xl mx-auto mt-6 text-lg text-muted-foreground">
            {howItWorks.intro}
          </p>
        </div>

        {/* Zigzag rows */}
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {howItWorks.steps.map((step, index) => {
            const Icon = iconMap[step.iconKey as keyof typeof iconMap];
            const reversed = index % 2 === 1;
            const accentEminence = index % 2 === 0;

            return (
              <div
                key={step.number}
                className={`flex flex-col ${
                  reversed ? "md:flex-row-reverse" : "md:flex-row"
                } items-center gap-12 md:gap-24`}
              >
                {/* Visual box */}
                <div className="flex-1 w-full">
                  <div
                    className={`relative w-full aspect-square max-w-md mx-auto rounded-3xl flex items-center justify-center ${
                      accentEminence ? "bg-primary/5" : "bg-secondary/5"
                    }`}
                  >
                    <div
                      className={`w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center shadow-elevated ${
                        accentEminence ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <Icon
                        className={`w-16 h-16 md:w-20 md:h-20 ${iconColorFor(step.iconKey)}`}
                        strokeWidth={2}
                      />
                    </div>

                    {step.tag && (
                      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-bottom-6 md:-right-6 bg-card px-5 py-3 rounded-2xl shadow-card whitespace-nowrap">
                        <p
                          className={`font-display font-bold ${
                            accentEminence ? "text-primary" : "text-secondary"
                          }`}
                        >
                          {step.tag}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Copy — only the numbered label + body, no second header */}
                <div className="flex-1 text-center md:text-left">
                  <span className="text-secondary font-display font-bold text-xl md:text-2xl mb-4 block">
                    {step.number}. {step.title}
                  </span>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
