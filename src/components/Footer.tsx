import { Link } from "react-router-dom";
import { Facebook, Linkedin } from "lucide-react";

const Footer = () =>
<footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <h3 className="font-display text-xl font-bold text-gold mb-4">DK Africa Trade Group</h3>
        <p className="text-primary-foreground/60 text-sm leading-relaxed">Intelligent Data, Ethical Governance, Accelerated Growth.</p>
      </div>
      <div>
        <h4 className="font-display text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Quick Links</h4>
        <div className="space-y-2 text-sm">
          <Link to="/" className="block text-primary-foreground/60 hover:text-gold transition-colors">Home</Link>
          <Link to="/about" className="block text-primary-foreground/60 hover:text-gold transition-colors">About Us</Link>
          <Link to="/services/fspro-lite" className="block text-primary-foreground/60 hover:text-gold transition-colors">FSPRO LITE</Link>
          <Link to="/services/sentrai" className="block text-primary-foreground/60 hover:text-gold transition-colors">SentraAI</Link>
          <Link to="/contact" className="block text-primary-foreground/60 hover:text-gold transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-display text-sm font-semibold text-gold mb-4 uppercase tracking-wider">Connect</h4>
        <p className="text-primary-foreground/60 text-sm mb-4">info@dkafricaholdings.co.za
WhatsApp: 062 992 0616


        <br />WhatsApp: 062 992 0616</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-gold transition-colors"><Facebook className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/dk-africa-87401535b" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/60 hover:text-gold transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>
    </div>
    <div className="border-t border-gold/10 py-6 text-center text-primary-foreground/40 text-xs">
      © {new Date().getFullYear()} DK Africa Trade Group (PTY) LTD. All rights reserved.
    </div>
  </footer>;export default Footer;