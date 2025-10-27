import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Telephone Number Validator",
    description: "A tool that validates US telephone numbers using regular expressions and pattern matching.",
    image: "https://i.postimg.cc/WzBr5Y35/Screenshot-2024-06-24-at-22-04-25.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://aeka86.github.io/TelNumValidator-FCC/",
  },
  {
    title: "Caesar Cipher",
    description: "An encryption tool implementing the classic Caesar cipher algorithm for text encoding and decoding.",
    image: "https://i.postimg.cc/7LRRn77m/Screenshot-2024-06-24-at-22-28-08.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://aeka86.github.io/Caesar-Cipher---FCC/",
  },
  {
    title: "Roman Numeral Converter",
    description: "Convert numbers between decimal and Roman numeral formats with input validation.",
    image: "https://i.postimg.cc/6pnTXL6G/Screenshot-2024-06-24-at-22-39-05.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://aeka86.github.io/RomanNumConverter-FCC/",
  },
  {
    title: "Magzhan Saimbayev Website",
    description: "A tribute website showcasing the life and works of Magzhan Saimbayev with responsive design.",
    image: "https://i.postimg.cc/qMfkYjLg/Screenshot-2023-05-21-at-12-48-22.png",
    technologies: ["HTML", "CSS", "Responsive Design"],
    liveUrl: "https://aeka86.github.io/Magzhan-Website/",
  },
  {
    title: "Palindrome Checker",
    description: "Check if a word or phrase is a palindrome with case-insensitive validation.",
    image: "https://i.postimg.cc/LsJ47Rbv/Screenshot-2024-06-25-at-17-03-00.png",
    technologies: ["JavaScript", "HTML", "CSS"],
    liveUrl: "https://aeka86.github.io/PalindromeChecker-FCC/",
  },
  {
    title: "Product Landing Page",
    description: "A modern product landing page with smooth scrolling and responsive layout.",
    image: "https://i.postimg.cc/PxwdM59J/Screen-Shot-2022-02-15-at-15-46-50.png",
    technologies: ["HTML", "CSS", "Responsive Design"],
    liveUrl: "https://codepen.io/Aika86/full/LYOLRyM",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4" data-testid="text-section-title">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-section-description">
            A collection of projects I've built while learning frontend development through FreeCodeCamp and personal studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
