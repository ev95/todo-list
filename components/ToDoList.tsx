import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import ToDoItem from "@/Interfaces/ToDoItem";

function ToDoList({ list, updateList }) {
  const [checked, setChecked] = useState([0]);

  const handleDelete = (index: number) => () => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    updateList(updatedList);

    //   const currentIndex = checked.indexOf(value);
    //   const newChecked = [...checked];

    //   if (currentIndex === -1) {
    //     newChecked.push(value);
    //   } else {
    //     newChecked.splice(currentIndex, 1);
    //   }

    //   setChecked(newChecked);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => () => {
    console.log("clicked");
  };

  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {list.map((value, index) => {
        const labelId = `checkbox-list-label-${value}`;
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
                  onChange={handleChange}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ "aria-labelledby": labelId }}
                />
              </ListItemIcon>
              <ListItemText id={index} primary={value.text} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

export default ToDoList;
