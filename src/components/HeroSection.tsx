import { Button } from "@/components/ui/button";
import mainDog from "@/assets/main-dog.png";
import doublePawOrange from "@/assets/double-paw-orange.png";
import { landingContent } from "@/content/landing";

const { hero } = landingContent;

const HeroSection = () => {
  return (
    <section className="relative gradient-hero pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
      <img
        src={doublePawOrange}
        alt=""
        className="absolute top-32 right-4 md:right-16 w-16 md:w-24 opacity-20 animate-float"
        aria-hidden="true"
      />
      <img
        src={doublePawOrange}
        alt=""
        className="absolute bottom-10 left-4 md:left-16 w-12 md:w-20 opacity-15 animate-float"
        style={{ animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          {/* Bouncing dog above the headline */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl transform scale-90" />
              <img
                src={mainDog}
                alt={hero.dogAlt}
                className="relative w-48 sm:w-56 md:w-64 lg:w-72 animate-float"
              />
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight mb-6 uppercase animate-fade-in-up text-balance">
            Run your salon{" "}
            <span className="text-primary relative whitespace-nowrap">
              on target
              <span className="absolute left-0 right-0 -bottom-1 h-1.5 md:h-2 bg-secondary rounded-full" />
            </span>
            , every day.
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up text-balance"
            style={{ animationDelay: "0.1s" }}
          >
            {hero.subheadline}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Button
              size="lg"
              className="px-8 py-6 text-base md:text-lg font-bold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20 sm:min-w-[280px]"
              asChild
            >
              <a href="#final-cta">{hero.primaryCta}</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-base md:text-lg font-bold rounded-xl border-2 border-primary text-primary bg-card hover:bg-primary hover:text-primary-foreground sm:min-w-[280px]"
              asChild
            >
              <a href="#how-it-works">{hero.secondaryCta}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
