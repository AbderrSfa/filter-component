import { useState } from "react";
import IsSelect from "./isSelect";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function WatcherField() {
  const [isStatus, setIsStatus] = useState("");
  const [watcher, setWatcher] = useState("");

  return (
    <div>
      <IsSelect isStatus={isStatus} setIsStatus={setIsStatus} />
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <InputLabel id="demo-select-small-label">Select watcher</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          defaultValue="Is archived"
          value={watcher}
          label="Select watcher"
          onChange={(e) => setWatcher(e.target.value as string)}
        >
          <MenuItem value={"me mode"}>
            <AccountCircleIcon color="primary" />
            Me Mode
          </MenuItem>
          <MenuItem value={"berk"}>
            <AccountCircleIcon color="secondary" />
            Berk
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default WatcherField;
