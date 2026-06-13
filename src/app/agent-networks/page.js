import Link from "next/link";
import { agentNetworksChapters } from "@/data/agentNetworksCourse";

export const metadata = {
  title: "Agent Networks — Build AI Systems That Talk to Each Other",
  description: "Learn to build multi-agent AI systems using Claude, OpenAI, and AutoGen. Orchestrators, swarms, group chats, and more.",
};

const frameworkColors = {
  "🎼": { bg: "from-teal-50 to-cyan-50", border: "border-teal-200", badge: "bg-teal-100 text-teal-700", btn: "bg-teal-500 hover:bg-teal-600", label: "Claude" },
  "🐝": { bg: "from-green-50 to-emerald-50", border: "border-green-200", badge: "bg-green-100 text-green-700", btn: "bg-green-600 hover:bg-green-700", label: "OpenAI" },
  "🗣️": { bg: "from-blue-50 to-indigo-50", border: "border-blue-200", badge: "bg-blue-100 text-blue-700", btn: "bg-blue-600 hover:bg-blue-700", label: "AutoGen" },
};

export default function AgentNetworksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
          🔗 Course 4
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 leading-tight">
          Agent Networks
        </h1>
        <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-6">
          Go beyond single agents. Build systems where multiple AI agents collaborate, delegate, debate, and solve problems together — using Claude, OpenAI, and AutoGen.
        </p>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
          <span>📚 3 Chapters</span>
          <span>🧠 15 Quiz Questions</span>
          <span>📋 3 Daily Tasks</span>
          <span>🤖 3 Frameworks</span>
        </div>
      </div>

      {/* What You Will Learn */}
      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-100 rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-4">What You Will Be Able to Do</h2>
        <div className="grid sm:grid-cols-2 gap-3 text-slate-700 text-sm">
          {[
            "Build sequential Claude agent pipelines (researcher → writer → editor)",
            "Run parallel agents simultaneously to cut processing time by 3x",
            "Create OpenAI triage + specialist swarms for customer routing",
            "Use asyncio.gather() to fan out agents and collect results",
            "Build AutoGen group chats with deliberating agent teams",
            "Have agents write and execute code as part of their workflow",
            "Mix Claude and GPT-4o in the same multi-agent conversation",
            "Add guardrail agents to review outputs before users see them",
            "Expose multi-agent pipelines as Next.js API routes",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="text-teal-500 mt-0.5 flex-shrink-0">✓</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Cards */}
      <div className="space-y-6 mb-16">
        <h2 className="text-2xl font-bold text-slate-800">The 3 Frameworks</h2>
        {agentNetworksChapters.map((ch) => {
          const colors = frameworkColors[ch.emoji] || frameworkColors["🎼"];
          return (
            <div
              key={ch.id}
              className={`bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-2xl p-6 flex flex-col sm:flex-row gap-5 items-start`}
            >
              <span className="text-5xl flex-shrink-0">{ch.emoji}</span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${colors.badge}`}>
                    {colors.label}
                  </span>
                  <span className="text-xs text-slate-400">Chapter {ch.id}</span>
                  <span className="text-xs text-slate-400">⏱ {ch.readTime}</span>
                  <span className="text-xs text-slate-400">• {ch.level}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-1">{ch.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{ch.tagline}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {ch.keyTerms.slice(0, 4).map((term) => (
                    <span key={term} className="bg-white/70 text-slate-600 text-xs px-2 py-0.5 rounded-full border border-slate-200">
                      {term}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/agent-networks/${ch.slug}`}
                  className={`inline-flex items-center gap-2 ${colors.btn} text-white text-sm font-semibold px-5 py-2 rounded-xl transition-colors`}
                >
                  Start Chapter {ch.id} →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pattern Comparison */}
      <div className="bg-white border border-slate-200 rounded-2xl p-8 mb-12">
        <h2 className="text-xl font-bold text-slate-800 mb-2">Which Pattern Should You Use?</h2>
        <p className="text-slate-500 text-sm mb-6">Each framework shines for a different use case.</p>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              icon: "🎼",
              name: "Claude Pipelines",
              best: "Content & data workflows",
              why: "Predictable, easy to debug. Best when steps are fixed and sequential.",
              color: "border-teal-200 bg-teal-50",
            },
            {
              icon: "🐝",
              name: "OpenAI Swarms",
              best: "Routing & customer service",
              why: "Dynamic handoffs. Best when you don't know which specialist handles a request upfront.",
              color: "border-green-200 bg-green-50",
            },
            {
              icon: "🗣️",
              name: "AutoGen GroupChat",
              best: "Deliberation & decisions",
              why: "Agents debate and critique each other. Best for complex decisions with no obvious right answer.",
              color: "border-blue-200 bg-blue-50",
            },
          ].map((p) => (
            <div key={p.name} className={`rounded-xl border p-4 ${p.color}`}>
              <div className="text-2xl mb-2">{p.icon}</div>
              <p className="font-bold text-slate-800 text-sm mb-1">{p.name}</p>
              <p className="text-xs font-semibold text-slate-500 mb-2">Best for: {p.best}</p>
              <p className="text-xs text-slate-600">{p.why}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          href={`/agent-networks/${agentNetworksChapters[0].slug}`}
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-600 text-white font-bold px-8 py-4 rounded-2xl text-lg transition-colors"
        >
          Start with Claude Orchestrators →
        </Link>
        <p className="text-slate-400 text-sm mt-3">Free · No signup · Start immediately</p>
      </div>
    </div>
  );
}
