import { PropsWithChildren } from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Link,
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
          <CardMedia
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
        </Link>
      </CardActionArea>
      <CardActions>{children}</CardActions>
    </Card>
  );
};

export default ArticleItem;
