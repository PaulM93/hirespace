import {
  Select,
  MenuItem,
  FormControl,
  FormHelperText,
  InputLabel,
} from "@mui/material";

interface SelectFormProps {
  menuItems: string[];
  handleChange: any;
  value: string;
  label: string;
  name: string;
  error: boolean;
  errorHelperText: string;
}

export default function SelectForm({
  menuItems,
  handleChange,
  value,
  name,
  label,
  error,
  errorHelperText,
}: SelectFormProps) {
  return (
    <FormControl sx={{ width: "100%" }} error={error}>
      <InputLabel
        sx={{
          "&.Mui-focused": {
            color: "#4BA440",
          },
        }}
        id="form-select-label"
      >
        {label}
      </InputLabel>
      <Select
        labelId="form-select-label"
        sx={{
          "&.MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#CED1D1",
            },
            "&:hover fieldset": {
              borderColor: "#7C7F82",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#4BA440",
            },
          },
        }}
        variant="outlined"
        name={name}
        label={label}
        value={value}
        onChange={handleChange}
      >
        {menuItems.map((type) => (
          <MenuItem key={type} value={type}>
            {type}
          </MenuItem>
        ))}
      </Select>
      {error ? <FormHelperText>{errorHelperText}</FormHelperText> : null}
    </FormControl>
  );
}
