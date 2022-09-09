import { Pagination as MaterialPagination, Box } from "@mui/material";

interface IProps {
  articlesLength: number;
  postPerPage: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({ articlesLength, postPerPage, onPageChange }: IProps) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", padding: 5 }}>
      <MaterialPagination
        onChange={(_, page) => onPageChange(page)}
        count={Math.ceil(articlesLength / postPerPage)}
      />
    </Box>
  );
};

export default Pagination;
