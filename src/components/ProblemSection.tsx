import { AlertTriangle, Crosshair, BrainCog } from "lucide-react";
import orangePaw from "@/assets/orange-paw.png";
import { landingContent } from "@/content/landing";

const { problem } = landingContent;

const fracureIcons = [AlertTriangle, Crosshair, BrainCog];

const ProblemSection = () => {
  return (
    <section id="problem" className="relative bg-card section-padding overflow-hidden">
      <img src={orangePaw} alt="" className="absolute top-16 right-8 w-16 opacity-10" aria-hidden="true" />

      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Section label */}
          <p className="text-center text-secondary font-display font-bold text-sm uppercase tracking-widest mb-4">
            {problem.sectionLabel}
          </p>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-center text-balance">
            {problem.headline}
          </h2>

          <div className="text-center mb-8 max-w-3xl mx-auto space-y-3">
            {problem.narrative.split('. ').map((sentence, i, arr) => (
              <p key={i} className="text-lg md:text-xl text-muted-foreground">
                {sentence}{i < arr.length - 1 ? '.' : ''}
              </p>
            ))}
          </div>

          {/* Managing points */}
          <div className="grid gap-3 mb-10 max-w-2xl mx-auto">
            {problem.managingPoints.map((point, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-muted/50 rounded-xl border border-border/50">
                <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-secondary" />
                <p className="text-foreground/90">{point}</p>
              </div>
            ))}
          </div>

          {/* Human Bridge */}
          <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 md:p-10 mb-12">
            <p className="text-xl md:text-2xl font-display font-bold text-foreground mb-6 text-center">
              {problem.bridgeIntro}
            </p>
            <div className="space-y-3">
              {problem.bridgePoints.map((point, index) => (
                <p key={index} className="text-muted-foreground text-center">{point}</p>
              ))}
            </div>
          </div>

          {/* Three Structural Fractures */}
          <h3 className="font-display text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
            The Three Structural Fractures
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problem.fractures.map((fracture, index) => {
              const Icon = fracureIcons[index];
              return (
                <div key={index} className="p-6 bg-card rounded-2xl border border-border shadow-soft hover:shadow-card transition-all duration-300">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-secondary" />
                  </div>
                  <h4 className="font-display font-bold text-foreground mb-2">{fracture.title}</h4>
                  <p className="text-muted-foreground text-sm">{fracture.description}</p>
                </div>
              );
            })}
          </div>

          {/* Diagnosis */}
          <div className="text-center space-y-2 pt-8 border-t border-border">
            {problem.diagnosis.map((line, index) => (
              <p key={index} className={`text-lg md:text-xl ${index === problem.diagnosis.length - 1 ? "font-display font-bold text-primary text-2xl md:text-3xl pt-2" : "text-muted-foreground"}`}>
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
