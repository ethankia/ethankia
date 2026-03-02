import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, Code2, Smartphone, Shield, ArrowRight, Eye } from "lucide-react";
import AnimatedCodeWindow from "@/components/AnimatedCodeWindow";

const trustItems = [
  { icon: Zap, label: "Fast Delivery" },
  { icon: Code2, label: "Clean Code" },
  { icon: Smartphone, label: "Mobile-First" },
  { icon: Shield, label: "Secure Payments" },
];

const HomePage = () => (
  <div className="min-h-screen">
    {/* Hero */}
    <section className="relative pt-32 pb-20 hero-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-5">
              Custom Websites & Apps,{" "}
              <span className="gradient-text">Built Fast.</span>
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-md">
              Professional, clean, and optimized digital products made to order.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm transition-all hover:opacity-90"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/mockups"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-semibold text-sm transition-all hover:bg-secondary"
              >
                <Eye className="h-4 w-4" /> View Mockups
              </Link>
            </div>
          </motion.div>

          <AnimatedCodeWindow />
        </div>
      </div>
    </section>

    {/* Trust */}
    <section className="py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card/50 text-center"
            >
              <item.icon className="h-6 w-6 text-primary" />
              <span className="text-sm font-medium">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-muted-foreground text-sm"
        >
          Professional design standards · SEO optimized · Production-ready code
        </motion.div>
      </div>
    </section>
  </div>
);

export default HomePage;
