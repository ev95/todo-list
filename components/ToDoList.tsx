import {
  List,
  ListItem,
  Checkbox,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import React, { useState } from "react";
import ToDoItem from "@/Interfaces/ToDoItem";
import CloseIcon from "@mui/icons-material/Close";

function ToDoList({ list, updateList }) {
  const [checked, setChecked] = useState([0]);

  const handleDelete = (index: number) => () => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    updateList(updatedList);
  };

  const handleChange = (isChecked: boolean, index: number) => {
    const newList = [...list];
    newList[index].isDone = !isChecked;
    updateList(newList);
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {list.map((value: ToDoItem, index: number) => {
        const labelId = `checkbox-list-label-${index}`;
        return (
          <ListItem
            key={index}
            secondaryAction={
              <IconButton
                onClick={handleDelete(index)}
                edge="end"
                aria-label="comments"
              >
                <CloseIcon></CloseIcon>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={value.isDone}
                  onChange={() => handleChange(value.isDone, index)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText
                sx={{
                  textDecoration: value.isDone ? "line-through" : "normal",
                }}
                key={index}
                primary={value.text}
              />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ToDoList;
