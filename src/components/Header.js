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

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
          <Link href="/course" className="hover:text-blue-600 transition-colors">
            Course
          </Link>
          <Link href="/daily-task" className="hover:text-blue-600 transition-colors">
            Daily Task
          </Link>
          <Link href="/about" className="hover:text-blue-600 transition-colors">
            About
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
            Course
          </Link>
          <Link href="/daily-task" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            Daily Task
          </Link>
          <Link href="/about" className="block hover:text-blue-600" onClick={() => setMenuOpen(false)}>
            About
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
