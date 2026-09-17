import { UtensilsCrossed, GraduationCap, TrendingUp, School, Package, BookOpen, Wrench, Users, Handshake, Briefcase, GraduationCap as Cap, LineChart, type LucideIcon } from "lucide-react";

export type StageItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type StageGroup = {
  label: string;
  items: StageItem[];
};

export type Stage = {
  slug: string;
  number: string;
  name: string;
  fullName: string;
  tagline: string;
  intro: string;
  quote?: string;
  icon: LucideIcon;
  image: string;
  groups: StageGroup[];
};

export const stages: Stage[] = [
  {
    slug: "nourish",
    number: "01",
    name: "Nourish",
    fullName: "Feed to Nourish",
    tagline: "Immediate relief",
    intro:
      "Every stage of Feed to Rise starts with feeding. Nourish meets the most urgent need first: food and provisions for people facing hunger and hardship, so the work of learning and rising can begin.",
    quote:
      "A child who is fed has more energy and focus to learn. Feeding the body is the first step to feeding the mind.",
    icon: UtensilsCrossed,
    image: "/images/anambra-lagos-2024-II.PNG",
    groups: [
      {
        label: "How we nourish",
        items: [
          {
            icon: UtensilsCrossed,
            title: "Street & community feeding",
            description:
              "Our original SLOTS model: sharing meals, clothing, blankets, and care directly on the streets. Now across seven states in a single day.",
          },
          {
            icon: School,
            title: "Feeding students in public schools",
            description:
              "The “adopt a student” idea: weekly and monthly meal programs run in partnership with public schools, feeding children where they learn.",
          },
          {
            icon: Package,
            title: "Basic provisions for families",
            description:
              "Food, clothing, and essential supplies for displaced and struggling families, meeting the most basic needs first.",
          },
        ],
      },
    ],
  },
  {
    slug: "equip",
    number: "02",
    name: "Equip",
    fullName: "Feed to Equip",
    tagline: "Skills, education, relationships",
    intro:
      "Relief alone doesn’t change a life. Equip builds on Nourish by giving people the education, skills, and relationships they need to move past urgent need, and stay past it.",
    icon: GraduationCap,
    image: "/images/anambra-lagos-2023-I.PNG",
    groups: [
      {
        label: "Learn",
        items: [
          {
            icon: Cap,
            title: "JAMB sponsorship pipeline",
            description:
              "Full sponsorship for students on our meal plans: lessons, registration, and transport to exam centers.",
          },
          {
            icon: Wrench,
            title: "Vocational & trade skills training",
            description:
              "Hands-on training in trades and technical skills that lead to employment and self-reliance.",
          },
          {
            icon: BookOpen,
            title: "School materials & scholarships",
            description:
              "Books, materials, and scholarships for younger children still in school, so early progress isn’t lost.",
          },
        ],
      },
      {
        label: "Connect",
        items: [
          {
            icon: Users,
            title: "Mentor pairing",
            description:
              "Mentors matched to each student’s chosen field or trade: specific and relevant, never generic.",
          },
          {
            icon: TrendingUp,
            title: "Alumni network",
            description:
              "Former beneficiaries who’ve risen come back to support new ones, keeping the pathway circular.",
          },
          {
            icon: Handshake,
            title: "Partnerships for placement",
            description:
              "Relationships with artisans, small businesses, and employers that turn training into real placements.",
          },
        ],
      },
    ],
  },
  {
    slug: "rise",
    number: "03",
    name: "Rise",
    fullName: "Rise",
    tagline: "Independence & outcomes",
    intro:
      "Rise is the point where the feeding is done and independence takes over. It’s also where we hold ourselves accountable, tracking what actually happened after the program.",
    icon: TrendingUp,
    image: "/images/anambra-lagos-2022-III.PNG",
    groups: [
      {
        label: "How people rise",
        items: [
          {
            icon: Briefcase,
            title: "Small business & startup support",
            description:
              "Startup and small-business support for those who finish vocational training and are ready to stand on their own.",
          },
          {
            icon: Cap,
            title: "University enrollment tracking",
            description:
              "Following students from JAMB to admission to a first-year check-in, so no one falls through the gap.",
          },
          {
            icon: LineChart,
            title: "Income & employment tracking",
            description:
              "Checking in on income or employment 6–12 months after the program: the proof that someone made it out.",
          },
        ],
      },
    ],
  },
];

export const getStage = (slug?: string) => stages.find((s) => s.slug === slug);
