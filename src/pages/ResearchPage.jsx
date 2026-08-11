import React, { useState } from "react";
import { BoogitkOpen, FileText, Users, ArrowUpRight, Clock } from "lucide-react";
// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const BLOG_POSTS = [
  {
    date: "March 2026",
    title: "Rethinking Generalization in Deep Networks",
    excerpt:
      "A closer look at how implicit regularization shapes model behavior outside the training distribution.",
    href: "#",
  },
  {
    date: "February 2026",
    title: "The Hidden Costs of Synthetic Data",
    excerpt:
      "When generated training data helps, when it hurts, and how to measure the difference.",
    href: "#",
  },
  {
    date: "January 2026",
    title: "Towards Interpretable Embeddings",
    excerpt:
      "Disentangling representation geometry to make high-dimensional spaces more navigable.",
    href: "#",
  },
];

const PAPERS = [
  {
    venue: "Journal of Machine Learning Research, 2026",
    title: "On the Dynamics of Self-Supervised Learning",
    authors: "A. Chen, R. Patel, S. Okonkwo",
    href: "#",
  },
  {
    venue: "NeurIPS 2025",
    title: "Robustness Certificates for Neural Control Systems",
    authors: "M. Liu, J. Barnes",
    href: "#",
  },
  {
    venue: "ICML 2025",
    title: "Efficient Long-Context Attention via Sparse Routing",
    authors: "T. Fischer, K. Yamamoto, D. Reyes",
    href: "#",
  },
  {
    venue: "AISTATS 2025",
    title: "Causal Discovery from High-Dimensional Time Series",
    authors: "N. Al-Farsi, L. Dubois",
    href: "#",
  },
];

const RECENT_PAPERS = [
  {
    title: "On the Dynamics of Self-Supervised Learning",
    date: "Mar 2026",
    href: "#",
  },
  {
    title: "Robustness Certificates for Neural Control Systems",
    date: "Feb 2026",
    href: "#",
  },
  {
    title: "Efficient Long-Context Attention via Sparse Routing",
    date: "Jan 2026",
    href: "#",
  },
  {
    title: "Causal Discovery from High-Dimensional Time Series",
    date: "Dec 2025",
    href: "#",
  },
];

const FACULTY = [
  { name: "Dr. Elena Marsh", role: "Faculty Advisor", photo: "/faculty/elena-marsh.jpg" },
  { name: "Dr. Raj Kapoor", role: "Faculty Advisor", photo: "/faculty/raj-kapoor.jpg" },
  { name: "Dr. Wei Lin", role: "Faculty Advisor", photo: "/faculty/wei-lin.jpg" },
  { name: "Dr. Sofia Alvarez", role: "Faculty Advisor", photo: "/faculty/sofia-alvarez.jpg" },
];

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

function initials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function Eyebrow({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/40 px-3 py-1 text-xs font-medium tracking-wide text-gray-700 shadow-sm shadow-black/5 backdrop-blur-md">
      {Icon && <Icon className="h-3.5 w-3.5" strokeWidth={2} />}
      {children}
    </span>
  );
}

function SectionHeading({ eyebrow, icon, title }) {
  return (
    <div className="mb-8">
      <Eyebrow icon={icon}>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 drop-shadow-sm">
        {title}
      </h2>
    </div>
  );
}

function FacultyAvatar({ name, photo }) {
  const [failed, setFailed] = useState(false);

  if (failed || !photo) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-white/40 text-xl font-semibold text-gray-600 backdrop-blur-md">
        {initials(name)}
      </div>
    );
  }

  return (
    <img
      src={photo}
      alt={name}
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  );
}

// ---------------------------------------------------------------------------
// Card components
// ---------------------------------------------------------------------------

