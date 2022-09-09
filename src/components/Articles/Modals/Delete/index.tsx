import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface IProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onClose: () => void;
}

const DeleteArticleModal = ({
  title,
  description,
  onConfirm,
  onClose,
}: IProps) => {
  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirm}>Delete</Button>
      </DialogActions>
    </>
  );
};

export default DeleteArticleModal;
