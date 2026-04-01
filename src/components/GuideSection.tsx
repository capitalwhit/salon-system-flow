import { ArrowRight } from "lucide-react";
import doublePawOrange from "@/assets/double-paw-orange.png";
import { landingContent } from "@/content/landing";

const { guide } = landingContent;

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
            <p className="text-lg md:text-xl text-muted-foreground italic">{guide.intro}</p>
          </div>

          {/* Story */}
          <div className="space-y-4 mb-10 text-center text-lg text-muted-foreground max-w-3xl mx-auto">
            {guide.story.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>

          {/* Today line + values */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center mb-10">
            <p className="text-foreground font-medium text-lg mb-3">{guide.todayLine}</p>
          </div>

          {/* Not advisory / definition */}
          <div className="text-center space-y-2 mb-10">
            <p className="text-primary font-display font-bold text-xl pt-4">{guide.roleShift}</p>
          </div>

          {/* Transformations */}
          <div className="grid md:grid-cols-3 gap-6">
            {guide.transformations.map(({ from, to, description }, index) => (
              <div key={index} className="bg-muted/30 rounded-2xl p-6 border border-border text-center">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-muted-foreground line-through text-sm">{from}</span>
                  <ArrowRight className="w-4 h-4 text-secondary" />
                  <span className="text-primary font-semibold text-sm">{to}</span>
                </div>
                <p className="text-muted-foreground text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;
