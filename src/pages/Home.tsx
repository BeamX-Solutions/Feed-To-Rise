import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Heart, MapPin, Sprout, TrendingUp, Users } from "lucide-react";

const pathway = [
  {
    icon: Heart,
    number: "01",
    title: "Nourish",
    slug: "nourish",
    description: "Food, care packages, school meals, and immediate support for people facing urgent need.",
    outcome: "A fuller plate today",
  },
  {
    icon: BookOpen,
    number: "02",
    title: "Equip",
    slug: "equip",
    description: "Learning support, school materials, vocational training, and mentors connected to each learner's goals.",
    outcome: "Tools for tomorrow",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "Rise",
    slug: "rise",
    description: "Business support, further-education follow-up, and a community that keeps opportunity within reach.",
    outcome: "Independence that lasts",
  },
];

const fieldUpdates = [
  {
    title: "Food and care on the streets",
    description: "Our annual street outreach brings meals, clothing, blankets, hygiene kits, and encouragement directly to communities.",
    image: "/images/anambra-lagos-2024-II.PNG",
    alt: "Volunteers preparing supplies during a Feed to Rise outreach",
  },
  {
    title: "Growing with every outreach",
    description: "Since 2020, our volunteer network has expanded the reach of compassionate action across Nigeria.",
    image: "/images/anambra-lagos-2021-I.jpg",
    alt: "Feed to Rise volunteers at a community outreach",
  },
  {
    title: "A pathway beyond the meal",
    description: "We pair immediate support with long-term education and skills opportunities so people can move forward.",
    image: "/images/anambra-lagos-2023-I.PNG",
    alt: "People at a Feed to Rise community event",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />

      {/* Pathway Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">One act of care can begin a lifetime of possibility</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We do not stop at a meal. Feed to Rise connects immediate relief to the support people need to learn, work, and thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pathway.map((step, index) => (
              <Link
                key={step.number}
                to={`/pathway/${step.slug}`}
                className="group block animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <Card className="h-full text-center hover:shadow-glow hover:border-primary/40 transition-all duration-300">
                  <CardHeader>
                    <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-sm font-bold tracking-widest text-primary">{step.number}</p>
                    <CardTitle className="text-2xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground">{step.description}</p>
                    <p className="pt-4 border-t border-border text-sm font-semibold text-primary">{step.outcome}</p>
                    <span className="inline-flex items-center text-sm font-semibold text-primary">
                      Explore {step.title}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/impact">
                Explore the full pathway
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Accountability Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative">
              <img
                src="/images/anambra-lagos-2020-I.jpg"
                alt="Community members gathered during an outreach"
                className="w-full rounded-lg object-cover aspect-[5/4] shadow-glow"
              />
              <div className="absolute -bottom-5 right-4 max-w-[14rem] rounded-lg border border-border bg-card p-5 shadow-glow">
                <MapPin className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-semibold">Rooted in communities</p>
                <p className="mt-1 text-xs text-muted-foreground">Anambra, Lagos, Abuja, Benin, Nasarawa, Enugu, and Port Harcourt.</p>
              </div>
            </div>
            <div className="space-y-6">
              <h2>Real work should be easy to see</h2>
              <p className="text-xl text-muted-foreground">
                We share the work behind every outreach: the places we serve, the programs we run, and the practical steps that help people move forward.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <Card className="hover:shadow-glow transition-all">
                  <CardContent className="pt-6">
                    <Users className="h-5 w-5 text-primary" />
                    <p className="mt-4 font-semibold">Community powered</p>
                    <p className="mt-1 text-sm text-muted-foreground">Volunteers and local relationships guide every outreach.</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-glow transition-all">
                  <CardContent className="pt-6">
                    <Sprout className="h-5 w-5 text-primary" />
                    <p className="mt-4 font-semibold">Built for what follows</p>
                    <p className="mt-1 text-sm text-muted-foreground">We measure progress beyond immediate support.</p>
                  </CardContent>
                </Card>
              </div>
              <Button asChild size="lg">
                <Link to="/impact">
                  See our impact
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* From the Field */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-2">Care you can recognise</h2>
            <p className="text-xl text-muted-foreground">
              Field updates from communities across Nigeria
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {fieldUpdates.map((update, index) => (
              <Card
                key={update.title}
                className="overflow-hidden hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={update.image}
                    alt={update.alt}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="pt-6 space-y-3">
                  <h3 className="text-xl font-bold">{update.title}</h3>
                  <p className="text-muted-foreground">{update.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/impact">
                View our journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2>Help someone take their next step</h2>
            <p className="text-xl text-muted-foreground">
              Give time, resources, expertise, or a partnership. There is room for you in this work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/involve">
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  Support Feed to Rise
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/involve#volunteer">
                  Volunteer with us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
