import { describe, it, expect } from "vitest";
import { searchArticles } from "./api";

describe("NYT API Test", () => {
  it("should search articles successfully", async () => {
    const query = "criminal";
    try {
      const articles = await searchArticles(query);

      expect(Array.isArray(articles)).toBe(true);
      expect(articles.length).toBeGreaterThan(0);

      const firstArticle = articles[0];
      expect(firstArticle).toHaveProperty("_id");
      expect(firstArticle).toHaveProperty("headline");
      expect(firstArticle.headline.main).toBeTruthy();

      console.log(`✅ SUCCESS: Found ${articles.length} articles`);
      console.log(`✅ First article: "${firstArticle.headline.main}"`);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error("❌ Test failed:", errorMessage);
      throw error;
    }
  }, 15000);

  it("should have valid API configuration", () => {
    const apiKey = import.meta.env.VITE_NYT_API_KEY;

    expect(apiKey).toBeDefined();
    expect(apiKey).not.toBe("");
    expect(typeof apiKey).toBe("string");

    console.log("✅ API Key configured correctly");
  });
});
