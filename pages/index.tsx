import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import Navbar from "@/components/Navbar";
import ToDoForm from "@/components/ToDoForm";

function index() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <Navbar />
      <ToDoForm />
      {/* <a href="/api/auth/login">Login</a> */}
    </>
  );
}

export default index;
