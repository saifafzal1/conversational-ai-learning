import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learn to Talk to AI — and Make It Work for You | ConversationalAI.Learn",
  description:
    "Learn to talk to AI and make it work for you. Free 10-chapter course covering NLP, LLMs, prompt engineering, chatbot building and more. No coding needed. Designed for working professionals.",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MKTXL9D4X4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MKTXL9D4X4');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
