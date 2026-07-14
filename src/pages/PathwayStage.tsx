import { useParams, Link, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Heart } from "lucide-react";
import { stages, getStage } from "@/data/stages";

export default function PathwayStage() {
  const { stage: slug } = useParams();
  const stage = getStage(slug);

  if (!stage) {
    return <Navigate to="/impact" replace />;
  }

  const index = stages.findIndex((s) => s.slug === stage.slug);
  const prev = index > 0 ? stages[index - 1] : null;
  const next = index < stages.length - 1 ? stages[index + 1] : null;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="absolute inset-0">
          <img
            src={stage.image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
            style={{ filter: "grayscale(70%) contrast(1.05)" }}
          />
          <div className="absolute inset-0 bg-background/75" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/35 via-background/50 to-background/85" />
        </div>

        <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center">
                <stage.icon className="h-10 w-10 text-primary" />
              </div>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-primary">
              Step {stage.number} · {stage.tagline}
            </p>
            <h1>{stage.fullName}</h1>
            <p className="text-xl text-muted-foreground text-balance">{stage.intro}</p>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            {stage.groups.map((group) => (
              <div key={group.label}>
                {stage.groups.length > 1 && (
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl md:text-3xl">{group.label}</h2>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {group.items.map((item, i) => (
                    <Card
                      key={item.title}
                      className="hover:shadow-glow transition-all duration-300 animate-fade-in"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      <CardContent className="pt-8 space-y-4">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="h-7 w-7 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      {stage.quote && (
        <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Heart className="h-12 w-12 text-primary mx-auto animate-heart-pulse" fill="currentColor" />
              <p className="text-2xl md:text-3xl font-bold text-balance">“{stage.quote}”</p>
            </div>
          </div>
        </section>
      )}

      {/* Stage Navigation */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {prev ? (
              <Button asChild variant="outline" size="lg" className="h-auto py-6 justify-start">
                <Link to={`/pathway/${prev.slug}`}>
                  <ArrowLeft className="mr-3 h-5 w-5 shrink-0" />
                  <span className="text-left">
                    <span className="block text-xs text-muted-foreground">Previous step</span>
                    <span className="block font-semibold">{prev.fullName}</span>
                  </span>
                </Link>
              </Button>
            ) : (
              <div className="hidden sm:block" />
            )}

            {next ? (
              <Button asChild size="lg" className="h-auto py-6 justify-end">
                <Link to={`/pathway/${next.slug}`}>
                  <span className="text-right">
                    <span className="block text-xs text-primary-foreground/80">Next step</span>
                    <span className="block font-semibold">{next.fullName}</span>
                  </span>
                  <ArrowRight className="ml-3 h-5 w-5 shrink-0" />
                </Link>
              </Button>
            ) : (
              <Button asChild size="lg" className="h-auto py-6 justify-end">
                <Link to="/involve">
                  <span className="text-right">
                    <span className="block text-xs text-primary-foreground/80">Be part of it</span>
                    <span className="block font-semibold">Support Feed to Rise</span>
                  </span>
                  <Heart className="ml-3 h-5 w-5 shrink-0" fill="currentColor" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
