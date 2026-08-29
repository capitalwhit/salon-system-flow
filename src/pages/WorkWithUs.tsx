import { Link } from "react-router-dom";
import { Check, ArrowRight, Compass, PackageCheck } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { workWithUsContent as c } from "@/content/workWithUs";
import doublePawOrange from "@/assets/double-paw-orange.png";
import mainDog from "@/assets/main-dog.png";

const CtaLink = ({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
}) => {
  const cls =
    variant === "primary"
      ? "px-8 py-6 text-base font-bold rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/20"
      : "px-8 py-6 text-base font-bold rounded-xl border-2 border-primary text-primary bg-card hover:bg-primary hover:text-primary-foreground";

  const inner = <span className="inline-flex items-center gap-2">{children}</span>;

  return (
    <Button size="lg" variant={variant === "primary" ? "default" : "outline"} className={cls} asChild>
      {href.startsWith("/") ? <Link to={href}>{inner}</Link> : <a href={href}>{inner}</a>}
    </Button>
  );
};

const WorkWithUs = () => {
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
            className="absolute top-32 right-4 md:right-16 w-16 md:w-24 opacity-20 animate-float"
          />
          <div className="section-container">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-secondary/20 rounded-full blur-3xl scale-90" />
                  <img src={mainDog} alt="" aria-hidden="true" className="relative w-40 md:w-56 animate-float" />
                </div>
              </div>
              <p className="font-display uppercase tracking-widest text-primary font-bold mb-4">{c.hero.eyebrow}</p>
              <h1 className="font-display text-4xl md:text-6xl font-extrabold text-foreground leading-tight mb-6 text-balance">
                {c.hero.headline}
              </h1>
              <div className="space-y-3 max-w-2xl mx-auto mb-10">
                {c.hero.body.map((line) => (
                  <p key={line} className="text-lg text-muted-foreground text-balance">
                    {line}
                  </p>
                ))}
              </div>
              <CtaLink href="#start-here">{c.hero.cta}</CtaLink>
              <p className="mt-6 text-sm text-muted-foreground">{c.hero.note}</p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="bg-card section-padding">
          <div className="section-container max-w-3xl text-center">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-6 text-balance">
              {c.intro.headline}
            </h2>
            <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-8" />
            <div className="space-y-4">
              {c.intro.body.map((line) => (
                <p key={line} className="text-lg text-muted-foreground">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* Two ways */}
        <section id="ways" className="section-padding">
          <div className="section-container">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-center text-primary mb-16">
              {c.waysToWork.headline}
            </h2>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              {c.waysToWork.options.map((opt, i) => {
                const Icon = i === 0 ? Compass : PackageCheck;
                const accent = i === 0;
                return (
                  <div
                    key={opt.label}
                    className="bg-card rounded-3xl p-8 md:p-10 shadow-card flex flex-col"
                  >
                    <div
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                        accent ? "bg-primary" : "bg-secondary"
                      }`}
                    >
                      <Icon
                        className={`w-8 h-8 ${accent ? "text-primary-foreground" : "text-secondary-foreground"}`}
                      />
                    </div>
                    <p className="font-display uppercase tracking-widest text-sm font-bold text-secondary mb-2">
                      {opt.label}
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                      {opt.title}
                    </h3>
                    <div className="space-y-3 mb-6">
                      {opt.body.map((line) => (
                        <p key={line} className="text-muted-foreground">
                          {line}
                        </p>
                      ))}
                    </div>
                    <p className="font-semibold text-foreground mb-4">{opt.listLabel}</p>
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-8">
                      {opt.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-muted-foreground">
                          <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="font-display font-bold text-primary mb-8 mt-auto">{opt.closing}</p>
                    <div>
                      <CtaLink href="#start-here" variant={accent ? "outline" : "primary"}>
                        {opt.cta}
                      </CtaLink>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clone */}
        <section className="bg-card section-padding">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 text-balance">
                {c.clone.headline}
              </h2>
              <div className="h-1 w-24 bg-secondary mx-auto rounded-full mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{c.clone.intro}</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.clone.cards.map((card) => (
                <div
                  key={card.quote}
                  className="bg-background rounded-2xl p-7 border border-border flex flex-col hover:shadow-card transition-shadow"
                >
                  <p className="font-display text-xl font-bold text-foreground mb-3">“{card.quote}”</p>
                  <p className="text-muted-foreground mb-6">{card.body}</p>
                  <p className="text-sm font-semibold uppercase tracking-wide text-secondary mb-5 mt-auto">
                    {card.category}
                  </p>
                  {card.href.startsWith("/") ? (
                    <Link
                      to={card.href}
                      className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all"
                    >
                      {card.cta} <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <a
                      href={card.href}
                      className="inline-flex items-center gap-2 font-bold text-primary hover:gap-3 transition-all"
                    >
                      {card.cta} <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 gradient-cta rounded-3xl p-8 md:p-12 text-center">
              <p className="font-display text-2xl md:text-3xl font-extrabold text-primary-foreground mb-4">
                “{c.clone.fallback.quote}”
              </p>
              {c.clone.fallback.body.map((line) => (
                <p key={line} className="text-primary-foreground/80 mb-2">
                  {line}
                </p>
              ))}
              <div className="mt-6">
                <CtaLink href="#start-here">{c.clone.fallback.cta}</CtaLink>
              </div>
            </div>
          </div>
        </section>

        {/* Managed services */}
        <section id="managed-services" className="section-padding">
          <div className="section-container">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary mb-4">
                {c.managed.headline}
              </h2>
              <p className="font-display text-xl text-foreground mb-6">{c.managed.subheadline}</p>
              <div className="space-y-2 max-w-2xl mx-auto">
                {c.managed.body.map((line) => (
                  <p key={line} className="text-muted-foreground text-lg">
                    {line}
                  </p>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {c.managed.services.map((s) => (
                <div key={s.label} className="bg-card rounded-3xl p-8 md:p-10 shadow-card flex flex-col">
                  <p className="font-display uppercase tracking-widest text-sm font-bold text-secondary mb-3">
                    {s.label}
                  </p>
                  <h3 className="font-display text-2xl font-extrabold text-foreground mb-4">{s.title}</h3>
                  <div className="space-y-3 mb-6">
                    {s.body.map((line) => (
                      <p key={line} className="text-muted-foreground">
                        {line}
                      </p>
                    ))}
                  </div>
                  {s.price && (
                    <p className="font-display text-3xl font-extrabold text-primary mb-5">{s.price}</p>
                  )}
                  <ul className="space-y-3 mb-8">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-muted-foreground">
                        <Check className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto">
                    <CtaLink href={s.href}>{s.cta}</CtaLink>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas */}
        <section className="bg-card section-padding">
          <div className="section-container">
            <div className="text-center mb-14">
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary mb-6">
                {c.areas.headline}
              </h2>
              <div className="space-y-3 max-w-3xl mx-auto">
                {c.areas.body.map((line) => (
                  <p key={line} className="text-lg text-muted-foreground">
                    {line}
                  </p>
                ))}
              </div>
            </div>
            <p className="text-center font-semibold text-foreground mb-8">{c.areas.listLabel}</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {c.areas.items.map((item) => (
                <div key={item.title} className="bg-background rounded-2xl p-6 border border-border">
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.body}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <CtaLink href="#start-here">{c.areas.cta}</CtaLink>
            </div>
          </div>
        </section>

        {/* Start here */}
        <section id="start-here" className="gradient-cta py-20 md:py-24 px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
              {c.startHere.headline}
            </h2>
            <div className="space-y-2 mb-8">
              {c.startHere.body.map((line) => (
                <p key={line} className="text-primary-foreground/80 text-lg">
                  {line}
                </p>
              ))}
            </div>
            <p className="font-display text-xl md:text-2xl font-bold text-secondary mb-8 text-balance">
              {c.startHere.question}
            </p>
            <div className="space-y-1 mb-10">
              {c.startHere.closing.map((line) => (
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
              <a href="mailto:hello@pawformance.com">{c.startHere.cta}</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WorkWithUs;
