import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import FlagIcon from "@mui/icons-material/Flag";
import IsSelect from "./isSelect";

function PriorityField() {
  const [isStatus, setIsStatus] = useState("");
  const [priority, setPriority] = useState("");

  return (
    <div>
      <IsSelect isStatus={isStatus} setIsStatus={setIsStatus} />
      <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <InputLabel id="demo-select-small-label">Select option</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={priority}
          label="Select option"
          onChange={(e) => setPriority(e.target.value as string)}
        >
          <MenuItem value={"urgent"}>
            <FlagIcon color="error" />
            Urgent
          </MenuItem>
          <MenuItem value={"high"}>
            <FlagIcon color="warning" />
            High
          </MenuItem>
          <MenuItem value={"normal"}>
            <FlagIcon color="success" />
            Normal
          </MenuItem>
          <MenuItem value={"low"}>
            <FlagIcon color="disabled" />
            Low
          </MenuItem>
          <MenuItem value={"no priority"}>
            <FlagIcon color="primary" />
            No Priority
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default PriorityField;
