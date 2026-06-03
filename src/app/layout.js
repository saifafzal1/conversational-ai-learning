import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConversationalAI.Learn — From Beginner to Expert",
  description:
    "Master Conversational AI from scratch. 10 chapters covering NLP, LLMs, prompt engineering, chatbot building, ethics and more. Free, practical, and beginner-friendly.",
  keywords:
    "conversational AI, chatbot, LLM, prompt engineering, NLP, machine learning, AI course, learn AI",
  openGraph: {
    title: "ConversationalAI.Learn",
    description: "Master Conversational AI — free 10-chapter course from beginner to expert.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
