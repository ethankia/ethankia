import { motion } from "framer-motion";
import { Apple, DollarSign, Banknote, CreditCard } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const paymentMethods = [
  { icon: Apple, label: "Apple Pay", color: "text-foreground" },
  { icon: DollarSign, label: "Venmo", color: "text-primary" },
  { icon: Banknote, label: "Cash App", color: "text-accent" },
];

const PaymentsPage = () => (
  <div className="min-h-screen pt-24 pb-16">
    <div className="container mx-auto px-4 max-w-2xl">
      <SectionHeading title="Trusted Payment Options" subtitle="Secure, fast, and flexible payment methods." />

      <div className="grid sm:grid-cols-3 gap-5 mb-10">
        {paymentMethods.map((method, i) => (
          <motion.div
            key={method.label}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card-hover flex flex-col items-center gap-3 p-8 rounded-xl border border-border bg-card text-center"
          >
            <method.icon className={`h-8 w-8 ${method.color}`} />
            <span className="font-semibold">{method.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card/50 text-center justify-center"
      >
        <CreditCard className="h-4 w-4 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">
          If none of these work, we'll find another payment method.
        </p>
      </motion.div>
    </div>
  </div>
);

export default PaymentsPage;
