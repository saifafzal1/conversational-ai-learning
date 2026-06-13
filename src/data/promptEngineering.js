export const peChapters = [
  {
    id: 1,
    slug: "ai-mindset",
    title: "The AI Mindset — Stop Searching, Start Engineering",
    emoji: "🧠",
    readTime: "12 min",
    level: "Beginner",
    tagline: "Shift from using AI as a search engine to treating it as your most powerful team member.",
    content: `
## Why Most People Get Mediocre Results from AI

You type a question into ChatGPT. You get an answer. It's... okay. Generic. Not quite what you needed. Sound familiar?

The problem isn't the AI. The problem is the mindset.

Most people treat AI like a better Google — type a few words, get a result, move on. This is the single biggest mistake that separates people who get 2x results from AI and people who get 10x results.

**The shift you need to make:**

> "Stop treating the AI as a search engine. Start treating it as a brilliant team member who just joined your team today."

## The New Team Member Analogy

Imagine you just hired the smartest person you've ever met. They have knowledge across every field — medicine, law, engineering, marketing, finance, writing. But they just walked in the door. They know nothing about your company, your goals, your audience, your constraints, or your style.

What would you do?

You'd brief them. Thoroughly. You'd explain:
- What role you need them to play
- What context they need to understand
- What you specifically need done
- What format you want the output in
- What constraints they must respect

That's exactly how you should treat AI. **The quality of your briefing determines the quality of the output.**

## The Two Modes of AI Usage

**Casual Mode (what most people do):**
- Ask a vague question
- Get a generic answer
- Feel underwhelmed
- Think "AI is overhyped"

**Engineering Mode (what professionals do):**
- Define the AI's role and expertise
- Provide rich context and background
- State the specific task clearly
- Specify the output format
- Set constraints and boundaries
- Get targeted, expert-level output

The difference in output quality between these two modes is not 10% — it's often 500-1000%.

## What is Prompt Engineering?

**Prompt Engineering** is the discipline of designing inputs (prompts) to AI systems that consistently produce high-quality, targeted outputs.

It's part science, part communication skill, part domain knowledge. And it's one of the most valuable skills you can develop in 2026.

A well-engineered prompt tells the AI:
- **WHO** it should be (role/persona)
- **WHAT** it knows about the situation (context)
- **WHAT** you need (task)
- **HOW** to structure the response (format)
- **WHAT** to avoid (constraints)

## The 10x Productivity Multiplier

Professionals who master prompt engineering report:
- Writing first drafts in minutes instead of hours
- Getting expert-level analysis without hiring consultants
- Automating repetitive cognitive tasks completely
- Producing consistent, high-quality output at scale

A prompt engineer at a top company doesn't type faster than you. They communicate with AI more precisely. That precision is the skill.

## Your First Engineering Mindset Shift

From now on, before you type anything into an AI, ask yourself:

1. **Who should the AI be?** (Expert role)
2. **What does it need to know?** (Context)
3. **What exactly do I want?** (Task)
4. **How should it respond?** (Format)
5. **What should it NOT do?** (Constraints)

Answer these five questions first. Then write your prompt. The results will immediately be dramatically better.

## Why This Course Exists

Prompt Engineering is now a required skill for anyone who wants to stay relevant in the AI era. It's listed as a top skill by LinkedIn, Indeed, and every major tech employer.

This course gives you the frameworks, patterns, and templates that professional AI engineers use daily — adapted so you can apply them immediately to your own work, without any coding background.

## Summary

Most people use AI casually and get mediocre results. Professionals treat AI like a new team member and brief it thoroughly. Prompt Engineering is the skill of designing inputs that produce expert-level outputs. The five questions — Who, What context, What task, What format, What constraints — are your new starting point for every AI interaction.
    `,
    keyTerms: ["Prompt Engineering", "AI Mindset", "Context", "Role", "Constraints", "Output Format", "Briefing"],
    quiz: [
      {
        q: "What is the most common mistake people make when using AI?",
        options: ["Using it too often", "Treating it like a search engine instead of a team member", "Asking questions that are too complex", "Not paying for premium plans"],
        answer: 1,
      },
      {
        q: "What is Prompt Engineering?",
        options: ["Building AI models from scratch", "Designing inputs to consistently produce high-quality AI outputs", "Writing code for chatbots", "Managing AI servers"],
        answer: 1,
      },
      {
        q: "Which of the five prompt questions asks about the AI's role?",
        options: ["What exactly do I want?", "What does it need to know?", "Who should the AI be?", "How should it respond?"],
        answer: 2,
      },
      {
        q: "What does 'Engineering Mode' of AI usage include?",
        options: ["Typing faster", "Defining role, providing context, specifying task, format and constraints", "Using only paid AI tools", "Asking shorter questions"],
        answer: 1,
      },
      {
        q: "What is the best analogy for how to treat an AI assistant?",
        options: ["A calculator", "A search engine", "A brilliant new team member who needs to be briefed", "An encyclopedia"],
        answer: 2,
      },
    ],
    dailyTask: {
      title: "The Before & After Test",
      description: "Pick one task you did with AI this week (or do one now). First, use your normal casual prompt and save the output. Then rewrite the prompt using the 5 questions: Who should the AI be? What context does it need? What exactly do I want? What format? What constraints? Compare the two outputs side by side. Write down the specific differences in quality. This single exercise will permanently change how you use AI.",
    },
  },
  {
    id: 2,
    slug: "context-stack",
    title: "Context is King — The Context Stack",
    emoji: "📚",
    readTime: "13 min",
    level: "Beginner",
    tagline: "Learn how to feed AI the right context so it gives you expert-level, targeted responses.",
    content: `
## Why Context Changes Everything

Two people ask an AI the exact same question: "How should I handle this customer complaint?"

Person A gets a generic 3-point list that could apply to any situation ever.

Person B gets a specific, actionable response tailored to their industry, customer type, and communication style.

The only difference? Person B provided context. **Context is the difference between generic AI and expert AI.**

## What is the Context Stack?

The **Context Stack** is a structured way to provide AI with exactly the information it needs to give you targeted, relevant, expert-level responses. Think of it as the briefing document you'd give to a new consultant on their first day.

The Context Stack has five layers:

**Layer 1: System Persona**
Who is the AI in this interaction? Define the role, seniority level, and domain expertise.

> "You are a Senior Marketing Strategist with 15 years of experience in B2B SaaS marketing in India."

**Layer 2: Feature/Situation Context**
What is the specific situation, document, or background the AI needs to understand?

> "I am launching a new AI productivity tool targeting middle managers at Indian IT companies. The price point is ₹2,999/month. Main competitors are Monday.com and Asana."

**Layer 3: Technical/Domain Stack**
What specific tools, frameworks, platforms, or domain details are relevant?

> "Our target customers use Microsoft Teams, work in Agile environments, and have budgets approved by IT departments. Decision makers are VPs of Engineering and Operations."

**Layer 4: Constraints**
What limitations, rules, or boundaries must the AI respect?

> "Do not suggest paid advertising — our marketing budget is zero. Focus only on organic channels. Keep suggestions practical for a 2-person team."

**Layer 5: Output Format**
Exactly how should the response be structured?

> "Give me a 90-day marketing plan in table format. Columns: Week, Activity, Channel, Expected Outcome, Time Required."

## The Context Block — Putting It Together

Here's what a complete Context Block looks like:

> "You are a Senior Content Marketing Strategist with 10+ years of experience in EdTech in India.
>
> Context: I am running a free online course website about Conversational AI at conversational-ai-learning.vercel.app. I have 10 chapters live, targeting working professionals aged 35-50 who want to learn AI without coding.
>
> Constraints: I have no marketing budget. I can spend 1 hour per day on promotion. I want to reach specifically Indian professionals on LinkedIn and WhatsApp.
>
> Output: Give me a 30-day content calendar in table format with: Day, Platform, Content Type, Topic, Target Hashtags."

Notice how every detail you add makes the output more useful.

## The CO-STAR Framework

A popular prompt framework that structures your context professionally:

- **C**ontext — What is the situation or background?
- **O**bjective — What do you want the AI to produce?
- **S**tyle — How should it write? (Like an expert, a teacher, a journalist?)
- **T**one — Professional, friendly, critical, encouraging?
- **A**udience — Who will read or use this output?
- **R**esponse — What format, length, and structure?

**Example using CO-STAR:**

> "C: I run a free AI learning website with 500 monthly visitors.
> O: Write a LinkedIn post that drives traffic to my site.
> S: Write like a passionate educator who speaks from personal experience.
> T: Warm, inspiring, and personal — not salesy.
> A: Indian working professionals aged 30-50 who are curious about AI.
> R: 150 words maximum, with 5 relevant hashtags at the end."

## Common Context Mistakes

**Too vague:**
❌ "Help me write a post about AI."
✅ "Help me write a 200-word LinkedIn post for Indian professionals about why learning prompt engineering will double their productivity."

**Missing audience:**
❌ "Explain machine learning."
✅ "Explain machine learning to a 45-year-old operations manager who has no coding background but wants to understand AI tools his team is adopting."

**No format specified:**
❌ "Give me a marketing plan."
✅ "Give me a 60-day marketing plan as a table with columns: Week, Action, Platform, Time Required, Expected Result."

**Forgetting constraints:**
❌ "Suggest ways to grow my website."
✅ "Suggest 10 ways to grow my website with zero budget, targeting India, using only 1 hour per day."

## How Much Context is Too Much?

Modern AI models like Claude and GPT-4 can handle enormous amounts of context. In general:

- More context = better output
- Irrelevant context = slightly confused AI
- No context = generic output

The sweet spot: provide all relevant background, constraints, and format requirements. Err on the side of more context rather than less. You can always trim later.

## Summary

Context is the single biggest lever for improving AI output quality. The Context Stack — Persona, Situation, Domain Details, Constraints, Output Format — gives AI everything it needs to think like an expert in your specific situation. The CO-STAR framework (Context, Objective, Style, Tone, Audience, Response) is a professional shorthand for building great context blocks. Always specify your audience, constraints, and desired output format.
    `,
    keyTerms: ["Context Stack", "CO-STAR", "Persona", "Constraints", "Output Format", "System Prompt", "Domain Context"],
    quiz: [
      {
        q: "What is the Context Stack?",
        options: ["A software tool for AI", "A structured way to provide AI with the information it needs", "A type of AI model", "A coding framework"],
        answer: 1,
      },
      {
        q: "What does the 'A' in CO-STAR stand for?",
        options: ["Action", "Accuracy", "Audience", "Analysis"],
        answer: 2,
      },
      {
        q: "What happens when you give AI too little context?",
        options: ["The AI crashes", "You get faster responses", "You get generic, untargeted output", "The AI asks for more information automatically"],
        answer: 2,
      },
      {
        q: "Which layer of the Context Stack defines role and expertise?",
        options: ["Output Format", "System Persona", "Constraints", "Feature Context"],
        answer: 1,
      },
      {
        q: "Which is a correct approach to specifying output format?",
        options: ["'Give me something useful'", "'Make it good'", "'Give me a table with columns: Week, Action, Platform, Time'", "'Write a short response'"],
        answer: 2,
      },
    ],
    dailyTask: {
      title: "Build Your Personal Context Block",
      description: "Write a reusable Context Block for YOUR specific work situation. Include: (1) Your professional role and experience, (2) Your industry and company type, (3) Your typical audience, (4) Common constraints you face (budget, time, tools), (5) Your preferred output formats. Save this as a text note. From now on, paste this at the start of important AI conversations. This single habit will permanently improve every AI interaction you have.",
    },
  },
  {
    id: 3,
    slug: "persona-pattern",
    title: "The Persona Pattern — Make AI Think Like an Expert",
    emoji: "🎭",
    readTime: "12 min",
    level: "Beginner",
    tagline: "Unlock expert-level AI output by assigning precise roles and domain expertise.",
    content: `
## Why Persona Changes Everything

Ask an AI "write test cases for a login feature" and you get 3 generic cases. Ask the same AI to be "a Senior Security Engineer who thinks adversarially about authentication vulnerabilities" and you get 20+ cases covering SQL injection, session hijacking, rate limiting, WCAG accessibility, and JWT token edge cases.

Same AI. Same question. Completely different output.

This is the power of the **Persona Pattern**.

## What is the Persona Pattern?

The **Persona Pattern** assigns a specific expert identity to the AI before giving it a task. When you define who the AI is, it activates the relevant knowledge, reasoning patterns, and domain expertise from its training — and delivers output at that expert level.

Think of it like hiring a specialist instead of a generalist. A general doctor gives general advice. A cardiologist with 20 years in interventional cardiology gives very different advice about your heart.

## The Anatomy of a Strong Persona

A powerful persona has four components:

**1. Role + Seniority**
Don't just say "marketing expert." Say "Senior Growth Marketing Manager with 12 years of experience."
The seniority level signals the depth and sophistication of thinking you expect.

**2. Domain Focus**
Be specific about the sub-domain. Not just "finance expert" — "Expert in personal finance for salaried professionals in India, specialising in tax-saving investments under Section 80C."

**3. Mindset / Thinking Style**
How does this expert approach problems? Adversarially? Risk-first? User-empathetically? Data-driven?

**4. Output Bias**
What does this expert tend to prioritise in their output? Edge cases? ROI? User experience? Security?

## Without vs With Persona

**Without Persona:**
> "Write an email to a client about a project delay."

Output: Generic, corporate, forgettable.

**With Persona:**
> "Act as a Senior Client Relationship Manager at a top Indian IT services company, with 15 years of experience managing enterprise accounts. You are known for maintaining trust even in difficult situations. You communicate with empathy first, then facts, then solution. Write an email to our enterprise client informing them of a 2-week project delay due to a critical integration issue discovered during testing."

Output: Empathetic, professional, trust-preserving, solution-focused — exactly what a seasoned relationship manager would write.

## Real Persona Examples by Profession

**For Managers:**
> "Act as a Chief Operating Officer with 20 years of experience scaling operations in Indian startups. You think in terms of systems, bottlenecks, and scalable processes. You always identify the root cause before suggesting solutions."

**For Sales Professionals:**
> "Act as a Senior Enterprise Sales Consultant specialising in SaaS sales to Indian IT companies. You understand procurement processes, budget cycles, and how to navigate multi-stakeholder decisions. You always think from the buyer's perspective first."

**For Teachers/Trainers:**
> "Act as an experienced corporate trainer who specialises in simplifying complex technical concepts for non-technical audiences. You use analogies, real-world examples, and avoid jargon. Your goal is understanding, not impression."

**For Finance Professionals:**
> "Act as a Chartered Accountant with 15 years of experience advising Indian SMEs. You are conservative, risk-aware, and compliance-focused. You always flag tax implications and regulatory requirements."

## The Persona Activation Principle

LLMs are trained on enormous amounts of text written by people across many roles and domains. When you assign a persona, you are effectively telling the AI which portion of its knowledge to draw from.

- "Senior SDET" activates testing-specific reasoning
- "QA Architect" activates system-level risk thinking
- "Security Engineer" activates adversarial mindset
- "UX Researcher" activates user-empathy focused thinking

The more precisely you define the persona, the more accurately the AI draws from the relevant knowledge domain.

## Important: Persona Doesn't Replace Clear Instructions

A common mistake is writing a great persona but a vague task. The persona sets the expertise level and mindset — but you still need to be clear about what you want.

❌ "Act as a senior marketer. Help with my marketing."
✅ "Act as a Senior Growth Marketer specialising in B2B EdTech in India. Write 5 LinkedIn post ideas for my free AI course website, targeting professionals aged 35-50. Each idea should include: hook, body structure, and 3 hashtags."

The persona + the specific task = expert output.

## Summary

The Persona Pattern assigns an expert identity to AI, activating domain-specific knowledge and reasoning. A strong persona has four layers: Role+Seniority, Domain Focus, Mindset, and Output Bias. Persona dramatically improves output quality because AI draws from the appropriate knowledge domain. Always combine a strong persona with a specific, clear task for best results.
    `,
    keyTerms: ["Persona Pattern", "Role", "Seniority", "Domain Focus", "Mindset", "Output Bias", "Expert Identity"],
    quiz: [
      {
        q: "What does the Persona Pattern do?",
        options: ["Gives the AI a name", "Assigns an expert identity to activate domain-specific knowledge", "Changes the AI's voice to sound more human", "Hides the AI's identity from users"],
        answer: 1,
      },
      {
        q: "Which is a stronger persona?",
        options: ["'A finance expert'", "'Someone who knows about money'", "'Senior CA with 15 years advising Indian SMEs, conservative and compliance-focused'", "'A banker'"],
        answer: 2,
      },
      {
        q: "What is the 'Output Bias' component of a persona?",
        options: ["The AI's political opinions", "What the expert tends to prioritise in their output", "The language the AI uses", "The length of the response"],
        answer: 1,
      },
      {
        q: "Why does assigning a persona improve AI output?",
        options: ["It makes AI run faster", "It tells the AI which knowledge domain to draw from", "It gives AI access to new information", "It removes AI safety filters"],
        answer: 1,
      },
      {
        q: "What is the most common persona mistake?",
        options: ["Making the persona too specific", "Great persona but vague task", "Using too many words to describe the role", "Giving the AI a name"],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "Write 3 Personas for Your Work",
      description: "Write 3 detailed AI personas that would be useful for your specific job. For each persona include: Role + Seniority, Domain Focus, Mindset, and Output Bias. Then test each one by giving the same task to the AI with and without the persona. Examples: a persona for writing professional emails, one for analysing data or reports, one for planning and strategy. Save these — they become your reusable persona library.",
    },
  },
  {
    id: 4,
    slug: "chain-of-thought",
    title: "Chain-of-Thought — Make AI Reason Before It Answers",
    emoji: "⛓️",
    readTime: "14 min",
    level: "Intermediate",
    tagline: "Force AI to think step-by-step and get dramatically better results on complex problems.",
    content: `
## The Problem with Instant AI Answers

When you ask AI a complex question, it often jumps straight to an answer. This is a problem.

Complex problems require reasoning — breaking them down, considering multiple angles, identifying what's known and unknown, and only then forming a conclusion. When AI skips the reasoning step, you get shallow, often incorrect answers.

**Chain-of-Thought (CoT) prompting forces the AI to think before it answers.**

## What is Chain-of-Thought Prompting?

**Chain-of-Thought (CoT)** is a prompting technique where you explicitly instruct the AI to reason through a problem step by step before giving its final answer.

It's the difference between asking a student to write down an answer (risky — may guess) and asking them to show their working (forces genuine reasoning).

Research from Google DeepMind shows that CoT prompting improves accuracy on complex reasoning tasks by 30-50%.

## The Basic CoT Trigger

The simplest way to activate chain-of-thought reasoning is to add:

> "Think step by step."
> "Before answering, reason through this carefully."
> "Let's work through this systematically."

These phrases alone significantly improve output quality on reasoning tasks.

## Structured CoT: The 4-Step Framework

For professional use, a structured CoT template gives much more powerful results:

**Step 1 — Analyse:** Identify all relevant dimensions, risks, or components of the problem.
**Step 2 — Classify:** Group or categorise your findings by type, priority, or domain.
**Step 3 — Prioritise:** Rank by likelihood, impact, or urgency.
**Step 4 — Generate:** Only then produce the final output.

**Template:**
> "Before producing any output:
> Step 1: List all the [relevant dimensions/risks/components] you identify.
> Step 2: Classify each as [Category A | Category B | Category C].
> Step 3: Rate each by [Priority/Impact/Urgency] (High/Medium/Low).
> Step 4: ONLY THEN generate [the final output], starting with highest priority.
> Topic/Task: [your task here]"

## Real-World CoT Examples

**For Business Strategy:**
> "Before giving me a marketing strategy:
> Step 1: List all the growth channels available to a bootstrapped EdTech startup in India.
> Step 2: Classify each as: Organic / Paid / Partnership.
> Step 3: Rate each by: Effort (H/M/L) and Potential Impact (H/M/L).
> Step 4: THEN recommend the top 5 channels for a 1-person team with zero budget, in priority order.
> My product: [description]"

**For Decision Making:**
> "I need to decide whether to [decision]. Before recommending:
> Step 1: List all relevant factors and stakeholders.
> Step 2: Identify the risks and opportunities for each option.
> Step 3: Assess short-term vs long-term implications.
> Step 4: Then give your recommendation with clear reasoning."

**For Writing:**
> "Before writing the article:
> Step 1: Identify the key arguments and counter-arguments on this topic.
> Step 2: Determine which arguments are strongest for my audience (Indian professionals).
> Step 3: Structure the article flow for maximum persuasion.
> Step 4: Then write the full article."

## Why CoT Works

Without CoT, AI generates each word based on what's most likely to come next — which works well for simple tasks but fails on complex ones.

With CoT, AI is forced to generate intermediate reasoning steps. Each step anchors the next one, creating a chain of connected logic instead of a single probabilistic leap.

This is especially powerful for:
- Complex analysis and decision-making
- Risk identification
- Multi-step planning
- Mathematical or logical problems
- Finding gaps in documents or requirements

## CoT for Gap Analysis

One of the most powerful applications of CoT is **gap analysis** — finding what's missing from a document, plan, or requirement.

> "Act as a senior consultant reviewing this [document/plan/proposal].
> Step 1: List every assumption being made (stated or unstated).
> Step 2: List every risk or failure mode not addressed.
> Step 3: Identify questions that remain unanswered.
> Step 4: Prioritise the gaps by severity.
> Step 5: For each critical gap, write: [GAP]: What's missing. [RISK]: Why it matters. [QUESTION]: What needs to be clarified.
> Document: [paste your document]"

This turns AI into a rigorous review partner that finds problems you'd miss after staring at your own work for hours.

## Combining CoT with Persona

The most powerful combination is **Persona + CoT**:

> "Act as a Senior Financial Advisor with 20 years of experience advising Indian entrepreneurs.
> Before recommending an investment strategy:
> Step 1: Assess my current financial situation and identify risks.
> Step 2: Classify investment options by: Risk Level | Liquidity | Tax Efficiency.
> Step 3: Prioritise options suitable for my specific goals.
> Step 4: Present a recommended portfolio allocation with reasoning.
> My situation: [context]"

The persona brings the expertise. The CoT brings the rigorous reasoning. Together they produce output that often rivals what you'd get from a real expert.

## Summary

Chain-of-Thought prompting forces AI to reason before answering, improving accuracy on complex tasks by 30-50%. The 4-step structure — Analyse, Classify, Prioritise, Generate — gives you rigorous, systematic output. CoT is especially powerful for strategy, decision-making, gap analysis, and risk identification. Combine CoT with the Persona Pattern for maximum output quality.
    `,
    keyTerms: ["Chain-of-Thought", "CoT", "Step-by-step reasoning", "Gap Analysis", "4-Step Framework", "Risk Matrix", "Systematic Thinking"],
    quiz: [
      {
        q: "What does Chain-of-Thought prompting do?",
        options: ["Makes AI responses shorter", "Forces AI to reason through a problem before answering", "Links multiple AI tools together", "Generates multiple answers simultaneously"],
        answer: 1,
      },
      {
        q: "By how much does CoT prompting improve accuracy on complex tasks?",
        options: ["5-10%", "15-20%", "30-50%", "100%"],
        answer: 2,
      },
      {
        q: "What is the correct order of the 4-step CoT framework?",
        options: ["Generate → Classify → Analyse → Prioritise", "Analyse → Classify → Prioritise → Generate", "Prioritise → Analyse → Generate → Classify", "Classify → Generate → Analyse → Prioritise"],
        answer: 1,
      },
      {
        q: "What is CoT Gap Analysis used for?",
        options: ["Finding grammatical errors", "Finding what is missing from a document or plan", "Filling in blank fields in a form", "Generating new content ideas"],
        answer: 1,
      },
      {
        q: "What is the most powerful combination of prompt techniques?",
        options: ["Few-Shot + Zero-Shot", "CoT + Few-Shot", "Persona + Chain-of-Thought", "Context Stack + Output Format"],
        answer: 2,
      },
    ],
    dailyTask: {
      title: "CoT Decision Analysis",
      description: "Take one real decision you are currently facing — at work or personally. Apply the 4-step CoT framework: Ask AI to (1) list all relevant factors, (2) classify them, (3) prioritise them, (4) give a recommendation. Compare this structured AI analysis with your gut feel. Note where AI found factors you hadn't considered. This exercise shows you why CoT is so valuable for important decisions.",
    },
  },
  {
    id: 5,
    slug: "zero-shot-vs-few-shot",
    title: "Zero-Shot vs Few-Shot Prompting",
    emoji: "🎯",
    readTime: "11 min",
    level: "Intermediate",
    tagline: "Learn when to give examples and when not to — and why it changes everything about output quality.",
    content: `
## Two Ways to Instruct an AI

When you ask AI to do something, you have two fundamental approaches:

**Zero-Shot:** Just describe what you want. No examples.
**Few-Shot:** Describe what you want AND show examples of what good output looks like.

Both have their place. Knowing which to use — and how to use each — is a key skill in prompt engineering.

## Zero-Shot Prompting

**Zero-Shot** means you give the task description only, with no examples. The AI uses only its training knowledge to complete the task.

**Best for:**
- Brainstorming and exploration
- Quick first drafts where format doesn't matter
- Creative tasks where you want AI to surprise you
- Simple, well-understood tasks

**Example:**
> "Write 5 LinkedIn post ideas for an AI learning website targeting Indian professionals."

Output: Variable. May not match your style. Good for inspiration.

**Limitation:** The AI doesn't know your specific standards, format preferences, or quality benchmarks. Output is unpredictable across team members and over time.

## Few-Shot Prompting

**Few-Shot** means you provide 2-5 examples of exactly what good output looks like, then ask for new output matching that standard.

The examples act as **anchors** — they tell the AI your exact format, tone, length, style, and quality standards without you having to describe them in words.

**Best for:**
- Standardised outputs (reports, emails, bug reports, test cases)
- Team consistency (everyone gets the same format)
- Replicating your personal writing style
- Any task where format and quality must be consistent

**Example:**
> "Here are 2 examples of LinkedIn posts in my style:
> [EXAMPLE 1] 'Last year I knew nothing about AI. Today I run an AI course with 500 learners. The difference? I stopped waiting to feel ready and started building. What are you waiting to start? #AI #Learning #GrowthMindset'
> [EXAMPLE 2] 'Most people use ChatGPT like a search engine. Top performers use it like a strategic advisor. The difference is the prompt. Here's how... [link in comments] #PromptEngineering #Productivity'
> Now write 3 new LinkedIn posts in the EXACT same style, tone, and structure, for these topics: (1) Why context matters in AI (2) The power of daily learning habits (3) AI skills for managers"

Output: Matches your style every time. Consistent across any team member who uses the same prompt.

## Side-by-Side Comparison

| | Zero-Shot | Few-Shot |
|--|----------|---------|
| Setup time | Fast — no examples needed | Slower — need to prepare examples |
| Output consistency | Variable | Highly consistent |
| Format control | Weak | Strong |
| Best for | Exploration, brainstorming | Production, standardised assets |
| Team use | Risky (inconsistent) | Excellent (same standard) |

## The Few-Shot Template

Structure your few-shot prompt like this:

> "I will give you [N] examples of [output type] in our standard format.
> Study the structure, field names, tone, and length carefully.
> [EXAMPLE 1] ... [content] ...
> [EXAMPLE 2] ... [content] ...
> Now produce [N] new [output type] for these inputs, matching the EXACT format, tone, and style above:
> Input 1: [description]
> Input 2: [description]"

## How Many Examples to Give?

**1 example:** Sets basic format. Some variation remains.
**2-3 examples:** The sweet spot for most tasks. Clear pattern, consistent output.
**4-5 examples:** Use when precision is critical (legal documents, medical reports, compliance content).
**6+ examples:** Rarely needed. Only for highly technical, structured output.

## Creating Your Personal Style Templates

One of the most powerful uses of Few-Shot prompting is training AI to write in YOUR voice.

**Step 1:** Collect 3 pieces of writing you're proud of (emails, reports, posts, proposals).
**Step 2:** Paste them as examples in a Few-Shot prompt.
**Step 3:** Ask AI to write new content "matching the exact tone, style, and structure of these examples."

Save this as a reusable prompt template. Now AI writes in your voice, not its own.

## Zero-Shot + Few-Shot Hybrid

For some tasks, you can combine both: start with Zero-Shot to explore ideas, then use Few-Shot to standardise the best output.

> Step 1 (Zero-Shot): "Give me 10 email subject line ideas for a product launch."
> Step 2 (Few-Shot): "Here are 3 subject lines from our previous campaigns that performed best: [examples]. Write 5 more in the same style."

## Summary

Zero-Shot is fast and good for exploration. Few-Shot is powerful for consistency and quality control. 2-3 examples is the sweet spot for most professional tasks. The Few-Shot template — provide examples, then ask for matched output — is one of the highest-leverage prompt patterns available. Use it to build reusable templates that write in your voice and to your standards.
    `,
    keyTerms: ["Zero-Shot", "Few-Shot", "Examples", "Anchors", "Consistency", "Style Template", "Output Standard"],
    quiz: [
      {
        q: "What is Zero-Shot prompting?",
        options: ["Prompting with no words", "Task description only, no examples", "Asking AI not to answer", "A failed prompt attempt"],
        answer: 1,
      },
      {
        q: "What is the main advantage of Few-Shot prompting?",
        options: ["It's faster", "It produces highly consistent, format-matched output", "It requires less context", "It works without internet"],
        answer: 1,
      },
      {
        q: "How many examples is the sweet spot for most Few-Shot tasks?",
        options: ["0-1", "2-3", "7-10", "20+"],
        answer: 1,
      },
      {
        q: "What do examples in Few-Shot prompting act as?",
        options: ["Restrictions", "Training data", "Anchors that set format and quality standards", "Filters"],
        answer: 2,
      },
      {
        q: "When is Zero-Shot best to use?",
        options: ["For standardised team reports", "For brainstorming, exploration, and quick drafts", "For legal documents", "For medical reports"],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "Build Your Style Template",
      description: "Find 2-3 pieces of writing you've done that you're proud of — emails, reports, LinkedIn posts, proposals, anything. Build a Few-Shot prompt: 'Here are examples of my writing style: [paste them]. Now write [new content] in the exact same tone, style, and structure.' Test it on 3 different tasks. Refine until AI consistently matches your voice. Save this as your personal writing template — you'll use it forever.",
    },
  },
  {
    id: 6,
    slug: "advanced-prompt-patterns",
    title: "Advanced Prompt Patterns for Professionals",
    emoji: "⚡",
    readTime: "13 min",
    level: "Intermediate",
    tagline: "Master the power patterns that separate expert prompt engineers from casual AI users.",
    content: `
## Beyond the Basics

You now know the foundational techniques: Persona, Context Stack, Chain-of-Thought, and Few-Shot. These alone will make you significantly more effective with AI.

But professionals use additional patterns that unlock even greater power. This chapter covers the advanced techniques that turn good AI usage into exceptional AI usage.

## Pattern 1: The Constraint Pattern

Most people tell AI what TO do. Experts also tell AI what NOT to do.

Negative constraints are often more powerful than positive instructions because they eliminate the most common failure modes before they happen.

**Template:**
> "Do [X]. Do NOT [Y]. Never [Z]. Avoid [W] at all costs."

**Example:**
> "Write a LinkedIn post about AI productivity.
> Do NOT use corporate buzzwords like 'leverage', 'synergy', or 'paradigm shift'.
> Never write more than 150 words.
> Avoid starting with 'I' — begin with a question or a bold statement.
> Do not include emojis unless they appear naturally in the examples I provide."

The negative constraints instantly eliminate the most common AI bad habits.

## Pattern 2: The Reflection Pattern

Ask AI to critique its own output before you accept it.

> "Review your previous response critically. Identify:
> 1. What is weakest or most generic in your answer?
> 2. What did you assume that I didn't actually tell you?
> 3. What important consideration did you miss?
> Then rewrite it addressing these weaknesses."

This is like asking a team member to proofread their own work before submitting. Output quality typically improves significantly on the second pass.

## Pattern 3: The Perspective Pattern

Ask AI to approach the same problem from multiple different angles.

> "Analyse this business idea from 4 different perspectives:
> 1. As an optimistic entrepreneur who sees only opportunity
> 2. As a risk-averse investor focused on downside protection
> 3. As the target customer experiencing the product
> 4. As a competitor who wants to steal the market
> Present each perspective distinctly."

This gives you a 360-degree analysis of any situation in one prompt.

## Pattern 4: The Template Fill Pattern

Give AI a template with placeholders, then ask it to fill in the blanks for multiple cases.

> "Fill in this email template for each of the 3 situations below:
>
> Template:
> Subject: [SUBJECT]
> Opening: [EMPATHETIC OPENING based on situation]
> Update: [SPECIFIC UPDATE with facts]
> Next step: [CLEAR SINGLE ACTION REQUIRED]
> Close: [PROFESSIONAL CLOSE]
>
> Situation 1: Project delayed by 2 weeks due to tech issue
> Situation 2: Client requested feature cannot be delivered in current sprint
> Situation 3: Positive — project delivered 3 days early"

This is extremely powerful for generating consistent outputs at scale.

## Pattern 5: The Escalation Pattern

Start simple, then progressively add complexity in follow-up prompts.

**Turn 1:** "Give me 10 LinkedIn post topics for an AI course."
**Turn 2:** "For topics 3, 5, and 8, expand each into a full post outline with hook, 3 key points, and call to action."
**Turn 3:** "Now write topic 3 as a full 200-word post in this style: [example]."
**Turn 4:** "Suggest 3 different hook alternatives for this post — each with a different emotional trigger."

Each turn builds on the last. You stay in control of the direction while AI does the heavy lifting at each step.

## Pattern 6: The Devil's Advocate Pattern

Use AI to stress-test your own ideas before you commit to them.

> "I am about to [decision/plan/argument]. Play devil's advocate.
> Give me:
> 1. The 5 strongest arguments AGAINST this decision
> 2. The 3 most likely ways this could fail
> 3. The questions a skeptical board member would ask
> 4. One alternative approach I haven't considered
> Be honest and critical, not supportive."

This is one of the most valuable uses of AI for decision-makers — getting genuine critical analysis before committing to a course of action.

## Pattern 7: The Audience Translator Pattern

Take one piece of content and ask AI to rewrite it for completely different audiences.

> "Take this technical explanation: [content]
> Rewrite it 3 times:
> Version A: For a 10-year-old with no technical background
> Version B: For a business executive who cares only about ROI
> Version C: For a technical engineer who wants implementation details"

This is invaluable for communication professionals, trainers, and anyone who needs to explain the same thing to different stakeholders.

## Combining Patterns

The real power comes from combining patterns. Here's a combination of Persona + CoT + Constraint + Reflection:

> "Act as a Senior Strategy Consultant with 20 years at McKinsey.
> Before recommending a strategy for my business:
> Step 1: Map the competitive landscape and key risks.
> Step 2: Identify our unique strengths vs competitors.
> Step 3: Prioritise 3 strategic options by feasibility and impact.
> Step 4: Recommend one strategy with clear reasoning.
> Constraints: No generic advice. No textbook frameworks without direct application. Be specific to my context.
> After your recommendation, identify the 2 biggest weaknesses in your own suggestion.
> My business context: [paste context]"

This single prompt combines six patterns and produces consultant-grade strategic analysis.

## Summary

Advanced prompt patterns include: Constraint (what NOT to do), Reflection (self-critique), Perspective (multi-angle analysis), Template Fill (structured batch output), Escalation (progressive complexity), Devil's Advocate (stress-testing), and Audience Translator (content adaptation). The real power comes from combining multiple patterns in a single, well-engineered prompt.
    `,
    keyTerms: ["Constraint Pattern", "Reflection Pattern", "Perspective Pattern", "Template Fill", "Escalation", "Devil's Advocate", "Audience Translator"],
    quiz: [
      {
        q: "What is the Constraint Pattern?",
        options: ["Limiting AI to short responses only", "Telling AI what NOT to do to eliminate common failure modes", "Blocking AI from certain topics", "Limiting AI usage to save credits"],
        answer: 1,
      },
      {
        q: "What does the Reflection Pattern ask AI to do?",
        options: ["Repeat the question back", "Critique its own output and rewrite it", "Reflect on its own existence", "Mirror the user's writing style"],
        answer: 1,
      },
      {
        q: "What is the Devil's Advocate Pattern used for?",
        options: ["Generating creative ideas", "Stress-testing your own decisions with critical analysis", "Writing persuasive arguments", "Playing word games with AI"],
        answer: 1,
      },
      {
        q: "What is the Escalation Pattern?",
        options: ["Making AI responses longer", "Progressively adding complexity in follow-up prompts", "Escalating complaints to AI companies", "Increasing the number of AI tools used"],
        answer: 1,
      },
      {
        q: "What does the Audience Translator Pattern do?",
        options: ["Translates content into different languages", "Rewrites the same content for different audience types", "Identifies the target audience automatically", "Translates technical jargon to plain English only"],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "Devil's Advocate Your Next Decision",
      description: "Pick a real decision you're about to make — a project plan, a business idea, a career move, any significant choice. Use the Devil's Advocate pattern: 'Give me the 5 strongest arguments against this decision, the 3 most likely failure modes, and one alternative I haven't considered.' Be honest in your prompt about what your plan is. Read the critique carefully. Did AI find something you missed? This is one of the highest-value uses of AI for professionals.",
    },
  },
  {
    id: 7,
    slug: "prompt-chaining",
    title: "Prompt Chaining — Multi-Step AI Workflows",
    emoji: "🔗",
    readTime: "12 min",
    level: "Intermediate",
    tagline: "Build powerful AI workflows where each output feeds the next step — multiplying productivity.",
    content: `
## Why Single Prompts Have Limits

A single prompt, no matter how well-crafted, can only do so much. Complex real-world tasks have multiple steps, each requiring different thinking.

Writing a business proposal requires: research → analysis → structure → first draft → refinement → formatting. Trying to do all of this in one prompt produces mediocre results across the board.

**Prompt Chaining** solves this by breaking complex tasks into a sequence of connected prompts, where each step's output feeds directly into the next.

## What is Prompt Chaining?

**Prompt Chaining** is a technique where you design a series of prompts where the output of each becomes the input of the next, creating a workflow that progressively refines and builds toward a final deliverable.

Think of it like an assembly line. Each station does one job perfectly. The product moves from station to station, getting better at each step.

## A Real Prompt Chain: LinkedIn Content System

**Step 1 — Topic Generation:**
> "Act as a Content Strategist for an AI education website. Generate 20 LinkedIn post topics for Indian professionals aged 35-55 who want to learn AI. Topics should cover: career impact, practical tools, mindset shifts, and quick wins. Format: numbered list, one line each."

**Step 2 — Topic Selection & Expansion:**
> "From the list above, select the top 5 topics with highest engagement potential for the Indian professional audience. For each, write: Topic, Why it resonates, Estimated engagement level (H/M/L), Posting day recommendation."

**Step 3 — Post Creation:**
> "Take Topic #2 from above. Write a full LinkedIn post following this structure: Hook (1 bold statement or question), Body (3 punchy insight points, 2 lines each), CTA (1 line directing to website). Total: under 200 words. No corporate buzzwords."

**Step 4 — Variation Testing:**
> "Create 3 alternative hooks for this post, each using a different emotional trigger: (A) Curiosity, (B) Fear of missing out, (C) Inspiration from a personal story."

**Step 5 — Scheduling:**
> "Create a 4-week posting schedule for all 5 posts, with optimal posting times for Indian LinkedIn users, and suggest 3 hashtags for each post."

This five-step chain produces a complete, professional content system — something a single prompt could never achieve.

## Prompt Chain for Business Proposals

> **Step 1:** "Analyse this client brief and identify: their core problem, unstated needs, budget signals, and decision-making criteria. Brief: [paste brief]"
>
> **Step 2:** "Based on your analysis, outline 3 possible solution approaches — ranked by fit with their needs, feasibility, and our strengths."
>
> **Step 3:** "Develop Approach 2 into a full proposal structure with: Executive Summary, Problem Statement, Proposed Solution, Implementation Plan, Team, Timeline, Investment."
>
> **Step 4:** "Write the Executive Summary section in full, compelling, client-focused language. Max 200 words. Lead with their problem and your unique solution."
>
> **Step 5:** "Review the Executive Summary as a skeptical procurement director. What objections would they raise? How should we address each?"

## Prompt Chain for Research & Reports

> **Step 1:** "What are the top 10 trends in [topic] in 2026? Focus on India context. Source each trend with a real-world example."
>
> **Step 2:** "Rank these trends by: relevance to Indian SMEs, implementation ease, and ROI potential. Create a prioritisation matrix."
>
> **Step 3:** "For the top 3 trends, write a detailed 200-word section for a business report: explain the trend, the India-specific opportunity, and 3 actionable recommendations."
>
> **Step 4:** "Write an executive summary of the full report in 150 words. Lead with the most important insight for a CXO audience."

## Building Your Own Prompt Chains

To design a prompt chain for any complex task:

1. **Map the full task** — what are all the steps from start to finish?
2. **Identify what each step needs** — what input does it require?
3. **Define each step's output** — what should it produce exactly?
4. **Chain the outputs** — use each step's output as the next step's input
5. **Add checkpoints** — review and approve before moving to the next step

## Saving and Reusing Prompt Chains

Once you've built a prompt chain that works, save it as a reusable template. Replace the specific content with placeholders:

> [CLIENT BRIEF] → [TOPIC] → [AUDIENCE] → [PLATFORM]

Now you have a professional workflow template you can use repeatedly.

Over time, you build a library of prompt chains for your most common complex tasks — proposals, reports, content, analysis, planning. Each chain is a productivity multiplier you can deploy in minutes.

## Summary

Prompt Chaining breaks complex tasks into a sequence of connected prompts, where each output feeds the next step. It's the technique that turns good AI usage into a professional productivity system. Design chains by mapping the full task, defining inputs and outputs for each step, and saving successful chains as reusable templates. Common high-value chains: content creation, business proposals, research reports.
    `,
    keyTerms: ["Prompt Chaining", "Workflow", "Sequential Prompts", "Assembly Line", "Template", "Multi-Step", "Productivity System"],
    quiz: [
      {
        q: "What is Prompt Chaining?",
        options: ["Using multiple AI tools at once", "A sequence of prompts where each output feeds the next step", "Chaining multiple API calls", "Repeating the same prompt multiple times"],
        answer: 1,
      },
      {
        q: "What is the best analogy for Prompt Chaining?",
        options: ["A search engine", "A conversation", "An assembly line where each station does one job", "A library"],
        answer: 2,
      },
      {
        q: "What should you do with a successful prompt chain?",
        options: ["Delete it after use", "Save it as a reusable template with placeholders", "Share it publicly", "Keep it secret"],
        answer: 1,
      },
      {
        q: "What is the first step in designing a prompt chain?",
        options: ["Write the first prompt immediately", "Map the full task from start to finish", "Find examples online", "Test with AI first"],
        answer: 1,
      },
      {
        q: "Why do single prompts have limits for complex tasks?",
        options: ["AI has a word limit", "Different steps require different types of thinking", "Single prompts cost more", "AI gets confused by complex tasks"],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "Build Your First Prompt Chain",
      description: "Pick one complex recurring task in your work — writing a report, preparing a client presentation, drafting a proposal, creating a content plan. Map out all the steps from start to finish (aim for 4-6 steps). Write a prompt for each step, using the previous step's output as input. Run the full chain and compare the result to how you'd normally approach this task. Save the chain as a template for future use.",
    },
  },
  {
    id: 8,
    slug: "prompt-library",
    title: "Building Your Personal Prompt Library",
    emoji: "📖",
    readTime: "11 min",
    level: "Advanced",
    tagline: "Create a system of reusable prompts that makes you dramatically more productive every day.",
    content: `
## Why a Prompt Library is Your Biggest Productivity Asset

The best prompt engineers don't start from scratch every time. They have a curated library of tested, refined prompts for their most common tasks — ready to deploy in seconds.

A Prompt Library is like a set of power tools. A skilled carpenter doesn't whittle a new chisel for every job. They have a kit of well-maintained tools, each optimised for specific tasks.

Your Prompt Library is your AI power toolkit.

## What Goes in a Prompt Library

A professional Prompt Library has four categories:

**1. Persona Templates**
Pre-built expert personas for your most common roles.
- "Marketing Strategist for B2B SaaS India"
- "Senior Editor who writes like a human, not an AI"
- "Financial Advisor for Indian professionals"

**2. Task Templates**
Proven prompts for your most frequent tasks, with [PLACEHOLDERS] for variable content.
- Email drafting (professional, follow-up, difficult conversations)
- Report writing (executive summary, analysis, recommendations)
- Content creation (LinkedIn posts, articles, scripts)

**3. Prompt Chains**
Multi-step workflows for complex recurring tasks.
- Content creation system (5-step)
- Business proposal system (6-step)
- Research and report system (4-step)

**4. Meta-Prompts**
Prompts that help you create better prompts.
- "Review this prompt and suggest 5 ways to improve it"
- "What context am I missing that would improve this output?"

## Your Core Prompt Library — 10 Essential Templates

**Template 1: The Universal Briefing**
> "You are [ROLE] with [X] years of experience in [DOMAIN]. You specialise in [FOCUS AREA] and think [MINDSET]. My task: [TASK]. Context: [CONTEXT]. Constraints: [CONSTRAINTS]. Output format: [FORMAT]."

**Template 2: The Email Rewriter**
> "Rewrite this email as a [Senior Professional/Empathetic Manager/Direct Executive]. Keep the core message. Remove all passive voice. Max [X] lines. Tone: [professional/warm/firm]. Original: [paste email]"

**Template 3: The Meeting Prep**
> "I have a meeting with [WHO] about [TOPIC] on [DATE]. Prepare me: (1) Their likely goals and concerns, (2) Questions I should ask, (3) Points I should make, (4) Potential objections and my responses, (5) One-line summary of my position."

**Template 4: The Document Analyser**
> "Analyse this [document type] as a [expert role]. Summarise: (1) Key points in 5 bullets, (2) What's missing or unclear, (3) Risks or red flags, (4) My recommended action. Document: [paste content]"

**Template 5: The Content Repurposer**
> "Take this [article/post/report]: [content]. Repurpose it as: (A) 3 LinkedIn posts, (B) 5 tweet-length insights, (C) 1 email newsletter section, (D) 1 WhatsApp message for my professional network."

**Template 6: The Feedback Generator**
> "I am going to give feedback on [person's work/situation]. Help me structure this as: (1) What's working well, (2) Specific improvement areas (evidence-based), (3) Concrete actionable suggestions, (4) Encouraging close. Situation: [describe]"

**Template 7: The Learning Accelerator**
> "Teach me [TOPIC] using: (1) A simple explanation in plain English, (2) A real-world analogy, (3) 3 concrete examples I can relate to, (4) The most common misconception, (5) 3 questions to test my understanding. My background: [your context]"

**Template 8: The Decision Framework**
> "I am deciding between [OPTIONS]. Analyse: (1) Key criteria for this decision, (2) How each option scores on each criterion, (3) Hidden factors I may be overlooking, (4) Short vs long-term implications, (5) Your recommendation and why. My context: [situation]"

**Template 9: The Presentation Architect**
> "Create a presentation structure for [TOPIC] for [AUDIENCE]. Include: slide titles, key point per slide, suggested visual type, speaker note hints. Length: [X] slides. Goal: [OUTCOME]. Audience knows: [BACKGROUND LEVEL]."

**Template 10: The Stress-Tester**
> "I plan to [ACTION/DECISION/LAUNCH]. Act as a critical stakeholder who wants this to succeed but sees every risk. Give me: (1) Top 5 risks, (2) Most likely failure mode, (3) Questions I can't answer yet, (4) What I should do before proceeding."

## How to Build and Maintain Your Library

**Step 1 — Start with your top 5 tasks.**
What do you do most often with AI? These become your first 5 templates.

**Step 2 — Test and refine.**
Use each template 5-10 times. Note what works and what doesn't. Improve iteratively.

**Step 3 — Organise by category.**
Use a simple folder structure or a notes app: Personas / Task Templates / Chains / Meta-Prompts.

**Step 4 — Review monthly.**
As you learn more techniques, update your templates. Delete ones you never use.

**Step 5 — Share with your team.**
A team prompt library creates consistent, high-quality AI output across everyone. This becomes a strategic asset.

## Summary

A Prompt Library is your collection of tested, reusable prompts for your most common tasks. It has four categories: Persona Templates, Task Templates, Prompt Chains, and Meta-Prompts. The 10 essential templates cover most professional use cases. Build your library starting with your top 5 tasks, test and refine iteratively, and share it with your team to multiply the value.
    `,
    keyTerms: ["Prompt Library", "Templates", "Reusable Prompts", "Placeholders", "Meta-Prompts", "Prompt Chains", "Team Library"],
    quiz: [
      {
        q: "What is a Prompt Library?",
        options: ["A website with AI tools", "A curated collection of tested, reusable prompts", "A book about prompting", "An AI that writes prompts for you"],
        answer: 1,
      },
      {
        q: "What are the four categories of a professional Prompt Library?",
        options: ["Inputs, Outputs, Chains, Results", "Persona Templates, Task Templates, Prompt Chains, Meta-Prompts", "Questions, Answers, Formats, Examples", "Simple, Medium, Complex, Advanced"],
        answer: 1,
      },
      {
        q: "What is a Meta-Prompt?",
        options: ["A very long prompt", "A prompt that helps you create better prompts", "A prompt about AI itself", "A prompt template header"],
        answer: 1,
      },
      {
        q: "What is the benefit of sharing a prompt library with your team?",
        options: ["It saves money on AI subscriptions", "It creates consistent, high-quality AI output across everyone", "It automatically assigns tasks", "It trains the AI on your company data"],
        answer: 1,
      },
      {
        q: "What should you do first when building your Prompt Library?",
        options: ["Copy templates from the internet", "Start with your top 5 most frequent tasks", "Create all 10 templates immediately", "Ask AI to build the library for you"],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "Build Your Prompt Library — First 5",
      description: "Create your personal Prompt Library today. Open a notes app or document. List your 5 most frequent AI tasks. For each, write a template prompt with [PLACEHOLDERS] for variable content. Use the templates from this chapter as your starting point and adapt them to your specific role and industry. Test each template once today. Over the next week, refine them based on the outputs. By the end of the week, you'll have a productivity system that saves you hours every day.",
    },
  },
  {
    id: 9,
    slug: "ai-in-your-profession",
    title: "Prompt Engineering in Your Profession",
    emoji: "💼",
    readTime: "12 min",
    level: "Advanced",
    tagline: "Apply prompt engineering to your specific industry and role for immediate, tangible results.",
    content: `
## Making It Real for Your Work

Abstract techniques become powerful when applied to your specific job. This chapter maps prompt engineering to the most common professional roles in India — so you can start getting immediate results in your actual work.

## For Managers and Leaders

**Team Communication:**
> "Act as an experienced people manager known for clarity and empathy. I need to communicate [DIFFICULT MESSAGE] to my team. Draft a message that: (1) Acknowledges the situation honestly, (2) Explains the reasoning, (3) Focuses on what we can control, (4) Ends with a clear path forward. Situation: [describe]"

**Performance Reviews:**
> "Act as a Senior HR Business Partner. Help me write a balanced performance review for a team member who excels at [STRENGTHS] but struggles with [AREAS TO IMPROVE]. Tone: constructive, specific, forward-looking. Include 3 development goals. Context: [role and context]"

**Strategic Planning:**
> "Act as a Management Consultant with 20 years of experience with Indian companies. Analyse this business situation using the SWOT framework, then suggest 3 strategic priorities for the next quarter, ranked by impact vs effort. Situation: [describe]"

## For Sales and Business Development

**Prospecting Emails:**
> "Act as a Senior B2B Sales professional with deep expertise in [INDUSTRY]. Write a cold outreach email for [PROSPECT COMPANY]. Research context: [what you know about them]. Our product: [description]. Unique value: [what makes us different]. Keep it under 100 words. No corporate jargon. End with one specific, low-commitment CTA."

**Proposal Writing:**
> "Act as a Senior Bid Manager. Transform these bullet points into a compelling executive summary for a proposal to [CLIENT]. Make it client-focused, benefits-led, and end with a clear statement of our unique value. Points: [paste bullets]"

**Objection Handling:**
> "A prospect said: '[OBJECTION]'. Act as a top sales trainer. Give me: (1) Why they're really saying this, (2) 3 ways to acknowledge the concern without conceding, (3) A pivot to value, (4) A closing question."

## For Marketing Professionals

**Content Strategy:**
> "Act as a Content Marketing Director for [INDUSTRY] in India. Create a 90-day content strategy for [PLATFORM] targeting [AUDIENCE]. Include: weekly themes, content types, posting frequency, engagement tactics, and 3 KPIs to track success."

**Campaign Briefs:**
> "Act as a Creative Director. Write a campaign brief for [CAMPAIGN GOAL]. Include: campaign insight, big idea, key message, tone of voice, channels, and 3 creative territories to explore."

**SEO Content:**
> "Act as an SEO Content Specialist. Write a 600-word article on [TOPIC] optimised for the keyword '[KEYWORD]'. Target audience: [describe]. Include: H2 subheadings, natural keyword placement, one FAQ at the end."

## For Finance and Operations

**Financial Analysis:**
> "Act as a Senior Financial Analyst. Review these numbers: [paste data]. Identify: (1) Key trends, (2) Red flags, (3) Comparison to industry benchmarks if known, (4) 3 recommendations for the finance team."

**Process Improvement:**
> "Act as a Lean Six Sigma Black Belt. Analyse this process: [describe process]. Identify: (1) Waste and inefficiency, (2) Bottlenecks, (3) Automation opportunities, (4) Top 3 improvement recommendations ranked by ROI."

**Risk Assessment:**
> "Act as a Risk Management Consultant. For this initiative: [describe], create a risk register covering: Risk, Likelihood (H/M/L), Impact (H/M/L), Mitigation Strategy, Owner."

## For Trainers and Educators

**Course Design:**
> "Act as an Instructional Designer with experience in corporate training. Design a 1-hour training module on [TOPIC] for [AUDIENCE]. Include: Learning objectives (3), Module structure with timings, Activity types, Assessment method."

**Explanation Generation:**
> "Explain [COMPLEX CONCEPT] to [SPECIFIC AUDIENCE] using: (1) A plain English definition, (2) A real-world analogy they can relate to, (3) 3 concrete examples from their daily life, (4) One common misconception to avoid."

**Quiz Creation:**
> "Create 10 multiple-choice questions to test understanding of [TOPIC]. Each question: one clearly correct answer, three plausible distractors, difficulty range from beginner to advanced. Include answer key."

## Building Your Role-Specific Prompt Kit

**Step 1:** List your 10 most time-consuming tasks.
**Step 2:** For each, draft a prompt template using Persona + Context + Task + Format + Constraints.
**Step 3:** Test each template 5 times and refine.
**Step 4:** Calculate the time saved per week.

Most professionals find they save 5-10 hours per week once their prompt kit is built. At ₹1,000/hour value of your time, that's ₹5,000-10,000 of value created weekly — from prompt templates.

## Summary

Prompt Engineering has direct, immediate applications in every professional role. Managers use it for communication and strategy. Sales teams use it for prospecting and proposals. Marketing uses it for content and campaigns. Finance uses it for analysis and risk. Trainers use it for course design and explanation. Build your role-specific prompt kit by listing your 10 most time-consuming tasks and creating a tested template for each.
    `,
    keyTerms: ["Professional Application", "Role-Specific Prompts", "Managers", "Sales", "Marketing", "Finance", "Trainers", "Prompt Kit"],
    quiz: [
      {
        q: "What is the best way to start applying prompt engineering to your job?",
        options: ["Learn all techniques before applying anything", "List your 10 most time-consuming tasks and build templates for them", "Copy templates from the internet", "Wait for AI tools to improve further"],
        answer: 1,
      },
      {
        q: "For a sales professional, which prompt pattern is most useful for cold outreach?",
        options: ["Chain-of-Thought only", "Persona + Context + Constraint (no jargon, specific CTA)", "Zero-Shot with no examples", "Reflection Pattern only"],
        answer: 1,
      },
      {
        q: "What framework should a manager use for strategic planning prompts?",
        options: ["CO-STAR", "Few-Shot", "SWOT + prioritisation by impact vs effort", "Template Fill Pattern"],
        answer: 2,
      },
      {
        q: "How much time do most professionals save per week once their prompt kit is built?",
        options: ["30 minutes", "1-2 hours", "5-10 hours", "20+ hours"],
        answer: 2,
      },
      {
        q: "What makes a role-specific prompt kit valuable as a team asset?",
        options: ["It's expensive to build", "It creates consistent, high-quality output across all team members", "It replaces the need for training", "It automatically updates with new AI capabilities"],
        answer: 1,
      },
    ],
    dailyTask: {
      title: "The 10-Task Audit",
      description: "List the 10 tasks in your job that take the most time or mental energy. For each, note: (1) Could AI help with this? (2) What would the ideal prompt look like? Spend 20 minutes building a prompt for your single most time-consuming task. Test it today. Measure how much time it saves. This audit is the foundation of your professional prompt engineering practice.",
    },
  },
  {
    id: 10,
    slug: "prompt-engineering-career",
    title: "Prompt Engineering as a Career & Income Source",
    emoji: "💰",
    readTime: "13 min",
    level: "Advanced",
    tagline: "Turn your prompt engineering skills into consulting income, course revenue, and career advancement.",
    content: `
## You Now Have a Rare Skill

Completing this course puts you ahead of 95% of professionals when it comes to AI usage. Most people type vague queries and accept mediocre output. You now build structured, multi-layered prompts that produce expert-level results.

This skill has real market value. Let's talk about how to monetise it.

## Career Path 1: Prompt Engineer / AI Specialist

**The role:** Companies are hiring dedicated professionals to design, test, and maintain prompt systems for their AI-powered products.

**Salaries in India (2026):**
- Junior Prompt Engineer: ₹6-12 LPA
- Senior Prompt Engineer: ₹15-30 LPA
- AI Product Specialist: ₹25-50 LPA
- Freelance/Consultant: ₹5,000-25,000 per day

**Where to look:**
- LinkedIn Jobs: "Prompt Engineer", "AI Specialist", "LLM Engineer"
- Startups building AI products (Zoho, Freshworks, Razorpay, Postman)
- Global companies with India teams (Microsoft, Google, Amazon, Accenture)

**How to get hired:**
Build a portfolio of prompt systems. Show before/after comparisons. Demonstrate measurable improvements — "Reduced content creation time by 70%" is more powerful than any certification.

## Career Path 2: AI Consultant for Businesses

**The opportunity:** Thousands of Indian small and medium businesses want to use AI but don't know how. They need someone to help them implement it.

**What you can offer:**
- AI Audit: Identify where AI can save the business time and money (₹25,000-75,000 per engagement)
- Prompt System Setup: Build custom prompt libraries for their team (₹50,000-2,00,000)
- AI Training Workshops: Train their staff on effective AI usage (₹15,000-50,000 per day)
- Ongoing Advisory: Monthly retainer to keep their AI systems updated (₹20,000-60,000/month)

**How to find clients:**
- LinkedIn outreach to SME owners and department heads
- Local business associations and chambers of commerce
- Referrals from your first 2-3 clients
- Speaking at local business events on "AI for Your Business"

**Your pitch:**
> "I help [INDUSTRY] businesses save 10+ hours per week by implementing custom AI workflows. I charge [FEE] for a complete implementation. Most clients see ROI within the first month."

## Career Path 3: Creating and Selling AI Courses

This is what you're already doing. Let's make it more strategic.

**Your unfair advantage:** You've learned Prompt Engineering AND you've built a live course website. You have the content, the platform, and now the marketing knowledge.

**Revenue streams from your course:**

**1. Course Access (Free + Premium)**
Keep the free version as your lead magnet. Create a ₹999-2,999 premium version with:
- Additional advanced chapters
- Downloadable prompt template library (your full 100+ prompt library)
- Live Q&A sessions monthly
- Certificate of completion

**2. Cohort-Based Training**
Run a 4-week live Prompt Engineering cohort on Zoom.
- 12-15 participants × ₹5,000-8,000 = ₹60,000-1,20,000 per cohort
- Teach 2-3 cohorts per year
- Participants get lifetime access to your course site

**3. Corporate Training**
One company, 20 employees, 1-day workshop:
- ₹80,000-2,00,000 per workshop
- 4 workshops per year = ₹3,20,000-8,00,000

**4. Consulting Pipeline**
Your free course attracts learners. Some become consulting clients. The course is your lead generation engine.

## Building Your Personal Brand as an AI Expert

The fastest path to consulting clients and speaking opportunities is becoming known as an AI expert in your city or industry.

**LinkedIn Strategy (4 posts per week):**
- Monday: Teach one prompt technique with a real example
- Wednesday: Share a case study — "How I used AI to solve [problem]"
- Friday: Share an industry insight about AI trends
- Sunday: Personal reflection — your AI learning journey

**Speaking:**
- Offer to speak at local professional associations
- Guest post on industry publications
- Host a free webinar on "AI Productivity for [YOUR INDUSTRY]"

**The 90-Day Personal Brand Plan:**
- Week 1-4: Post consistently, build your LinkedIn following
- Week 5-8: Launch your first free webinar, collect testimonials
- Week 9-12: Reach out to 10 potential consulting clients with a specific offer

## Your Prompt Engineering Portfolio

Create a portfolio document that shows:

1. **Before/After Comparisons** — same task, generic prompt vs your engineered prompt
2. **Time Savings** — real measurements from your own work
3. **Prompt Library Sample** — show 10-15 of your best templates
4. **Case Studies** — specific problems you solved using AI
5. **Results** — measurable outcomes (time saved, quality improved, revenue generated)

This portfolio is your evidence. It converts skeptical prospects into paying clients.

## Your 30-Day Action Plan

**Week 1:** Finish building your prompt library (50 templates minimum)
**Week 2:** Create 3 LinkedIn posts per week documenting your AI journey
**Week 3:** Identify 5 businesses in your network that could benefit from AI consulting. Reach out to 2.
**Week 4:** Design your premium course offering or first workshop. Set a price. Tell 10 people.

## Summary

Prompt Engineering is a monetisable career skill. Three paths: (1) Get hired as an AI specialist (₹6-50 LPA), (2) Consult for businesses (₹25,000-2,00,000 per engagement), (3) Create and sell AI education (courses, workshops, corporate training). Build your personal brand on LinkedIn, create a portfolio with before/after comparisons, and pursue your first client or employer within 30 days. You are now ready.
    `,
    keyTerms: ["Prompt Engineer Career", "AI Consulting", "Corporate Training", "Personal Brand", "Portfolio", "LinkedIn Strategy", "Monetisation"],
    quiz: [
      {
        q: "What is the salary range for a Senior Prompt Engineer in India in 2026?",
        options: ["₹3-6 LPA", "₹6-12 LPA", "₹15-30 LPA", "₹1-3 LPA"],
        answer: 2,
      },
      {
        q: "What is the best way to find AI consulting clients for businesses?",
        options: ["Cold calling randomly", "LinkedIn outreach to SME owners + referrals from first clients", "Posting on job boards", "Waiting for clients to approach you"],
        answer: 1,
      },
      {
        q: "What is a 'Cohort-Based Training' revenue model?",
        options: ["Training one student at a time", "A group of 12-15 participants in a live, time-bound course", "Automated pre-recorded courses", "One-on-one coaching"],
        answer: 1,
      },
      {
        q: "What should a Prompt Engineering portfolio include?",
        options: ["Your CV and references only", "Before/after comparisons, time savings, prompt library sample, case studies, results", "A list of AI tools you use", "Only your educational certificates"],
        answer: 1,
      },
      {
        q: "What is the recommended LinkedIn posting frequency for building an AI personal brand?",
        options: ["Once a month", "Once a week", "4 posts per week", "Every day"],
        answer: 2,
      },
    ],
    dailyTask: {
      title: "Your First Consulting Pitch",
      description: "Write your personal AI consulting pitch in 100 words or less. Include: who you help, what specific result you deliver, and what you charge. Example: 'I help Indian SMEs save 10+ hours per week by setting up custom AI workflows for their teams. I offer a 1-day AI audit for ₹25,000 and a full implementation starting at ₹75,000. Most clients see full ROI in 30 days.' Now share this pitch with one person in your network today — a former colleague, a friend who runs a business, or a LinkedIn connection. Feedback from a real person is worth more than 10 hours of planning.",
    },
  },
];

export const getPEChapter = (slug) => peChapters.find((c) => c.slug === slug);
