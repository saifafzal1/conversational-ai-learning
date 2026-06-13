"use client";
import { useState } from "react";

export default function PEQuiz({ questions, chapterId, chapterTitle }) {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const score = submitted
    ? questions.filter((q, i) => answers[i] === q.answer).length
    : 0;

  const handleSelect = (qIdx, optIdx) => {
    if (submitted) return;
    setAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    if (Object.keys(answers).length < questions.length) {
      alert("Please answer all questions before submitting.");
      return;
    }
    setSubmitted(true);
    const saved = JSON.parse(localStorage.getItem("pe_quiz_scores") || "{}");
    saved[`chapter_${chapterId}`] = score;
    localStorage.setItem("pe_quiz_scores", JSON.stringify(saved));
  };

  const handleRetry = () => {
    setAnswers({});
    setSubmitted(false);
  };

  return (
    <div className="bg-white border-2 border-purple-200 rounded-2xl p-6 md:p-8 mb-10">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">🧩</span>
        <div>
          <h2 className="text-xl font-bold text-slate-800">Chapter Quiz</h2>
          <p className="text-sm text-slate-500">
            {questions.length} questions · Test your understanding of {chapterTitle}
          </p>
        </div>
      </div>

      {submitted && (
        <div className={`rounded-xl p-4 mb-6 text-center ${
          score === questions.length ? "bg-green-50 border border-green-200"
            : score >= Math.ceil(questions.length / 2) ? "bg-yellow-50 border border-yellow-200"
            : "bg-red-50 border border-red-200"
        }`}>
          <p className="text-3xl font-extrabold text-slate-800 mb-1">{score} / {questions.length}</p>
          <p className="text-sm text-slate-600">
            {score === questions.length ? "🎉 Perfect! You've mastered this chapter."
              : score >= Math.ceil(questions.length / 2) ? "👍 Good effort! Review the incorrect answers."
              : "📚 Re-read the chapter and try again!"}
          </p>
        </div>
      )}

      <div className="space-y-6">
        {questions.map((q, qIdx) => {
          const userAnswer = answers[qIdx];
          const isCorrect = submitted && userAnswer === q.answer;
          const isWrong = submitted && userAnswer !== undefined && userAnswer !== q.answer;

          return (
            <div key={qIdx} className={`rounded-xl p-4 border ${
              submitted ? isCorrect ? "border-green-300 bg-green-50"
                : isWrong ? "border-red-300 bg-red-50"
                : "border-slate-200"
              : "border-slate-200"
            }`}>
              <p className="font-semibold text-slate-800 mb-3">
                <span className="text-purple-600 mr-2">{qIdx + 1}.</span>{q.q}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, optIdx) => {
                  const isSelected = userAnswer === optIdx;
                  const isAnswer = q.answer === optIdx;
                  let optClass = "flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ";
                  if (!submitted) {
                    optClass += isSelected ? "border-purple-500 bg-purple-50 text-purple-700" : "border-slate-200 hover:border-purple-300 hover:bg-slate-50";
                  } else {
                    if (isAnswer) optClass += "border-green-500 bg-green-100 text-green-800";
                    else if (isSelected && !isAnswer) optClass += "border-red-400 bg-red-100 text-red-700";
                    else optClass += "border-slate-200 text-slate-400";
                  }
                  return (
                    <div key={optIdx} className={optClass} onClick={() => handleSelect(qIdx, optIdx)}>
                      <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold flex-shrink-0 ${
                        !submitted ? isSelected ? "border-purple-500 bg-purple-500 text-white" : "border-slate-300"
                          : isAnswer ? "border-green-500 bg-green-500 text-white"
                          : isSelected ? "border-red-400 bg-red-400 text-white"
                          : "border-slate-300"
                      }`}>
                        {submitted ? isAnswer ? "✓" : isSelected ? "✗" : String.fromCharCode(65 + optIdx) : String.fromCharCode(65 + optIdx)}
                      </span>
                      <span className="text-sm">{opt}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6">
        {!submitted ? (
          <button onClick={handleSubmit} className="w-full bg-purple-600 text-white font-bold py-3 rounded-xl hover:bg-purple-700 transition-colors">
            Submit Answers
          </button>
        ) : (
          <button onClick={handleRetry} className="w-full bg-slate-100 text-slate-700 font-bold py-3 rounded-xl hover:bg-slate-200 transition-colors">
            Try Again
          </button>
        )}
      </div>
    </div>
  );
}
