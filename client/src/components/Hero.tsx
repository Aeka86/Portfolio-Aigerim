import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Modern_tech_hero_background_c46d42d1.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight" data-testid="text-hero-name">
          Aigerim Sagimbayeva
        </h1>
        <p className="text-xl sm:text-2xl text-muted-foreground font-medium mb-4" data-testid="text-hero-title">
          Self-Taught Junior Frontend Developer
        </p>
        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" data-testid="text-hero-bio">
          Passionate about creating clean, responsive web applications using React, JavaScript, and modern web technologies.
          Currently building real-world projects and continuously learning.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            data-testid="button-view-projects"
          >
            View My Projects
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            data-testid="button-contact"
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/aeka86"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-elevate rounded-md p-2 transition-all duration-300"
            data-testid="link-github"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/aigerim-sagimbayeva-56536b5a/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-elevate rounded-md p-2 transition-all duration-300"
            data-testid="link-linkedin"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:aigerim@example.com"
            className="hover-elevate rounded-md p-2 transition-all duration-300"
            data-testid="link-email"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
