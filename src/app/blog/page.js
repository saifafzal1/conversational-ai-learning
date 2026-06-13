import { blogPosts } from "@/data/blogPosts";
import Link from "next/link";

export const metadata = {
  title: "AI Learning Blog — Tips, Guides & Resources | ConversationalAI.Learn",
  description: "Practical guides on conversational AI, prompt engineering, AI agents, and the best resources to learn AI in 2025. Free, beginner-friendly.",
};

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

export default function BlogPage() {
  const sorted = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wider">
          📝 AI Learning Blog
        </div>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-3">
          Learn AI Faster With Better Resources
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          Practical guides, honest comparisons, and step-by-step tutorials — everything you need to go from AI curious to AI capable.
        </p>
      </div>

      {/* Featured Post */}
      <Link href={`/blog/${featured.slug}`} className="block mb-12 group">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-8 hover:border-blue-300 hover:shadow-md transition-all">
          <div className="flex items-center gap-2 mb-3">
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[featured.category] || "bg-slate-100 text-slate-600"}`}>
              {featured.category}
            </span>
            <span className="text-xs text-slate-400">Latest Post · {featured.readTime}</span>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-5xl">{featured.emoji}</span>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2">
                {featured.title}
              </h2>
              <p className="text-slate-500 leading-relaxed">{featured.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {featured.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-xs bg-white text-slate-500 border border-slate-200 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:underline">
            Read article →
          </div>
        </div>
      </Link>

      {/* Post Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 h-full hover:border-blue-300 hover:shadow-sm transition-all flex flex-col">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${categoryColors[post.category] || "bg-slate-100 text-slate-600"}`}>
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>
              <div className="flex items-start gap-3 flex-1">
                <span className="text-3xl flex-shrink-0">{post.emoji}</span>
                <div>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-2 leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{post.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="text-xs bg-slate-50 text-slate-500 border border-slate-100 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 text-blue-600 font-semibold text-sm group-hover:underline">
                Read article →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to go deeper?</h2>
        <p className="text-blue-100 mb-6">Take our free structured courses — from conversational AI basics to building multi-agent systems.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/course" className="bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors">
            Start Conversational AI →
          </Link>
          <Link href="/prompt-engineering" className="bg-blue-500 text-white font-bold px-6 py-3 rounded-xl hover:bg-blue-400 transition-colors">
            Prompt Engineering →
          </Link>
        </div>
      </div>
    </div>
  );
}
