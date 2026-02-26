import { Check, X } from "lucide-react";
import orangePaw from "@/assets/orange-paw.png";
import { landingContent } from "@/content/landing";

const { qualification } = landingContent;

const QualificationSection = () => {
  return (
    <section id="qualification" className="relative gradient-section section-padding overflow-hidden">
      <img src={orangePaw} alt="" className="absolute bottom-16 right-12 w-20 opacity-10 rotate-12" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12 text-center">
            {qualification.headline}
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Is For */}
            <div>
              <h3 className="font-display font-bold text-foreground text-lg mb-4">{qualification.isFor.title}</h3>
              <div className="space-y-3">
                {qualification.isFor.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border shadow-soft">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-secondary/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-secondary" />
                    </div>
                    <p className="text-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Is Not For */}
            <div>
              <h3 className="font-display font-bold text-foreground text-lg mb-4">{qualification.isNotFor.title}</h3>
              <div className="space-y-3">
                {qualification.isNotFor.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-xl border border-border/50">
                    <div className="flex-shrink-0 w-7 h-7 rounded-full bg-muted flex items-center justify-center">
                      <X className="w-4 h-4 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualificationSection;
