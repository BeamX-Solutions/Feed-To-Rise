import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Quote, TrendingUp, Users, Heart, Package, UtensilsCrossed, GraduationCap, Wrench, Briefcase, Calendar, ArrowRight } from "lucide-react";

const stageLinks = [
  { slug: "nourish", label: "Feed to Nourish", icon: UtensilsCrossed },
  { slug: "equip", label: "Feed to Equip", icon: GraduationCap },
  { slug: "rise", label: "Rise", icon: TrendingUp },
];

const programs = [
  {
    icon: Heart,
    stage: "Feed to Nourish",
    title: "Annual Street Outreach",
    description: "Our annual February 14th outreach provides meals, clothing, blankets, hygiene kits, and care to people living on the streets.",
    impact: "Now across seven states in one day",
    details: "A cornerstone of our work. Each year on February 14th, we bring a community-wide expression of compassion to people who need it most. Our teams distribute meals, clothing, blankets, hygiene kits, and encouragement to individuals and families, now across seven states in a single day."
  },
  {
    icon: UtensilsCrossed,
    stage: "Feed to Nourish",
    title: "School Feeding - Adopt a Student",
    description: "Weekly and monthly meal programs for public school students, structured through partnerships with schools.",
    impact: "A fed child has more energy and focus to learn",
    details: "Through partnerships with public schools, we run weekly and monthly feeding programs, donating to the school directly or adopting a number of students who receive meals from the organization. Feeding the body is the first step to feeding the mind."
  },
  {
    icon: Package,
    stage: "Feed to Nourish",
    title: "Provisions for Families",
    description: "Basic provisions, including food, clothing, and essential supplies, for displaced and struggling families.",
    impact: "Essential supplies distributed year-round",
    details: "Beyond the streets and schools, we provide food, clothing, and essential provisions to displaced and struggling families, meeting the most basic needs first so that other needs, including shelter, education, and skills, can be addressed next."
  },
  {
    icon: GraduationCap,
    stage: "Feed to Equip",
    title: "JAMB Sponsorship Pipeline",
    description: "Full JAMB sponsorship for students on our meal plans, including lessons, registration payments, and transportation to exam centers.",
    impact: "From the meal plan to the exam hall",
    details: "In line with our name, students who have been on the meal plan receive sponsorship for all their JAMB lessons, registration payments, and transportation to the exam centers. It is a complete pipeline from feeding to further education."
  },
  {
    icon: Wrench,
    stage: "Feed to Equip",
    title: "Vocational Skills & Scholarships",
    description: "Vocational and trade skills training, plus school materials and scholarships for younger children still in school.",
    impact: "Skills that outlast the meal",
    details: "For beneficiaries pursuing a trade, we provide vocational and trade skills training. For younger children still in school, we provide school materials and scholarships, building the skills and education needed to move past urgent need."
  },
  {
    icon: Users,
    stage: "Feed to Equip",
    title: "Mentors & Alumni Network",
    description: "Mentor pairings tied to each student's chosen field or trade, rather than generic matches, plus an alumni network of former beneficiaries.",
    impact: "Relationships that open doors",
    details: "People can sign up as mentors with Feed to Rise, and we pair them with beneficiaries based on the student's chosen field or trade. Former beneficiaries who've risen come back to support new ones, and partnerships with artisans, small businesses, and employers create placement opportunities."
  },
  {
    icon: Briefcase,
    stage: "Rise",
    title: "Small Business Support",
    description: "Startup and small business support for beneficiaries who complete vocational training.",
    impact: "From training to independence",
    details: "Rise is the point where the feeding is done and independence takes over. Beneficiaries who finish vocational training receive small business and startup support to stand on their own."
  },
  {
    icon: TrendingUp,
    stage: "Rise",
    title: "Outcomes Tracking",
    description: "University enrollment tracking from JAMB to admission, and income or employment follow-up after the program.",
    impact: "Proof that someone actually made it out",
    details: "We track university enrollment from JAMB through admission to a first-year check-in, and follow income or employment 6-12 months after the program because Rise is the proof that someone actually made it out."
  }
];

const impactStats = [
  { label: "Meals shared since 2020", value: "1000s", icon: Package, color: "text-primary" },
  { label: "Annual outreaches, 2020–2025", value: "6", icon: TrendingUp, color: "text-primary" },
  { label: "States reached since 2020", value: "8", icon: Heart, color: "text-primary" },
  { label: "States served in one day, 2025", value: "7", icon: Users, color: "text-primary" }
];

const testimonials = [
  {
    quote: "We distributed thousands of meals to individuals and families in need, bringing nourishment and hope to those who need it most.",
    author: "Feed to Rise Team",
    location: "Multiple States",
    image: "/images/anambra-lagos-2020-II.jpg"
  },
  {
    quote: "Providing essential supplies such as clothing, blankets, and hygiene kits has enhanced the well-being of countless people living on the streets.",
    author: "Volunteer Coordinator",
    location: "Lagos & Abuja",
    image: "/images/anambra-lagos-2022-III.PNG"
  },
  {
    quote: "Most of all, we made people smile and feel loved. Raising awareness about the importance of compassion in the community is our greatest achievement.",
    author: "Mmesoma Anita Ogbuagu",
    location: "Feed to Rise Convener",
    image: "/images/anambra-lagos-2023-III.PNG"
  }
];

