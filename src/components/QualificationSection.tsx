import { Check, Shield } from "lucide-react";
import orangePaw from "@/assets/orange-paw.png";
import { landingContent } from "@/content/landing";

const { qualification } = landingContent;

const QualificationSection = () => {
  return (
    <section id="qualification" className="relative gradient-section section-padding overflow-hidden">
      <img src={orangePaw} alt="" className="absolute bottom-16 right-12 w-20 opacity-10 rotate-12" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {qualification.headline}
          </h2>

          <div className="space-y-4 mb-10 text-left max-w-xl mx-auto">
            {qualification.items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border shadow-soft">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-secondary" />
                </div>
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-card border border-border rounded-2xl p-8 shadow-card">
            <div className="flex items-start gap-4 text-left">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-medium mb-2">{qualification.reassuranceTitle}</p>
                <p className="text-muted-foreground">{qualification.reassuranceBody}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
