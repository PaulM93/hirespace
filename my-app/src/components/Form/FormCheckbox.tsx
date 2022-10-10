import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";

interface FormCheckboxProps {
  checked: boolean;
  name: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormCheckbox({
  checked,
  handleChange,
  name,
}: FormCheckboxProps) {
  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            aria-label="Add online elements to event"
            name={name}
            onChange={handleChange}
            sx={{
              color: "#CED1D1",
              "&.Mui-checked": {
                color: "#4BA440",
              },
            }}
            checked={checked}
          />
        }
        label={"Add online elements to event"}
      />
    </FormGroup>
  );
}
