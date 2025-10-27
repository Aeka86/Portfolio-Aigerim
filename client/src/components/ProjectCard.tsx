import { ExternalLink, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  codeUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  image,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-all duration-300 group" data-testid={`card-project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2" data-testid="text-project-title">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 leading-relaxed" data-testid="text-project-description">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground"
              data-testid={`badge-tech-${tech.toLowerCase()}`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-2">
          <Button
            size="sm"
            asChild
            data-testid="button-live-demo"
          >
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4 mr-2" />
              Live Demo
            </a>
          </Button>
          {codeUrl && (
            <Button
              size="sm"
              variant="outline"
              asChild
              data-testid="button-view-code"
            >
              <a href={codeUrl} target="_blank" rel="noopener noreferrer">
                <Code className="h-4 w-4 mr-2" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
