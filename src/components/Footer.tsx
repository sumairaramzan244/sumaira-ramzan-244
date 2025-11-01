import { Linkedin, Github } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href="https://www.linkedin.com/in/sumaira-ramzan/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="hover:bg-primary/10 hover:text-primary"
              asChild
            >
              <a href="https://github.com/sumairaramzan244" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
          </div>
          <p className="text-muted-foreground text-center">
            © {new Date().getFullYear()} <span className="text-primary font-semibold">Sumaira Ramzan</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
