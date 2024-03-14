import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

{
  /* <Link href="/api/auth/logout" */
}

function Navbar() {
  const { user, error, isLoading } = useUser();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5">To Do List</Typography>
        <Button
          href={!user ? "/api/auth/login" : "/api/auth/logout"}
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
          {!user ? "Login" : "Logout"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
