import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Facebook, Instagram } from "lucide-react";
import { XIcon } from "@/components/icons/XIcon";
import { BrandMark } from "@/components/BrandMark";

export const Footer = () => (
  <footer data-surface="navy" className="border-t border-border bg-gradient-ground text-foreground">
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 lg:grid-cols-4">
        <div className="space-y-4">
          <BrandMark tone="onGround" />
          <p className="text-sm leading-relaxed text-muted-foreground">Nourishing urgent needs, equipping people with opportunity, and supporting them to rise across Nigeria.</p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary-ink" aria-label="Facebook"><Facebook className="h-5 w-5" /></a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary-ink" aria-label="X"><XIcon className="h-5 w-5" /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-colors hover:text-primary-ink" aria-label="Instagram"><Instagram className="h-5 w-5" /></a>
          </div>
        </div>
        <div>
          <h3 className="mb-4 text-base font-bold uppercase tracking-[0.12em] text-foreground">Explore</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="text-muted-foreground transition-colors hover:text-primary-ink">About Feed to Rise</Link></li>
            <li><Link to="/impact" className="text-muted-foreground transition-colors hover:text-primary-ink">Our pathway</Link></li>
            <li><Link to="/impact" className="text-muted-foreground transition-colors hover:text-primary-ink">Our impact</Link></li>
            <li><Link to="/blog" className="text-muted-foreground transition-colors hover:text-primary-ink">Field updates</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-base font-bold uppercase tracking-[0.12em] text-foreground">Get involved</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/involve#donate" className="text-muted-foreground transition-colors hover:text-primary-ink">Support the work</Link></li>
            <li><Link to="/involve#volunteer" className="text-muted-foreground transition-colors hover:text-primary-ink">Volunteer or mentor</Link></li>
            <li><Link to="/involve#partner" className="text-muted-foreground transition-colors hover:text-primary-ink">Partner with us</Link></li>
            <li><Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary-ink">Contact the team</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="mb-4 text-base font-bold uppercase tracking-[0.12em] text-foreground">Reach us</h3>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start space-x-2"><MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-ink" /><span>Lagos and Abuja, Nigeria</span></li>
            <li className="flex items-center space-x-2"><Phone className="h-5 w-5 shrink-0 text-primary-ink" /><a href="tel:+2349041401167" className="transition-colors hover:text-primary-ink">+234 904 140 1167</a></li>
            <li className="flex items-center space-x-2"><Mail className="h-5 w-5 shrink-0 text-primary-ink" /><Link to="/contact" className="transition-colors hover:text-primary-ink">Send us a message</Link></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Feed to Rise. All rights reserved.</p>
        <div className="flex items-center gap-6"><Link to="/privacy" className="transition-colors hover:text-primary-ink">Privacy Policy</Link><a href="https://beamxsolutions.com" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary-ink">Developed by BeamX Solutions</a></div>
      </div>
    </div>
  </footer>
);
