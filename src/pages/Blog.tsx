import { blogs } from "../data/blog";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageWrapper from "../components/PageWrapper";

export default function Blog() {
  return (
    <PageWrapper>
    <section className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.4 }}
  viewport={{ once: true }}
>
        {blogs.map((blog) => (
          <Link
            key={blog.id}
            to={`/blog/${blog.id}`}
            className="block p-6 rounded-xl border border-zinc-800 hover:border-indigo-500 transition"
          >
            <h2 className="text-2xl font-semibold">{blog.title}</h2>
            <p className="text- mt-2">{blog.excerpt}</p>
            <span className="text-sm ">{blog.date}</span>
          </Link>
        ))}
      </motion.div>
    </section>
    </PageWrapper>
  );
}