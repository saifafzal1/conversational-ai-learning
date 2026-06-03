import Link from "next/link";
import { chapters } from "@/data/curriculum";

export const metadata = {
  title: "Daily Tasks — ConversationalAI.Learn",
  description: "A daily recall task for every chapter. Spend 10-15 minutes keeping your AI knowledge sharp.",
};

export default function DailyTaskPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-10">
        <span className="text-5xl block mb-3">📋</span>
        <h1 className="text-4xl font-extrabold text-slate-800 mb-3">Daily Recall Tasks</h1>
        <p className="text-slate-500 text-lg max-w-xl mx-auto">
          One practical task per chapter. Do each one the day after reading the chapter to lock the concepts in.
          Takes 10–20 minutes.
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-8 text-sm text-slate-600">
        <strong className="text-amber-700">💡 Why daily tasks?</strong> Research shows that
        active recall — doing something with what you learned — improves retention by 50–80% compared
        to just re-reading. At 45, consistent short practice beats long cramming sessions every time.
      </div>

      <div className="space-y-4">
        {chapters.map((ch) => (
          <div
            key={ch.id}
            className="bg-white border border-slate-200 rounded-xl p-5 hover:border-amber-300 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="text-3xl w-10 text-center flex-shrink-0">{ch.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-400">Chapter {ch.id}</span>
                  <span className="font-semibold text-slate-700">{ch.title}</span>
                </div>
                <h3 className="font-bold text-amber-700 mb-1">📌 {ch.dailyTask.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {ch.dailyTask.description}
                </p>
                <Link
                  href={`/course/${ch.slug}`}
                  className="text-xs text-blue-600 hover:underline mt-2 inline-block"
                >
                  Re-read Chapter {ch.id} →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6 text-center">
        <h3 className="font-bold text-slate-800 mb-2">🎯 Suggested Schedule</h3>
        <p className="text-sm text-slate-600">
          Read Chapter 1 today. Do Chapter 1&apos;s task tomorrow morning (before starting Chapter 2).
          This pattern of read → sleep → recall is scientifically proven to maximise retention.
          10 chapters = 10 days of reading + 10 days of tasks = you&apos;re an expert in 3 weeks.
        </p>
      </div>
    </div>
  );
}
