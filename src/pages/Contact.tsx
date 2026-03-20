import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Facebook, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:dkafrica24@gmail.com?subject=Enquiry from ${form.name}&body=${form.message}%0A%0AFrom: ${form.email}`;
  };

  return (
    <div className="pt-20">
      <section className="hero-gradient section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>Contact Us</motion.h1>
          <motion.p className="text-primary-foreground/70 text-lg" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>We'd love to hear from you. Reach out today.</motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold mb-6">Head Office</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                  <p>DK Africa Trade Group (PTY) LTD<br />Boundary Road, St Andrews<br />Jackal Creek Golf Estate<br />Roodepoort, 2169<br />South Africa</p>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                  <a href="mailto:dkafrica24@gmail.com" className="hover:text-gold transition-colors">
</a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                  <a href="https://wa.me/27629920616" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">WhatsApp: 062 992 0616</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold mb-4">Social Media</h3>
              <div className="flex gap-4">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"><Facebook className="w-5 h-5" /> Facebook</a>
                <a href="https://www.linkedin.com/in/dk-africa-87401535b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /> LinkedIn</a>
              </div>
              <p className="text-muted-foreground text-sm mt-3">TikTok: @fspro_lite_sa</p>
            </div>
          </div>

          {/* Form */}
          <motion.form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8 space-y-6" initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}>
            <h2 className="font-display text-2xl font-bold">Send a Message</h2>
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-gold/50 resize-none" />
            </div>
            <button type="submit" className="w-full gold-gradient text-accent-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity">Send Message</button>
          </motion.form>
        </div>
      </section>
    </div>);
};

export default Contact;