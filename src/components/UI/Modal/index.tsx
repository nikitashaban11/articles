import { PropsWithChildren } from "react";
import { Dialog } from "@mui/material";

interface IProps extends PropsWithChildren {
  open: boolean;
  handleClose: () => void;
}

const Modal = ({ open, handleClose, children }: IProps) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      {children}
    </Dialog>
  );
};

export default Modal;
