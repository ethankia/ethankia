import { motion } from "framer-motion";
import { Phone, Mail, MessageCircle, Code2, Shield, Zap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const contactItems = [
  { icon: Phone, label: "Phone", value: "616-387-0268", href: "tel:616-387-0268" },
  { icon: Mail, label: "Email", value: "ethankia1619@gmail.com", href: "mailto:ethankia1619@gmail.com" },
  { icon: MessageCircle, label: "Quick Contact", value: "Text SITE for questions", href: "sms:6163870268?body=SITE" },
];

const qualities = [
  { icon: Code2, label: "Clean Code" },
  { icon: Shield, label: "Secure & Private" },
  { icon: Zap, label: "Fast Turnaround" },
];

const ContactPage = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <SectionHeading title="Get in Touch" subtitle="Ready to start your project? Reach out anytime." />

      <div className="space-y-4 mb-12">
        {contactItems.map((item, i) => (
          <motion.a
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover flex items-center gap-4 p-5 rounded-xl border border-border bg-card block"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <item.icon className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">{item.label}</p>
              <p className="font-medium">{item.value}</p>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {qualities.map((q, i) => (
          <motion.div
            key={q.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="flex flex-col items-center gap-2 p-4 rounded-xl border border-border bg-card/50 text-center"
          >
            <q.icon className="h-5 w-5 text-primary" />
            <span className="text-xs font-medium text-muted-foreground">{q.label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default ContactPage;
