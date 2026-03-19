import { motion } from "framer-motion";
import { Bot, Globe, Users, Plug, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  { icon: Bot, title: "24/7 AI-Driven Conversational Agents", desc: "Always-on intelligent agents that handle customer queries round the clock." },
  { icon: Globe, title: "Multilingual Natural Language Processing", desc: "Communicate with customers in their preferred language." },
  { icon: Users, title: "Human-in-the-Loop Oversight", desc: "Seamless escalation to human agents when needed." },
  { icon: Plug, title: "CRM & Billing System Integrations", desc: "Deep integration with your existing business systems." },
  { icon: BarChart3, title: "Compliance Monitoring Dashboards", desc: "Real-time dashboards ensuring regulatory compliance." },
];

const SentraAI = () => (
  <div className="pt-20">
    <section className="hero-gradient section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.span className="inline-block text-gold text-sm font-semibold uppercase tracking-widest mb-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>Service</motion.span>
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>SentraAI</motion.h1>
        <motion.p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          Enterprise Conversational AI Platform — reduce customer service costs and increase response speed across high-volume service environments.
        </motion.p>
      </div>
    </section>

    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Core Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div key={f.title} className="bg-card border border-border rounded-xl p-8 hover:border-gold/40 transition-all" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
              <f.icon className="w-10 h-10 text-gold mb-5" />
              <h3 className="font-display text-lg font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="hero-gradient section-padding text-center">
      <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Experience SentraAI</h2>
      <p className="text-primary-foreground/60 mb-8">See how AI can transform your customer service operations.</p>
      <Link to="/contact" className="inline-block gold-gradient text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Request a Demo</Link>
    </section>
  </div>
);

export default SentraAI;
