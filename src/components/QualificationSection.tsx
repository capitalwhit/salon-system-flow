import { Check, Shield } from "lucide-react";
import orangePaw from "@/assets/orange-paw.png";

const qualifications = [
  "Own an established grooming salon",
  "Are tired of being the bottleneck",
  "Want the business to run without constant oversight",
  "Are thinking about growing, stepping back, or retiring",
  "Care deeply about quality and your customers",
];

const QualificationSection = () => {
  return (
    <section id="qualification" className="relative gradient-section section-padding overflow-hidden">
      {/* Decorative element */}
      <img 
        src={orangePaw} 
        alt="" 
        className="absolute bottom-16 right-12 w-20 opacity-10 rotate-12"
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pawformance Is a Fit If You…
          </h2>

          {/* Qualifications */}
          <div className="space-y-4 mb-10 text-left max-w-xl mx-auto">
            {qualifications.map((item, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-soft"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          {/* Reassurance */}
          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium mb-2">
                  This is not about franchising or forcing sameness.
                </p>
                <p className="text-muted-foreground">
                  It's about protecting what you've built—and yourself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
