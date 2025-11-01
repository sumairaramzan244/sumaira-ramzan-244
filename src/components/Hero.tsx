import { Button } from "./ui/button";
import { ArrowDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const roles = ["Mobile Developer", "Web Developer", "UI/UX Designer"];
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 1500); // Changed from 2500ms to 1500ms (1.5 seconds)
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-16">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Hello, Myself </span>
            <span className="gradient-text">Sumaira Ramzan</span>
          </h1>
          <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-6">
            <span className="text-foreground">And I'm a </span>
            <span className="inline-block min-w-[220px] font-bold text-primary">
              <span className="animate-smooth-fade inline-block">{roles[currentRole]}</span>
            </span>
          </h3>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            I design and develop responsive mobile and web applications focused on clean code, elegant UI, and seamless user experiences — powered by <span className="font-bold text-amber-700 animate-pulse">React Native</span>, <span className="font-bold text-amber-700 animate-pulse">Firebase</span>, and modern web technologies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
          </div>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="inline-block">
            <ArrowDown className="w-6 h-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
