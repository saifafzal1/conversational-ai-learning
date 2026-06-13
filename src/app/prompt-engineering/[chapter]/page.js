import { peChapters, getPEChapter } from "@/data/promptEngineering";
import Link from "next/link";
import { notFound } from "next/navigation";
import PEQuiz from "./PEQuiz";
import { AdBannerTop, AffiliateBox } from "@/components/AdBanner";
import DisqusComments from "@/components/DisqusComments";

export async function generateStaticParams() {
  return peChapters.map((ch) => ({ chapter: ch.slug }));
}

export async function generateMetadata({ params }) {
  const { chapter } = await params;
  const ch = getPEChapter(chapter);
  if (!ch) return {};
  return {
    title: `${ch.title} — Prompt Engineering Masterclass`,
    description: ch.tagline,
  };
}

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

export default async function PEChapterPage({ params }) {
  const { chapter } = await params;
  const ch = getPEChapter(chapter);
  if (!ch) notFound();

  const prevCh = peChapters.find((c) => c.id === ch.id - 1);
  const nextCh = peChapters.find((c) => c.id === ch.id + 1);

  const renderContent = (text) => {
    const lines = text.trim().split("\n");
    const elements = [];
    let i = 0;

    while (i < lines.length) {
      const line = lines[i].trim();

      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={i} className="text-2xl font-bold text-slate-800 mt-10 mb-3">
            {line.replace("## ", "")}
          </h2>
        );
      } else if (line.startsWith("### ")) {
        elements.push(
          <h3 key={i} className="text-xl font-semibold text-slate-700 mt-6 mb-2">
            {line.replace("### ", "")}
          </h3>
        );
      } else if (line.startsWith("> ")) {
        elements.push(
          <blockquote key={i} className="border-l-4 border-purple-400 pl-4 italic text-slate-500 my-4 bg-purple-50 py-2 rounded-r-lg">
            {line.replace("> ", "")}
          </blockquote>
        );
      } else if (line.startsWith("- ")) {
        const items = [];
        while (i < lines.length && lines[i].trim().startsWith("- ")) {
          items.push(lines[i].trim().replace("- ", ""));
          i++;
        }
        elements.push(
          <ul key={`ul-${i}`} className="list-disc pl-6 my-3 space-y-1 text-slate-600">
            {items.map((item, j) => (
              <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }} />
            ))}
          </ul>
        );
        continue;
      } else if (line.startsWith("| ")) {
        const rows = [];
        while (i < lines.length && lines[i].trim().startsWith("|")) {
          if (!lines[i].includes("---")) rows.push(lines[i]);
          i++;
        }
        const [header, ...bodyRows] = rows;
        const headerCells = header.split("|").filter(Boolean).map((c) => c.trim());
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-4">
            <table className="min-w-full border border-slate-200 rounded-lg text-sm">
              <thead className="bg-purple-50">
                <tr>
                  {headerCells.map((c, j) => (
                    <th key={j} className="px-4 py-2 text-left font-semibold text-slate-700 border-b border-slate-200">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => (
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
        continue;
      } else if (line.startsWith("```")) {
        const codeLines = [];
        i++;
        while (i < lines.length && !lines[i].startsWith("```")) {
          codeLines.push(lines[i]);
          i++;
        }
        elements.push(
          <pre key={`code-${i}`} className="bg-slate-900 text-purple-300 rounded-xl p-4 overflow-x-auto my-4 text-sm leading-relaxed">
            <code>{codeLines.join("\n")}</code>
          </pre>
        );
      } else if (line.length > 0 && line !== "---") {
        elements.push(
          <p key={i} className="text-slate-600 leading-relaxed mb-3"
            dangerouslySetInnerHTML={{
              __html: line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
        );
      }
      i++;
    }
    return elements;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm text-slate-400 mb-6 flex items-center gap-2 flex-wrap">
        <Link href="/" className="hover:text-purple-600">Home</Link>
        <span>›</span>
        <Link href="/prompt-engineering" className="hover:text-purple-600">Prompt Engineering</Link>
        <span>›</span>
        <span className="text-slate-600">{ch.title}</span>
      </nav>

      {/* Chapter Header */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 border border-purple-100 rounded-2xl p-6 mb-8">
        <div className="flex items-start gap-4">
          <span className="text-5xl">{ch.emoji}</span>
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-sm font-bold text-purple-400">Chapter {ch.id} of {peChapters.length}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${levelColors[ch.level]}`}>
                {ch.level}
              </span>
              <span className="text-xs text-slate-400">⏱ {ch.readTime}</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-slate-800 mb-1">{ch.title}</h1>
            <p className="text-slate-500">{ch.tagline}</p>
          </div>
        </div>
      </div>

      <AdBannerTop />

      {/* Key Terms */}
      <div className="flex flex-wrap gap-2 mb-8">
        {ch.keyTerms.map((term) => (
          <span key={term} className="bg-purple-50 text-purple-700 text-xs font-medium px-3 py-1 rounded-full border border-purple-100">
            {term}
          </span>
        ))}
      </div>

      {/* Content */}
      <article className="bg-white rounded-2xl border border-slate-200 p-6 md:p-10 mb-10">
        {renderContent(ch.content)}
      </article>

      <AffiliateBox />

      {/* Daily Task */}
      <div className="bg-amber-50 border-2 border-amber-200 rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📋</span>
          <div>
            <p className="text-xs font-bold text-amber-600 uppercase tracking-wider">Today&apos;s Task</p>
            <h3 className="font-bold text-slate-800 text-lg">{ch.dailyTask.title}</h3>
          </div>
        </div>
        <p className="text-slate-600 leading-relaxed">{ch.dailyTask.description}</p>
      </div>

      {/* Quiz */}
      <PEQuiz questions={ch.quiz} chapterId={ch.id} chapterTitle={ch.title} />

      {/* Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10 pt-8 border-t border-slate-200">
        {prevCh ? (
          <Link
            href={`/prompt-engineering/${prevCh.slug}`}
            className="flex-1 bg-white border border-slate-200 rounded-xl p-4 hover:border-purple-400 transition-colors group"
          >
            <p className="text-xs text-slate-400 mb-1">← Previous</p>
            <p className="font-semibold text-slate-700 group-hover:text-purple-600">
              {prevCh.emoji} {prevCh.title}
            </p>
          </Link>
        ) : (
          <Link href="/prompt-engineering" className="flex-1 bg-white border border-slate-200 rounded-xl p-4 hover:border-purple-400 transition-colors">
            <p className="text-xs text-slate-400 mb-1">← Back to</p>
            <p className="font-semibold text-slate-700">Course Overview</p>
          </Link>
        )}

        {nextCh ? (
          <Link
            href={`/prompt-engineering/${nextCh.slug}`}
            className="flex-1 bg-purple-600 text-white rounded-xl p-4 hover:bg-purple-700 transition-colors text-right"
          >
            <p className="text-xs text-purple-200 mb-1">Next →</p>
            <p className="font-semibold">{nextCh.emoji} {nextCh.title}</p>
          </Link>
        ) : (
          <Link
            href="/prompt-engineering"
            className="flex-1 bg-green-600 text-white rounded-xl p-4 hover:bg-green-700 transition-colors text-center"
          >
            <p className="text-sm text-green-200 mb-1">🎉 Course Complete!</p>
            <p className="font-semibold">View Course Overview</p>
          </Link>
        )}
      </div>

      {/* Community Q&A */}
      <DisqusComments
        pageUrl={`https://conversational-ai-learning.vercel.app/prompt-engineering/${ch.slug}`}
        pageIdentifier={`pe-${ch.slug}`}
        pageTitle={`${ch.title} — Prompt Engineering Masterclass`}
      />
    </div>
  );
}
