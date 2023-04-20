import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import type { SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import PriorityField from "./priorityField";
import StatusField from "./statusField";
import ArchivedField from "./archivedField";
import UserField from "./userField";
import TagsField from "./tagsField";
import AssignedCommentField from "./assignedCommentField";
import DateField from "./dateField";

const getFilter = (filter: string) => {
  switch (filter) {
    case "priority":
      return <PriorityField />;
    case "status":
      return <StatusField />;
    case "archived":
      return <ArchivedField />;
    case "user":
      return <UserField />;
    case "tags":
      return <TagsField />;
    case "assigned comments":
      return <AssignedCommentField />;
    case "date":
      return <DateField />;
    default:
      return null;
  }
};

function Filter() {
  const [filter, setFilter] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setFilter(event.target.value as string);
  };

  return (
    <Box>
      <div className="flex items-center">
        <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
          <InputLabel id="demo-simple-select-label">Select filter</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={filter}
            label="Select filter"
            onChange={handleChange}
          >
            <MenuItem value={"status"}>Status</MenuItem>
            <MenuItem value={"tags"}>Tags</MenuItem>
            <MenuItem value={"date"}>Due date</MenuItem>
            <MenuItem value={"priority"}>Priority</MenuItem>
            <MenuItem value={"user"}>Assignee</MenuItem>
            <MenuItem value={"archived"}>Archived</MenuItem>
            <MenuItem value={"assigned comments"}>Assigned comments</MenuItem>
            <MenuItem value={"user"}>Created by</MenuItem>
            <MenuItem value={"date"}>Date closed</MenuItem>
            <MenuItem value={"date"}>Date created</MenuItem>
            <MenuItem value={"date"}>Date updated</MenuItem>
            <MenuItem value={"date"}>Date done</MenuItem>
            <MenuItem value={"date"}>Start date</MenuItem>
            <MenuItem value={"user"}>Watcher</MenuItem>
          </Select>
        </FormControl>
        {getFilter(filter)}
      </div>
    </Box>
  );
}

export default Filter;
