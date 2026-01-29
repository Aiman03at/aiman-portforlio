import { motion } from "framer-motion";
import {Link} from "react-router-dom";


type ProjectCardProps = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function ProjectCards({
  id,
  title,
  description,
  tech,
  image,
}: ProjectCardProps) {
  return (
    <Link to={`/projects/${id}`}>
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -6 }}
    


      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg"
    >
      {/* Add Overlay */}
      <div className="relative">
      <img
        src={image}
        alt={title}
        className="h-48 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm opacity-80 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="px-2 py-1 text-xs rounded-full bg-gray-200 dark:bg-gray-800"
            >
              {item}
            </span>
          ))}
        </div>
        </div>
      </div>
    </motion.article>
    </Link>
  );
}