import React from "react";
import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import { userData } from "../Asset/UserData";
import PostList from "./LastPost";
import UserList from "./UserList";
function RightBar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }} height={"auto"}>
      <Box position={"fixed"} display={"flex"} flexDirection={"column"} justifyContent={"flex-start"} alignItems={"flex-start"} height={"100vh"}>
        <Typography variant="h6" fontWeight={500}>
          OnLine Friends
        </Typography>
        <AvatarGroup max={5}>
          {userData.map((user) => (
            <Avatar alt={user.first_name} key={user.id} src={user.avatar} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" mt={2} fontWeight={500}>
          Latest Post Updated
        </Typography>
        <PostList />
        <Typography mt={2} variant="h6" fontWeight={500}>
          Latest Converstion
        </Typography>
        <UserList />
      </Box>
    </Box>
  );
}

export default RightBar;
