import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import {motion} from "framer-motion";
import { fadeUp} from "../aimations/variants";   
import { stagger } from "../aimations/variants";
import { sectionVariant } from "../aimations/variants";

export default function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find(
    (p) => p.id === id
  );

  if (!project) {
    return <p className="p-6">Project not found</p>;
  }

  return (
    <motion.section
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={stagger}
    transition={{ duration: 0.5 }}


    className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-extrabold mb-4">
        {project.title}
      </h1>

      <p className="opacity-80 mb-8">
        {project.description}
      </p>
{/*Tech Stack Section*/}


      <div className="flex flex-wrap gap-3 mb-10">
        {project.tech.map((item) => (
        <span
          key={item}
          className="px-3 py-1 text-sm rounded-full 
            bg-gray-200 dark:bg-gray-800"
      >
           {item}
           </span>
      ))}
      </div>
      {/* Case Study Section */}
       {/* Problem and Solution Section */}
      <div className="grid md:grid-cols-2 gap-8 mb-19">
      <motion.div variants={fadeUp}>
      <h2 className="text-2xl font-bold">
       Problem
      </h2>
      <p className="leading-relaxed opacity-90">
      {project.caseStudy.problem}
      </p>
      </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="text-2xl font-bold mb-2">
            Solution
          </h2>
          <p>{project.caseStudy.solution}</p>
        </motion.div>
        </div>

        {/* Features Section */}
        <motion.div variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-10">
          <h2 className="text-2xl font-bold mb-2">
            Features
          </h2>
          <ul className="list-disc list-inside">
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold mb-2">
            AI Integration
          </h2>
          <p>{project.caseStudy.ai}</p>
        </motion.div>

        <motion.div variants={fadeUp} className="mt-8 space-y-6">
          <h2 className="text-2xl font-bold mb-2">
            Learnings
          </h2>
          <p>{project.caseStudy.learnings}</p>
        </motion.div>
      

{project.improvements && (
        <motion.div variants={sectionVariant}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true }}
        className=" mt-10 rounded-xl border border-gray-700/40 bg-zinc-900/50 p-6 backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-2">
            Improvements
          </h3>
          <ul className="space-y-3">
            {project.improvements.map((improvement, index) => (
              <motion.li
               key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-start gap-2 text-gray-300"
               >
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-500"/>
                  <p className="text-zinc-300 leading-relaxed">{improvement}

                  </p>
                  

               </motion.li>
            ))}
          </ul>
        </motion.div> 
) } 

      {/* Screenshots Section */}
      <div className="mt-8 space-y-6"  >
        <h2 className="text-2xl font-bold mb-4">
         Screenshots
         </h2>

        <div className="grid gap-6 sm:grid-cols-2">
        {project.screenshots.map((img) => (
      <img
        key={img}
        src={img}
        alt="Project screenshot"
        className="rounded-lg shadow"
      />
    ))}
  </div>
</div>


{/* Buttons */}
      <div className="flex gap-4">
        <a
          href={project.live}
          target="_blank"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          className="px-6 py-3 rounded-lg border"
        >
          GitHub
        </a>
      </div>
    
    </motion.section>
  );
}