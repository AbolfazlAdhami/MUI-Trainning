import React, { useState } from "react";

// Import Components
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";
import RightBar from "../Components/RightBar";

// MUI Import
import { Avatar, Box, Button, Modal, Stack, TextField, ThemeProvider, Typography, createTheme } from "@mui/material";
import styled from "styled-components";
import AddBtn from "../Components/Add";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import EmojiEmotionsOutlinedIcon from "@mui/icons-material/EmojiEmotionsOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
// MUI Import

// Coustomize Components By MUI and StyledComponents
const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const BoxIcons = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "1rem",
});

const UserBox = styled(Box)({
  width: 500,
  height: 450,
  padding: 25,

  borderRadius: 5,
  display: "flex",
  flexDirection: "column",
  gap: 5,
  justifyContent: "flex-start",
});
// Coustomize Components By MUI and StyledComponents

function App() {
  const [open, setOpen] = useState(false);
  const openHandler = () => setOpen(true);
  const closeHandler = () => setOpen(false);

  const [mode, setMode] = useState("light");
  const changeTheme = () => setMode(mode == "light" ? "dark" : "light");
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent={"space-evenly"} mt={2}>
          <SideBar themeChange={changeTheme} mode={mode} />
          <Feed />
          <RightBar />
        </Stack>
        <AddBtn openModal={openHandler} />

        {/* MODAL Components */}
        <StyledModal open={open} aria-labelledby="parent-modal-title" aria-describedby="parent-modal-description">
          <UserBox bgcolor={"background.default"} color={"text.primary"}>
            <Typography variant="h6" color="GrayText" textAlign={"center"}>
              Create New Post
            </Typography>
            <Stack display={"flex"} flexDirection="row" gap={2} alignItems={"center"}>
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                sx={{ width: 45, height: 45, objectFit: "cover" }}
              />
              <Typography variant="body1">Maria</Typography>
            </Stack>
            <Stack display={"flex"} flexDirection={"column"} gap={3}>
              <TextField id="standard-basic" label="Title" variant="standard" />
              <TextField id="outlined-textarea" label="Describtion" placeholder="Text..." multiline maxRows={10} rows={4} />
              <BoxIcons>
                <EmojiEmotionsOutlinedIcon color="warning" fontSize="medium" />
                <AddPhotoAlternateIcon color="primary" fontSize="medium" />
                <VideoCallIcon color="secondary" fontSize="medium" />
                <PersonAddIcon color="error" fontSize="medium" />
              </BoxIcons>
            </Stack>
            <Stack display={"flex"} flexDirection={"row"} justifyContent={"center"} gap={5} mt={2}>
              <Button color="error" variant="contained" onClick={closeHandler}>
                Discard
              </Button>
              <Button color="success" variant="contained" onClick={closeHandler}>
                Submit
              </Button>
            </Stack>
          </UserBox>
        </StyledModal>
        {/* MODAL Components */}
      </Box>
    </ThemeProvider>
  );
}

export default App;
