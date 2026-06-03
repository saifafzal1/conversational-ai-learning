import Link from "next/link";
import { chapters } from "@/data/curriculum";

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
            Master Conversational AI<br />
            <span className="text-blue-200">From Beginner to Expert</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            10 practical chapters designed for working professionals. Each chapter takes under 15 minutes.
            Quizzes, daily recall tasks, and real-world examples throughout.
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

      {/* Course Grid */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-slate-800 text-center mb-2">
          Your Learning Path
        </h2>
        <p className="text-slate-500 text-center mb-10">
          Structured progression from absolute beginner to industry-ready expert
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {chapters.map((ch) => (
            <Link
              key={ch.id}
              href={`/course/${ch.slug}`}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">{ch.emoji}</div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-bold text-slate-400">
                      CH {String(ch.id).padStart(2, "0")}
                    </span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[ch.level]}`}>
                      {ch.level}
                    </span>
                    <span className="text-xs text-slate-400">{ch.readTime}</span>
                  </div>
                  <h3 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                    {ch.title}
                  </h3>
                  <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                    {ch.tagline}
                  </p>
                </div>
                <span className="text-slate-300 group-hover:text-blue-400 transition-colors text-xl">
                  →
                </span>
              </div>
            </Link>
          ))}
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
