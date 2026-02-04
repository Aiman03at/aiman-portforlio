import { useParams } from "react-router-dom";
import { blogs } from "../data/blog";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/PageWrapper";
  
export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <p>Blog not found</p>;

  return (
    <PageWrapper>
    <Helmet>
      <title>{blog.title} | Aiman's Blog</title>
      <meta name="description" content={blog.excerpt} />

      {/* Open Graph (LinkedIn / Facebook) */}
  <meta property="og:title" content={blog.title} />
  <meta property="og:description" content={blog.excerpt} />
  <meta property="og:type" content="article" />
  <meta property="og:url"content={`https://your-domain.com/blog/${blog.id}`}/>
  <meta
    property="og:image"
    content="https://your-domain.com/og-blog-cover.png"
  />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={blog.title} />
  <meta name="twitter:description" content={blog.excerpt} />
    </Helmet>

    <article className="max-w-3xl mx-auto px-6 py-20 prose prose-invert">
      <h1>{blog.title}</h1>
      <p className="text-zinc-400">{blog.date}</p>

      <div dangerouslySetInnerHTML={{ __html: blog.content }} />

      <div className="mt-12 p-6 rounded-xl border border-indigo-500/20 bg-indigo-500/5">
  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">AI Highlights</h3>
  <p className="">{blog.aiSummary}</p>
</div>



    </article>

    </PageWrapper>
  );
}