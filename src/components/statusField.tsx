import { useState } from "react";
import IsSelect from "./isSelect";
import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const statuses = ["Active", "Closed"];

function StatusField() {
  const [isStatus, setIsStatus] = useState("");
  const [status, setStatus] = useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof status>) => {
    const {
      target: { value },
    } = event;
    setStatus(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <div>
      <IsSelect isStatus={isStatus} setIsStatus={setIsStatus} />
      <FormControl sx={{ m: 1, width: 200 }} size="small">
        <InputLabel id="demo-multiple-checkbox-label">Status</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={status}
          onChange={handleChange}
          input={<OutlinedInput label="Status" />}
          renderValue={(selected) => selected.join(", ")}
          MenuProps={MenuProps}
        >
          {statuses.map((st) => (
            <MenuItem key={st} value={st}>
              <Checkbox checked={status.indexOf(st) > -1} />
              <ListItemText primary={st} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default StatusField;
