import Link from "next/link";
import { peChapters } from "@/data/promptEngineering";

export const metadata = {
  title: "Prompt Engineering Masterclass — ConversationalAI.Learn",
  description: "Master Prompt Engineering from scratch. 10 chapters covering personas, chain-of-thought, few-shot prompting, prompt chaining and career monetisation.",
};

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

export default function PromptEngineeringPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white rounded-2xl p-8 mb-10 text-center">
        <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
          🆓 Free Course · No Sign-up Required
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Prompt Engineering Masterclass
        </h1>
        <p className="text-purple-100 text-lg mb-6 max-w-xl mx-auto">
          Learn the skill that makes AI work 10x better for you. 10 chapters, practical frameworks,
          and real-world templates — from beginner to monetisable expert.
        </p>
        <Link
          href="/prompt-engineering/ai-mindset"
          className="bg-white text-purple-700 font-bold px-8 py-3 rounded-xl hover:bg-purple-50 transition-colors inline-block"
        >
          Start Chapter 1 →
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-10 text-center">
        {[
          { value: "10", label: "Chapters" },
          { value: "50+", label: "Quiz Questions" },
          { value: "10", label: "Daily Tasks" },
          { value: "100+", label: "Prompt Templates" },
        ].map((s) => (
          <div key={s.label} className="bg-purple-50 border border-purple-100 rounded-xl p-3">
            <div className="text-2xl font-extrabold text-purple-600">{s.value}</div>
            <div className="text-xs text-slate-500 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Chapter List */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">All 10 Chapters</h2>
      <div className="space-y-3">
        {peChapters.map((ch) => (
          <Link
            key={ch.id}
            href={`/prompt-engineering/${ch.slug}`}
            className="flex items-center gap-5 bg-white border border-slate-200 rounded-xl p-5 hover:border-purple-400 hover:shadow-md transition-all group"
          >
            <div className="text-3xl w-10 text-center flex-shrink-0">{ch.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold text-slate-400">Chapter {ch.id}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[ch.level]}`}>
                  {ch.level}
                </span>
                <span className="text-xs text-slate-400">⏱ {ch.readTime}</span>
              </div>
              <h3 className="font-bold text-slate-800 group-hover:text-purple-600 transition-colors">
                {ch.title}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5 hidden sm:block">{ch.tagline}</p>
            </div>
            <span className="text-slate-300 group-hover:text-purple-400 transition-colors text-xl flex-shrink-0">→</span>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-purple-50 border border-purple-200 rounded-xl p-6 text-center">
        <h3 className="font-bold text-slate-800 mb-2">💡 What You Will Be Able to Do</h3>
        <p className="text-sm text-slate-600">
          After this course, you can write prompts that produce expert-level outputs, build a personal
          prompt library that saves 5-10 hours per week, and turn this skill into consulting income or a
          career. Start with Chapter 1 and do the daily task every morning.
        </p>
      </div>
    </div>
  );
}