export default function Impact() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1>Our Work & Impact</h1>
            <p className="text-xl text-muted-foreground text-balance">
              Transforming lives through compassionate action and measurable results across Nigeria
            </p>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Programs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every program sits on the Feed to Rise pathway. Feed meets the urgent need, Equip builds the skills to move past it, and Rise is the proof that someone made it out.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {stageLinks.map((stage) => (
                <Button key={stage.slug} asChild variant="outline" className="group">
                  <Link to={`/pathway/${stage.slug}`}>
                    <stage.icon className="mr-2 h-4 w-4 text-primary" />
                    {stage.label}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-glow transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <program.icon className="h-7 w-7 text-primary" />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">{program.stage}</p>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{program.description}</p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm font-semibold text-primary">{program.impact}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Accordion */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">Program Details</h3>
            <Accordion type="single" collapsible className="space-y-4">
              {programs.map((program, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 hover:shadow-glow transition-all"
                >
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <program.icon className="h-6 w-6 text-primary shrink-0" />
                      <span className="font-semibold">{program.title}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {program.details}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impactStats.map((stat, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="mx-auto mb-2">
                    <stat.icon className={`h-10 w-10 ${stat.color}`} />
                  </div>
                  <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* Our Journey Section */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Journey (2020-2024)</h2>
            <p className="text-xl text-muted-foreground">
              Five years of spreading love and making a difference across Nigeria
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* 2020 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2020</h3>
                  </div>
                  <p className="text-lg mb-4">The journey begins - our first Valentine's Day outreach</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    In our inaugural year, we began with a simple mission: to provide care and essential support to people living on the streets.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="/images/anambra-lagos-2020-I.jpg"  alt="2020 outreach in Anambra and Lagos" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2020-II.jpg" alt="Volunteers distributing care packages in 2020" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2020-III.jpg" alt="Community engagement 2020" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2020-IV.jpg" alt="Sharing meals and supplies 2020" className="w-full h-full object-cover rounded" />
                </div>
              </div>
            </Card>

            {/* 2021 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="grid grid-cols-2 gap-2 p-2 md:order-1">
                  <img src="/images/anambra-lagos-2021-I.jpg" alt="2021 team celebrating with community" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2021-II.jpg" alt="Volunteers distributing love packages in 2021" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2021-III.jpg" alt="Community outreach 2021" className="w-full h-full object-cover rounded col-span-2" />
                </div>
                <div className="bg-primary/5 p-8 flex flex-col justify-center md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2021</h3>
                  </div>
                  <p className="text-lg mb-4">Expanding our reach</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Abuja</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our second year saw tremendous growth as we extended our mission to the nation's capital, touching more lives and building stronger community connections.
                  </p>
                </div>
              </div>
            </Card>

            {/* 2022 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2022</h3>
                  </div>
                  <p className="text-lg mb-4">Strengthening our presence in the Southeast</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Enugu</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    With momentum from our early years, we solidified our footprint by incorporating Enugu into our outreach, deepening connections in the Southeast and empowering local volunteers to spread love on a broader scale.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="/images/anambra-lagos-2022-I.PNG"  alt="2022 outreach in Anambra and Lagos" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2022-II.PNG" alt="Volunteers distributing care packages in 2022" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2022-III.PNG" alt="Community engagement 2022" className="w-full h-full object-cover rounded col-span-2" />
                </div>
              </div>
            </Card>

            {/* 2023 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="grid grid-cols-2 gap-2 p-2 md:order-1">
                  <img src="/images/anambra-lagos-2023-I.PNG" alt="2023 team celebrating with community" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2023-II.PNG" alt="Volunteers distributing love packages in 2023" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2023-III.PNG" alt="Community outreach 2023" className="w-full h-full object-cover rounded col-span-2" />
                </div>
                <div className="bg-primary/5 p-8 flex flex-col justify-center md:order-2">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2023</h3>
                  </div>
                  <p className="text-lg mb-4">Reaching the South-South region</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Enugu, Port Harcourt</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Our growth accelerated as we bridged regions by including Port Harcourt, bringing our message of compassion to the South-South and forging new partnerships that amplified our impact nationwide.
                  </p>
                </div>
              </div>
            </Card>

            {/* 2024 */}
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="h-8 w-8 text-primary" />
                    <h3 className="text-3xl font-bold">2024</h3>
                  </div>
                  <p className="text-lg mb-4">Our most expansive year yet</p>
                  <p className="text-muted-foreground mb-4">
                    Locations: <span className="font-semibold text-foreground">Anambra, Lagos, Benin, Abuja, Nasarawa</span>
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Celebrating five years of transformation, we pushed boundaries further by reaching Benin and Nasarawa, uniting diverse communities in a powerful display of nationwide solidarity and enduring love.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-2 p-2">
                  <img src="/images/anambra-lagos-2024-I.PNG"  alt="2024 outreach in Anambra and Lagos" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2024-II.PNG" alt="Volunteers distributing care packages in 2024" className="w-full h-full object-cover rounded" />
                  <img src="images\anambra-lagos-2024-III.PNG" alt="Community engagement 2024" className="w-full h-full object-cover rounded col-span-2" />
                </div>
              </div>
            </Card>
            
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Voices of Impact</h2>
            <p className="text-xl text-muted-foreground">
              Stories from the hearts we've touched
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-glow transition-all animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="pt-8 space-y-6">
                  <Quote className="h-10 w-10 text-primary/30" />
                  <p className="text-muted-foreground italic">{testimonial.quote}</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
