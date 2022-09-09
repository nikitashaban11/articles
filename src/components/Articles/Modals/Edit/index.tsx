import { useState } from "react";
import {
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

interface IProps {
  title: string;
  description: string;
  onConfirm: (editedTitle: string) => void;
  onClose: () => void;
}

const EditArticleModal = ({
  title,
  description,
  onConfirm,
  onClose,
}: IProps) => {
  const [editedTitle, setEditedTitle] = useState(title);

  const onConfirmHandler = () => {
    onConfirm(editedTitle);
  };

  return (
    <>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
        <TextField
          margin="dense"
          label="New title"
          fullWidth
          variant="standard"
          value={editedTitle}
          onChange={(event) => setEditedTitle(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onConfirmHandler}>Confirm</Button>
      </DialogActions>
    </>
  );
};

export default EditArticleModal;
