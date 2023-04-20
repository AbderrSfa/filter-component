import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";

function AssignedCommentField() {
  const [hasComment, setHasComment] = useState("");

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 300 }} size="small">
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          defaultValue="Has assigned comments"
          value={hasComment}
          label=""
          onChange={(e) => setHasComment(e.target.value as string)}
        >
          <MenuItem value={"true"}>Has assigned comments</MenuItem>
          <MenuItem value={"false"}>
            Doesn&apos;t have assigned comments
          </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default AssignedCommentField;
