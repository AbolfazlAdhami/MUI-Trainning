import React from "react";
import Navbar from "../Components/Navbar";
import SideBar from "../Components/SideBar";
import Feed from "../Components/Feed";
import RightBar from "../Components/RightBar";
import { Box, Stack } from "@mui/material";
import { ThemeProvider } from "styled-components";
function App() {
  return (
    // <ThemeProvider></ThemeProvider>
    <Box>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={"space-evenly"} mt={2}>
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
    </Box>
  );
}

export default App;
