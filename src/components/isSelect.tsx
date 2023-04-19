import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

type Props = {
  isStatus: string;
  setIsStatus: Dispatch<SetStateAction<string>>;
};

function IsSelect({ isStatus, setIsStatus }: Props) {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Is</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={isStatus}
        label="Is"
        onChange={(e) => setIsStatus(e.target.value as string)}
      >
        <MenuItem value={"is"}>Is</MenuItem>
        <MenuItem value={"is not"}>Is not</MenuItem>
        <MenuItem value={"is set"}>Is Set</MenuItem>
        <MenuItem value={"is not set"}>Is not Set</MenuItem>
      </Select>
    </FormControl>
  );
}

export default IsSelect;
