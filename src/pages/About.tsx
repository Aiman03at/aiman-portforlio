import PageWrapper from "../components/PageWrapper";

export default function About() {
  return (
    <PageWrapper>
      <section className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-gray-100">
        <h1 className="text-4xl font-bold mb-8">About Me</h1>
        
        <a
  href="/resume.pdf"
  download
  className="inline-flex items-center gap-2 px-6 py-3 mt-8 rounded-lg
  bg-indigo-600 hover:bg-indigo-500 transition"
>
  Download Resume
</a>
<div className="min-h-screen bg-white text-gray-900 dark:bg-zinc-900 dark:text-gray-100">
        <p className="text-lg  leading-relaxed mb-6">
          I’m a frontend developer who enjoys building clean, performant,
          and accessible user interfaces. I care deeply about how users
          experience products — not just how they look, but how they feel.
        </p>

        <p className="text-lg  leading-relaxed mb-6">
          My background in computer science and hands-on project work
          has shaped how I approach problems: break them down, design
          predictable systems, and iterate thoughtfully.
        </p>

        <p className="text-lg  leading-relaxed">
          I’m currently looking for frontend or full-stack opportunities
          where I can contribute, learn, and grow as part of a collaborative team.
        </p>

        </div>
      </section>
    </PageWrapper>
  );
}