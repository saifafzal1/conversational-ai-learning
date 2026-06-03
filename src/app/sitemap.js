import { chapters } from "@/data/curriculum";

export default function sitemap() {
  const baseUrl = "https://conversationalai.learn";

  const chapterUrls = chapters.map((ch) => ({
    url: `${baseUrl}/course/${ch.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/course`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/daily-task`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.5 },
    ...chapterUrls,
  ];
}
