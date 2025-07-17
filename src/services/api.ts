import axios from "axios";

const API_KEY = import.meta.env.VITE_NYT_API_KEY;

export const searchArticles = async (query: string) => {
  const response = await axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
    params: {
      q: query,
      "api-key": API_KEY,
    },
  });

  return response.data.response.docs;
};
