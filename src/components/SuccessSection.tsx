import { Check, Heart } from "lucide-react";
import mainDog from "@/assets/main-dog.png";
import { landingContent } from "@/content/landing";

const { success } = landingContent;

const SuccessSection = () => {
  return (
    <section className="relative bg-card section-padding overflow-hidden">
      <div className="section-container">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative flex justify-center">
              <div className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl transform scale-75" />
              <img src={mainDog} alt={success.dogAlt} className="relative w-64 sm:w-72 md:w-80 animate-float" />
            </div>

            <div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 text-balance">
                {success.headline}
              </h2>

              <div className="space-y-4 mb-8">
                {success.points.map((point, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 bg-primary/5 rounded-xl border border-primary/10">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <p className="text-foreground font-medium">{point}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-ivory to-muted p-6 rounded-2xl border border-border">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-foreground font-medium mb-2">{success.closingTitle}</p>
                    <p className="text-muted-foreground">{success.closingBody}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
