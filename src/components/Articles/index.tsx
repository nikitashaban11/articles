import { useEffect, useState } from "react";

import ArticlesList from "./List";
import { useArticles } from "../../api/hooks/useArticles";
import { IArticle } from "../../types";
import Pagination from "../UI/Pagination";
import Spinner from "../UI/Spinner";
import { ISelectedArticle } from "./types";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Articles = () => {
  const [cachedArticles, setCachedArticles] = useLocalStorage<IArticle[] | []>(
    "articles",
    []
  );
  const articlesFetchEnabled = !cachedArticles.length;
  const [articles, setArticles] = useState<IArticle[] | []>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, status } = useArticles(articlesFetchEnabled);

  useEffect(() => {
    if (status === "success" && cachedArticles.length === 0) {
      setArticles(data);
    } else {
      setArticles(cachedArticles);
    }
  }, [status, data, cachedArticles]);

  if (isLoading && articlesFetchEnabled) {
    return <Spinner />;
  }

  const postPerPage = 10;
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentArticles = articles.slice(indexOfFirstPost, indexOfLastPost);

  const onPageChangedHandler = (page: number) => {
    setCurrentPage(page);
  };

  const deleteArticleHandler = (title: string) => {
    setArticles((prevArticles) => {
      const filteredArticles = prevArticles.filter(
        (article) => article.title !== title
      );

      setCachedArticles(filteredArticles);
      return filteredArticles;
    });
  };

  const editArticleHandler = (editedArticle: ISelectedArticle) => {
    if (editedArticle.index === null) {
      return;
    }
    const editedArticleIndex =
      currentPage === 1
        ? editedArticle.index
        : currentPage * postPerPage - postPerPage + editedArticle.index;

    const updatedArticles = [...articles];
    const updatedArticle = {
      ...updatedArticles[editedArticleIndex],
      title: editedArticle.title,
    };

    updatedArticles[editedArticleIndex] = updatedArticle;

    setCachedArticles(updatedArticles);
    setArticles(updatedArticles);
  };

  return (
    <>
      <ArticlesList
        articles={currentArticles}
        onDelete={deleteArticleHandler}
        onEdit={editArticleHandler}
      />
      <Pagination
        articlesLength={articles.length}
        postPerPage={postPerPage}
        onPageChange={onPageChangedHandler}
      />
    </>
  );
};

export default Articles;
