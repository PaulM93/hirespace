import { TextField, FormControl } from "@mui/material";

interface FormTextFieldProps {
  multiline: boolean;
  rows: number;
  name: string;
  label: string;
  type: "number" | "text";
  error: boolean;
  errorHelperText: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormTextField({
  multiline,
  rows,
  name,
  handleChange,
  label,
  type,
  errorHelperText,
  error,
}: FormTextFieldProps) {
  return (
    <FormControl sx={{ width: "100%" }}>
      <TextField
        name={name}
        onChange={handleChange}
        type={type}
        sx={{
          width: "100%",
          "& label.Mui-focused": {
            color: "#4BA440",
          },
          "& .MuiOutlinedInput-root": {
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
        error={error}
        multiline={multiline}
        helperText={error ? errorHelperText : null}
        rows={rows}
        label={label}
        variant="outlined"
      />
    </FormControl>
  );
}
