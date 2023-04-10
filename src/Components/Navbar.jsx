import React, { useState } from "react";
import { Fade, Button, AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from "@mui/material";
import { Mail, NotificationsActive, Facebook } from "@mui/icons-material";

function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });

  const SearchBox = styled("div")(({ theme }) => ({
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
    border: "solid 1.5px white",
  }));
  const IconsBox = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          SocialMedia
        </Typography>
        <Facebook fontSize="large" sx={{ display: { xs: "block", sm: "none" } }} />
        <SearchBox>
          <InputBase placeholder="Search..." />
        </SearchBox>
        <IconsBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <NotificationsActive />
          </Badge>
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            sx={{ width: "30", height: "45", objectFit: "cover" }}
            onClick={() => setOpen(true)}
          />
        </IconsBox>
        <UserBox>
          <Avatar
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            sx={{ width: "30", height: "45", objectFit: "cover" }}
            onClick={() => setOpen(true)}
          />
          <Typography variant="h6">Maria</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
