import { Code, Laptop, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code,
    title: "Frontend Development",
    description: "HTML, CSS, JavaScript, React",
  },
  {
    icon: Laptop,
    title: "Tools & Technologies",
    description: "Git, VS Code, Bootstrap, Tailwind CSS",
  },
  {
    icon: Zap,
    title: "Learning Focus",
    description: "React Native, TypeScript, Node.js",
  },
];

const technologies = [
  "React", "JavaScript", "HTML5", "CSS3", "Git", "Bootstrap",
  "Tailwind CSS", "Responsive Design", "Redux", "Figma"
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-section-title">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-about-description">
            I'm a self-taught junior frontend developer passionate about creating beautiful and functional web applications.
            My journey into web development started with a curiosity for how websites work, and has grown into a dedicated pursuit
            of mastering modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill) => (
            <Card key={skill.title} className="p-6 text-center hover-elevate transition-all duration-300" data-testid={`card-skill-${skill.title.toLowerCase().replace(/\s+/g, '-')}`}>
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                <skill.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8" data-testid="text-technologies-title">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-lg bg-card border hover-elevate transition-all duration-300 text-sm font-medium"
                data-testid={`badge-technology-${tech.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
