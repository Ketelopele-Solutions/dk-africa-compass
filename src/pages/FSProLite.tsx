import { motion } from "framer-motion";
import { Cloud, CreditCard, Bell, ShieldCheck, FileText, Lock, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const capabilities = [
  { icon: Cloud, title: "Digital Operations Management", desc: "Digitize all funeral home operations in one secure platform." },
  { icon: CreditCard, title: "Automated Premium Tracking & Reporting", desc: "Track payments and generate reports automatically." },
  { icon: Bell, title: "SMS Notifications & Alerts", desc: "Keep members informed with automated communications." },
  { icon: ShieldCheck, title: "ID Authenticity Verification", desc: "Verify member identities to prevent fraud." },
  { icon: FileText, title: "Membership Certificate Generation", desc: "Generate professional certificates instantly." },
  { icon: Lock, title: "Cloud-Based Encrypted Security", desc: "Enterprise-grade encryption protecting all data." },
];

const challenges = [
  "Manual record keeping",
  "Payment tracking inefficiencies",
  "Fraud and data inconsistencies",
  "Poor member communication",
];

const FSProLite = () => (
  <div className="pt-20">
    <section className="hero-gradient section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span className="inline-block text-gold text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Service</motion.span>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>FSPRO LITE</motion.h1>
        <motion.p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          A secure, cloud-enabled funeral management platform designed to digitize and streamline funeral home operations.
        </motion.p>
      </div>
    </section>

    {/* Challenges */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Challenges We Address</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {challenges.map((c, i) => (
            <motion.div key={i} className="flex items-center gap-4 bg-card border border-border rounded-xl p-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <CheckCircle className="w-6 h-6 text-gold flex-shrink-0" />
              <span className="text-foreground font-medium">{c}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Capabilities */}
    <section className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Core Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((cap, i) => (
            <motion.div key={cap.title} className="bg-card border border-border rounded-xl p-8 hover:border-gold/40 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <cap.icon className="w-10 h-10 text-gold mb-5" />
              <h3 className="font-display text-lg font-semibold mb-2">{cap.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Demo Video Placeholder */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold mb-8">See FSPRO LITE in Action</h2>
        <div className="aspect-video bg-primary rounded-xl flex items-center justify-center border border-gold/20">
          <p className="text-primary-foreground/50 text-lg">Demo Video Coming Soon</p>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="hero-gradient section-padding text-center">
      <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Modernize Your Operations?</h2>
      <p className="text-primary-foreground/60 mb-8">Get started with FSPRO LITE today.</p>
      <Link to="/contact" className="inline-block gold-gradient text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Request a Demo</Link>
    </section>
  </div>
);

export default FSProLite;
