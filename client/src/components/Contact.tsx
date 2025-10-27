import { Mail, Linkedin, Github } from "lucide-react";
import { Card } from "@/components/ui/card";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "aigerim@example.com",
    href: "mailto:aigerim@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Aigerim Sagimbayeva",
    href: "https://www.linkedin.com/in/aigerim-sagimbayeva-56536b5a/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@aeka86",
    href: "https://github.com/aeka86",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-contact-title">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method) => (
            <Card
              key={method.label}
              className="p-6 text-center hover-elevate transition-all duration-300"
              data-testid={`card-contact-${method.label.toLowerCase()}`}
            >
              <a
                href={method.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{method.label}</h3>
                <p className="text-sm text-muted-foreground">{method.value}</p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
