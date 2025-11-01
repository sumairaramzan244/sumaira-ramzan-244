import { Smartphone, Globe, Palette } from "lucide-react";
import { Card } from "./ui/card";

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications with modern UI and smooth performance using React Native and Firebase.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Development",
      description: "Responsive and professional websites using React and modern web technologies with optimal performance.",
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      description: "Crafting intuitive interfaces with user-centered design principles for exceptional user experiences.",
      color: "text-accent",
      bgColor: "bg-accent/10",
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          My <span className="text-primary">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card p-8 border border-border card-hover group"
            >
              <div className={`${service.bgColor} ${service.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
