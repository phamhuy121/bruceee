import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

export default function ControlledOpenSort({
  value1,
  value2,
  value3,
  value4,
  value5,
}) {
  const [age, setAge] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          <MenuItem value={10}>{value1}</MenuItem>
          <MenuItem value={20}>{value2}</MenuItem>
          <MenuItem value={30}>{value3}</MenuItem>
          <MenuItem value={30}>{value4}</MenuItem>
          <MenuItem value={30}>{value5}</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
