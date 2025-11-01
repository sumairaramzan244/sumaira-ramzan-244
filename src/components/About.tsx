import { Lock, FileText, Target, Mail } from "lucide-react";
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
import profilePic from "@/assets/profile-picture.png";

const About = () => {
  const [showCVDialog, setShowCVDialog] = useState(false);

  const handleCVRequest = () => {
    setShowCVDialog(false);
    // Scroll to contact section
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4 inline-block">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-xl text-muted-foreground">
            Passionate developer crafting beautiful digital experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-[400px_1fr] gap-12 items-start">
          {/* Profile Picture */}
          <div className="mx-auto">
            <div className="w-80 h-80 rounded-full border-4 border-primary overflow-hidden">
              <img 
                src={profilePic} 
                alt="Sumaira Ramzan - Web Developer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            
            <p className="text-lg text-foreground leading-relaxed text-justify">
              I am a dedicated Web and Mobile Application Developer committed to building responsive, accessible, and visually sophisticated digital solutions. Skilled in <span className="font-semibold text-amber-700">HTML5</span>, <span className="font-semibold text-amber-700">CSS3</span>, <span className="font-semibold text-amber-700">Bootstrap</span>, <span className="font-semibold text-amber-700">Tailwind CSS</span>, <span className="font-semibold text-amber-700">JavaScript</span>, <span className="font-semibold text-amber-700">React Native</span>, <span className="font-semibold text-amber-700">Firebase</span>, and <span className="font-semibold text-amber-700">Expo</span>, I develop efficient, scalable, and user-focused applications across both web and mobile platforms.
            </p>

            <p className="text-lg text-foreground leading-relaxed text-justify">
              Driven by precision and creativity, I continuously expand my technical expertise to stay aligned with emerging technologies and best development practices, ensuring every project achieves exceptional performance, usability, and design excellence.
            </p>

            <Button 
              size="lg" 
              className="mt-4"
              onClick={() => setShowCVDialog(true)}
            >
              <Lock className="w-5 h-5 mr-2" />
              Request CV Access
            </Button>

            {/* CV Access Dialog */}
            <AlertDialog open={showCVDialog} onOpenChange={setShowCVDialog}>
              <AlertDialogContent className="bg-card border-border">
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-2xl flex items-center gap-2">
                    <Lock className="w-6 h-6 text-primary" />
                    CV Access is private.
                  </AlertDialogTitle>
                  <AlertDialogDescription className="space-y-4 text-base pt-4">
                    <p className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                      <span>Would you like me to take you to the contact section to request CV access?</span>
                    </p>
                    <p className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                      <span>I'll be happy to share my CV after reviewing your request!</span>
                    </p>
                    <p className="text-muted-foreground text-sm italic">
                      Click OK to go to contact section, or Cancel to stay here.
                    </p>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction 
                    onClick={handleCVRequest}
                    className="bg-primary hover:bg-primary/90"
                  >
                    OK
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
