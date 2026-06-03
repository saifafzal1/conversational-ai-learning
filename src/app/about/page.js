export const metadata = {
  title: "About — ConversationalAI.Learn",
  description: "About this Conversational AI learning platform.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-extrabold text-slate-800 mb-4">About This Course</h1>

      <div className="prose">
        <p>
          <strong>ConversationalAI.Learn</strong> was built for working professionals who want to master
          AI without going back to university. Every chapter is designed to fit in 15 minutes — enough
          to absorb one solid concept before your next meeting.
        </p>

        <h2>Who Is This For?</h2>
        <p>
          This course is designed for beginners who have no prior AI or coding experience but want
          to understand, use, and eventually build Conversational AI systems. If you can use a
          smartphone and browse the internet, you can complete this course.
        </p>

        <h2>What Makes This Different?</h2>
        <p>
          Most AI courses either go too deep (PhD-level maths) or too shallow (vague buzzwords).
          This course hits the practical middle ground: enough theory to understand what&apos;s happening,
          enough practice to build real things.
        </p>
        <p>
          Every chapter includes:
        </p>
        <ul>
          <li>Clear explanations with real-world examples</li>
          <li>A 5-question quiz to test understanding</li>
          <li>A daily task designed for active recall</li>
          <li>Links to further resources if you want to go deeper</li>
        </ul>

        <h2>The Science Behind the Structure</h2>
        <p>
          The 15-minute chapter length and daily task rhythm are based on research in spaced repetition
          and active recall — the most effective methods for adult learning. Reading a chapter and then
          doing a practical task the next day has been shown to improve retention by 50–80% compared
          to passive re-reading.
        </p>

        <h2>What You Can Do After This Course</h2>
        <p>
          After completing all 10 chapters, you will be able to:
        </p>
        <ul>
          <li>Explain how LLMs, chatbots, and NLP work to anyone</li>
          <li>Write effective prompts that get great results from any AI</li>
          <li>Build and deploy a working chatbot using no-code tools or APIs</li>
          <li>Evaluate AI systems and identify improvements</li>
          <li>Apply AI to real problems in your industry</li>
          <li>Discuss AI ethics, safety, and responsible deployment</li>
        </ul>

        <h2>Free Forever</h2>
        <p>
          This course is and will always be free. We are supported by advertising and affiliate
          partnerships with tools and platforms we genuinely recommend. Every affiliate link
          is clearly marked.
        </p>
      </div>
    </div>
  );
}
