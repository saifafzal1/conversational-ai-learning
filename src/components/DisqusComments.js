"use client";
import { useEffect, useRef } from "react";

// ─────────────────────────────────────────────
// IMPORTANT: Replace this with your Disqus shortname
// Get it from: https://disqus.com → Admin → Your Site → Settings
// Example: if your Disqus URL is "my-site.disqus.com", shortname = "my-site"
const DISQUS_SHORTNAME = "conversationalai-learn";
// ─────────────────────────────────────────────

export default function DisqusComments({ pageUrl, pageIdentifier, pageTitle }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!DISQUS_SHORTNAME || DISQUS_SHORTNAME === "conversationalai-learn") {
      // Still render — once shortname is live it will work automatically
    }

    // Reset Disqus thread when navigating between chapters
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.url = pageUrl || window.location.href;
          this.page.identifier = pageIdentifier;
          this.page.title = pageTitle;
        },
      });
      return;
    }

    window.disqus_config = function () {
      this.page.url = pageUrl || window.location.href;
      this.page.identifier = pageIdentifier;
      this.page.title = pageTitle;
    };

    const script = document.createElement("script");
    script.src = `https://${DISQUS_SHORTNAME}.disqus.com/embed.js`;
    script.setAttribute("data-timestamp", +new Date());
    script.async = true;
    (document.head || document.body).appendChild(script);
  }, [pageUrl, pageIdentifier, pageTitle]);

  return (
    <div className="mt-12 pt-8 border-t border-slate-200">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-2xl">💬</span>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Ask a Question</h2>
          <p className="text-sm text-slate-500">
            Have a doubt or want to share your insight? Leave a comment below.
          </p>
        </div>
      </div>
      <div ref={containerRef} id="disqus_thread" className="min-h-[200px]" />
      <noscript>
        Please enable JavaScript to view the{" "}
        <a href="https://disqus.com/?ref_noscript" className="text-blue-600 underline">
          comments powered by Disqus.
        </a>
      </noscript>
    </div>
  );
}
