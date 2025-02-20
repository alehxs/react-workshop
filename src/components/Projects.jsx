import ProjectCard from "./ProjectCard";

function Projects() {
  const projects = [
    { title: "To-Do List", description: "A simple task manager." },
    { title: "Weather App", description: "Displays live weather updates." },
  ];

  return (
    <div>
      <h1>My Projects</h1>
      {projects.map((project, index) => (
        <ProjectCard key={index} title={project.title} description={project.description} />
      ))}
    </div>
  );
}

export default Projects;