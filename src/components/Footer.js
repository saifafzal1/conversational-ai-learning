import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 mt-20">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-white">ConversationalAI.Learn</span>
          </div>
          <p className="text-sm text-slate-400">
            The most practical Conversational AI course for beginners. Go from zero to building real AI products.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Course</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/course" className="hover:text-white transition-colors">All Chapters</Link></li>
            <li><Link href="/course/what-is-conversational-ai" className="hover:text-white transition-colors">Chapter 1: What is Conversational AI?</Link></li>
            <li><Link href="/course/prompt-engineering" className="hover:text-white transition-colors">Chapter 4: Prompt Engineering</Link></li>
            <li><Link href="/daily-task" className="hover:text-white transition-colors">Daily Tasks</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-3">Resources</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="https://www.coursera.org/search?query=conversational+ai" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Coursera AI Courses ↗
              </a>
            </li>
            <li>
              <a href="https://www.anthropic.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Anthropic (Claude) ↗
              </a>
            </li>
            <li>
              <a href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                OpenAI Platform ↗
              </a>
            </li>
            <li>
              <a href="https://huggingface.co" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Hugging Face ↗
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700 px-4 py-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-slate-500 gap-2">
        <span>© 2025 ConversationalAI.Learn · All rights reserved</span>
        <span>Built to help you master AI 🚀</span>
      </div>
    </footer>
  );
}