function BlogCard({ date, title, excerpt, href }) {
  return (
    <a
      href={href}
      className="group flex flex-col rounded-2xl border border-white/60 bg-white/30 p-6 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-white/45 hover:shadow-xl hover:shadow-black/10"
    >
      <span className="text-xs font-medium tracking-wide text-gray-600">
        {date.toUpperCase()}
      </span>
      <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-700">
        {excerpt}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900">
        Read post
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

function PaperCard({ venue, title, authors, href }) {
  return (
    <a
      href={href}
      className="group flex flex-col rounded-2xl border border-white/60 bg-white/30 p-6 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/80 hover:bg-white/45 hover:shadow-xl hover:shadow-black/10"
    >
      <span className="text-xs font-medium tracking-wide text-gray-600">
        {venue.toUpperCase()}
      </span>
      <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-700">{authors}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-gray-900">
        View paper
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

function RecentPaperRow({ title, date, href }) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between gap-4 border-b border-white/40 px-2 py-4 transition-colors last:border-b-0 hover:bg-white/20 rounded-lg"
    >
      <span className="text-base font-medium text-gray-900 group-hover:underline">
        {title}
      </span>
      <span className="flex shrink-0 items-center gap-3 text-sm text-gray-600">
        {date}
        <ArrowUpRight className="h-4 w-4 text-gray-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gray-900" />
      </span>
    </a>
  );
}

function FacultyCard({ name, role, photo }) {
  return (
    <div className="flex flex-col items-center rounded-2xl border border-white/60 bg-white/30 p-5 text-center shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/45 hover:shadow-xl hover:shadow-black/10">
      <div className="h-24 w-24 overflow-hidden rounded-full ring-1 ring-white/70">
        <FacultyAvatar name={name} photo={photo} />
      </div>
      <h3 className="mt-4 text-base font-semibold text-gray-900">{name}</h3>
      <p className="mt-1 text-sm text-gray-600">{role}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ResearchPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-indigo-50 to-rose-50">
      {/* Decorative blurred color blobs that sit behind the glass panels */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-indigo-300/40 blur-3xl" />
        <div className="absolute top-1/4 -right-32 h-[28rem] w-[28rem] rounded-full bg-rose-300/35 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-96 w-96 rounded-full bg-sky-300/30 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />
      </div>

      <main className="relative mx-auto max-w-5xl px-6 py-16 sm:py-20">
        {/* Hero */}
        <section>
          <Eyebrow>RESEARCH DIVISION</Eyebrow>
          <h1 className="mt-4 text-5xl sm:text-6xl font-extrabold leading-[1.05] tracking-tight text-gray-900">
            Knowledge worth
            <br />
            sharing.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700">
            Our work lives at the intersection of rigorous inquiry and open
            collaboration. Here you will find our latest thinking, published
            findings, and the people who make it possible.
          </p>
        </section>

        <hr className="my-14 border-white/50" />

        {/* Recents */}
        <section>
          <SectionHeading
            eyebrow="RECENTS"
            icon={Clock}
            title="Recently posted"
          />
          <div className="rounded-2xl border border-white/60 bg-white/25 px-6 shadow-lg shadow-black/5 backdrop-blur-xl">
            {RECENT_PAPERS.map((paper) => (
              <RecentPaperRow key={paper.title} {...paper} />
            ))}
          </div>
        </section>

        <div className="my-14" />

        {/* Blog posts */}
        <section>
          <SectionHeading
            eyebrow="FROM THE LAB"
            icon={BookOpen}
            title="Research blogs and notes"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.title} {...post} />
            ))}
          </div>
        </section>

        <div className="my-14" />

        {/* Publications */}
        <section>
          <SectionHeading
            eyebrow="PUBLICATIONS"
            icon={FileText}
            title="Selected research papers"
          />
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PAPERS.map((paper) => (
              <PaperCard key={paper.title} {...paper} />
            ))}
          </div>
        </section>

        <div className="my-14" />

        {/* Faculty */}
        <section>
          <SectionHeading
            eyebrow="HONORED FACULTY"
            icon={Users}
            title="The minds behind the research"
          />
          <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
            {FACULTY.map((person) => (
              <FacultyCard key={person.name} {...person} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
