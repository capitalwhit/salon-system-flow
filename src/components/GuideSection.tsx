import { CheckCircle, Shield, Building, ArrowRight } from "lucide-react";
import doublePawOrange from "@/assets/double-paw-orange.png";

const transformations = [
  { from: "Burnout", to: "stability" },
  { from: "Micromanaging", to: "coaching" },
  { from: "Survival", to: "sustainable profit" },
];

const GuideSection = () => {
  return (
    <section id="guide" className="relative bg-card section-padding overflow-hidden">
      {/* Decorative element */}
      <img 
        src={doublePawOrange} 
        alt="" 
        className="absolute top-24 right-12 w-24 opacity-10"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              We've Been Where You Are—And We Know How to Fix This
            </h2>
          </div>

          {/* Credibility */}
          <div className="space-y-6 mb-12 text-center">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Pawformance isn't software built by people guessing what grooming businesses need.
            </p>
            <p className="text-lg text-foreground max-w-3xl mx-auto">
              It was created by transforming high-stress grooming jobs—masquerading as long-standing grooming businesses—into stable, profitable salons with teams who grow, care about quality, and take pride in their work.
            </p>
          </div>

          {/* Trust Builder */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Building className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  We Operate Our Own Salons
                </h3>
                <p className="text-muted-foreground">
                  We use Pawformance daily and decided to help other owners do the same.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <Shield className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-2">
                  Tested Under Real Pressure
                </h3>
                <p className="text-muted-foreground">
                  Every system, workflow, and standard has been tested in real shops—with real dogs, real people, real customers, and real margins.
                </p>
              </div>
            </div>
          </div>

          {/* Transformation */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10">
            <p className="text-center font-display font-bold text-xl text-foreground mb-8">
              We help owners move from:
            </p>
            <div className="grid sm:grid-cols-3 gap-6">
              {transformations.map(({ from, to }, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="text-muted-foreground line-through">{from}</span>
                    <ArrowRight className="w-4 h-4 text-secondary" />
                    <span className="text-primary font-semibold">{to}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
