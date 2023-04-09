import React from "react";
import { Box } from "@mui/material";
function RightBar() {
  return (
    <Box bgcolor={"lightpink"} flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      RightBar
    </Box>
  );
}

export default RightBar;
