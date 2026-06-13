export const agentsChapters = [
  {
    id: 1,
    slug: "build-agent-with-claude",
    emoji: "🤖",
    title: "Build & Integrate a Claude Agent",
    tagline: "Create a Claude-powered AI Tutor agent and embed it live into your website — no prior coding experience needed.",
    level: "Beginner",
    readTime: "20 min",
    keyTerms: ["AI Agent", "System Prompt", "Anthropic API", "Claude Projects", "API Key", "Next.js Route Handler", "Chat UI"],
    content: `## What Is an AI Agent (Really)?

A chatbot answers one question and forgets. An **AI Agent** is different — it has:
- A **role** (who it is: "You are a course tutor...")
- **Memory** (it remembers the conversation)
- **Knowledge** (documents or facts you give it)
- **Goals** (what it is trying to achieve)

Think of the difference this way:

| Chatbot | AI Agent |
| --- | --- |
| Stranger on the street | Trained employee |
| No memory | Remembers context |
| Generic answers | Answers based on your data |
| One-off interaction | Ongoing relationship |

By the end of this chapter, you will have a working Claude agent embedded inside a real webpage.

---

## Part 1 — Build Without Code (Claude Projects)

This is where everyone should start. No API, no code, no cost.

### Step 1 — Create Your Project

- Go to **claude.ai** and sign in (free account works)
- In the left sidebar, click **"Projects"**
- Click **"+ New Project"**
- Name it: **AI Course Tutor**

### Step 2 — Write the System Prompt

The system prompt is the agent's brain. It defines everything about how it behaves. Click **"Project Instructions"** and paste this:

\`\`\`
You are an AI Course Tutor for a website that teaches Conversational AI and Prompt Engineering to non-technical professionals.

YOUR ROLE:
- Answer questions about AI concepts in simple, jargon-free language
- Help learners understand chapters they found confusing
- Give practical examples from everyday work life (not tech examples)
- Encourage learners — this is new for them

YOUR RULES:
- Never say "I cannot help with that" — always try to redirect to something useful
- If a question is outside AI learning, say: "That's outside my focus, but here is what I can help you with..."
- Keep answers under 150 words unless the user asks for detail
- Use bullet points for lists of 3 or more items
- End every answer with one follow-up question to keep the learner engaged

YOUR KNOWLEDGE:
- Conversational AI: chatbots, LLMs, NLP, prompt engineering
- Tools: Claude, ChatGPT, Copilot, Gemini
- Use cases: business automation, writing, research, customer service

TONE: Friendly, patient, encouraging — like a great teacher who never makes you feel stupid.
\`\`\`

### Step 3 — Upload a Knowledge File

Create a plain text file on your computer called **course-summary.txt** and paste in the key points from your course chapters. Then upload it under **"Add Content"**.

Now the agent will answer questions *from your actual course material*.

### Step 4 — Test It

Ask these questions in the chat window and evaluate the quality:
- "What is the difference between a chatbot and an AI agent?"
- "I did not understand Chapter 3, can you explain LLMs simply?"
- "How can I use AI in my daily work as a manager?"

Refine your system prompt based on the answers. This iteration is the real skill.

### Step 5 — Share It

Click the **Share** button on your Project. Copy the link. This is your live agent — shareable with anyone, no account needed for them to use it.

---

## Part 2 — Integrate Claude API Into Your Website

Now we go further: embed Claude directly into your Next.js website so users never leave your site.

### What You Need

- An Anthropic API key (free credits on signup): **console.anthropic.com**
- Your existing Next.js website

### Step 1 — Get Your API Key

- Go to **console.anthropic.com**
- Sign up or log in
- Click **"API Keys"** → **"Create Key"**
- Copy it — you will only see it once

### Step 2 — Add the Key to Your Project

In your project folder, create a file called **.env.local** (if it does not exist):

\`\`\`
ANTHROPIC_API_KEY=sk-ant-your-key-here
\`\`\`

This keeps your key secret. Never commit this file to GitHub.

### Step 3 — Create the API Route

Create this file: **src/app/api/chat/route.js**

\`\`\`
export async function POST(request) {
  const { messages, systemPrompt } = await request.json();

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": process.env.ANTHROPIC_API_KEY,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      model: "claude-opus-4-6",
      max_tokens: 1024,
      system: systemPrompt || "You are a helpful AI tutor for a Conversational AI learning website.",
      messages: messages,
    }),
  });

  const data = await response.json();
  return Response.json({ reply: data.content[0].text });
}
\`\`\`

### Step 4 — Build the Chat Widget Component

Create this file: **src/components/AiTutor.js**

\`\`\`
"use client";
import { useState } from "react";

export default function AiTutor({ chapterTitle }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: updated,
        systemPrompt: "You are an AI Tutor helping a student understand: " + chapterTitle + ". Be concise and friendly.",
      }),
    });

    const data = await res.json();
    setMessages([...updated, { role: "assistant", content: data.reply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="bg-white border border-slate-200 rounded-2xl shadow-2xl w-80 flex flex-col" style={{ height: "420px" }}>
          <div className="bg-blue-600 text-white px-4 py-3 rounded-t-2xl flex justify-between items-center">
            <span className="font-bold text-sm">AI Tutor — Ask Anything</span>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>
          <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
            {messages.length === 0 && (
              <p className="text-slate-400 text-center mt-8">
                Ask me anything about this chapter!
              </p>
            )}
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "text-right" : "text-left"}>
                <span className={m.role === "user"
                  ? "bg-blue-100 text-blue-800 px-3 py-1.5 rounded-xl inline-block max-w-xs"
                  : "bg-slate-100 text-slate-800 px-3 py-1.5 rounded-xl inline-block max-w-xs text-left"}>
                  {m.content}
                </span>
              </div>
            ))}
            {loading && <div className="text-slate-400 text-xs">Thinking...</div>}
          </div>
          <div className="p-3 border-t flex gap-2">
            <input
              className="flex-1 border rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:border-blue-400"
              placeholder="Ask a question..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-blue-600 text-white px-3 py-1.5 rounded-lg text-sm font-bold hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white rounded-full w-14 h-14 text-2xl shadow-lg hover:bg-blue-700 transition-colors"
        >
          🤖
        </button>
      )}
    </div>
  );
}
\`\`\`

### Step 5 — Add the Widget to Your Chapter Pages

In **src/app/course/[chapter]/page.js**, add at the top:

\`\`\`
import AiTutor from "@/components/AiTutor";
\`\`\`

And inside the return, just before the closing div:

\`\`\`
<AiTutor chapterTitle={ch.title} />
\`\`\`

That is it. Every chapter page now has a live Claude AI Tutor button in the bottom-right corner.

---

## How the Integration Works (Plain English)

\`\`\`
User types a question
       ↓
AiTutor.js (browser) sends it to /api/chat
       ↓
route.js (your server) calls Anthropic API with your key
       ↓
Claude processes the question with your system prompt
       ↓
Answer comes back through your server to the user
       ↓
User sees the reply — all on your website
\`\`\`

Your API key is **never exposed** to the browser. It lives only on your server.

---

## Cost Reality Check

Anthropic gives you **$5 free credits** on signup. A typical chat message uses 0.001 dollars. So your first 5,000 messages are free. After that, costs are minimal for an educational site.`,
    quiz: [
      {
        q: "What is the key difference between a system prompt and a regular chat message?",
        options: [
          "System prompts are longer than regular messages",
          "System prompts define the agent's role and rules — they run invisibly before every conversation",
          "System prompts are only available on paid Claude plans",
          "System prompts replace the need for a knowledge base",
        ],
        answer: 1,
      },
      {
        q: "In the website integration, why does the API call go through your server (route.js) instead of directly from the browser?",
        options: [
          "Because browsers cannot make fetch requests",
          "To keep your API key secret — never expose it in the browser",
          "Because the Anthropic API only works on servers",
          "To make the response faster",
        ],
        answer: 1,
      },
      {
        q: "You want the AI Tutor to answer questions about Chapter 5 specifically. What should you change?",
        options: [
          "Upload Chapter 5 content to your .env.local file",
          "Pass the chapter title and key content into the systemPrompt in route.js",
          "Create a separate API route for every chapter",
          "Change the Claude model to a chapter-specific one",
        ],
        answer: 1,
      },
      {
        q: "A user asks your AI Tutor: 'What is the weather today?' Your system prompt says to stay focused on AI learning. What should a well-configured agent do?",
        options: [
          "Answer the weather question because the user asked",
          "Crash with an error",
          "Politely redirect: 'That is outside my focus — here is what I can help with...'",
          "Refuse to respond at all",
        ],
        answer: 2,
      },
      {
        q: "You have $5 in free Anthropic credits. Each message costs $0.001. Roughly how many messages can your users send before you incur charges?",
        options: [
          "500 messages",
          "5,000 messages",
          "50,000 messages",
          "500,000 messages",
        ],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "Build and Test Your AI Tutor Agent",
      description:
        "Do Part 1 today: Go to claude.ai → Create a Project → Paste the system prompt from this chapter → Upload a text summary of one of your course chapters → Test it with 5 questions. Rate each answer out of 10 and rewrite the system prompt until you get 8/10 or higher consistently. This system prompt refinement is the most valuable AI skill you will learn.",
    },
  },
  {
    id: 2,
    slug: "build-agent-with-copilot",
    emoji: "🪟",
    title: "Build & Integrate a Microsoft Copilot Agent",
    tagline: "Build a no-code business agent in Copilot Studio and embed it as a live chat widget on any webpage.",
    level: "Beginner",
    readTime: "20 min",
    keyTerms: ["Copilot Studio", "Topics", "Triggers", "Entities", "Power Automate", "Direct Line API", "Web Chat Widget", "SharePoint"],
    content: `## Why Microsoft Copilot for Business?

If your organisation runs on Microsoft 365 — Word, Excel, Teams, Outlook, SharePoint — then Copilot Studio is your most powerful option. Here is why:

- Your agent can **read SharePoint documents** automatically
- It can **send emails via Outlook** on behalf of users
- It deploys directly into **Microsoft Teams** — where your team already works
- It connects to **Power Automate** for 500+ automated actions
- It meets enterprise **security and compliance** standards

No other platform gives you this level of business integration without writing code.

---

## Understanding the Copilot Studio Architecture

Before you build, understand the key concepts:

**Topics** — These are conversation scripts. Each topic handles one specific type of request. Example: "Book a meeting room" is one topic, "Find an HR policy" is another.

**Triggers** — The words or phrases that activate a topic. If someone types "book room" or "reserve meeting space", it triggers the booking topic.

**Entities** — Data the agent collects during conversation. For a room booking: the date, time, duration, and room name are all entities.

**Actions** — What the agent does with the data. It might create a calendar event, send an email, or update a spreadsheet.

**Channels** — Where the agent lives. It can be on your website, in Teams, in SharePoint, or as a standalone app.

---

## Part 1 — Build the Agent in Copilot Studio

### Step 1 — Access Copilot Studio

- Go to **copilotstudio.microsoft.com**
- Sign in with your Microsoft work or school account
- Click **"Create"** in the left menu
- Click **"New agent"**

> Free trial is available. You get 25,000 messages per month. For a small team, this is enough to run a real production agent.

### Step 2 — Use the Conversational Builder

Copilot Studio's AI will build the initial structure from your description. In the chat box, type:

\`\`\`
I want to build an AI assistant for my team called "HR Helper".

It should handle these requests:
1. Answer questions about company policies (I will upload our policy PDF)
2. Help employees write professional email responses
3. Direct people to the right department for specific issues

The tone should be professional and friendly.
When it cannot answer something, it should say:
"I will escalate this to the HR team — expect a response within 24 hours."
\`\`\`

The builder will auto-generate topics, triggers, and a starting structure.

### Step 3 — Add Your Knowledge Source

In the left panel, click **"Knowledge"** → **"Add knowledge"**

Choose one of:
- **SharePoint** — connects to your company's SharePoint site
- **Files** — upload PDFs, Word docs, or text files
- **Websites** — scrapes a URL for information

Upload your HR policy PDF or paste the SharePoint URL. The agent now has your actual company knowledge.

### Step 4 — Customise a Topic

Click **"Topics"** → click any auto-generated topic to edit it.

Each topic has a flow with three main node types:
- **Message** — the agent says something
- **Question** — the agent asks the user for input
- **Action** — the agent does something (sends email, creates record)

Example flow for "Write a professional email":

\`\`\`
Trigger: "write email", "draft email", "help me reply"
     ↓
Question: "Who is the email to? (e.g., client, manager, colleague)"
     ↓
Question: "What is the key message in 1-2 sentences?"
     ↓
Question: "What tone? (Formal / Friendly / Urgent)"
     ↓
Message: [Agent generates and shows the drafted email]
     ↓
Question: "Would you like me to send this via Outlook? (Yes / No)"
     ↓
Action: Send email via Power Automate (if Yes)
\`\`\`

### Step 5 — Connect Power Automate (Take Real Actions)

This is where Copilot Studio becomes genuinely powerful.

Click any **Action** node → **"Add an action"** → Search for:
- **"Send an email (V2)"** — sends real Outlook emails
- **"Create event (Outlook Calendar)"** — books meetings
- **"Create item (SharePoint)"** — adds data to SharePoint lists
- **"Post message to Teams"** — notifies a Teams channel

Each action requires you to authorise it once with your Microsoft account. After that, it runs automatically every time the topic is triggered.

### Step 6 — Test Your Agent

Click **"Test your agent"** in the top right. A chat window appears.

Test with real scenarios your team faces:
- "What is our parental leave policy?"
- "Help me write an email declining a meeting"
- "Who do I contact for IT issues?"

Check that it answers correctly and the tone feels right. Fix any topic that gives a bad response.

---

## Part 2 — Integrate Copilot Agent Into Your Website

### Method A — The Direct Embed (Easiest, 2 Minutes)

In Copilot Studio, click **"Publish"** → **"Go to channels"** → **"Custom website"**

You will see a code snippet like this:

\`\`\`
<script src="https://web.powerva.microsoft.com/webchat/..."></script>
<div id="webchat"></div>
<script>
  WebChat.renderWebChat(
    {
      directLine: WebChat.createDirectLine({
        token: "YOUR_TOKEN_HERE"
      }),
      userID: "user1",
      username: "Learner",
      locale: "en-US",
      botAvatarImage: "https://yoursite.com/bot-icon.png",
      botAvatarInitials: "AI"
    },
    document.getElementById("webchat")
  );
</script>
\`\`\`

Copy this entire snippet. In your Next.js project, create **src/components/CopilotWidget.js**:

\`\`\`
"use client";
import { useEffect } from "react";

export default function CopilotWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://web.powerva.microsoft.com/webchat/PASTE_YOUR_CDN_URL";
    script.async = true;
    script.onload = () => {
      window.WebChat.renderWebChat(
        {
          directLine: window.WebChat.createDirectLine({
            token: "PASTE_YOUR_TOKEN_HERE",
          }),
          locale: "en-US",
        },
        document.getElementById("copilot-chat")
      );
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="copilot-chat"
      className="rounded-xl border border-slate-200 shadow-md"
      style={{ height: "500px", width: "100%" }}
    />
  );
}
\`\`\`

Then use it on any page: import CopilotWidget from "@/components/CopilotWidget"

### Method B — Deploy to Microsoft Teams (Best for Internal Teams)

In Copilot Studio → Publish → Teams:

- Click **"Open bot"** in Teams
- Share the Teams app link with your colleagues
- They chat with the agent directly in Teams — no browser needed

This takes under 5 minutes and requires zero coding.

---

## Real Business Use Cases (With ROI)

**HR Policy Agent**
- Saves: 2 hours/week of HR answering repetitive questions
- Setup time: 3 hours
- Monthly value: ~$800 in HR time saved

**Sales Proposal Agent**
- Connects to your CRM data in SharePoint
- Drafts personalised proposals in 30 seconds
- Saves: 45 min per proposal

**IT Helpdesk First Responder**
- Handles Level 1 tickets automatically
- Escalates complex issues to humans
- Reduces ticket volume by 40-60%

---

## Key Limitations to Know

- Full Power Automate actions require a Microsoft 365 Business subscription
- The free trial has a 25,000 message/month cap
- Complex custom actions require some understanding of Power Platform
- The web chat widget styling is limited without custom CSS

The free trial is enough to validate whether this works for your organisation before committing to a paid plan.`,
    quiz: [
      {
        q: "In Copilot Studio, what is the difference between a 'Trigger' and an 'Action'?",
        options: [
          "Triggers are paid features, actions are free",
          "A trigger is the phrase that starts a topic; an action is what the agent does with the collected information",
          "Triggers are for questions, actions are for statements",
          "There is no difference — they are the same thing",
        ],
        answer: 1,
      },
      {
        q: "You want your Copilot agent to automatically send an email to a manager when an employee submits a leave request. Which feature makes this possible?",
        options: [
          "Topics",
          "Knowledge sources",
          "Power Automate Actions connected to Outlook",
          "The test panel",
        ],
        answer: 2,
      },
      {
        q: "Your company's HR policies are stored in SharePoint. What is the fastest way to make your Copilot agent aware of these policies?",
        options: [
          "Manually copy-paste every policy into the system prompt",
          "Connect your SharePoint site as a Knowledge Source in Copilot Studio",
          "Email the policies to support@microsoft.com",
          "Build a custom API connector",
        ],
        answer: 1,
      },
      {
        q: "A colleague says their Copilot agent gives wrong answers about company leave policy. What is the FIRST thing you should check?",
        options: [
          "Whether the Microsoft subscription is paid",
          "Whether the HR policy document is uploaded and indexed as a Knowledge Source",
          "Whether the Topics are named correctly",
          "Whether Power Automate is connected",
        ],
        answer: 1,
      },
      {
        q: "What is the biggest advantage of deploying your Copilot agent to Microsoft Teams instead of a website?",
        options: [
          "It is faster to respond in Teams",
          "Teams agents are free, website agents are paid",
          "Your team uses it where they already work — no new tool to learn or visit",
          "Teams agents can access more knowledge than website agents",
        ],
        answer: 2,
      },
    ],
    dailyTask: {
      title: "Map Out Your Team's Agent Conversation Flow",
      description:
        "Pick one repetitive task your team does manually (answering the same question, drafting the same type of email, looking up the same policy). On paper or a notes app, draw the conversation flow: (1) What phrase starts it? (2) What 2-3 questions does the agent ask? (3) What does it output? (4) Does it need to take any action — send email, book meeting, update a record? This design doc is exactly what you paste into Copilot Studio's builder. Share it in the community below.",
    },
  },
  {
    id: 3,
    slug: "build-agent-with-chatgpt",
    emoji: "💬",
    title: "Build & Integrate a ChatGPT Agent",
    tagline: "Create a Custom GPT and integrate the OpenAI API into your website to build a live, interactive AI feature.",
    level: "Intermediate",
    readTime: "20 min",
    keyTerms: ["Custom GPT", "GPT Builder", "OpenAI API", "gpt-4o", "Streaming", "Function Calling", "GPT Store", "Monetisation"],
    content: `## Two Ways to Use ChatGPT as an Agent

There are two distinct approaches, and understanding when to use each is the key skill:

**Custom GPTs (No-code)** — Build a specialised ChatGPT inside OpenAI's interface. Share it via link or publish to the GPT Store. Perfect for sharing knowledge and tools publicly.

**OpenAI API (With code)** — Call GPT-4 directly from your website or app. Full control over the UI, behaviour, and data. Perfect for embedding AI into your own product.

We will cover both. Start with Custom GPTs, then go deeper with the API.

---

## Part 1 — Build a Custom GPT (No-Code)

### What You Need
A **ChatGPT Plus** subscription ($20/month) to CREATE GPTs. Anyone can USE them for free.

### Step 1 — Open GPT Builder

- Go to **chat.openai.com**
- Click **"Explore GPTs"** in the left sidebar
- Click **"+ Create"** (top right corner)
- Two panels appear: **Create** (left chat with the builder) and **Preview** (right, your GPT)

### Step 2 — Describe Your GPT

The builder will ask: "What would you like to make?"

We will build a **"Prompt Review Coach"** — an agent that critiques and improves AI prompts. Type this:

\`\`\`
I want to create a Prompt Review Coach that helps people
write better AI prompts.

When someone shares a prompt, the coach should:
1. Give it a score out of 10 with a 1-line reason
2. List exactly 2 specific problems with it
3. Rewrite it as an improved version
4. Explain in plain English what changed and why

Keep responses concise — under 200 words total.
Tone: Like a great sports coach — direct, specific, encouraging.
Never say a prompt is "good" without suggesting at least one improvement.
\`\`\`

### Step 3 — Refine the Configuration

Click the **"Configure"** tab. You will see the full setup:

**Name and Description**
- Name: Prompt Review Coach
- Description (shown in GPT Store): "Paste any AI prompt and get a score, two specific problems, and an improved rewrite in under 30 seconds."

**Instructions (System Prompt)**
The builder auto-wrote instructions. Edit them to add:
\`\`\`
SCORING GUIDE:
- 1-3: Vague, no context, too short
- 4-6: Has a goal but missing role, format, or constraints
- 7-8: Clear goal, good context, minor improvements possible
- 9-10: Specific, contextual, constrained, with examples

Always start your response with the score as: SCORE: X/10
\`\`\`

**Conversation Starters** (shown as starter buttons)
Replace the defaults with:
- "Review this prompt: Summarise this document for me"
- "How do I make prompts more specific?"
- "What makes a 10/10 prompt?"
- "Review my sales email prompt"

### Step 4 — Upload Knowledge Files

Under **"Knowledge"**, click **"Upload files"**.

Create a text file called **prompt-frameworks.txt** and add your best prompt templates from the Prompt Engineering Masterclass. The GPT will reference these when making suggestions.

### Step 5 — Set Capabilities

- **Web Search**: Turn ON — lets the GPT find current examples of great prompts
- **DALL-E Image Generation**: OFF (not needed)
- **Code Interpreter**: OFF (not needed for this use case)

### Step 6 — Test Rigorously

In the Preview panel, test with intentionally bad prompts:
- "Write something" — should score 1-2
- "Write a blog post about AI for my company" — should score 4-5
- "You are an expert tech blogger writing for non-technical HR managers. Write a 300-word blog post explaining why prompt engineering matters, using one real example and ending with a practical tip." — should score 8-9

If the scoring is inconsistent, add more specific rules to the Instructions.

### Step 7 — Publish to GPT Store

Click **"Save"** → Choose **"Everyone"**

Add to the GPT Store listing:
- **Category**: Productivity
- **Description**: Make it searchable — include "prompt engineering", "ChatGPT prompts", "improve AI prompts"

Once published, anyone searching the GPT Store for "prompt review" can find and use your agent. If it gains traction, you can apply for OpenAI's **revenue sharing programme**.

---

## Part 2 — Integrate OpenAI API Into Your Website

This is where you build a live AI feature directly into your Next.js website — a real product, not just a shared link.

### Step 1 — Get Your API Key

- Go to **platform.openai.com**
- Sign up and add a payment method (you get $5 free credit)
- Click **"API Keys"** → **"Create new secret key"**
- Copy it immediately — it disappears after you close the dialog

Add to your **.env.local** file:

\`\`\`
OPENAI_API_KEY=sk-your-key-here
\`\`\`

### Step 2 — Create the API Route

Create **src/app/api/openai-chat/route.js**:

\`\`\`
export async function POST(request) {
  const { messages, systemPrompt } = await request.json();

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o",
      max_tokens: 1024,
      messages: [
        {
          role: "system",
          content: systemPrompt || "You are a helpful AI learning assistant.",
        },
        ...messages,
      ],
    }),
  });

  const data = await response.json();
  return Response.json({
    reply: data.choices[0].message.content,
  });
}
\`\`\`

### Step 3 — Build a "Prompt Reviewer" Feature Component

This is a real, interactive feature for your website. Create **src/components/PromptReviewer.js**:

\`\`\`
"use client";
import { useState } from "react";

const SYSTEM_PROMPT = \`You are a Prompt Review Coach.
When given a prompt, respond in this exact format:

SCORE: X/10
PROBLEMS:
1. [specific problem]
2. [specific problem]
IMPROVED VERSION:
[rewritten prompt]
WHY IT IS BETTER:
[1-2 sentence explanation]

Be direct and specific. Keep total response under 200 words.\`;

export default function PromptReviewer() {
  const [prompt, setPrompt] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  const reviewPrompt = async () => {
    if (!prompt.trim()) return;
    setLoading(true);
    setReview("");

    const res = await fetch("/api/openai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        systemPrompt: SYSTEM_PROMPT,
        messages: [{ role: "user", content: "Review this prompt: " + prompt }],
      }),
    });

    const data = await res.json();
    setReview(data.reply);
    setLoading(false);
  };

  return (
    <div className="bg-white border-2 border-emerald-200 rounded-2xl p-6 my-8">
      <h3 className="text-xl font-bold text-slate-800 mb-2">
        🧪 Live Prompt Reviewer
      </h3>
      <p className="text-sm text-slate-500 mb-4">
        Paste any AI prompt below and get instant feedback.
      </p>
      <textarea
        className="w-full border border-slate-200 rounded-xl p-3 text-sm focus:outline-none focus:border-emerald-400 mb-3"
        rows={4}
        placeholder='Example: "Write a blog post about AI"'
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      />
      <button
        onClick={reviewPrompt}
        disabled={loading}
        className="bg-emerald-600 text-white font-bold px-6 py-2 rounded-xl hover:bg-emerald-700 disabled:opacity-50 transition-colors"
      >
        {loading ? "Reviewing..." : "Review My Prompt →"}
      </button>
      {review && (
        <div className="mt-4 bg-slate-50 rounded-xl p-4 text-sm whitespace-pre-wrap font-mono text-slate-700 leading-relaxed">
          {review}
        </div>
      )}
    </div>
  );
}
\`\`\`

### Step 4 — Add to Your Prompt Engineering Chapter Pages

In **src/app/prompt-engineering/[chapter]/page.js**, import and add it after the content article:

\`\`\`
import PromptReviewer from "@/components/PromptReviewer";

// Inside the return, after the article:
<PromptReviewer />
\`\`\`

Now every Prompt Engineering chapter has a live, interactive prompt reviewer built in. Users can practice and get instant AI feedback without leaving your site.

---

## Claude vs Copilot vs ChatGPT — The Final Comparison

| | Claude API | Copilot Studio | OpenAI API |
| --- | --- | --- | --- |
| Best website integration | ✅ Excellent | ⚠️ Via widget | ✅ Excellent |
| Microsoft 365 actions | ❌ | ✅ Best-in-class | ❌ |
| Free credits to start | $5 | 25k messages/trial | $5 |
| Model quality | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| Best for no-code | Claude Projects | Copilot Studio | Custom GPTs |
| Can earn revenue | ❌ | ❌ | ✅ GPT Store |
| Privacy / enterprise | ✅ Strong | ✅ Best | ✅ Good |

## Your Recommended Stack

- **Claude** → Your personal AI tutor and research assistant (inside your website)
- **Copilot** → Your company's internal automated workflows (Teams and SharePoint)
- **ChatGPT GPT** → Your public-facing tool that markets your expertise (GPT Store)

Each serves a different purpose. The professionals who understand all three will be the most valuable people in any organisation over the next 5 years.`,
    quiz: [
      {
        q: "You want to share an AI Prompt Coach tool with 10,000 people publicly. What is the most effective approach?",
        options: [
          "Share your Claude Project link with everyone",
          "Publish a Custom GPT to the GPT Store so anyone can discover and use it",
          "Build a Copilot Studio agent and publish to Teams",
          "Email the OpenAI API code to each person",
        ],
        answer: 1,
      },
      {
        q: "In the OpenAI API integration, what does the 'system' message in the API call do?",
        options: [
          "It tells OpenAI your billing information",
          "It sets the agent's role, rules, and behaviour — equivalent to Claude's system prompt",
          "It selects which GPT model to use",
          "It stores the conversation history",
        ],
        answer: 1,
      },
      {
        q: "You built a Prompt Reviewer component using the OpenAI API. A user visits your site and reviews 5 prompts. How many API calls are made?",
        options: [
          "1 — the API batches all requests together",
          "5 — one per review action",
          "10 — two per message (send and receive)",
          "0 — the Custom GPT handles it without API calls",
        ],
        answer: 1,
      },
      {
        q: "What is the key advantage of the OpenAI API approach over using a Custom GPT link?",
        options: [
          "The API is cheaper than ChatGPT Plus",
          "The API lets you build the experience inside YOUR website with YOUR design and branding",
          "API responses are faster than Custom GPTs",
          "The API works offline",
        ],
        answer: 1,
      },
      {
        q: "Based on the comparison table, which combination covers the most use cases for a professional who works in an office and also runs their own online learning website?",
        options: [
          "Two Claude agents — one for personal use and one for the website",
          "Claude for the website AI tutor + Copilot for office workflows + ChatGPT GPT for public reach",
          "Only Copilot Studio — it covers all scenarios",
          "OpenAI API for everything — it is the most powerful",
        ],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "Build the Prompt Reviewer on Your Website",
      description:
        "Follow Part 2 of this chapter exactly: (1) Get your OpenAI API key from platform.openai.com, (2) Add it to .env.local, (3) Create the route.js API file, (4) Create the PromptReviewer.js component, (5) Add it to one Prompt Engineering chapter page. Run npm run dev and test it with 3 different prompts. Take a screenshot of a review result and share it in the community. This is your first live AI-powered feature — something most developers cannot build in a day.",
    },
  },
];

export function getAgentsChapter(slug) {
  return agentsChapters.find((ch) => ch.slug === slug) || null;
}
