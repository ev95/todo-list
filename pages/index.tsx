import React from "react";
import Navbar from "@/components/Navbar";
import ToDoForm from "@/components/ToDoForm";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Box, Typography } from "@mui/material";

function index() {
  const { user, error, isLoading } = useUser();

  return (
    <>
      <Navbar />
      <Box marginTop={9}>
        {user ? (
          <>
            <Typography variant="h6"> Hello {user?.name}</Typography>
            <ToDoForm />
          </>
        ) : (
          <Typography variant="h6">
            {" "}
            Please login to create To Do List
          </Typography>
        )}
      </Box>
    </>
  );
}

export default index;
