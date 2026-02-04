import PageWrapper from "../components/PageWrapper";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Contact | Aiman's Portfolio</title>
        <meta name="description" content="Get in touch with Aiman for frontend and full-stack opportunities." />
      </Helmet>
      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>

        <p className=" mb-8">
          I’m open to frontend and full-stack opportunities.
          Feel free to reach out.
        </p>

        <a
          href="mailto:your@email.com"
          className="text-indigo-400 hover:underline text-lg"
        >
          your@email.com
        </a>
      </section>
    </PageWrapper>
  );
}