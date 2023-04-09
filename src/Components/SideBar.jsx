import React from "react";
import { Box } from "@mui/material";
function SideBar() {
  return (
    <Box bgcolor={"lightblue"} flex={1} p={2} sx={{ display: { xs: "none", md: "block" } }}>
      SideBar
    </Box>
  );
}

export default SideBar;
