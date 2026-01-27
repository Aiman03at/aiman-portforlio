import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
};

export default function ProjectCards({
  title,
  description,
  tech,
  image,
}: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 
                 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg"
    >
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
    </motion.article>
  );
}