import { Link } from "react-router-dom";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { customerRecoveryContent as c } from "@/content/customerRecovery";
import doublePawOrange from "@/assets/double-paw-orange.png";

const PrimaryCta = ({ children }: { children: React.ReactNode }) => (
  <Button
    size="lg"
    className="px-10 py-6 text-base md:text-lg font-bold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20"
    asChild
  >
    <a href="mailto:hello@pawformance.com">{children}</a>
  </Button>
);

const CustomerRecovery = () => {
  return (
    <div className="min-h-screen" id="top">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative gradient-hero pt-28 md:pt-32 pb-16 md:pb-24 overflow-hidden">
          <img
            src={doublePawOrange}
            alt=""
            aria-hidden="true"
            className="absolute bottom-10 left-4 md:left-16 w-14 md:w-20 opacity-15 animate-float"
          />
          <div className="section-container max-w-4xl text-center">
            <p className="font-display uppercase tracking-widest text-primary font-bold mb-4">{c.hero.eyebrow}</p>
            <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
              {c.hero.headline}
            </h1>
            <div className="space-y-3 max-w-2xl mx-auto mb-8">
              {c.hero.body.map((line) => (
                <p key={line} className="text-lg text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
            <div className="inline-block bg-card rounded-2xl px-8 py-6 shadow-card mb-8">
              <p className="font-display text-2xl font-extrabold text-primary mb-2">{c.hero.priceLine}</p>
              <p className="text-sm text-muted-foreground">{c.hero.subline}</p>
            </div>
            <div>
              <PrimaryCta>{c.hero.cta}</PrimaryCta>
            </div>
          </div>
        </section>

        {/* Problem */}
        <section className="bg-card section-padding">
          <div className="section-container max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-8 text-balance">
              {c.problem.headline}
            </h2>
            <div className="space-y-3 mb-8">
              {c.problem.body.map((line) => (
                <p key={line} className="text-lg text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
            <div className="border-l-4 border-secondary pl-6 text-left inline-block">
              {c.problem.closing.map((line) => (
                <p key={line} className="font-display text-xl font-bold text-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Proof */}
        <section className="section-padding">
          <div className="section-container max-w-4xl text-center">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mb-4 text-balance">
              {c.proof.headline}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-12">{c.proof.intro}</p>
            <div className="grid sm:grid-cols-3 gap-6 mb-10">
              {c.proof.stats.map((s) => (
                <div key={s.label} className="bg-card rounded-2xl p-8 shadow-card">
                  <p className="font-display text-4xl md:text-5xl font-extrabold text-secondary mb-2">{s.value}</p>
                  <p className="text-muted-foreground text-sm">{s.label}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-6">{c.proof.note}</p>
            <p className="font-display text-xl md:text-2xl font-bold text-foreground text-balance">
              {c.proof.closing}
            </p>
          </div>
        </section>

        {/* Campaign results */}
        <section className="bg-card section-padding">
          <div className="section-container">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary text-center mb-14">
              {c.campaigns.headline}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.campaigns.items.map((item) => (
                <div key={item.name} className="bg-background rounded-2xl p-6 border border-border">
                  <p className="font-display uppercase tracking-widest text-xs font-bold text-secondary mb-4">
                    {item.name}
                  </p>
                  <div className="space-y-3 mb-5">
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-2xl font-extrabold text-foreground">{item.contacted}</span>
                      <span className="text-sm text-muted-foreground">Customers Contacted</span>
                    </div>
                    {item.bookings && (
                      <div className="flex items-baseline justify-between gap-4">
                        <span className="font-display text-2xl font-extrabold text-foreground">{item.bookings}</span>
                        <span className="text-sm text-muted-foreground">Recorded Bookings</span>
                      </div>
                    )}
                    <div className="flex items-baseline justify-between gap-4">
                      <span className="font-display text-2xl font-extrabold text-primary">{item.revenue}</span>
                      <span className="text-sm text-muted-foreground">Revenue</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="font-display text-3xl font-extrabold text-secondary">{item.multiple}</p>
                    <p className="text-xs text-muted-foreground">{c.campaigns.multipleLabel}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-2xl mx-auto text-center mt-14 space-y-3">
              {c.campaigns.closing.map((line) => (
                <p key={line} className="text-lg text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantee */}
        <section className="section-padding">
          <div className="section-container max-w-3xl">
            <div className="gradient-cta rounded-3xl p-8 md:p-12 text-center">
              <ShieldCheck className="w-14 h-14 text-secondary mx-auto mb-6" />
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-3">
                {c.guarantee.headline}
              </h2>
              <p className="font-display text-xl text-secondary mb-6">{c.guarantee.subheadline}</p>
              <div className="space-y-3 mb-8">
                {c.guarantee.body.map((line) => (
                  <p key={line} className="text-primary-foreground/80">
                    {line}
                  </p>
                ))}
              </div>
              <div className="space-y-1 mb-8">
                {c.guarantee.points.map((line) => (
                  <p key={line} className="font-display font-bold text-primary-foreground">
                    {line}
                  </p>
                ))}
              </div>
              <Button
                size="lg"
                className="px-10 py-6 text-lg font-bold rounded-xl bg-secondary text-secondary-foreground hover:bg-card hover:text-primary shadow-xl transition-all"
                asChild
              >
                <a href="mailto:hello@pawformance.com">{c.guarantee.cta}</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Math */}
        <section className="bg-card section-padding">
          <div className="section-container max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-6">
              {c.math.headline}
            </h2>
            <div className="space-y-2 mb-10">
              {c.math.intro.map((line) => (
                <p key={line} className="text-lg text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {c.math.rows.map((row) => (
                <div
                  key={row.price}
                  className="bg-background rounded-2xl p-5 border border-border flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-semibold text-foreground">{row.price}</span>
                  <span className="text-secondary font-display font-bold">{row.result}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {c.math.closing.map((line) => (
                <p key={line} className="text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Includes */}
        <section className="section-padding">
          <div className="section-container max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary text-center mb-4">
              {c.includes.headline}
            </h2>
            <p className="text-center text-muted-foreground mb-10">{c.includes.intro}</p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 bg-card rounded-3xl p-8 md:p-10 shadow-card">
              {c.includes.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted-foreground">
                  <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="text-center mt-8 space-y-1">
              {c.includes.closing.map((line) => (
                <p key={line} className="font-semibold text-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-card section-padding">
          <div className="section-container max-w-4xl">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary text-center mb-14">
              {c.howItWorks.headline}
            </h2>
            <div className="space-y-10">
              {c.howItWorks.steps.map((step) => (
                <div key={step.number} className="flex flex-col sm:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center">
                      <span className="font-display text-xl font-extrabold text-primary-foreground">
                        {step.number}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-3">{step.title}</h3>
                    <div className="space-y-2">
                      {step.body.map((line) => (
                        <p key={line} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                    {"flow" in step && step.flow && (
                      <div className="flex flex-wrap items-center gap-3 mt-5">
                        {step.flow.map((f, i) => (
                          <div key={f} className="flex items-center gap-3">
                            <span className="bg-background border border-border rounded-xl px-4 py-2 text-sm font-semibold text-foreground">
                              {f}
                            </span>
                            {i < step.flow!.length - 1 && <ArrowRight className="w-4 h-4 text-secondary" />}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="section-padding">
          <div className="section-container max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mb-8">
              {c.pricing.headline}
            </h2>
            <div className="space-y-3 mb-10">
              {c.pricing.body.map((line) => (
                <p key={line} className="text-lg text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
            <PrimaryCta>{c.pricing.cta}</PrimaryCta>
          </div>
        </section>

        {/* Cross sell */}
        <section className="gradient-cta py-20 md:py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-8 text-balance">
              {c.crossSell.headline}
            </h2>
            <div className="space-y-3 mb-10">
              {c.crossSell.body.map((line) => (
                <p key={line} className="text-primary-foreground/80 text-lg">
                  {line}
                </p>
              ))}
            </div>
            <Button
              size="lg"
              className="px-10 py-6 text-lg font-bold rounded-xl bg-secondary text-secondary-foreground hover:bg-card hover:text-primary shadow-xl transition-all"
              asChild
            >
              <Link to="/work-with-us">{c.crossSell.cta}</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CustomerRecovery;
