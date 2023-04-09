import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import { userData } from "../Asset/UserData";
import PostList from "./LastPost";
function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight={500}>
          OnLine Friends
        </Typography>
        <AvatarGroup max={5}>
          {userData.map((user) => (
            <Avatar alt={user.first_name} key={user.id} src={user.avatar} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight={500}>
          Last Post Updated
        </Typography>
        <PostList />
      </Box>
    </Box>
  );
}

export default RightBar;
