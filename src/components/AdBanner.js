"use client";

// Replace the placeholder divs below with real Google AdSense code once approved.
// To get AdSense: https://www.google.com/adsense/start/
// Paste your <ins class="adsbygoogle"> tag inside the slot divs.

export function AdBannerTop() {
  return (
    <div className="w-full my-4">
      {/* AdSense Leaderboard 728x90 — replace below with your AdSense code */}
      <div className="ad-slot" style={{ minHeight: "90px" }}>
        <span>Advertisement</span>
      </div>
    </div>
  );
}

export function AdBannerSide() {
  return (
    <div className="w-full my-6">
      {/* AdSense Rectangle 300x250 — replace below with your AdSense code */}
      <div className="ad-slot" style={{ minHeight: "250px" }}>
        <span>Advertisement</span>
      </div>
    </div>
  );
}

export function AffiliateBox() {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 my-6">
      <p className="text-xs font-semibold text-blue-500 uppercase tracking-wider mb-2">
        Recommended Resources
      </p>
      <h3 className="font-bold text-slate-800 mb-3">
        Take Your Learning Further
      </h3>
      <div className="space-y-3">
        <a
          href="https://www.coursera.org/search?query=conversational+ai&utm_source=conversationalai_learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200 hover:border-blue-400 transition-colors group"
        >
          <span className="text-2xl">📚</span>
          <div>
            <div className="font-semibold text-slate-800 text-sm group-hover:text-blue-600">
              Coursera AI Specializations
            </div>
            <div className="text-xs text-slate-500">
              Earn certified credentials from top universities
            </div>
          </div>
        </a>

        <a
          href="https://www.udemy.com/courses/search/?q=conversational+ai&utm_source=conversationalai_learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200 hover:border-blue-400 transition-colors group"
        >
          <span className="text-2xl">🎓</span>
          <div>
            <div className="font-semibold text-slate-800 text-sm group-hover:text-blue-600">
              Udemy AI Courses
            </div>
            <div className="text-xs text-slate-500">
              Practical project-based learning from ₹499
            </div>
          </div>
        </a>

        <a
          href="https://aws.amazon.com/free/?utm_source=conversationalai_learn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-white rounded-lg p-3 border border-slate-200 hover:border-blue-400 transition-colors group"
        >
          <span className="text-2xl">☁️</span>
          <div>
            <div className="font-semibold text-slate-800 text-sm group-hover:text-blue-600">
              AWS Free Tier
            </div>
            <div className="text-xs text-slate-500">
              Deploy your AI apps free for 12 months
            </div>
          </div>
        </a>
      </div>
      <p className="text-xs text-slate-400 mt-3">
        * Some links may be affiliate links. We only recommend tools we use ourselves.
      </p>
    </div>
  );
}
