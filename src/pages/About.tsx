import { motion } from "framer-motion";
import { Target, Eye, User } from "lucide-react";

const About = () => (
  <div className="pt-20">
    {/* Hero */}
    <section className="hero-gradient section-padding">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>About Us</motion.h1>
        <motion.p className="text-primary-foreground/70 text-lg leading-relaxed max-w-2xl mx-auto" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
          DK Africa Trade Group leverages data science, artificial intelligence, and governance expertise to promote social justice, sustainable development, and corporate transparency.
        </motion.p>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div className="bg-card border border-border rounded-xl p-10" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Target className="w-10 h-10 text-gold mb-5" />
          <h2 className="font-display text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To drive prosperity and social justice through intelligent data solutions that empower organizations to make ethical, data-driven decisions.
          </p>
        </motion.div>
        <motion.div className="bg-card border border-border rounded-xl p-10" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <Eye className="w-10 h-10 text-gold mb-5" />
          <h2 className="font-display text-2xl font-bold mb-4">Our Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To become Africa's leading provider of ESG, systems audit, and compliance solutions, facilitating a data-driven approach to sustainable development.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Leadership */}
    <section className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">Leadership</h2>
        <motion.div className="bg-card border border-border rounded-xl p-10 flex flex-col md:flex-row items-center gap-8" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="w-28 h-28 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <User className="w-14 h-14 text-gold" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold mb-2">M. Machesa</h3>
            <p className="text-gold text-sm font-medium mb-3">Founder & CEO</p>
            <p className="text-muted-foreground leading-relaxed mb-3">
              A visionary leader in data science and governance, M. Machesa founded DK Africa Trade Group with a singular mission: advancing transparency and financial resilience across the African continent through intelligent technology. As a tech-forward social enterprise, DK Africa is dedicated to digital inclusion, turning cutting-edge tools into instruments for social equity.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Drawing on years of high-level experience at Africa's leading IT titans, M. Machesa blends master-level expertise in Artificial Intelligence and systems scaling with a profound commitment to rural development. His journey, stretching from his roots in the Drakensberg to the global frontier of AI, informs his belief that technology must serve as the heartbeat of African progress.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Meet Our Team - Organogram */}
    <section className="section-padding bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="font-display text-3xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Meet Our Team
        </motion.h2>

        {/* CEO at top */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="bg-primary border-2 border-gold rounded-xl px-8 py-5 text-center shadow-lg">
            <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-3">
              <User className="w-7 h-7 text-gold" />
            </div>
            <h3 className="font-display text-lg font-bold text-primary-foreground">M. Machesa</h3>
            <p className="text-gold text-xs font-medium mt-1">Founder & CEO</p>
          </div>

          {/* Vertical connector */}
          <div className="w-px h-10 bg-border" />

          {/* Horizontal connector bar */}
          <div className="hidden md:block w-[85%] h-px bg-border relative">
            {/* 6 vertical drops */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="absolute top-0 w-px h-10 bg-border"
                style={{ left: `${(i / 5) * 100}%` }}
              />
            ))}
          </div>
        </motion.div>

        {/* Team members grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 md:mt-10">
          {[
            { name: "Leiketseng Moloi", role: "Account Manager", initials: "LM" },
            { name: "Evidence Mabunda", role: "Scrum Master", initials: "EM" },
            { name: "Rachel Madzunya", role: "Business Dev Analyst", initials: "RM" },
            { name: "Nosibabalo Mtabele", role: "Front-End Developer", initials: "NM" },
            { name: "Issac Molefi", role: "Quantitative Analyst", initials: "IM" },
            { name: "Dorothy Kobe", role: "Office Administrator", initials: "DK" },
          ].map((member, i) => (
            <motion.div
              key={member.name}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {/* Vertical connector on mobile */}
              <div className="md:hidden w-px h-6 bg-border mb-2" />
              <div className="bg-card border border-border rounded-xl p-5 w-full hover:border-gold/40 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mx-auto mb-3 group-hover:bg-gold/20 transition-colors">
                  <span className="text-gold font-display text-sm font-bold">{member.initials}</span>
                </div>
                <h4 className="font-display text-sm font-semibold leading-tight">{member.name}</h4>
                <p className="text-muted-foreground text-xs mt-1.5">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* News */}
    <section className="section-padding bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-12">News & Updates</h2>
        <div className="space-y-6">
          {[
            { date: "October 2025", title: "DK Africa Launches FSPRO LITE Platform", desc: "Our new cloud-enabled funeral management platform is now available for early adopters across Southern Africa." },
            { date: "November 2025", title: "Pemit Hub Partnership Announcement", desc: "DK Africa partners with leading enterprises to deploy Permit hub." },
            { date: "January 2026", title: "DK Africa Launches SentraAI ", desc: "Empowering businesses with intelligent AI solutions designed to simplify operations and drive growth." },
          ].map((item, i) => (
            <motion.div key={i} className="bg-card border border-border rounded-xl p-8 hover:border-gold/40 transition-colors" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
              <span className="text-gold text-sm font-medium">{item.date}</span>
              <h3 className="font-display text-lg font-semibold mt-1 mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
