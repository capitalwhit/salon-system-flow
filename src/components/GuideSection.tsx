import { Building, Shield, ArrowRight } from "lucide-react";
import doublePawOrange from "@/assets/double-paw-orange.png";
import { landingContent } from "@/content/landing";

const { guide } = landingContent;

const credentialIcons = [Building, Shield];

const GuideSection = () => {
  return (
    <section id="guide" className="relative bg-card section-padding overflow-hidden">
      <img src={doublePawOrange} alt="" className="absolute top-24 right-12 w-24 opacity-10" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {guide.headline}
            </h2>
          </div>

          <div className="space-y-6 mb-12 text-center">
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">{guide.intro}</p>
            <p className="text-lg text-foreground max-w-3xl mx-auto">{guide.story}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {guide.credentials.map((cred, index) => {
              const Icon = credentialIcons[index];
              return (
                <div key={index} className="flex items-start gap-4 p-6 bg-muted/30 rounded-xl border border-border">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${index === 0 ? "bg-primary/10" : "bg-secondary/20"} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${index === 0 ? "text-primary" : "text-secondary"}`} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-2">{cred.title}</h3>
                    <p className="text-muted-foreground">{cred.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-10">
            <p className="text-center font-display font-bold text-xl text-foreground mb-8">{guide.transformationIntro}</p>
            <div className="grid sm:grid-cols-3 gap-6">
              {guide.transformations.map(({ from, to }, index) => (
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
