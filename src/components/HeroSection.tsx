import { Button } from "@/components/ui/button";
import mainDog from "@/assets/main-dog.png";
import doublePawOrange from "@/assets/double-paw-orange.png";
import { landingContent } from "@/content/landing";

const { hero } = landingContent;

const HeroSection = () => {
  return (
    <section className="relative min-h-screen gradient-hero pt-20 md:pt-24 overflow-hidden">
      {/* Decorative paw prints */}
      <img src={doublePawOrange} alt="" className="absolute top-32 right-4 md:right-16 w-16 md:w-24 opacity-20 animate-float" aria-hidden="true" />
      <img src={doublePawOrange} alt="" className="absolute bottom-24 left-4 md:left-16 w-12 md:w-20 opacity-15 animate-float" style={{ animationDelay: "2s" }} aria-hidden="true" />

      <div className="section-container section-padding">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in-up text-balance">
              {hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up text-balance" style={{ animationDelay: "0.1s" }}>
              {hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <Button variant="hero" asChild>
                <a href="#cta">{hero.primaryCta}</a>
              </Button>
              <Button variant="hero-secondary" asChild>
                <a href="#guide">{hero.secondaryCta}</a>
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform scale-90" />
              <img src={mainDog} alt={hero.dogAlt} className="relative w-64 sm:w-80 md:w-96 lg:w-[28rem] animate-float" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
