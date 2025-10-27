import ProjectCard from '../ProjectCard'

export default function ProjectCardExample() {
  return (
    <div className="p-8 max-w-sm">
      <ProjectCard
        title="Telephone Number Validator"
        description="A tool that validates US telephone numbers using regular expressions and pattern matching."
        image="https://i.postimg.cc/WzBr5Y35/Screenshot-2024-06-24-at-22-04-25.png"
        technologies={["JavaScript", "HTML", "CSS"]}
        liveUrl="https://aeka86.github.io/TelNumValidator-FCC/"
        codeUrl="https://github.com/aeka86/TelNumValidator-FCC"
      />
    </div>
  )
}
