import React from "react";
import { Fab, IconButton, Tooltip } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function AddBtn({ openModal }) {
  return (
    <Tooltip title="Add" onClick={() => openModal()} sx={{ position: "fixed", bottom: 20, left: { xs: "10%", md: 30 } }}>
      <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
    </Tooltip>
  );
}

export default AddBtn;
