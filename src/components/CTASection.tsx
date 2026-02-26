import { Button } from "@/components/ui/button";
import { MessageCircle, Play, ClipboardCheck } from "lucide-react";
import whitePaw from "@/assets/white-paw.png";
import { landingContent } from "@/content/landing";

const { cta } = landingContent;

const CTASection = () => {
  return (
    <section id="cta" className="relative gradient-cta section-padding overflow-hidden">
      <img src={whitePaw} alt="" className="absolute top-20 left-8 w-20 opacity-10" aria-hidden="true" />
      <img src={whitePaw} alt="" className="absolute bottom-20 right-12 w-16 opacity-10 rotate-12" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Headline */}
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
              {cta.headline}
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              {cta.subheadline}
            </p>
          </div>

          {/* Two CTA buttons */}
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-primary-foreground/70 mb-6">{cta.primaryOffer.description}</p>
              <Button variant="cta" size="lg" className="text-lg w-full" asChild>
                <a href="#contact">
                  <MessageCircle className="w-5 h-5" />
                  {cta.primaryOffer.buttonText}
                </a>
              </Button>
            </div>
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-6 md:p-8 text-center">
              <p className="text-primary-foreground/70 mb-6">{cta.secondaryOffer.description}</p>
              <Button variant="cta" size="lg" className="text-lg w-full bg-secondary hover:bg-secondary/90" asChild>
                <a href="#demo">
                  <Play className="w-5 h-5" />
                  {cta.secondaryOffer.buttonText}
                </a>
              </Button>
            </div>
          </div>

          {/* Assessment offer */}
          <div className="bg-card/15 backdrop-blur-sm border border-primary-foreground/20 rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                <ClipboardCheck className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-bold text-2xl text-primary-foreground">
                {cta.assessment.headline}
              </h3>
            </div>
            <p className="text-primary-foreground/70 mb-6">{cta.assessment.description}</p>
            <p className="text-primary-foreground/80 font-medium mb-4">{cta.assessment.auditIntro}</p>
            <ul className="space-y-2 mb-8">
              {cta.assessment.auditPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-primary-foreground/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Button variant="cta" size="lg" className="text-lg" asChild>
                <a href="#audit">
                  <ClipboardCheck className="w-5 h-5" />
                  {cta.assessment.buttonText}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
