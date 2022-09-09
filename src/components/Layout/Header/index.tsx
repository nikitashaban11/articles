import AppBar from "@mui/material/AppBar";

import { Toolbar, Typography } from "@mui/material/";
import ArticleIcon from "@mui/icons-material/Article";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <ArticleIcon sx={{ marginRight: 2 }} />
        <Typography variant="h6">Articles</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
