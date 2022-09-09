import { useState } from "react";
import ArticleItem from "../Item";
import { IArticle } from "../../../types";

import { IconButton } from "@mui/material/";
import { Delete, Edit } from "@mui/icons-material";
import Modal from "../../UI/Modal";
import DeleteArticleModal from "../Modals/Delete";
import EditArticleModal from "../Modals/Edit";
import { ISelectedArticle, ModalType } from "../types";

interface IProps {
  articles: IArticle[];
  onDelete: (title: string) => void;
  onEdit: (selectedArticle: ISelectedArticle) => void;
}

const ArticleList = ({ articles, onDelete, onEdit }: IProps) => {
  const [modal, setModal] = useState<ModalType | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<ISelectedArticle>({
    title: "",
    index: null,
  });

  const closeModalHandler = () => {
    setModal(null);
  };

  const openModalHandler = (
    modal: ModalType,
    selectedArticle: ISelectedArticle
  ) => {
    setSelectedArticle(selectedArticle);
    setModal(modal);
  };

  const onDeleteConfirmed = () => {
    setModal(null);
    onDelete(selectedArticle.title);
  };

  const onEditConfirmed = (editedTitle: string) => {
    setModal(null);
    onEdit({ title: editedTitle, index: selectedArticle.index });
  };

  return (
    <>
      <Modal open={!!modal} handleClose={closeModalHandler}>
        {modal === "delete" && (
          <DeleteArticleModal
            title={selectedArticle.title}
            description="Are you sure you want to delete this article?"
            onConfirm={onDeleteConfirmed}
            onClose={closeModalHandler}
          />
        )}
        {modal === "edit" && (
          <EditArticleModal
            title={selectedArticle.title}
            description="To edit current title please enter new one"
            onConfirm={onEditConfirmed}
            onClose={closeModalHandler}
          />
        )}
      </Modal>
      {articles.map((article, i) => (
        <ArticleItem key={article.title} article={article}>
          <IconButton
            size="large"
            onClick={() =>
              openModalHandler("edit", { title: article.title, index: i })
            }
          >
            <Edit color="primary" />
          </IconButton>
          <IconButton
            size="large"
            onClick={() =>
              openModalHandler("delete", { title: article.title, index: i })
            }
          >
            <Delete color="error" />
          </IconButton>
        </ArticleItem>
      ))}
    </>
  );
};

export default ArticleList;
