import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import PriorityField from "./priorityField";
import StatusField from "./statusField";
import ArchivedField from "./archivedField";
import WatcherField from "./watcherField";
import TagsField from "./tagsField";
import AssignedCommentField from "./assignedCommentField";

const getFilter = (filter: string) => {
  switch (filter) {
    case "priority":
      return <PriorityField />;
    case "status":
      return <StatusField />;
    case "archived":
      return <ArchivedField />;
    case "watcher":
      return <WatcherField />;
    case "tags":
      return <TagsField />;
    case "assigned comments":
      return <AssignedCommentField />;
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
            <MenuItem value={"priority"}>Priority</MenuItem>
            <MenuItem value={"archived"}>Archived</MenuItem>
            <MenuItem value={"watcher"}>Watcher</MenuItem>
            <MenuItem value={"tags"}>Tags</MenuItem>
            <MenuItem value={"assigned comments"}>Assigned comments</MenuItem>
          </Select>
        </FormControl>
        {getFilter(filter)}
      </div>
    </Box>
  );
}

export default Filter;
