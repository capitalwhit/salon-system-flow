import orangePaw from "@/assets/orange-paw.png";
import { landingContent } from "@/content/landing";

const { problem } = landingContent;

const ProblemSection = () => {
  return (
    <section id="problem" className="relative bg-card section-padding overflow-hidden">
      <img src={orangePaw} alt="" className="absolute top-16 right-8 w-16 opacity-10" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              {problem.headline}
            </h2>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            {problem.intro}
          </p>

          <p className="text-lg font-medium text-foreground text-center mb-8">
            {problem.transition}
          </p>

          <div className="grid gap-3 md:gap-4 mb-12">
            {problem.painPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 md:p-5 bg-muted/50 rounded-xl border border-border/50 hover:border-secondary/50 transition-colors duration-300">
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-secondary" />
                <p className="text-foreground/90">{point}</p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-6 pt-8 border-t border-border">
            <p className="text-lg md:text-xl text-foreground font-medium">{problem.conclusion}</p>
            <p className="text-muted-foreground text-lg italic">{problem.emotionalLine}</p>
            <p className="text-muted-foreground">{problem.alternate}</p>
            <p className="text-xl md:text-2xl font-display font-bold text-primary pt-4">{problem.closingQuestion}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
