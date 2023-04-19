import { useState } from "react";
import { FormControl, MenuItem, Select } from "@mui/material";

function ArchivedField() {
  const [archived, setArchived] = useState("");

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
        <Select
          labelId="demo-select-small-label"
					id="demo-select-small"
					defaultValue="Is archived"
          value={archived}
          label=""
          onChange={(e) => setArchived(e.target.value as string)}
        >
          <MenuItem value={"active"}>
            Is archived
          </MenuItem>
          <MenuItem value={"closed"}>Is not archived</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default ArchivedField;
