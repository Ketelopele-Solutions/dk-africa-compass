import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Shield, Database, BarChart3, Brain, TrendingUp, ArrowRight } from "lucide-react";
import logo from "@/assets/dk-africa-logo.jpg";

const coreAreas = [
  { icon: Shield, title: "ESG & Compliance Solutions", desc: "Driving ethical governance and regulatory compliance across African enterprises." },
  { icon: Database, title: "Information Systems Audit & IT Governance", desc: "Ensuring transparency and accountability in information systems." },
  { icon: BarChart3, title: "IT Service Delivery Management", desc: "Optimizing technology service delivery for operational excellence." },
  { icon: Brain, title: "AI & Data Science Innovation", desc: "Harnessing AI to unlock actionable insights from complex datasets." },
  { icon: TrendingUp, title: "Automated Trading Algorithms", desc: "Building intelligent algorithmic trading solutions for financial markets." },
];

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6 } }),
};

const Index = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: `url(${logo})`, backgroundSize: "400px", backgroundRepeat: "repeat" }} />
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.img src={logo} alt="DK Africa Trade Group" className="w-28 h-28 mx-auto rounded-full border-2 border-gold/40 shadow-2xl mb-8" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8 }} />
        <motion.h1 className="font-display text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          Intelligent Data, Ethical Governance,{" "}
          <span className="text-gold">Accelerated Growth</span>
        </motion.h1>
        <motion.p className="text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
          DK Africa Trade Group is a multidisciplinary technology and governance firm committed to advancing transparency, efficiency, and financial resilience across Africa.
        </motion.p>
        <motion.div className="flex flex-wrap justify-center gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}>
          <Link to="/contact" className="gold-gradient text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">Request Consultation</Link>
          <a href="#" className="border border-gold/40 text-gold font-semibold px-8 py-3 rounded-lg hover:bg-gold/10 transition-colors">Download Company Profile</a>
          <Link to="/contact" className="border border-primary-foreground/30 text-primary-foreground font-semibold px-8 py-3 rounded-lg hover:bg-primary-foreground/10 transition-colors">Contact Us</Link>
        </motion.div>
      </div>
    </section>

    {/* Core Areas */}
    <section className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">Core Integration Areas</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">Our multidisciplinary expertise spans technology, governance, and financial innovation.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreAreas.map((area, i) => (
            <motion.div key={area.title} className="bg-card border border-border rounded-xl p-8 hover:border-gold/40 hover:shadow-lg transition-all group" custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <area.icon className="w-10 h-10 text-gold mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="font-display text-lg font-semibold mb-3">{area.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Banner */}
    <section className="hero-gradient section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl font-bold text-primary-foreground mb-4">Ready to Transform Your Organization?</h2>
        <p className="text-primary-foreground/60 mb-8">Partner with us to drive sustainable growth through intelligent data solutions.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 gold-gradient text-accent-foreground font-semibold px-8 py-3 rounded-lg hover:opacity-90 transition-opacity">
          Get Started <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  </div>
);

export default Index;
