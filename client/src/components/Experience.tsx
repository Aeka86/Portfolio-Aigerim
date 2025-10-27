import { Briefcase, Calendar, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";

const workExperience = [
  {
    company: "HiredTrail",
    role: "Software Engineer Intern",
    duration: "July 2023 - Present",
    description:
      "Actively involved in developing a job website using modern web technologies. Contributing to full-stack development with React, React Native, Node.js, Express.js, and MongoDB. Managing pipelines and repositories using Azure DevOps, designing interactive user interfaces, and creating wireframes and prototypes using Figma.",
    responsibilities: [
      "Developing frontend features with React and React Native",
      "Managing Azure DevOps pipelines and repositories",
      "Creating wireframes and prototypes in Figma",
      "Implementing Redux for state management",
      "Working with Agile and Scrum methodologies",
    ],
  },
];

const education = [
  {
    institution: "Suleiman Demirel University",
    degree: "Bachelor's Degree in Two Foreign Languages",
    focus: "English, Turkish",
    duration: "September 2004 - May 2008",
    location: "Almaty",
  },
  {
    institution: "Kazakh-Turkish High School",
    degree: "High School Diploma",
    focus: "",
    duration: "September 2000 - May 2004",
    location: "Almaty",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Work Experience */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-experience-title">
              Work Experience
            </h2>
          </div>

          <div className="space-y-8">
            {workExperience.map((job) => (
              <Card key={job.company} className="p-6 sm:p-8" data-testid={`card-job-${job.company.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2" data-testid="text-company-name">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {job.company}
                    </h3>
                    <p className="text-lg text-muted-foreground mt-1" data-testid="text-job-role">
                      {job.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-job-duration">
                    <Calendar className="h-4 w-4" />
                    {job.duration}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4 leading-relaxed" data-testid="text-job-description">
                  {job.description}
                </p>

                <ul className="space-y-2">
                  {job.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                      data-testid={`text-responsibility-${index}`}
                    >
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.linkedin.com/in/aigerim-sagimbayeva-56536b5a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center gap-2"
              data-testid="link-linkedin-full"
            >
              View complete work history on LinkedIn →
            </a>
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-education-title">
              Education
            </h2>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.institution} className="p-6 sm:p-8" data-testid={`card-education-${edu.institution.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold flex items-center gap-2" data-testid="text-institution-name">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      {edu.institution}
                    </h3>
                    <p className="text-lg mt-1" data-testid="text-degree">
                      {edu.degree}
                    </p>
                    {edu.focus && (
                      <p className="text-sm text-muted-foreground mt-1" data-testid="text-degree-focus">
                        {edu.focus}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1" data-testid="text-location">
                      {edu.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-education-duration">
                    <Calendar className="h-4 w-4" />
                    {edu.duration}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
