import { Button } from "@/components/ui/button";
import { landingContent } from "@/content/landing";

const { finalCta } = landingContent;

const FinalCTASection = () => {
  return (
    <section id="final-cta" className="gradient-cta py-20 md:py-24 px-6 text-center">
      <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-8 text-balance">
        {finalCta.headline}
      </h2>
      <Button
        size="lg"
        className="px-10 py-6 text-lg md:text-xl font-bold rounded-xl bg-secondary text-secondary-foreground hover:bg-card hover:text-primary shadow-xl transition-all"
        asChild
      >
        <a href="#top">{finalCta.buttonText}</a>
      </Button>
    </section>
  );
};

export default FinalCTASection;
