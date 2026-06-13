"use client";

import { useState } from "react";

export default function AgentNetworksQuiz({ questions, chapterId, chapterTitle }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, i) => {
      if (answers[i] === q.answer) correct++;
    });
    setScore(correct);
    setSubmitted(true);

    // Save to localStorage
    try {
      const key = "networks_quiz_scores";
      const prev = JSON.parse(localStorage.getItem(key) || "{}");
      prev[`chapter_${chapterId}`] = { score: correct, total: questions.length, date: new Date().toISOString() };
      localStorage.setItem(key, JSON.stringify(prev));
    } catch (_) {}
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const allAnswered = Object.keys(answers).length === questions.length;

  return (
    <div className="bg-white rounded-2xl border border-teal-200 p-6 md:p-8 mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🧠</span>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Knowledge Check</h2>
          <p className="text-sm text-slate-500">{questions.length} questions · {chapterTitle}</p>
        </div>
      </div>

      {submitted && (
        <div className={`rounded-xl p-4 mb-6 text-center ${score === questions.length ? "bg-green-50 border border-green-200" : score >= questions.length / 2 ? "bg-teal-50 border border-teal-200" : "bg-red-50 border border-red-200"}`}>
          <p className="text-2xl font-bold text-slate-800">{score}/{questions.length}</p>
          <p className="text-slate-600 mt-1">
            {score === questions.length ? "Perfect! You've mastered agent networks! 🎉" : score >= questions.length / 2 ? "Good work! Review the explanations below." : "Keep studying — agent networks take practice!"}
          </p>
          <button onClick={handleRetry} className="mt-3 text-sm text-teal-600 underline hover:text-teal-800">
            Try again
          </button>
        </div>
      )}

      <div className="space-y-8">
        {questions.map((q, qIdx) => {
          const selected = answers[qIdx];
          const isCorrect = submitted && selected === q.answer;
          const isWrong = submitted && selected !== undefined && selected !== q.answer;

          return (
            <div key={qIdx}>
              <p className="font-semibold text-slate-800 mb-3">
                <span className="text-teal-500 mr-2">Q{qIdx + 1}.</span>
                {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, oIdx) => {
                  let cls = "w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ";
                  if (!submitted) {
                    cls += selected === oIdx
                      ? "border-teal-500 bg-teal-50 text-teal-800 font-medium"
                      : "border-slate-200 hover:border-teal-400 hover:bg-teal-50 text-slate-700 cursor-pointer";
                  } else if (oIdx === q.answer) {
                    cls += "border-green-500 bg-green-50 text-green-800 font-semibold";
                  } else if (oIdx === selected && isWrong) {
                    cls += "border-red-400 bg-red-50 text-red-700";
                  } else {
                    cls += "border-slate-100 text-slate-400";
                  }

                  return (
                    <button key={oIdx} className={cls} onClick={() => handleSelect(qIdx, oIdx)}>
                      <span className="mr-2 font-bold text-xs">{String.fromCharCode(65 + oIdx)}.</span>
                      {opt}
                    </button>
                  );
                })}
              </div>

              {submitted && (
                <div className="mt-3 bg-slate-50 rounded-lg px-4 py-3 text-sm text-slate-600 border-l-4 border-teal-400">
                  <span className="font-semibold text-slate-700">Explanation: </span>
                  {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {!submitted && (
        <button
          onClick={handleSubmit}
          disabled={!allAnswered}
          className={`mt-8 w-full py-3 rounded-xl font-bold text-white transition-colors ${allAnswered ? "bg-teal-500 hover:bg-teal-600 cursor-pointer" : "bg-slate-300 cursor-not-allowed"}`}
        >
          {allAnswered ? "Submit Answers" : `Answer all ${questions.length - Object.keys(answers).length} remaining questions`}
        </button>
      )}
    </div>
  );
}
