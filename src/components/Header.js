"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🤖</span>
          <div>
            <div className="font-bold text-slate-800 leading-tight text-sm md:text-base">
              ConversationalAI.Learn
            </div>
            <div className="text-xs text-blue-600 hidden sm:block">
              Beginner to Expert · 10 Chapters
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-5 text-sm font-medium text-slate-600">
          <Link href="/course" className="hover:text-blue-600 transition-colors">
            Conversational AI
          </Link>
          <Link href="/prompt-engineering" className="hover:text-purple-600 transition-colors">
            Prompt Engineering
          </Link>
          <Link href="/create-agents" className="hover:text-orange-500 transition-colors font-semibold flex items-center gap-1">
            🤖 Create Agents
          </Link>
          <Link href="/agent-networks" className="hover:text-teal-500 transition-colors font-semibold flex items-center gap-1">
            🔗 Agent Networks
          </Link>
          <Link href="/community" className="hover:text-green-600 transition-colors flex items-center gap-1">
            💬 Community
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition-colors flex items-center gap-1">
            📝 Blog
          </Link>
          <Link
            href="/course"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Start Learning →
          </Link>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-slate-600 p-2"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-4 space-y-3 text-sm font-medium text-slate-600">
          <Link href="/course" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Conversational AI
          </Link>
          <Link href="/prompt-engineering" className="block hover:text-purple-600" onClick={() => setMenuOpen(false)}>
            Prompt Engineering
          </Link>
          <Link href="/create-agents" className="block hover:text-orange-500 font-semibold" onClick={() => setMenuOpen(false)}>
            🤖 Create Agents
          </Link>
          <Link href="/agent-networks" className="block hover:text-teal-500 font-semibold" onClick={() => setMenuOpen(false)}>
            🔗 Agent Networks
          </Link>
          <Link href="/community" className="block hover:text-green-600" onClick={() => setMenuOpen(false)}>
            💬 Community
          </Link>
          <Link href="/blog" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            📝 Blog
          </Link>
          <Link
            href="/course"
            className="block bg-blue-600 text-white px-4 py-2 rounded-lg text-center"
            onClick={() => setMenuOpen(false)}
          >
            Start Learning →
          </Link>
        </div>
      )}
    </header>
  );
}
