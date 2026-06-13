"use client";

// ─────────────────────────────────────────────────────────────
// UDEMY AFFILIATE SETUP (Impact.com)
// Your Impact publisher ID: 7397710
// Step: Log into app.impact.com → Brands → search "Udemy" → Apply
// Once Udemy approves you, set APPROVED to true below.
const IMPACT_PUBLISHER_ID = "7397710";
const UDEMY_APPROVED = false; // ← change to true after Udemy approves you
// ─────────────────────────────────────────────────────────────

function udemyLink(courseSlug) {
  const courseUrl = encodeURIComponent(
    `https://www.udemy.com/course/${courseSlug}/`
  );
  if (!UDEMY_APPROVED) {
    // Direct link until Udemy approves the affiliate application
    return `https://www.udemy.com/course/${courseSlug}/`;
  }
  // Impact.com deep link format for Udemy
  return `https://imp.i384100.net/c/${IMPACT_PUBLISHER_ID}/1493490/14774?u=${courseUrl}`;
}

// Courses mapped to each section of the site
const COURSE_RECOMMENDATIONS = {
  conversational: [
    {
      slug: "complete-ai-guide",
      emoji: "🤖",
      title: "Complete AI & ChatGPT Guide",
      desc: "Master ChatGPT, Midjourney & 20+ AI tools. 500,000+ students.",
      badge: "Bestseller",
    },
    {
      slug: "complete-machine-learning-and-data-science-zero-to-mastery",
      emoji: "📊",
      title: "Complete ML & Data Science Bootcamp",
      desc: "From zero to job-ready. Taught by industry practitioners.",
      badge: "Top Rated",
    },
    {
      slug: "artificial-intelligence-az",
      emoji: "🧠",
      title: "Artificial Intelligence A-Z",
      desc: "Build AI that learns to play games, make decisions, and predict outcomes.",
      badge: "Popular",
    },
  ],
  prompt: [
    {
      slug: "prompt-engineering-for-ai",
      emoji: "✍️",
      title: "Complete Prompt Engineering Bootcamp",
      desc: "Master ChatGPT, Claude & Gemini prompting with 50+ templates.",
      badge: "New",
    },
    {
      slug: "chatgpt-prompt-engineering",
      emoji: "💬",
      title: "ChatGPT Prompt Engineering",
      desc: "Write prompts that produce expert-level outputs, every time.",
      badge: "Bestseller",
    },
    {
      slug: "complete-ai-guide",
      emoji: "🚀",
      title: "Complete AI & ChatGPT Guide",
      desc: "500,000+ students. The #1 AI course on Udemy.",
      badge: "Top Rated",
    },
  ],
  agents: [
    {
      slug: "chatgpt-plugins-langchain-ai-agents-chatgpt",
      emoji: "⚙️",
      title: "Build AI Agents with LangChain & ChatGPT",
      desc: "Create autonomous agents that browse the web, write code, and take actions.",
      badge: "Hot",
    },
    {
      slug: "complete-ai-guide",
      emoji: "🤖",
      title: "Complete AI & ChatGPT Guide",
      desc: "Covers Custom GPTs, Copilot, and agent creation end-to-end.",
      badge: "Bestseller",
    },
    {
      slug: "langchain",
      emoji: "🔗",
      title: "LangChain — Build LLM-Powered Apps",
      desc: "The go-to framework for building production AI agents.",
      badge: "Top Rated",
    },
  ],
  networks: [
    {
      slug: "langchain",
      emoji: "🔗",
      title: "LangChain — Build LLM-Powered Apps",
      desc: "Chains, agents, memory — the foundation of multi-agent systems.",
      badge: "Top Rated",
    },
    {
      slug: "chatgpt-plugins-langchain-ai-agents-chatgpt",
      emoji: "🐝",
      title: "Build AI Agents with LangChain & ChatGPT",
      desc: "Build swarm-style agent systems that collaborate and hand off tasks.",
      badge: "Hot",
    },
    {
      slug: "complete-machine-learning-and-data-science-zero-to-mastery",
      emoji: "📈",
      title: "Complete ML & Data Science Bootcamp",
      desc: "The deep foundations that power every multi-agent framework.",
      badge: "Bestseller",
    },
  ],
};

const badgeColors = {
  Bestseller: "bg-amber-100 text-amber-700",
  "Top Rated": "bg-green-100 text-green-700",
  Hot: "bg-red-100 text-red-700",
  New: "bg-blue-100 text-blue-700",
  Popular: "bg-purple-100 text-purple-700",
};

// AdBannerTop — replace content with real AdSense code once approved
// Get AdSense: https://www.google.com/adsense/start/
export function AdBannerTop() {
  return null; // Hidden until AdSense is approved
}

export function AdBannerSide() {
  return null; // Hidden until AdSense is approved
}

// Pass courseType: "conversational" | "prompt" | "agents" | "networks"
export function AffiliateBox({ courseType = "conversational" }) {
  const courses = COURSE_RECOMMENDATIONS[courseType] || COURSE_RECOMMENDATIONS.conversational;

  return (
    <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-6 my-8">
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">🎓</span>
        <p className="text-xs font-bold text-orange-500 uppercase tracking-wider">
          Recommended on Udemy
        </p>
      </div>
      <h3 className="font-bold text-slate-800 text-base mb-4">
        Go Deeper — Paid Courses Worth Every Rupee
      </h3>

      <div className="space-y-3">
        {courses.map((course) => (
          <a
            key={course.slug}
            href={udemyLink(course.slug)}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="flex items-start gap-3 bg-white rounded-xl p-3 border border-orange-100 hover:border-orange-400 hover:shadow-sm transition-all group"
          >
            <span className="text-2xl mt-0.5 flex-shrink-0">{course.emoji}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap mb-0.5">
                <span className="font-semibold text-slate-800 text-sm group-hover:text-orange-600 transition-colors">
                  {course.title}
                </span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeColors[course.badge]}`}>
                  {course.badge}
                </span>
              </div>
              <p className="text-xs text-slate-500">{course.desc}</p>
            </div>
            <span className="text-slate-300 group-hover:text-orange-400 transition-colors text-lg flex-shrink-0 mt-1">→</span>
          </a>
        ))}
      </div>

      <p className="text-xs text-slate-400 mt-4">
        * Affiliate links — we earn a small commission at no extra cost to you. Prices on Udemy drop to ₹499–₹799 during sales (which is almost always).
      </p>
    </div>
  );
}
