import DisqusComments from "@/components/DisqusComments";

export const metadata = {
  title: "Community Q&A — ConversationalAI.Learn",
  description:
    "Ask questions, share insights, and get answers from the ConversationalAI.Learn community.",
};

const topics = [
  {
    emoji: "🤖",
    title: "Conversational AI",
    desc: "Questions about LLMs, chatbots, NLP, and the fundamentals covered in Course 1.",
    color: "border-blue-200 bg-blue-50",
    tag: "bg-blue-100 text-blue-700",
  },
  {
    emoji: "✍️",
    title: "Prompt Engineering",
    desc: "Tips, tricks, and clarifications from the Prompt Engineering Masterclass.",
    color: "border-purple-200 bg-purple-50",
    tag: "bg-purple-100 text-purple-700",
  },
  {
    emoji: "💼",
    title: "Career & Jobs",
    desc: "How to use AI skills for job hunting, freelancing, or consulting work.",
    color: "border-green-200 bg-green-50",
    tag: "bg-green-100 text-green-700",
  },
  {
    emoji: "🛠️",
    title: "Tools & Practice",
    desc: "ChatGPT, Claude, Gemini — which tool to use and how to practice daily.",
    color: "border-amber-200 bg-amber-50",
    tag: "bg-amber-100 text-amber-700",
  },
];

const faqs = [
  {
    q: "Do I need any coding knowledge to take these courses?",
    a: "No. Both courses are designed for non-technical professionals. You only need curiosity and a willingness to practice.",
  },
  {
    q: "How long does each chapter take?",
    a: "Each chapter is designed to be completed in under 15 minutes. The daily task takes another 5–10 minutes to practice.",
  },
  {
    q: "Which course should I start with?",
    a: "Start with Conversational AI (Course 1) to build your foundation. Then move to Prompt Engineering (Course 2) for advanced skills.",
  },
  {
    q: "Are the certificates free too?",
    a: "The learning is 100% free. For formal certificates, we recommend Coursera or Udemy once you're ready to invest.",
  },
];

export default function CommunityPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-blue-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-1 rounded-full mb-4">
            🌐 Open Community · No Sign-up for Viewing
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Ask. Learn. Share.
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Got a question about a chapter? Stuck on a daily task? Post it here.
            Saif and the community will answer.
          </p>
        </div>
      </section>

      {/* Topics */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Popular Topics</h2>
        <p className="text-slate-500 text-sm mb-6">
          Use these as tags when you post your question below.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {topics.map((t) => (
            <div
              key={t.title}
              className={`border rounded-xl p-4 ${t.color}`}
            >
              <div className="text-3xl mb-2">{t.emoji}</div>
              <h3 className="font-bold text-slate-800 mb-1">{t.title}</h3>
              <p className="text-xs text-slate-500">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 p-5"
              >
                <p className="font-semibold text-slate-800 mb-2">
                  <span className="text-blue-500 mr-2">Q.</span>
                  {faq.q}
                </p>
                <p className="text-slate-500 text-sm leading-relaxed">
                  <span className="text-green-600 font-bold mr-2">A.</span>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="max-w-3xl mx-auto px-4 py-10">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10">
          <h3 className="font-bold text-slate-800 mb-2">📌 Community Guidelines</h3>
          <ul className="text-sm text-slate-600 space-y-1 list-disc pl-4">
            <li>Be respectful and constructive — we are all learners here.</li>
            <li>Mention which chapter your question is about.</li>
            <li>Share what you already tried before asking.</li>
            <li>Upvote answers that helped you.</li>
          </ul>
        </div>

        {/* Disqus Q&A Thread */}
        <DisqusComments
          pageUrl="https://conversational-ai-learning.vercel.app/community"
          pageIdentifier="community-general"
          pageTitle="Community Q&A — ConversationalAI.Learn"
        />
      </section>
    </div>
  );
}
