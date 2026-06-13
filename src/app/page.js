import Link from "next/link";
import { chapters } from "@/data/curriculum";
import { peChapters } from "@/data/promptEngineering";
import { agentsChapters } from "@/data/agentsCourse";
import { agentNetworksChapters } from "@/data/agentNetworksCourse";
import { getRecentPosts } from "@/data/blogPosts";

export default function HomePage() {
  const levelColors = {
    Beginner: "bg-green-100 text-green-700",
    Intermediate: "bg-yellow-100 text-yellow-700",
    Advanced: "bg-red-100 text-red-700",
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            🆓 100% Free · No Sign-up Required
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Learn to Talk to AI —<br />
            <span className="text-blue-200">and Make It Work for You</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            10 practical chapters designed for working professionals. No coding needed.
            Each chapter takes under 15 minutes — with quizzes and daily tasks to make it stick.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/course/what-is-conversational-ai"
              className="bg-white text-blue-700 font-bold px-8 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors shadow-lg"
            >
              Start Chapter 1 →
            </Link>
            <Link
              href="/course"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-xl text-lg hover:bg-white/10 transition-colors"
            >
              View All Chapters
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-slate-100 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: "10", label: "Chapters" },
            { value: "50+", label: "Quiz Questions" },
            { value: "10", label: "Daily Tasks" },
            { value: "15 min", label: "Per Chapter" },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-blue-600">{s.value}</div>
              <div className="text-sm text-slate-500 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Courses Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
          Choose Your Course
        </h2>
        <p className="text-slate-500 text-center mb-10">
          Two free courses — start with Conversational AI, then master Prompt Engineering
        </p>

        {/* Course 1 */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">COURSE 1</span>
            <h3 className="text-xl font-bold text-slate-800">Conversational AI — Beginner to Expert</h3>
            <span className="text-sm text-slate-400">10 chapters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapters.slice(0, 4).map((ch) => (
              <Link
                key={ch.id}
                href={`/course/${ch.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-blue-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{ch.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-400">CH {String(ch.id).padStart(2, "0")}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[ch.level]}`}>{ch.level}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors text-sm">{ch.title}</h4>
                  </div>
                  <span className="text-slate-300 group-hover:text-blue-400 text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Link href="/course" className="text-blue-600 text-sm font-semibold hover:underline">
              View all 10 chapters →
            </Link>
          </div>
        </div>

        {/* Course 2 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">COURSE 2</span>
            <h3 className="text-xl font-bold text-slate-800">Prompt Engineering Masterclass</h3>
            <span className="text-sm text-slate-400">10 chapters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {peChapters.slice(0, 4).map((ch) => (
              <Link
                key={ch.id}
                href={`/prompt-engineering/${ch.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-purple-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{ch.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-400">CH {String(ch.id).padStart(2, "0")}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[ch.level]}`}>{ch.level}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 group-hover:text-purple-600 transition-colors text-sm">{ch.title}</h4>
                  </div>
                  <span className="text-slate-300 group-hover:text-purple-400 text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Link href="/prompt-engineering" className="text-purple-600 text-sm font-semibold hover:underline">
              View all 10 chapters →
            </Link>
          </div>
        </div>

        {/* Course 3 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">COURSE 3</span>
            <h3 className="text-xl font-bold text-slate-800">Create AI Agents — Claude, Copilot & ChatGPT</h3>
            <span className="text-sm text-slate-400">3 chapters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {agentsChapters.map((ch) => (
              <Link
                key={ch.id}
                href={`/create-agents/${ch.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-orange-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3">
                  <div className="text-2xl">{ch.emoji}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-slate-400">CH {String(ch.id).padStart(2, "0")}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[ch.level]}`}>{ch.level}</span>
                    </div>
                    <h4 className="font-bold text-slate-800 group-hover:text-orange-500 transition-colors text-sm">{ch.title}</h4>
                  </div>
                  <span className="text-slate-300 group-hover:text-orange-400 text-lg">→</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Link href="/create-agents" className="text-orange-500 text-sm font-semibold hover:underline">
              View all 3 chapters →
            </Link>
          </div>
        </div>

        {/* Course 4 */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">COURSE 4</span>
            <h2 className="text-xl font-bold text-slate-800">🔗 Agent Networks</h2>
            <span className="text-sm text-slate-400">3 chapters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {agentNetworksChapters.map((ch) => (
              <Link
                key={ch.id}
                href={`/agent-networks/${ch.slug}`}
                className="bg-white border border-slate-200 rounded-xl p-4 hover:border-teal-400 hover:shadow-md transition-all group"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{ch.emoji}</span>
                  <div>
                    <p className="font-semibold text-slate-700 group-hover:text-teal-600 text-sm leading-tight">
                      {ch.title}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{ch.readTime}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-3 text-center">
            <Link href="/agent-networks" className="text-teal-500 text-sm font-semibold hover:underline">
              View all 3 chapters →
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="bg-white py-16 px-4 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">📝 From the Blog</div>
              <h2 className="text-3xl font-bold text-slate-800">Latest Guides & Resources</h2>
            </div>
            <Link href="/blog" className="text-blue-600 font-semibold text-sm hover:underline hidden sm:block">
              View all articles →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {getRecentPosts(3).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group bg-slate-50 border border-slate-200 rounded-2xl p-5 hover:border-blue-300 hover:shadow-sm transition-all flex flex-col">
                <span className="text-3xl mb-3">{post.emoji}</span>
                <span className="text-xs font-semibold text-blue-600 mb-1">{post.category}</span>
                <h3 className="font-bold text-slate-800 text-sm leading-snug group-hover:text-blue-600 transition-colors mb-2 flex-1">
                  {post.title}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <span className="text-xs text-slate-400">{post.readTime}</span>
                  <span className="text-blue-500 text-sm group-hover:underline font-medium">Read →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6 sm:hidden">
            <Link href="/blog" className="text-blue-600 font-semibold text-sm hover:underline">
              View all articles →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-10">
            Why Learn Conversational AI?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: "💰",
                title: "High-Paying Skills",
                desc: "Prompt engineers earn $150K–$300K/year. AI consultants charge ₹50K–5L per project.",
              },
              {
                icon: "🌍",
                title: "$49.9 Billion Market",
                desc: "The Conversational AI market grows at 22% per year. Early movers gain the most.",
              },
              {
                icon: "🎯",
                title: "Practical & Immediate",
                desc: "Apply what you learn the same day. No PhD needed. Build real products from Chapter 5.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Journey?</h2>
        <p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Join thousands of learners building expertise in the most in-demand technology of our time.
        </p>
        <Link
          href="/course/what-is-conversational-ai"
          className="bg-white text-blue-600 font-bold px-10 py-4 rounded-xl text-lg hover:bg-blue-50 transition-colors inline-block"
        >
          Begin Chapter 1 — Free →
        </Link>
      </section>
    </div>
  );
}
