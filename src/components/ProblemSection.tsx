import { Heart, Clock, Users, TrendingDown, AlertCircle } from "lucide-react";
import orangePaw from "@/assets/orange-paw.png";

const painPoints = [
  "The business started with you and slowly came to depend on you for everything",
  "Taking time off became difficult—or stopped altogether",
  "You still groom full time and carry the weight of running the business",
  "More customers and more staff brought more stress, not more freedom",
  "You're not really sure what you make day to day—just that staying open feels like a blessing",
  "If you step back, things fall apart",
  "Retirement, benefits, or even health insurance feel out of reach",
  "One sick week or short break could threaten the whole business",
  "Your owner \"salary\" is less than what you'd earn working for someone else",
];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative bg-card section-padding overflow-hidden">
      {/* Decorative element */}
      <img 
        src={orangePaw} 
        alt="" 
        className="absolute top-16 right-8 w-16 opacity-10"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              You Love Grooming. You're Just Tired of Running a Grooming Business.
            </h2>
          </div>

          {/* Intro paragraph */}
          <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            You didn't start your salon to lose money, put out constant fires, deal with two-legged customers all day, micromanage people, or be the only person who knows how things work—or cares enough to do them right.
          </p>

          <p className="text-lg font-medium text-foreground text-center mb-8">
            But somewhere along the way...
          </p>

          {/* Pain Points Grid */}
          <div className="grid gap-3 md:gap-4 mb-12">
            {painPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 md:p-5 bg-muted/50 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors duration-300"
              >
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-secondary" />
                <p className="text-foreground/90">{point}</p>
              </div>
            ))}
          </div>

          {/* Emotional conclusion */}
          <div className="text-center space-y-6 pt-8 border-t border-border">
            <p className="text-lg md:text-xl text-foreground font-medium">
              Most grooming owners love grooming—but hate running the business.
            </p>
            <p className="text-muted-foreground text-lg italic">
              It's lonely. It's messy. It's unforgiving.
            </p>
            <p className="text-muted-foreground">
              And if you had to do it again, you might stay small, go mobile, or never open a shop at all.
            </p>
            <p className="text-xl md:text-2xl font-display font-bold text-primary pt-4">
              So why is it this hard?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
