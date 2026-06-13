import { chapters } from "@/data/curriculum";
import { peChapters } from "@/data/promptEngineering";
import { agentsChapters } from "@/data/agentsCourse";
import { agentNetworksChapters } from "@/data/agentNetworksCourse";
import { blogPosts } from "@/data/blogPosts";

export default function sitemap() {
  const baseUrl = "https://conversationalai.learn";

  const chapterUrls = chapters.map((ch) => ({
    url: `${baseUrl}/course/${ch.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const peChapterUrls = peChapters.map((ch) => ({
    url: `${baseUrl}/prompt-engineering/${ch.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const agentsChapterUrls = agentsChapters.map((ch) => ({
    url: `${baseUrl}/create-agents/${ch.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const networksChapterUrls = agentNetworksChapters.map((ch) => ({
    url: `${baseUrl}/agent-networks/${ch.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${baseUrl}/course`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/prompt-engineering`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/create-agents`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/agent-networks`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/community`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/daily-task`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    ...blogUrls,
    ...chapterUrls,
    ...peChapterUrls,
    ...agentsChapterUrls,
    ...networksChapterUrls,
  ];
}
