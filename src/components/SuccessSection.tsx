import { Check, ArrowUpRight } from "lucide-react";
import mainDog from "@/assets/main-dog.png";
import { landingContent } from "@/content/landing";

const { success } = landingContent;

const SuccessSection = () => {
  return (
    <section className="relative bg-card section-padding overflow-hidden">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          {/* Section label */}
          <p className="text-center text-secondary font-display font-bold text-sm uppercase tracking-widest mb-4">
            {success.sectionLabel}
          </p>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 text-center text-balance">
            {success.headline}
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform scale-75" />
              <img src={mainDog} alt={success.dogAlt} className="relative w-64 sm:w-72 md:w-80 animate-float" />
            </div>

            <div>
              {/* Key points */}
              <div className="space-y-4 mb-8">
                {success.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                      <ArrowUpRight className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <div className="space-y-2 mb-8">
                {success.bullets.map((bullet, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                    <p className="text-foreground font-medium">{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Closing */}
              <div className="bg-gradient-to-br from-ivory to-muted p-6 rounded-2xl border border-border">
                <p className="text-foreground font-display font-bold text-lg mb-1">{success.closingTitle}</p>
                <p className="text-primary font-display font-bold text-xl">{success.closingBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
