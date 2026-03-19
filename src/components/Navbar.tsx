import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/dk-africa-logo.jpg";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="DK Africa Trade Group" className="h-14 w-14 rounded-full object-cover" />
          <div className="hidden sm:block">
            <span className="text-primary-foreground font-display text-lg font-bold leading-tight block">DK Africa Trade Group</span>
            <span className="text-gold text-xs tracking-widest uppercase">Financial Stability</span>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className={`text-sm font-medium transition-colors ${isActive("/") ? "text-gold" : "text-primary-foreground/80 hover:text-gold"}`}>Home</Link>
          <Link to="/about" className={`text-sm font-medium transition-colors ${isActive("/about") ? "text-gold" : "text-primary-foreground/80 hover:text-gold"}`}>About Us</Link>
          
          <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <button className={`text-sm font-medium transition-colors flex items-center gap-1 ${location.pathname.startsWith("/services") ? "text-gold" : "text-primary-foreground/80 hover:text-gold"}`}>
              Services <ChevronDown className="w-4 h-4" />
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-primary border border-gold/20 rounded-lg shadow-2xl overflow-hidden">
                <Link to="/services/fspro-lite" className="block px-5 py-3 text-sm text-primary-foreground/80 hover:text-gold hover:bg-dark-green-deep transition-colors" onClick={() => setServicesOpen(false)}>FSPRO LITE</Link>
                <Link to="/services/sentrai" className="block px-5 py-3 text-sm text-primary-foreground/80 hover:text-gold hover:bg-dark-green-deep transition-colors" onClick={() => setServicesOpen(false)}>SentraAI</Link>
              </div>
            )}
          </div>
          
          <Link to="/contact" className={`text-sm font-medium transition-colors ${isActive("/contact") ? "text-gold" : "text-primary-foreground/80 hover:text-gold"}`}>Contact</Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-gold/20 px-6 py-4 space-y-3">
          <Link to="/" className="block text-primary-foreground/80 hover:text-gold py-2" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/about" className="block text-primary-foreground/80 hover:text-gold py-2" onClick={() => setMobileOpen(false)}>About Us</Link>
          <div>
            <button className="text-primary-foreground/80 hover:text-gold py-2 flex items-center gap-1" onClick={() => setServicesOpen(!servicesOpen)}>Services <ChevronDown className="w-4 h-4" /></button>
            {servicesOpen && (
              <div className="pl-4 space-y-2">
                <Link to="/services/fspro-lite" className="block text-primary-foreground/60 hover:text-gold py-1" onClick={() => setMobileOpen(false)}>FSPRO LITE</Link>
                <Link to="/services/sentrai" className="block text-primary-foreground/60 hover:text-gold py-1" onClick={() => setMobileOpen(false)}>SentraAI</Link>
              </div>
            )}
          </div>
          <Link to="/contact" className="block text-primary-foreground/80 hover:text-gold py-2" onClick={() => setMobileOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
