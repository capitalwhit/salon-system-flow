import { AlertTriangle, TrendingDown, Users, DollarSign, LogOut } from "lucide-react";
import purplePaw from "@/assets/purple-paw.png";

const consequences = [
  { icon: AlertTriangle, text: "Quality becomes inconsistent" },
  { icon: Users, text: "Staff turnover increases" },
  { icon: TrendingDown, text: "Customers rely on you, not the business" },
  { icon: DollarSign, text: "Profit is unclear at best, nonexistent at worst" },
  { icon: LogOut, text: "Retirement or exit feels impossible" },
];

const VillainSection = () => {
  return (
    <section className="relative gradient-section section-padding overflow-hidden">
      {/* Decorative element */}
      <img 
        src={purplePaw} 
        alt="" 
        className="absolute bottom-16 left-8 w-20 opacity-10 rotate-12"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              The Problem Isn't You. It's the Lack of a System.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Most independent grooming salons are built on experience, instinct, long hours, and endurance—not on systems designed to run without constant owner involvement.
            </p>
          </div>

          {/* Consequences */}
          <div className="mb-12">
            <p className="text-center text-foreground font-medium mb-8">
              Without clear standards, workflows, and accountability:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {consequences.map(({ icon: Icon, text }, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border shadow-soft hover:shadow-card transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-foreground font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Empathy Message */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 text-center">
            <p className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
              This isn't failure.
            </p>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              It's what happens when you're forced to work <em>in</em> the business all day with no time—or energy—to work <em>on</em> it.
            </p>
            <p className="text-muted-foreground mt-4">
              And that's not easy when there's barking nonstop, a team that needs heavy guidance, and two-legged customers who need reassurance at every turn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VillainSection;
