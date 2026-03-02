import { motion } from "framer-motion";
import { AlertTriangle, ExternalLink } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const MockupsPage = () => (
  <div className="min-h-screen pt-24 pb-16">
    {/* Banner */}
    <div className="bg-destructive/10 border-b border-destructive/20 py-3 text-center">
      <p className="text-sm font-medium text-destructive flex items-center justify-center gap-2">
        <AlertTriangle className="h-4 w-4" />
        FAKE INFORMATION — THIS IS A BASE TEMPLATE
      </p>
    </div>

    <div className="container mx-auto px-4 mt-12">
      <SectionHeading
        title="Mockups"
        subtitle="Preview examples of real project work. All mockups use placeholder content only."
      />

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Cleaning Service */}
        <motion.a
          href="https://ethankia.github.io/cleaning-mockup/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card-hover group rounded-xl border border-border bg-card p-6 block"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Cleaning Service Website</h3>
            <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            A professional cleaning service landing page with booking features, service cards, and testimonials.
          </p>
          <div className="aspect-video rounded-lg bg-secondary/50 dot-pattern flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Live Preview →</span>
          </div>
        </motion.a>

        {/* Personal / Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="card-hover rounded-xl border border-border bg-card p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Personal / Creator Website</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Profile layout, posts preview, stats section. Clean, modern creator look with social integrations.
          </p>
          <div className="aspect-video rounded-lg bg-secondary/50 dot-pattern flex items-center justify-center">
            <span className="text-xs text-muted-foreground">Coming Soon</span>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default MockupsPage;
