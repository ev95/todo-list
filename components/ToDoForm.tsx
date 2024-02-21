import ToDoList from "./ToDoList";
import React, { useState } from "react";
import ToDoItem from "@/Interfaces/ToDoItem";
import { Box, Button, TextField, Typography } from "@mui/material";

function ToDoForm() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [list, setStrings] = useState<ToDoItem[]>([]);

  // Add elements to the array
  const addString = (newString: string) => {
    const newItem: ToDoItem = {
      text: newString,
      isDone: false,
    };
    setStrings((prevStrings) => [...prevStrings, newItem]);
  };

  const handleClick = () => {
    if (text.trim()) {
      addString(text);
      setText("");
      setError("");
    } else {
      setError("Please enter the text");
    }
  };

  const handleUpdateList = (updatedList) => {
    setStrings(updatedList);
  };

  return (
    <Box sx={{ marginTop: "80px" }}>
      <form
        style={{
          display: "flex",
          alignItems: "flex-start",
        }}
      >
        <Box>
          <TextField
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text"
            variant="outlined"
          />
          <Typography variant="subtitle2" color="red">
            {error}
          </Typography>
        </Box>
        <Button
          sx={{ ml: 3, height: "55px", width: "150px" }}
          onClick={handleClick}
          variant="outlined"
        >
          {" "}
          Add
        </Button>
      </form>
      <Box>
        <ToDoList list={list} updateList={handleUpdateList} />
      </Box>
    </Box>
  );
}

export default ToDoForm;
