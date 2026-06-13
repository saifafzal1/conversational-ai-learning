export const agentNetworksChapters = [
  {
    id: 1,
    slug: "claude-orchestrator-networks",
    emoji: "🎼",
    title: "Claude Orchestrator Networks",
    tagline: "Build a network of Claude agents where one orchestrator delegates tasks to specialized sub-agents in real time.",
    level: "Intermediate",
    readTime: "22 min",
    keyTerms: [
      "Orchestrator Agent",
      "Sub-Agent",
      "Agent Handoff",
      "Task Delegation",
      "Pipeline Architecture",
      "Parallel Agents",
      "Anthropic SDK",
    ],
    content: `## What Is a Multi-Agent Network?

A single AI agent is powerful — but it has limits. A **multi-agent network** is a system where several AI agents collaborate: one decides what to do, others specialize in doing it. Think of it like a company: you have a manager who delegates to specialists, and each specialist returns their result to the manager.

With Claude, this pattern is called **Orchestrator + Sub-Agents**:

- The **Orchestrator** receives the user's goal and breaks it into sub-tasks
- **Sub-Agents** are individual Claude instances with a focused system prompt and a single job
- The Orchestrator collects results, synthesizes them, and returns the final answer

> This architecture lets you handle complex, multi-step goals that would overwhelm a single prompt.

## Why Not Just Use One Agent?

Single agents struggle when a task requires:
- **Different expertise at each step** (research vs. writing vs. fact-checking)
- **Parallel work** (running multiple searches simultaneously)
- **Quality control** (one agent critiques another's output)
- **Very long workflows** (each step would exceed context limits)

Multi-agent networks solve all of these by distributing work across specialized roles.

## The Three Core Patterns

### Pattern 1 — Sequential Pipeline

Agents run one after another. Each agent's output becomes the next agent's input.

**Example: Content Factory**
1. Research Agent gathers facts on a topic
2. Writing Agent drafts an article from those facts
3. Editor Agent reviews the draft for clarity and errors

This is the simplest pattern and is easy to debug because you can inspect each step's output.

### Pattern 2 — Parallel Fan-Out

The Orchestrator sends the same task to multiple agents simultaneously and waits for all results before synthesizing.

**Example: Competitive Analysis**
- Agent A researches Claude
- Agent B researches ChatGPT
- Agent C researches Gemini

All three run at the same time. The Orchestrator merges their findings into a single comparison report. This cuts total time by up to 3x.

### Pattern 3 — Hierarchical (Manager of Managers)

For very large systems, orchestrators can themselves delegate to sub-orchestrators, who then manage their own agents. This scales to enterprise-level workflows.

## Building a Sequential Claude Agent Pipeline

Here is a complete working example in Python. You need the "anthropic" package and an API key. This pipeline: takes a user topic, has a researcher gather key facts, then passes those facts to a writer to produce a final article.

### Installation

\`\`\`bash
pip install anthropic
export ANTHROPIC_API_KEY="your-key-here"
\`\`\`

### The Pipeline Code

\`\`\`python
import anthropic

client = anthropic.Anthropic()

def run_agent(system_prompt: str, user_message: str) -> str:
    """Runs a single Claude agent with a given role and input."""
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=1024,
        system=system_prompt,
        messages=[{"role": "user", "content": user_message}]
    )
    return response.content[0].text

def research_agent(topic: str) -> str:
    system = """You are a research specialist. When given a topic,
    return 5 key facts as a numbered list. Be concise and factual.
    Format: 1. [fact] 2. [fact] ..."""
    return run_agent(system, f"Research this topic: {topic}")

def writing_agent(topic: str, research: str) -> str:
    system = """You are a professional writer. Given a topic and research facts,
    write a short, engaging 3-paragraph article for a non-technical audience.
    Start with a hook, develop the middle, end with a takeaway."""
    return run_agent(system, f"Topic: {topic}\n\nResearch:\n{research}")

def editor_agent(article: str) -> str:
    system = """You are a senior editor. Review the article for:
    1. Clarity (is it easy to understand?)
    2. Accuracy (does it make sense?)
    3. Engagement (is it interesting?)
    Return the improved article with a brief editor's note at the top."""
    return run_agent(system, f"Edit this article:\n\n{article}")

def run_content_pipeline(topic: str) -> dict:
    """Runs the full 3-agent content pipeline."""
    print(f"[Orchestrator] Starting pipeline for: {topic}")

    print("[Research Agent] Gathering facts...")
    facts = research_agent(topic)

    print("[Writing Agent] Drafting article...")
    draft = writing_agent(topic, facts)

    print("[Editor Agent] Reviewing draft...")
    final = editor_agent(draft)

    return {
        "topic": topic,
        "research": facts,
        "draft": draft,
        "final_article": final
    }

# Run it
result = run_content_pipeline("How Claude AI works")
print("\n=== FINAL ARTICLE ===")
print(result["final_article"])
\`\`\`

## Building a Parallel Fan-Out Network

This version runs multiple agents at the same time using Python threads, which is much faster for independent tasks.

\`\`\`python
import anthropic
import threading

client = anthropic.Anthropic()

def research_platform(platform_name: str, results: dict):
    """Research a single AI platform and store result in shared dict."""
    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=512,
        system="You are a research analyst. Return 3 bullet points about the AI platform.",
        messages=[{"role": "user", "content": f"Analyse: {platform_name}"}]
    )
    results[platform_name] = response.content[0].text

def orchestrator(platforms: list) -> str:
    """Runs all platform research agents in parallel, then synthesizes."""
    results = {}
    threads = []

    # Fan-out: start all agents simultaneously
    for platform in platforms:
        t = threading.Thread(target=research_platform, args=(platform, results))
        threads.append(t)
        t.start()

    # Wait for all agents to finish
    for t in threads:
        t.join()

    # Synthesize results
    synthesis_input = "\n\n".join(
        [f"=== {p} ===\n{results[p]}" for p in platforms]
    )

    response = client.messages.create(
        model="claude-opus-4-6",
        max_tokens=1024,
        system="You are a synthesis expert. Given research on multiple AI platforms, write a concise comparison table and a 2-sentence recommendation.",
        messages=[{"role": "user", "content": synthesis_input}]
    )
    return response.content[0].text

# Run parallel research across 3 platforms
platforms = ["Claude by Anthropic", "ChatGPT by OpenAI", "Gemini by Google"]
comparison = orchestrator(platforms)
print(comparison)
\`\`\`

## Integrating Into a Next.js App

You can expose this pipeline as an API route so your web app can trigger multi-agent workflows.

\`\`\`javascript
// src/app/api/agent-pipeline/route.js
import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function runAgent(systemPrompt, userMessage) {
  const response = await client.messages.create({
    model: "claude-opus-4-6",
    max_tokens: 1024,
    system: systemPrompt,
    messages: [{ role: "user", content: userMessage }],
  });
  return response.content[0].text;
}

export async function POST(request) {
  const { topic } = await request.json();

  // Agent 1: Research
  const facts = await runAgent(
    "You are a research specialist. List 5 key facts as a numbered list.",
    "Research: " + topic
  );

  // Agent 2: Write
  const article = await runAgent(
    "You are a writer. Write a 3-paragraph article based on the research provided.",
    "Topic: " + topic + "\n\nFacts:\n" + facts
  );

  // Agent 3: Edit
  const finalArticle = await runAgent(
    "You are an editor. Improve this article for clarity and engagement. Add a short editor note at the top.",
    article
  );

  return Response.json({ topic, facts, article, finalArticle });
}
\`\`\`

## Key Design Principles

- **One role per agent**: Give each agent a tight, specific system prompt. Avoid multi-role agents.
- **Pass structured output**: Have agents return JSON or numbered lists so the next agent can parse them reliably.
- **Add a critic agent**: Always consider adding a final agent whose only job is to check the output quality.
- **Handle failures gracefully**: If one sub-agent fails, the orchestrator should retry or skip gracefully.
- **Log each agent's output**: During development, print every intermediate result so you can debug the chain.`,
    quiz: [
      {
        question: "What is the role of the Orchestrator in a multi-agent network?",
        options: [
          "It stores data for all agents to read",
          "It receives the user goal, breaks it into tasks, and delegates to sub-agents",
          "It connects to external APIs on behalf of agents",
          "It only handles error recovery when agents fail",
        ],
        answer: 1,
        explanation: "The Orchestrator is the manager: it understands the overall goal, decomposes it into sub-tasks, delegates to specialized agents, and synthesizes their results.",
      },
      {
        question: "Which pattern is fastest when agents can work independently on the same type of task?",
        options: [
          "Sequential Pipeline",
          "Hierarchical",
          "Parallel Fan-Out",
          "Single Agent",
        ],
        answer: 2,
        explanation: "Parallel Fan-Out launches all agents simultaneously. Since they don't depend on each other, total time equals the slowest single agent, not the sum of all agents.",
      },
      {
        question: "In the Python pipeline example, what does the Editor Agent receive as input?",
        options: [
          "The original user topic only",
          "The research facts directly",
          "The draft article produced by the Writing Agent",
          "A merged version of facts and topic",
        ],
        answer: 2,
        explanation: "The pipeline is sequential: Research Agent → Writing Agent → Editor Agent. The Editor Agent receives the draft article output by the Writing Agent.",
      },
      {
        question: "Why should each agent have a tight, specific system prompt?",
        options: [
          "To reduce the cost of API calls",
          "To make debugging easier and avoid role confusion",
          "Because Claude only reads the first 100 tokens",
          "Multi-role prompts are not supported by the API",
        ],
        answer: 1,
        explanation: "Tight, focused system prompts make agents predictable and easier to debug. When an agent tries to do too many things, its outputs become inconsistent.",
      },
      {
        question: "What Python feature is used to run agents in parallel in the Fan-Out example?",
        options: [
          "asyncio.gather()",
          "multiprocessing.Pool()",
          "threading.Thread()",
          "concurrent.futures.ProcessPoolExecutor()",
        ],
        answer: 2,
        explanation: "The example uses threading.Thread() to start each agent on its own thread. All threads run concurrently and the orchestrator calls .join() to wait for all of them.",
      },
    ],
    dailyTask: {
      title: "Build Your First 2-Agent Pipeline",
      description: "Install the Anthropic Python package and write a 2-agent pipeline: Agent 1 takes a topic and returns 3 bullet-point facts. Agent 2 takes those facts and writes a 2-sentence summary. Print both outputs. Try topics like 'large language models' or 'AI in healthcare'.",
    },
  },
  {
    id: 2,
    slug: "openai-agent-swarms",
    emoji: "🐝",
    title: "OpenAI Agent Swarms",
    tagline: "Use the OpenAI Agents SDK to build intelligent swarms where agents hand off tasks to each other dynamically.",
    level: "Intermediate",
    readTime: "20 min",
    keyTerms: [
      "OpenAI Agents SDK",
      "Agent Handoff",
      "Triage Agent",
      "Specialist Agent",
      "Tool Calling",
      "Swarm Pattern",
      "Guardrail Agent",
    ],
    content: `## OpenAI's Agent Swarm Architecture

OpenAI introduced the **Agents SDK** (formerly called Swarm) to make multi-agent systems easy to build. The core idea: agents can **hand off** control to other agents mid-conversation. This is fundamentally different from Claude's orchestrator model.

In OpenAI's model:
- A **Triage Agent** is the first point of contact — it reads the user's request and decides which specialist to call
- **Specialist Agents** are experts in a narrow domain (billing, tech support, sales, etc.)
- Any agent can hand off to any other agent at any point
- The current agent's conversation context is passed along with the handoff

> Think of it like a phone tree at a company: you call the main line (triage), get transferred to the right department (specialist), and the specialist already knows what you said to the receptionist.

## Installing the OpenAI Agents SDK

\`\`\`bash
pip install openai-agents
export OPENAI_API_KEY="your-key-here"
\`\`\`

## Your First Agent Handoff

This example builds a customer support system with three specialist agents and one triage agent that routes between them.

\`\`\`python
from agents import Agent, Runner

# Specialist Agents
billing_agent = Agent(
    name="Billing Agent",
    instructions="""You handle billing and payment questions only.
    Be empathetic and solution-oriented.
    If asked about something outside billing, politely say so.""",
    model="gpt-4o",
)

tech_agent = Agent(
    name="Tech Support Agent",
    instructions="""You handle technical issues: login problems,
    app bugs, performance issues, and account access.
    Ask clarifying questions when needed.""",
    model="gpt-4o",
)

sales_agent = Agent(
    name="Sales Agent",
    instructions="""You handle product enquiries, pricing, and upgrades.
    Be enthusiastic but never pushy.
    Always highlight the value, not just the price.""",
    model="gpt-4o",
)

# Triage Agent — routes to the right specialist
triage_agent = Agent(
    name="Triage Agent",
    instructions="""You are the first point of contact.
    Read the user's message carefully and hand off to the right agent:
    - Billing questions → Billing Agent
    - Technical issues → Tech Support Agent
    - Product or pricing questions → Sales Agent
    Do NOT answer questions yourself. Only route them.""",
    model="gpt-4o",
    handoffs=[billing_agent, tech_agent, sales_agent],
)

# Run a conversation
result = Runner.run_sync(triage_agent, "My invoice shows a double charge from last month")
print(result.final_output)
\`\`\`

## Adding Tools to Agents

Agents become much more powerful when they can call functions (tools). Here a Tech Support agent can check account status by calling a real function.

\`\`\`python
from agents import Agent, Runner, function_tool

@function_tool
def check_account_status(user_id: str) -> str:
    """Check the status of a user account by their ID."""
    # In a real app, this would query your database
    mock_accounts = {
        "USR001": "active",
        "USR002": "suspended",
        "USR003": "trial",
    }
    status = mock_accounts.get(user_id, "not found")
    return f"Account {user_id} status: {status}"

@function_tool
def reset_password(user_id: str) -> str:
    """Trigger a password reset email for a user."""
    return f"Password reset email sent to the address on file for {user_id}."

tech_agent_with_tools = Agent(
    name="Tech Support Agent",
    instructions="""You are a technical support specialist.
    You have access to tools: check_account_status and reset_password.
    Always verify account status before attempting fixes.
    Ask for the user ID if not provided.""",
    model="gpt-4o",
    tools=[check_account_status, reset_password],
)

result = Runner.run_sync(
    tech_agent_with_tools,
    "I cannot log in. My user ID is USR002."
)
print(result.final_output)
\`\`\`

## Building a Research Swarm with Parallel Agents

The Agents SDK also supports running multiple agents in parallel. This example builds a research swarm: a coordinator fans out three researcher agents, waits for all results, then synthesizes them.

\`\`\`python
import asyncio
from agents import Agent, Runner

researcher = Agent(
    name="Researcher",
    instructions="""You are a research specialist.
    Given a subtopic, return 3 concise bullet-point facts.
    Be factual, not opinionated.""",
    model="gpt-4o-mini",
)

synthesizer = Agent(
    name="Synthesizer",
    instructions="""You receive research from multiple agents on related subtopics.
    Write a coherent 4-sentence summary that connects the findings.
    End with one practical implication.""",
    model="gpt-4o",
)

async def run_research_swarm(main_topic: str, subtopics: list) -> str:
    # Fan out: run all researcher agents in parallel
    tasks = [
        Runner.run(researcher, f"Research this subtopic: {sub}")
        for sub in subtopics
    ]
    results = await asyncio.gather(*tasks)

    # Collect all research output
    combined = "\n\n".join([
        f"[{subtopics[i]}]\n{results[i].final_output}"
        for i in range(len(subtopics))
    ])

    # Synthesize
    synthesis = await Runner.run(
        synthesizer,
        f"Synthesize this research about '{main_topic}':\n\n{combined}"
    )
    return synthesis.final_output

# Run the swarm
subtopics = [
    "history and origin of large language models",
    "how transformers process language",
    "real-world applications of LLMs in 2025"
]
result = asyncio.run(run_research_swarm("Large Language Models", subtopics))
print(result)
\`\`\`

## Guardrail Agents — Safety as a Sub-Agent

A powerful pattern unique to multi-agent systems: add a **Guardrail Agent** that checks every output before it reaches the user. This gives you a safety layer without modifying your main agents.

\`\`\`python
from agents import Agent, Runner

main_agent = Agent(
    name="Main Agent",
    instructions="Answer the user's question helpfully and thoroughly.",
    model="gpt-4o",
)

guardrail_agent = Agent(
    name="Safety Guardrail",
    instructions="""You review AI-generated responses before they reach users.
    Check for: harmful content, incorrect facts, or inappropriate tone.
    If the response is safe: reply with SAFE: [original response]
    If it needs fixing: reply with FIXED: [your corrected version]
    Never pass through harmful content.""",
    model="gpt-4o-mini",
)

async def safe_response(user_input: str) -> str:
    # Run main agent
    main_result = await Runner.run(main_agent, user_input)
    raw_response = main_result.final_output

    # Pass through guardrail
    guard_result = await Runner.run(
        guardrail_agent,
        f"Review this response:\n\n{raw_response}"
    )
    return guard_result.final_output

import asyncio
response = asyncio.run(safe_response("Explain how neural networks learn"))
print(response)
\`\`\`

## Integrating OpenAI Agent Swarms in Next.js

\`\`\`javascript
// src/app/api/agent-swarm/route.js
// Note: OpenAI Agents SDK is Python-only. For Next.js,
// replicate the pattern using the standard OpenAI chat API.

import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function runSpecialistAgent(systemPrompt, userMessage) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      { role: "system", content: systemPrompt },
      { role: "user", content: userMessage },
    ],
    max_tokens: 512,
  });
  return response.choices[0].message.content;
}

async function triageAgent(userMessage) {
  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "system",
        content: "Classify this message into ONE category: BILLING, TECH, or SALES. Reply with only the category word.",
      },
      { role: "user", content: userMessage },
    ],
    max_tokens: 10,
  });
  return response.choices[0].message.content.trim().toUpperCase();
}

const specialists = {
  BILLING: "You handle billing and payment questions. Be empathetic and solution-focused.",
  TECH: "You handle technical issues and account access problems. Ask clarifying questions.",
  SALES: "You handle product queries and pricing. Be helpful and highlight value.",
};

export async function POST(request) {
  const { message } = await request.json();
  const category = await triageAgent(message);
  const systemPrompt = specialists[category] || specialists.TECH;
  const reply = await runSpecialistAgent(systemPrompt, message);
  return Response.json({ category, reply });
}
\`\`\`

## When to Use OpenAI Swarms vs. Claude Pipelines

- **Use Claude Pipelines** when your workflow is linear and predictable (step 1 → step 2 → step 3)
- **Use OpenAI Swarms** when routing is dynamic and you do not know in advance which specialist will handle a request
- **Mix both** in production: use Claude for content pipelines, OpenAI swarms for customer-facing routing`,
    quiz: [
      {
        question: "What is the key difference between OpenAI's handoff model and Claude's orchestrator model?",
        options: [
          "OpenAI agents cost more per API call",
          "Claude agents cannot use tools while OpenAI agents can",
          "OpenAI agents hand off control dynamically mid-conversation; Claude's orchestrator delegates upfront",
          "OpenAI swarms only work with GPT-4o, not older models",
        ],
        answer: 2,
        explanation: "In Claude's model, the Orchestrator decides upfront what to delegate. In OpenAI's model, any agent can hand off to any other agent at any point during the conversation, making routing dynamic.",
      },
      {
        question: "What does a Triage Agent do in an OpenAI swarm?",
        options: [
          "It processes all user requests directly without delegating",
          "It reads the request and routes it to the right specialist agent",
          "It monitors other agents for errors",
          "It stores conversation history for all agents",
        ],
        answer: 1,
        explanation: "The Triage Agent is the entry point. It reads the user's request, classifies it, and hands off to the appropriate specialist. It does not answer questions itself.",
      },
      {
        question: "What Python keyword makes the research swarm run agents in parallel?",
        options: [
          "threading.Thread()",
          "subprocess.run()",
          "asyncio.gather()",
          "concurrent.run()",
        ],
        answer: 2,
        explanation: "asyncio.gather() runs multiple async tasks concurrently. All researcher agents start at the same time and the swarm waits for all of them to finish before synthesizing.",
      },
      {
        question: "What is the purpose of a Guardrail Agent?",
        options: [
          "To prevent other agents from being created",
          "To review and filter agent outputs before they reach the user",
          "To handle billing and compliance questions only",
          "To restart failed agents automatically",
        ],
        answer: 1,
        explanation: "A Guardrail Agent sits between the main agent and the user. It reviews outputs for safety, accuracy, and tone — and either passes them through or corrects them before delivery.",
      },
      {
        question: "In Next.js, why do we replicate the swarm pattern using standard OpenAI chat.completions instead of the Agents SDK?",
        options: [
          "The Agents SDK is more expensive to use",
          "The Agents SDK is Python-only and cannot run in Node.js/Next.js",
          "The standard API has higher rate limits",
          "The Agents SDK does not support handoffs",
        ],
        answer: 1,
        explanation: "The OpenAI Agents SDK is a Python library. For Next.js (which runs JavaScript/TypeScript), you replicate the routing and specialist pattern manually using the standard openai npm package.",
      },
    ],
    dailyTask: {
      title: "Build a 3-Agent Triage System",
      description: "Using the OpenAI API (or Claude), create a triage function that classifies user messages into BILLING, TECH, or GENERAL categories. Then write 3 short specialist response handlers. Test with at least 5 different user messages and verify each is routed correctly. Print which agent handled each request.",
    },
  },
  {
    id: 3,
    slug: "autogen-agent-conversations",
    emoji: "🗣️",
    title: "AutoGen Agent Conversations",
    tagline: "Use Microsoft AutoGen to create agents that talk to each other in structured group chats with roles, rules, and real tool access.",
    level: "Advanced",
    readTime: "25 min",
    keyTerms: [
      "AutoGen",
      "GroupChat",
      "AssistantAgent",
      "UserProxyAgent",
      "Agent Roles",
      "Conversation Termination",
      "Nested Chats",
    ],
    content: `## What Makes AutoGen Different?

Microsoft's **AutoGen** framework takes a fundamentally different approach to multi-agent systems. Instead of orchestrators and handoffs, AutoGen creates **conversational agents that talk to each other** — just like a team in a meeting.

You define:
- **Who is in the room** (which agents)
- **Each agent's role and personality** (via system prompts)
- **The rules of the meeting** (turn-taking, termination conditions)
- **What tools they can use** (code execution, web search, file access)

Then you start the conversation with a topic and watch the agents debate, critique, and collaborate until they reach a conclusion.

> AutoGen is ideal when the solution requires genuine back-and-forth deliberation, not just a fixed pipeline.

## Installing AutoGen

\`\`\`bash
pip install pyautogen
\`\`\`

You also need to configure your LLM. AutoGen supports OpenAI, Azure OpenAI, Anthropic, and local models. Here we use OpenAI:

\`\`\`python
import os
os.environ["OPENAI_API_KEY"] = "your-key-here"

llm_config = {
    "model": "gpt-4o",
    "api_key": os.environ["OPENAI_API_KEY"],
}
\`\`\`

## Your First AutoGen Conversation: Two Agents Debating

The simplest setup: two agents, one user proxy that starts the conversation.

\`\`\`python
import autogen

llm_config = {"model": "gpt-4o", "api_key": "your-key-here"}

# Agent 1: The Optimist
optimist = autogen.AssistantAgent(
    name="Optimist",
    system_message="""You are an enthusiastic AI optimist.
    You believe AI will solve major world problems within 10 years.
    Present compelling arguments with specific examples.
    Respond concisely — 2-3 sentences per reply.""",
    llm_config=llm_config,
)

# Agent 2: The Skeptic
skeptic = autogen.AssistantAgent(
    name="Skeptic",
    system_message="""You are a thoughtful AI skeptic.
    You question grand AI claims with evidence and historical context.
    Present counterarguments with specific risks.
    Respond concisely — 2-3 sentences per reply.""",
    llm_config=llm_config,
)

# The UserProxyAgent initiates the conversation
user_proxy = autogen.UserProxyAgent(
    name="Moderator",
    human_input_mode="NEVER",  # fully automated
    max_consecutive_auto_reply=0,  # starts conversation only
    is_termination_msg=lambda msg: "DEBATE OVER" in msg.get("content", ""),
)

# Start a 2-on-2 debate
optimist.initiate_chat(
    skeptic,
    message="AI will cure cancer within 5 years. Discuss.",
    max_turns=4,
)
\`\`\`

## Building a Full Group Chat

Group chats allow 3+ agents to converse. AutoGen automatically manages turn-taking. Here is a product team reviewing a feature proposal:

\`\`\`python
import autogen

llm_config = {"model": "gpt-4o", "api_key": "your-key-here"}

# Product Manager
pm = autogen.AssistantAgent(
    name="Product_Manager",
    system_message="""You are a product manager focused on user value.
    Evaluate ideas based on: user need, market fit, and business impact.
    Be decisive. End your analysis with a VERDICT: APPROVE, REVISE, or REJECT.""",
    llm_config=llm_config,
)

# Engineer
engineer = autogen.AssistantAgent(
    name="Engineer",
    system_message="""You are a senior software engineer.
    Evaluate ideas for: technical feasibility, implementation complexity, and risks.
    Estimate effort: LOW, MEDIUM, or HIGH. Flag potential technical blockers.""",
    llm_config=llm_config,
)

# Designer
designer = autogen.AssistantAgent(
    name="Designer",
    system_message="""You are a UX designer focused on user experience.
    Evaluate ideas for: usability, clarity, accessibility, and user delight.
    Suggest specific UX improvements when you see problems.""",
    llm_config=llm_config,
)

# Facilitator (UserProxy manages the session)
facilitator = autogen.UserProxyAgent(
    name="Facilitator",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=1,
    is_termination_msg=lambda msg: "FINAL DECISION" in msg.get("content", ""),
    system_message="You run the meeting. After all agents speak, summarize with FINAL DECISION:",
)

# Create group chat
groupchat = autogen.GroupChat(
    agents=[facilitator, pm, engineer, designer],
    messages=[],
    max_round=6,
    speaker_selection_method="round_robin",  # each agent speaks in turn
)

manager = autogen.GroupChatManager(groupchat=groupchat, llm_config=llm_config)

# Start the review
facilitator.initiate_chat(
    manager,
    message="""Feature proposal: Add an AI chatbot to our checkout page
    that proactively offers discount codes when it detects hesitation.
    Please evaluate this from your perspective.""",
)
\`\`\`

## Dynamic Speaker Selection

Instead of round-robin, let AutoGen's LLM decide who speaks next based on context. This creates more natural conversations:

\`\`\`python
groupchat = autogen.GroupChat(
    agents=[facilitator, pm, engineer, designer],
    messages=[],
    max_round=8,
    speaker_selection_method="auto",  # LLM picks most relevant speaker
)
\`\`\`

With "auto" mode, if the PM raises a technical concern, AutoGen will likely pick the Engineer to respond next rather than the Designer.

## Agents That Write and Execute Code

AutoGen's most powerful feature: agents can write code, execute it, and feed the result back into the conversation. The UserProxyAgent runs the code in a local sandbox.

\`\`\`python
import autogen

llm_config = {
    "model": "gpt-4o",
    "api_key": "your-key-here",
}

# This agent writes Python code to answer questions
data_analyst = autogen.AssistantAgent(
    name="Data_Analyst",
    system_message="""You are a data analyst.
    When asked a data question, write Python code to answer it.
    Always use print() to output your final answer.
    Wrap code in a python code block.""",
    llm_config=llm_config,
)

# This agent executes the code (sandboxed in Docker or locally)
code_runner = autogen.UserProxyAgent(
    name="Code_Runner",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=5,
    code_execution_config={
        "work_dir": "agent_workspace",
        "use_docker": False,  # set True for isolated execution
    },
    is_termination_msg=lambda msg: "TASK COMPLETE" in msg.get("content", ""),
)

# Ask a data question — the agent will write AND run the code
code_runner.initiate_chat(
    data_analyst,
    message="Calculate the compound interest on $10,000 at 7% annually for 20 years. Show year-by-year growth.",
)
\`\`\`

## Nested Chats: Agents Consulting Sub-Teams

AutoGen supports **nested chats** — an agent in the main group chat can spin up a private conversation with other agents to resolve a specific sub-task, then bring the result back.

\`\`\`python
import autogen

llm_config = {"model": "gpt-4o", "api_key": "your-key-here"}

# A specialist sub-team for legal review
legal_reviewer = autogen.AssistantAgent(
    name="Legal_Reviewer",
    system_message="You review content for legal risks. Flag any liability issues.",
    llm_config=llm_config,
)

compliance_checker = autogen.AssistantAgent(
    name="Compliance_Checker",
    system_message="You check content against GDPR and data privacy regulations.",
    llm_config=llm_config,
)

# Main writing agent that consults the sub-team
writer = autogen.AssistantAgent(
    name="Writer",
    system_message="""You write marketing copy. When you produce a draft,
    hand it to the review team. Incorporate their feedback before finalising.""",
    llm_config=llm_config,
)

proxy = autogen.UserProxyAgent(
    name="Coordinator",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=0,
)

# Register nested chat: when Writer produces output, consult legal sub-team
writer.register_nested_chats(
    [
        {"recipient": legal_reviewer, "summary_method": "last_msg", "max_turns": 2},
        {"recipient": compliance_checker, "summary_method": "last_msg", "max_turns": 2},
    ],
    trigger=proxy,
)

proxy.initiate_chat(
    writer,
    message="Write a 3-sentence marketing blurb for our new AI data analytics product that processes customer purchase data.",
)
\`\`\`

## Connecting AutoGen to Claude or Other LLMs

AutoGen is not limited to OpenAI. You can use Claude as the brain for any agent:

\`\`\`python
import autogen

# Claude config
claude_config = {
    "model": "claude-opus-4-6",
    "api_key": "your-anthropic-key",
    "api_type": "anthropic",
}

# Mix Claude and GPT-4o in the same group chat
claude_strategist = autogen.AssistantAgent(
    name="Claude_Strategist",
    system_message="You are a long-term strategic thinker. Focus on 5-year implications.",
    llm_config={"config_list": [claude_config]},
)

gpt_tactician = autogen.AssistantAgent(
    name="GPT_Tactician",
    system_message="You are an execution expert. Focus on immediate next steps.",
    llm_config={"config_list": [{"model": "gpt-4o", "api_key": "your-openai-key"}]},
)

proxy = autogen.UserProxyAgent(
    name="Coordinator",
    human_input_mode="NEVER",
    max_consecutive_auto_reply=0,
)

# Two different LLMs deliberating together
claude_strategist.initiate_chat(
    gpt_tactician,
    message="Our startup needs to expand into Europe. How should we approach this?",
    max_turns=4,
)
\`\`\`

## When to Use AutoGen

- You need **genuine deliberation** (not just a pipeline) — agents should challenge each other
- The problem has **no fixed structure** — you do not know upfront how many steps it will take
- You want **code execution** as part of the agent workflow
- You are building a **team simulation** (product team, research team, editorial board)
- You need **cross-LLM collaboration** (Claude + GPT-4o working together)

## AutoGen vs. Claude Pipelines vs. OpenAI Swarms

| Feature | Claude Pipelines | OpenAI Swarms | AutoGen GroupChat |
|---|---|---|---|
| Pattern | Sequential steps | Dynamic handoffs | Group conversation |
| Best for | Content generation | Customer routing | Team deliberation |
| Code execution | No (needs custom) | Limited | Yes (built-in) |
| Multi-LLM | No | No | Yes |
| Predictability | High | Medium | Lower (emergent) |
| Setup complexity | Low | Medium | High |`,
    quiz: [
      {
        question: "What fundamentally distinguishes AutoGen from Claude Pipelines and OpenAI Swarms?",
        options: [
          "AutoGen only works with GPT-4 models",
          "AutoGen agents converse with each other in a group chat, not just pass outputs",
          "AutoGen is faster because it uses local models",
          "AutoGen does not support tool use",
        ],
        answer: 1,
        explanation: "AutoGen creates agents that genuinely converse in a group setting — debating, critiquing, and refining ideas together. Pipelines pass outputs sequentially; swarms use handoffs; AutoGen uses structured group conversation.",
      },
      {
        question: "What does speaker_selection_method='auto' do in an AutoGen GroupChat?",
        options: [
          "It selects the agent alphabetically",
          "It rotates through agents in a fixed order",
          "An LLM decides which agent is most relevant to speak next",
          "The user manually selects the next speaker",
        ],
        answer: 2,
        explanation: "With 'auto', AutoGen uses an LLM to read the conversation and decide which agent should respond next based on relevance. This creates more natural, context-aware conversations than round-robin.",
      },
      {
        question: "What special capability does the UserProxyAgent provide when code_execution_config is set?",
        options: [
          "It allows agents to browse the web",
          "It runs Python code written by AssistantAgents and feeds results back into the chat",
          "It restricts agents from producing harmful content",
          "It stores all agent outputs in a database",
        ],
        answer: 1,
        explanation: "UserProxyAgent with code_execution_config acts as a code runner. When an AssistantAgent writes Python code, the UserProxyAgent executes it in a local or Docker sandbox and returns the output to the conversation.",
      },
      {
        question: "What is a Nested Chat in AutoGen?",
        options: [
          "A chat session inside a web browser",
          "An agent that routes messages to child agents for a sub-task, then returns the result to the main chat",
          "A backup conversation when the main chat fails",
          "A way to embed AutoGen inside a Next.js component",
        ],
        answer: 1,
        explanation: "Nested chats let an agent in the main group spin up a private sub-conversation with specialist agents. Once resolved, the result comes back into the main group chat. Useful for deep-dive reviews or specialist consultations.",
      },
      {
        question: "Which unique feature does AutoGen offer that the other frameworks in this course do not?",
        options: [
          "The ability to use any API key",
          "Running Python code execution as part of agent collaboration",
          "Handoffs between agents",
          "Support for streaming responses",
        ],
        answer: 1,
        explanation: "AutoGen has built-in code execution via UserProxyAgent. Agents can write code, the proxy runs it in a sandbox, and the output flows back into the conversation automatically — without any extra plumbing.",
      },
    ],
    dailyTask: {
      title: "Run a 3-Agent Group Chat Review",
      description: "Install pyautogen and create a 3-agent group chat with a Planner, a Critic, and a Summarizer. Give them a proposal to review (e.g., 'Should our company adopt AI for customer service?'). Set max_round to 6 and speaker_selection_method to round_robin. Run the chat and read the full conversation. Which agent's arguments were most persuasive?",
    },
  },
];

export function getAgentNetworksChapter(slug) {
  return agentNetworksChapters.find((ch) => ch.slug === slug) || null;
}
