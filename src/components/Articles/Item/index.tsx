import { PropsWithChildren } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Link,
  Box,
} from "@mui/material";

import { IArticle } from "../../../types";

interface IProps extends PropsWithChildren {
  article: IArticle;
}

const ArticleItem = ({ article, children }: IProps) => {
  return (
    <Card sx={{ marginBottom: 5 }}>
      <CardActionArea>
        <Link href={article.url}>
          <Box sx={{ display: "flex" }}>
            <CardMedia
             sx={{ width: "auto" }}
              component="img"
              height="200"
              image={article.imageUrl}
              alt={article.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
            </CardContent>
          </Box>
        </Link>
      </CardActionArea>
      <CardActions>{children}</CardActions>
    </Card>
  );
};

export default ArticleItem;
