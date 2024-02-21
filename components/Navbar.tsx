import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import React from "react";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5">To Do List</Typography>
        <Button
          href="#text-buttons"
          variant="contained"
          sx={{
            marginLeft: "auto",
            backgroundColor: "white",
            color: "#1976d2",
            ":hover": {
              color: "inherit",
            },
          }}
        >
          Login
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
