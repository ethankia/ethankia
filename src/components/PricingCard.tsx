import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  title: string;
  time: string;
  price: string;
  features: string[];
  icon: LucideIcon;
  featured?: boolean;
  delay?: number;
}

const PricingCard = ({ title, time, price, features, icon: Icon, featured, delay = 0 }: PricingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: delay * 0.1, duration: 0.4 }}
    className={`card-hover rounded-xl border p-6 flex flex-col ${
      featured
        ? "border-primary/40 glow-primary bg-primary/5"
        : "border-border bg-card"
    }`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className={`p-2 rounded-lg ${featured ? "bg-primary/20 text-primary" : "bg-secondary text-muted-foreground"}`}>
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>

    <div className="mb-1">
      <span className="text-2xl font-bold gradient-text">{price}</span>
    </div>
    <p className="text-xs text-muted-foreground mb-4">{time}</p>

    <ul className="flex-1 space-y-2 mb-6">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-secondary-foreground">
          <span className="text-primary mt-0.5">✓</span>
          {f}
        </li>
      ))}
    </ul>

    <Link
      to="/contact"
      className="block w-full text-center py-2.5 rounded-lg text-sm font-medium transition-all bg-primary text-primary-foreground hover:opacity-90"
    >
      Get Started
    </Link>
  </motion.div>
);

export default PricingCard;
