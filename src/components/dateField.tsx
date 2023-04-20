import { useState } from "react";
import IsSelect from "./isSelect";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

function DateField() {
  const [isStatus, setIsStatus] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <IsSelect isStatus={isStatus} setIsStatus={setIsStatus} />
      <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <InputLabel id="demo-select-small-label">Select option</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={date}
          label="Select option"
          onChange={(e) => setDate(e.target.value as string)}
        >
          <MenuItem value={"today"}>Today</MenuItem>
          <MenuItem value={"yesterday"}>Yesterday</MenuItem>
          <MenuItem value={"last 7 days"}>Last 7 days</MenuItem>
          <MenuItem value={"this week"}>This week</MenuItem>
          <MenuItem value={"this month"}>This month</MenuItem>
          <MenuItem value={"this year"}>This year</MenuItem>
          <MenuItem value={"last month"}>Last month</MenuItem>
          <MenuItem value={"next week"}>Next week</MenuItem>
          <MenuItem value={"next month"}>Next month</MenuItem>
          <MenuItem value={"next Year"}>Next Year</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default DateField;
