import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function RadioButton({ aoEnviar }) {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  aoEnviar(value);
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Profissão</FormLabel>
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel
          value="front-end"
          control={<Radio />}
          label="Front-end"
        />
        <FormControlLabel
          value="back-end"
          control={<Radio />}
          label="Back-end"
        />
        <FormControlLabel
          value="fullstacker"
          control={<Radio />}
          label="Full-stack"
        />
      </RadioGroup>
    </FormControl>
  );
}
