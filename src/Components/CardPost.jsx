import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Bookmark, BookmarkAddOutlined, BookmarkBorder, Favorite, FavoriteBorder, ShareOutlined } from "@mui/icons-material";
import { Checkbox } from "@mui/material";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function CardPost({ post }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <Card style={{ height: "20%" }}>
      <CardHeader
        avatar={
          <>
            {post.Avatar.AvatarUrl == null ? (
              <Avatar sx={{ bgcolor: post.Avatar.bgColor }} aria-label="recipe">
                {post.Avatar.Char}
              </Avatar>
            ) : (
              <Avatar alt={post.name} src={post.Avatar.AvatarUrl} />
            )}
          </>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={`${post.name}`}
        subheader={`${post.data}`}
      />
      <CardMedia component="img" style={{ objectFit: "cover" }} height="350" image={`${post.PostImage}`} alt={`${post.PostAlt}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.text1}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite color="error" />} />
        </IconButton>
        <IconButton aria-label="add to List">
          <Checkbox {...label} icon={<BookmarkBorder />} checkedIcon={<Bookmark color="primary" />} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>See All:</Typography>
          <Typography paragraph>{post.paragraph1}</Typography>
          <Typography paragraph>{post.paragraph2}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
