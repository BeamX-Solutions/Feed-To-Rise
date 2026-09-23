import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BrandGlyph } from "@/components/BrandMark";

const slides = [
  "/images/anambra-lagos-2024-I.PNG",
  "/images/anambra-lagos-2023-I.PNG",
  "/images/anambra-lagos-2022-III.PNG",
  "/images/anambra-lagos-2021-I.jpg",
  "/images/anambra-lagos-2020-I.jpg",
];

export const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-surface="navy"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden bg-background md:min-h-[calc(100vh-5rem)]"
    >
      {/* Photo carousel */}
      <div className="absolute inset-0">
        {slides.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            aria-hidden="true"
            className={`photo-wash absolute inset-0 h-full w-full object-cover transition-opacity [transition-duration:2000ms] ease-in-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Ground wash: navy holds the photo down, lead warms one corner */}
        <div className="absolute inset-0 bg-brand-ground/75" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ground-deep/70 via-brand-ground/60 to-brand-ground-deep/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_55%,hsl(var(--brand-lead)/0.22),transparent_58%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-8 md:py-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
          {/* Brand glyph */}
          <div className="flex justify-center">
            <div className="relative">
              <BrandGlyph className="h-16 w-16 animate-heart-pulse md:h-20 md:w-20" tone="onGround" />
              <div className="absolute inset-0 -z-10 bg-brand-lead/25 blur-2xl animate-pulse-slow" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-balance">
            <span className="block text-foreground">Feed the Need.</span>
            <span className="accent-word mt-2 block">Fuel the Future.</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Feed to Rise meets urgent needs with food and care, then opens pathways to education, skills, and independence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-2">
            <Button asChild size="pill" className="w-full sm:w-auto">
              <Link to="/involve">Donate a meal</Link>
            </Button>
            <Button
              asChild
              size="pill"
              variant="outline"
              className="group w-full border-brand-paper/40 text-brand-paper hover:bg-brand-paper hover:text-brand-ground sm:w-auto"
            >
              <Link to="/impact">
                See Our Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { value: "7", label: "States in One Day (2025)" },
              { value: "1000s", label: "Meals Shared Since 2020" },
              { value: "6", label: "Annual Outreaches" },
              { value: "Feb 14", label: "Annual Street Outreach" },
            ].map((stat, index) => (
              <div
                key={index}
                className="space-y-1 animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <p className="text-2xl md:text-3xl font-extrabold text-primary-ink">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 pt-2">
            {slides.map((src, index) => (
              <button
                key={src}
                type="button"
                aria-label={`Show background image ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === current ? "w-6 bg-primary" : "w-1.5 bg-brand-paper/40 hover:bg-brand-paper/70"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Hand-off into the paper page below */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-paper to-transparent" />
    </section>
  );
};
