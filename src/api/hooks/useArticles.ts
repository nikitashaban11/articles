import { useQuery } from "@tanstack/react-query";

import { getArticles } from "..";

export const useArticles = (enabled: boolean) => {
  return useQuery(["articles"], () => getArticles(), { enabled });
};
