import Link from "next/link";
import { chapters } from "@/data/curriculum";

export const metadata = {
  title: "All Chapters — ConversationalAI.Learn",
  description: "Browse all 10 chapters of our Conversational AI course. From NLP basics to AI agents.",
};

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

export default function CoursePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-3">
          All 10 Chapters
        </h1>
        <p className="text-slate-500 text-lg">
          Start from Chapter 1 or jump to any topic. Each chapter is self-contained.
        </p>
      </div>

      <div className="space-y-3">
        {chapters.map((ch, idx) => (
          <Link
            key={ch.id}
            href={`/course/${ch.slug}`}
            className="flex items-center gap-5 bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-400 hover:shadow-md transition-all group"
          >
            <div className="text-3xl w-10 text-center">{ch.emoji}</div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span className="text-xs font-bold text-slate-400">
                  Chapter {ch.id}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[ch.level]}`}>
                  {ch.level}
                </span>
                <span className="text-xs text-slate-400">⏱ {ch.readTime}</span>
              </div>
              <h2 className="font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                {ch.title}
              </h2>
              <p className="text-sm text-slate-500 hidden sm:block mt-0.5">
                {ch.tagline}
              </p>
            </div>
            <span className="text-slate-300 group-hover:text-blue-400 transition-colors text-xl flex-shrink-0">
              →
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <h3 className="font-bold text-slate-800 mb-2">💡 Pro Tip for Best Results</h3>
        <p className="text-sm text-slate-600">
          Read one chapter per day, do the quiz at the end, and complete the daily task before moving on.
          At this pace, you&apos;ll finish the course in 10 days and have real skills to show for it.
        </p>
      </div>
    </div>
  );
}
