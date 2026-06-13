import Link from "next/link";
import { agentsChapters } from "@/data/agentsCourse";

export const metadata = {
  title: "Create AI Agents — ConversationalAI.Learn",
  description:
    "Learn to build no-code AI Agents using Claude, Microsoft Copilot, and ChatGPT. 3 practical chapters with real examples, quizzes, and daily tasks.",
};

const levelColors = {
  Beginner: "bg-green-100 text-green-700",
  Intermediate: "bg-yellow-100 text-yellow-700",
  Advanced: "bg-red-100 text-red-700",
};

const llmCards = [
  {
    emoji: "🤖",
    name: "Claude",
    by: "by Anthropic",
    color: "border-orange-200 bg-orange-50",
    tagColor: "bg-orange-100 text-orange-700",
    desc: "Best for: Research, writing, private document analysis. Use Claude Projects to build agents with uploaded knowledge — no code, free tier available.",
    href: "/create-agents/build-agent-with-claude",
    tag: "Most Thoughtful",
  },
  {
    emoji: "🪟",
    name: "Copilot",
    by: "by Microsoft",
    color: "border-blue-200 bg-blue-50",
    tagColor: "bg-blue-100 text-blue-700",
    desc: "Best for: Enterprise & Microsoft 365 users. Copilot Studio connects your agent to SharePoint, Teams, and Outlook — with real actions like sending emails.",
    href: "/create-agents/build-agent-with-copilot",
    tag: "Best for Enterprise",
  },
  {
    emoji: "💬",
    name: "ChatGPT",
    by: "by OpenAI",
    color: "border-emerald-200 bg-emerald-50",
    tagColor: "bg-emerald-100 text-emerald-700",
    desc: "Best for: Public sharing and reach. Custom GPTs can be listed in the GPT Store, used by anyone with ChatGPT, and even earn you revenue.",
    href: "/create-agents/build-agent-with-chatgpt",
    tag: "Largest Audience",
  },
];

export default function CreateAgentsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-2xl p-8 mb-10 text-center">
        <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
          🆓 Free Course · No Sign-up Required
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold mb-3">
          Create AI Agents
        </h1>
        <p className="text-orange-100 text-lg mb-6 max-w-xl mx-auto">
          Build powerful no-code AI agents using Claude, Microsoft Copilot, and ChatGPT.
          3 practical chapters — each with a real step-by-step example you can follow today.
        </p>
        <Link
          href="/create-agents/build-agent-with-claude"
          className="bg-white text-orange-600 font-bold px-8 py-3 rounded-xl hover:bg-orange-50 transition-colors inline-block"
        >
          Start with Claude →
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-10 text-center">
        {[
          { value: "3", label: "Chapters" },
          { value: "15", label: "Quiz Questions" },
          { value: "3", label: "Daily Tasks" },
          { value: "3", label: "LLM Platforms" },
        ].map((s) => (
          <div key={s.label} className="bg-orange-50 border border-orange-100 rounded-xl p-3">
            <div className="text-2xl font-extrabold text-orange-500">{s.value}</div>
            <div className="text-xs text-slate-500 font-medium">{s.label}</div>
          </div>
        ))}
      </div>

      {/* LLM Platform Cards */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">Choose Your Platform</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {llmCards.map((card) => (
          <Link
            key={card.name}
            href={card.href}
            className={`border rounded-2xl p-5 hover:shadow-md transition-all group ${card.color}`}
          >
            <div className="text-4xl mb-3">{card.emoji}</div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-extrabold text-slate-800 text-lg">{card.name}</h3>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${card.tagColor}`}>
                {card.tag}
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-2">{card.by}</p>
            <p className="text-sm text-slate-600 leading-relaxed">{card.desc}</p>
            <p className="text-orange-500 font-semibold text-sm mt-3 group-hover:underline">
              Start chapter →
            </p>
          </Link>
        ))}
      </div>

      {/* Chapter List */}
      <h2 className="text-2xl font-bold text-slate-800 mb-4">All 3 Chapters</h2>
      <div className="space-y-3 mb-10">
        {agentsChapters.map((ch) => (
          <Link
            key={ch.id}
            href={`/create-agents/${ch.slug}`}
            className="flex items-center gap-5 bg-white border border-slate-200 rounded-xl p-5 hover:border-orange-400 hover:shadow-md transition-all group"
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
              <h3 className="font-bold text-slate-800 group-hover:text-orange-500 transition-colors">
                {ch.title}
              </h3>
              <p className="text-sm text-slate-500 mt-0.5 hidden sm:block">{ch.tagline}</p>
            </div>
            <span className="text-slate-300 group-hover:text-orange-400 transition-colors text-xl flex-shrink-0">→</span>
          </Link>
        ))}
      </div>

      {/* What You'll Be Able to Do */}
      <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
        <h3 className="font-bold text-slate-800 mb-3">🚀 What You Will Be Able to Do After This Course</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
          <div className="flex items-start gap-2">
            <span className="text-green-500 font-bold mt-0.5">✓</span>
            <span>Build a private Research Assistant that reads your documents and answers questions</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 font-bold mt-0.5">✓</span>
            <span>Deploy a team agent in Microsoft Teams that automates emails and meeting prep</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-green-500 font-bold mt-0.5">✓</span>
            <span>Publish a Custom GPT to the GPT Store and potentially earn from it</span>
          </div>
        </div>
      </div>
    </div>
  );
}
