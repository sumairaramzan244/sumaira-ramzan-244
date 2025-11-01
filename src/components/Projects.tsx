import { Card } from "./ui/card";
import { Github, Lock } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog";
import stayeaseVideo from "@/assets/stayease-demo.mp4";
import tourBookingImg from "@/assets/tour-booking-project.png";
import lingolearnVideo from "@/assets/lingolearn-demo.mp4";

interface Project {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  technologies: string[];
  video?: string;
  image?: string;
  githubLink: string;
  isPrivate?: boolean;
}

const Projects = () => {
  const [showAccessDialog, setShowAccessDialog] = useState(false);
  const [selectedProject, setSelectedProject] = useState<string>("");

  const handlePrivateProjectClick = (projectTitle: string) => {
    setSelectedProject(projectTitle);
    setShowAccessDialog(true);
  };

  const handleAccessRequest = () => {
    setShowAccessDialog(false);
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects: Project[] = [
    {
      title: "StayEase",
      subtitle: "Property Rental App",
      description:
        "StayEase is a modern and user-friendly hotel booking and management platform designed to simplify the process of finding, booking, and managing hotel stays. It provides a seamless experience for both customers and hotel administrators with real-time room availability, secure payments, and interactive dashboards.",
      features: [
        "Search hotels by location, price, and amenities",
        "Real-time room availability with instant booking",
        "Secure payment integration via Stripe gateway",
        "User authentication with Firebase (email/social)",
        "Admin dashboard for room & booking management",
        "Guest reviews and ratings system",
        "Fully responsive mobile and desktop design",
      ],
      technologies: ["React Native", "Node.js", "Firebase", "Firebase Auth", "Stripe"],
      video: stayeaseVideo,
      githubLink: "https://github.com/sumairaramzan244/StayEase",
      isPrivate: true,
    },
    {
      title: "Tour Booking",
      subtitle: "Web Application",
      description:
        "TourEase is a responsive web application designed to simplify the process of discovering, booking, and managing travel experiences. It offers users an easy way to explore destinations, compare tour packages, and make secure online bookings.",
      features: [
        "Browse tours by destination, budget, and category",
        "Safe login/signup using Firebase Authentication",
        "Admin panel to manage tour packages and bookings",
        "Customer data management system",
        "Optimized for both desktop and mobile devices",
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "PHP", "MySQL"],
      image: tourBookingImg,
      githubLink: "https://github.com/sumairaramzan244/Tour-Management",
    },
    {
      title: "LingoLearn",
      subtitle: "Interactive Language Learning App",
      description:
        "LingoLearn is a mobile application designed to make language learning fun and interactive. It provides structured lessons, vocabulary practice, and real-time progress tracking to help users improve efficiently.",
      features: [
        "Learn through bite-sized modules and daily tasks",
        "Interactive flashcards for vocabulary practice",
        "Real-time progress tracking and achievements",
        "Secure login/signup using Firebase Authentication",
        "Clean and user-friendly mobile interface",
      ],
      technologies: ["React Native (Expo)", "Firebase", "Firestore", "Firebase Auth"],
      video: lingolearnVideo,
      githubLink: "https://github.com/sumairaramzan244/Learn_Language_App",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-12">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border border-border overflow-hidden card-hover group flex flex-col">
              {/* Media Section */}
              {project.image && (
                <div className="relative h-64 bg-black overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              {project.video && (
                <div className="relative h-64 bg-black overflow-hidden">
                  <video
                    src={project.video}
                    className="w-full h-full object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    style={{
                      maxHeight: '256px',
                      objectFit: 'contain'
                    }}
                  />
                </div>
              )}
              
              {/* Content Section */}
              <div className="p-6 space-y-4 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                {project.subtitle && (
                  <p className="text-base font-medium text-primary">{project.subtitle}</p>
                )}
                
                <p className="text-muted-foreground leading-relaxed text-sm text-justify">
                  {project.description}
                </p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                    <span>🌟</span> Key Features:
                  </h4>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm text-justify">
                    {project.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-sm uppercase tracking-wide flex items-center gap-2">
                    <span>🛠️</span> Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="mt-auto pt-4">
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  onClick={() => {
                    if (project.isPrivate) {
                      handlePrivateProjectClick(project.title);
                    } else {
                      window.open(project.githubLink, '_blank');
                    }
                  }}
                >
                  {project.isPrivate ? (
                    <>
                      <Lock className="w-4 h-4 mr-2" />
                      Request Access
                    </>
                  ) : (
                    <>
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </>
                  )}
                </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Private Project Access Dialog */}
        <AlertDialog open={showAccessDialog} onOpenChange={setShowAccessDialog}>
          <AlertDialogContent className="bg-card border-border">
            <AlertDialogHeader>
              <AlertDialogTitle className="text-2xl flex items-center gap-2">
                <Lock className="w-6 h-6 text-primary" />
                Private Project Access
              </AlertDialogTitle>
              <AlertDialogDescription className="space-y-4 text-base pt-4">
                <p className="flex items-start gap-3">
                  <span className="text-lg">🔒</span>
                  <span><strong>{selectedProject}</strong> is a private repository.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-lg">💼</span>
                  <span>Would you like to request access to view this project?</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-lg">📧</span>
                  <span>I'll review your request and grant access if appropriate.</span>
                </p>
                <p className="text-muted-foreground text-sm italic">
                  Click OK to go to contact form and send your request.
                </p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction 
                onClick={handleAccessRequest}
                className="bg-primary hover:bg-primary/90"
              >
                OK
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
};

export default Projects;
