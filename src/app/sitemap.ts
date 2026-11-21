import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://harshawashingmachineservice.in";
  return [
    {
      url: baseUrl,
      lastModified: "2026-11-21",
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
