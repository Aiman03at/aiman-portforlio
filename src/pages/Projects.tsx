import { projects } from "../data/projects";
import ProjectCards from "../components/ProjectCards";

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-8">
        Projects 🚀
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCards key={project.id} 
          id={project.id}
          title={project.title}
          description={project.description}
          tech={project.tech}
          image={project.image}
          />
        ))}
      </div>
    </section>
  );
}