import {
  Globe, Layout, Database, Building2, FileText,
  Gamepad2, Video, MonitorPlay, AppWindow, Users
} from "lucide-react";
import PricingCard from "@/components/PricingCard";
import SectionHeading from "@/components/SectionHeading";

const websitePlans = [
  {
    title: "Basic",
    time: "1–2 hours",
    price: "$25–30",
    icon: Globe,
    features: ["Simple landing page", "Basic styling", "Mobile responsive", "Fast delivery"],
  },
  {
    title: "Medium",
    time: "3–4 hours",
    price: "$35–65",
    icon: Layout,
    features: ["Multi-page website", "Interactive features", "Basic animations", "Contact forms"],
  },
  {
    title: "Project Site",
    time: "6–12 hours",
    price: "$75",
    icon: Database,
    featured: true,
    features: ["Full-featured website", "Database integration", "User authentication", "Advanced animations"],
  },
  {
    title: "Informational Site",
    time: "1–6 hours",
    price: "$25",
    icon: FileText,
    features: ["Information showcase", "Clean design", "Fast loading", "SEO optimized"],
  },
  {
    title: "Company Site",
    time: "24–48 hours",
    price: "$150",
    icon: Building2,
    features: ["Enterprise-level site", "Multiple pages", "Advanced features", "Premium support"],
  },
];

const appPlans = [
  {
    title: "Simple Game App",
    time: "1–3 hours",
    price: "$50",
    icon: Gamepad2,
    features: ["Basic game mechanics", "Cross-platform", "Touch controls", "Score tracking"],
  },
  {
    title: "Video Chat (Outline)",
    time: "6–9 hours",
    price: "$50",
    icon: Video,
    features: ["Basic chat interface", "Video/audio preview", "UI design", "Proof of concept"],
  },
  {
    title: "Video Chat (Full)",
    time: "12–24 hours",
    price: "$100",
    icon: Video,
    featured: true,
    features: ["Complete backend", "Real-time communication", "User management", "Production ready"],
  },
  {
    title: "Informational App",
    time: "1–12 hours",
    price: "$25–100",
    icon: AppWindow,
    features: ["Content display app", "Native performance", "Offline support", "Price varies by complexity"],
  },
  {
    title: "Video Player App (Outline)",
    time: "1–6 hours",
    price: "$70",
    icon: MonitorPlay,
    features: ["Video playback UI", "Basic controls", "Playlist support", "Stream integration"],
  },
  {
    title: "Social Media Platform",
    time: "Varies",
    price: "$100",
    icon: Users,
    featured: true,
    features: [
      "User profiles",
      "Post system (text + media)",
      "Likes & comments",
      "Clean algorithm-free feed",
      "Authentication ready",
    ],
  },
];

const PricingPage = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container mx-auto px-4">
      <SectionHeading title="Website Pricing" subtitle="Professional websites at transparent prices." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
        {websitePlans.map((plan, i) => (
          <PricingCard key={plan.title} {...plan} delay={i} />
        ))}
      </div>

      <SectionHeading title="Mobile App Development" subtitle="Cross-platform apps built to spec." />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {appPlans.map((plan, i) => (
          <PricingCard key={plan.title} {...plan} delay={i} />
        ))}
      </div>
    </div>
  </div>
);

export default PricingPage;
