import { fetchJson } from "../utils/http";
import { IArticle } from "../types";

const baseUrl =
  "https://storage.googleapis.com/aller-structure-task/article_list.json";

export const getArticles = () => fetchJson<IArticle[]>(baseUrl);
