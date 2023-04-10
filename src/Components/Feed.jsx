import React from "react";
import { Box, Button, Stack } from "@mui/material";
import CardPost from "./CardPost";
import { PostsData } from "../Asset/PostsData";
function Feed() {
  return (
    <Box flex={4} p={2}>
      <Stack display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"} gap={2}>
        {PostsData.map((post) => (
          <CardPost post={post} key={post.id} />
        ))}
        <Button variant="outlined" color="primary">
          Show More
        </Button>
      </Stack>
    </Box>
  );
}

export default Feed;
