import { blogPosts, getBlogPost } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import Link from "next/link";
import { AffiliateBox } from "@/components/AdBanner";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ConversationalAI.Learn`,
    description: post.description,
  };
}

const categoryColors = {
  "Resources": "bg-amber-100 text-amber-700",
  "Beginner Guide": "bg-blue-100 text-blue-700",
  "Prompt Engineering": "bg-purple-100 text-purple-700",
  "AI Agents": "bg-orange-100 text-orange-700",
  "Learning Path": "bg-green-100 text-green-700",
  "AI Tools": "bg-pink-100 text-pink-700",
  "Tutorials": "bg-teal-100 text-teal-700",
  "Industry": "bg-slate-100 text-slate-700",
};

function renderContent(text) {
  const lines = text.trim().split("\n");
  const elements = [];
  let i = 0;
  let affiliateInserted = false;
  const totalLines = lines.length;

  while (i < lines.length) {
    const line = lines[i].trim();

    // Insert affiliate box ~40% through the content
    if (!affiliateInserted && i > Math.floor(totalLines * 0.4) && line.startsWith("## ")) {
      affiliateInserted = true;
      // marker — handled below in JSX
      elements.push({ type: "affiliate" });
    }

    if (line.startsWith("## ")) {
      elements.push({ type: "h2", content: line.replace("## ", ""), key: i });
    } else if (line.startsWith("### ")) {
      elements.push({ type: "h3", content: line.replace("### ", ""), key: i });
    } else if (line.startsWith("> ")) {
      elements.push({ type: "blockquote", content: line.replace("> ", ""), key: i });
    } else if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].trim().startsWith("- ")) {
        items.push(lines[i].trim().replace("- ", ""));
        i++;
      }
      elements.push({ type: "ul", items, key: `ul-${i}` });
      continue;
    } else if (line.startsWith("| ")) {
      const rows = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        if (!lines[i].includes("---")) rows.push(lines[i]);
        i++;
      }
      const [header, ...bodyRows] = rows;
      if (!header) { i++; continue; }
      const headerCells = header.split("|").filter(Boolean).map((c) => c.trim());
      elements.push({ type: "table", headerCells, bodyRows, key: `table-${i}` });
      continue;
    } else if (line.startsWith("```")) {
      const lang = line.replace("```", "").trim();
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      elements.push({ type: "code", lang, content: codeLines.join("\n"), key: `code-${i}` });
    } else if (line.startsWith("**") && line.endsWith("**") && !line.slice(2, -2).includes("**")) {
      elements.push({ type: "bold-line", content: line, key: i });
    } else if (line.length > 0 && line !== "---") {
      elements.push({ type: "p", content: line, key: i });
    }
    i++;
  }
  return elements;
}

function RenderElement({ el, affiliateCourseType }) {
  const boldify = (text) => text.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");

  if (el.type === "affiliate") {
    return <AffiliateBox courseType={affiliateCourseType} />;
  }
  if (el.type === "h2") {
    return <h2 className="text-2xl font-bold text-slate-800 mt-10 mb-3">{el.content}</h2>;
  }
  if (el.type === "h3") {
    return <h3 className="text-xl font-semibold text-slate-700 mt-6 mb-2">{el.content}</h3>;
  }
  if (el.type === "blockquote") {
    return (
      <blockquote className="border-l-4 border-blue-400 pl-4 italic text-slate-600 my-5 bg-blue-50 py-3 rounded-r-lg">
        <span dangerouslySetInnerHTML={{ __html: boldify(el.content) }} />
      </blockquote>
    );
  }
  if (el.type === "ul") {
    return (
      <ul className="list-disc pl-6 my-3 space-y-1 text-slate-600">
        {el.items.map((item, j) => (
          <li key={j} dangerouslySetInnerHTML={{ __html: boldify(item) }} />
        ))}
      </ul>
    );
  }
  if (el.type === "table") {
    return (
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-slate-200 rounded-lg text-sm">
          <thead className="bg-slate-50">
            <tr>
              {el.headerCells.map((c, j) => (
                <th key={j} className="px-4 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">{c}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {el.bodyRows.map((row, ri) => (
              <tr key={ri} className="border-b border-slate-100 hover:bg-slate-50">
                {row.split("|").filter(Boolean).map((c, j) => (
                  <td key={j} className="px-4 py-2 text-slate-600">{c.trim()}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  if (el.type === "code") {
    return (
      <pre className="bg-slate-900 text-green-300 rounded-xl p-4 overflow-x-auto my-5 text-sm leading-relaxed">
        <code>{el.content}</code>
      </pre>
    );
  }
  if (el.type === "bold-line") {
    return (
      <p className="text-slate-700 font-semibold leading-relaxed mb-2"
        dangerouslySetInnerHTML={{ __html: boldify(el.content) }} />
    );
  }
  if (el.type === "p") {
    return (
      <p className="text-slate-600 leading-relaxed mb-4"
        dangerouslySetInnerHTML={{ __html: boldify(el.content) }} />
    );
  }
  return null;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const elements = renderContent(post.content);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span>›</span>
        <span className="text-slate-600 truncate max-w-xs">{post.title}</span>
      </nav>

      {/* Post Header */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}>
            {post.category}
          </span>
          <span className="text-xs text-slate-400">{post.readTime}</span>
          <span className="text-xs text-slate-400">·</span>
          <span className="text-xs text-slate-400">{new Date(post.date).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</span>
        </div>
        <div className="flex items-start gap-4">
          <span className="text-6xl flex-shrink-0">{post.emoji}</span>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800 leading-tight mb-3">
              {post.title}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">{post.description}</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Article Content */}
      <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 mb-10">
        {elements.map((el, idx) => (
          <RenderElement key={idx} el={el} affiliateCourseType={post.affiliateCourseType} />
        ))}
      </article>

      {/* Bottom Affiliate Box */}
      <AffiliateBox courseType={post.affiliateCourseType} />

      {/* More Posts */}
      {otherPosts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-xl font-bold text-slate-800 mb-5">More Articles</h2>
          <div className="space-y-4">
            {otherPosts.map((p) => (
              <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-300 hover:shadow-sm transition-all">
                <span className="text-2xl flex-shrink-0">{p.emoji}</span>
                <div>
                  <p className="font-semibold text-slate-800 group-hover:text-blue-600 transition-colors text-sm leading-snug">{p.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{p.category} · {p.readTime}</p>
                </div>
                <span className="ml-auto text-slate-300 group-hover:text-blue-400 transition-colors flex-shrink-0">→</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Back to Blog */}
      <div className="mt-8 text-center">
        <Link href="/blog" className="text-blue-600 hover:underline text-sm font-medium">
          ← Back to all articles
        </Link>
      </div>
    </div>
  );
}
