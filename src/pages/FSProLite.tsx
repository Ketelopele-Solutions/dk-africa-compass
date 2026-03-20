import { motion } from "framer-motion";
import { Cloud, CreditCard, Bell, ShieldCheck, FileText, Lock, CheckCircle, Check, Star, Sparkles } from "lucide-react";
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

const packages = [
  {
    name: "Basic",
    price: "R531,59",
    period: "/month",
    target: "For small funeral schemes",
    icon: Check,
    featured: false,
    features: [
      "Storage: 1–375 main members",
      "Policy management",
      "Payment management",
      "SMS: New members, payments, lapsed policies",
      "Basic certificates",
      "Dashboard overview",
      "Analytics (view only)",
      "2 user accounts",
    ],
  },
  {
    name: "Standard",
    price: "R850",
    period: "/month",
    target: "For growing funeral parlours",
    icon: Star,
    featured: true,
    features: [
      "Everything in Basic, plus:",
      "Storage: 376–600 members",
      "SMS: Birthdays, policy updates, marketing",
      "Sales & quotations management",
      "Inventory management",
      "Certificates (incl. bulk generation)",
      "Analytics & reporting",
      "5 user accounts",
      "Agent & account holder support",
      "SLA included",
    ],
  },
  {
    name: "Premium",
    price: "R1 000",
    period: "/month",
    target: "For larger funeral businesses",
    icon: Sparkles,
    featured: false,
    features: [
      "Everything in Standard, plus:",
      "Online payment integration",
      "E-Roster management",
      "Unlimited user accounts",
      "Full support & SLA",
      "Unlimited storage",
    ],
  },
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

    {/* Pricing Packages */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="font-display text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          FSPro Software Packages
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-center mb-14 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Choose the plan that fits your funeral home's needs.
        </motion.p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              className={`relative flex flex-col rounded-2xl border p-8 transition-shadow hover:shadow-xl ${
                pkg.featured
                  ? "border-gold bg-card shadow-lg shadow-gold/10 ring-1 ring-gold/30"
                  : "border-border bg-card"
              }`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              {pkg.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 gold-gradient text-accent-foreground text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${pkg.featured ? "gold-gradient" : "bg-muted"}`}>
                  <pkg.icon className={`w-5 h-5 ${pkg.featured ? "text-accent-foreground" : "text-gold"}`} />
                </div>
                <h3 className="font-display text-xl font-bold">{pkg.name}</h3>
              </div>

              <div className="mb-2">
                <span className="font-display text-3xl font-bold text-foreground">{pkg.price}</span>
                <span className="text-muted-foreground text-sm">{pkg.period}</span>
              </div>
              <p className="text-muted-foreground text-sm mb-6">{pkg.target}</p>

              <ul className="flex-1 space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`block text-center font-semibold px-6 py-3 rounded-lg transition-all active:scale-[0.97] ${
                  pkg.featured
                    ? "gold-gradient text-accent-foreground hover:opacity-90"
                    : "border border-gold/40 text-gold hover:bg-gold/10"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Customization note */}
        <motion.div
          className="mt-12 bg-muted border border-border rounded-xl p-8 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-lg font-semibold mb-2">Customizations / Add-ons</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Custom features available upon discussion. Pricing depends on the complexity and functionality requested.{" "}
            <Link to="/contact" className="text-gold underline underline-offset-4 hover:text-gold/80 transition-colors">
              Contact us
            </Link>{" "}
            to learn more.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Demo Video */}
    <section className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold mb-8">See FSPRO LITE in Action</h2>
        <div className="aspect-video bg-primary rounded-xl overflow-hidden border border-gold/20">
          <video className="w-full h-full object-cover" controls preload="metadata">
            <source src="/videos/fspro-lite-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
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
