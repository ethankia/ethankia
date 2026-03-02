import { Code2, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border bg-background py-10">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm font-semibold">
          <Code2 className="h-5 w-5 text-primary" />
          <span>EK Development</span>
        </div>

        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/mockups" className="hover:text-foreground transition-colors">Mockups</Link>
          <Link to="/reviews" className="hover:text-foreground transition-colors">Reviews</Link>
          <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <a href="tel:616-387-0268" className="hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
          </a>
          <a href="mailto:ethankia1619@gmail.com" className="hover:text-primary transition-colors">
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
      <p className="text-center text-xs text-muted-foreground mt-6">
        © {new Date().getFullYear()} EK Development. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
