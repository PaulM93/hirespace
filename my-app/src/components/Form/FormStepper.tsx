import {
  Box,
  Stepper,
  Step,
  StepLabel,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface FormStepperProps {
  activeStep: number;
}

export default function FormStepper({ activeStep }: FormStepperProps) {
  const theme = useTheme();
  const xsMediaQuery = useMediaQuery(theme.breakpoints.down("md"));

  const steps = [
    "Event Details",
    xsMediaQuery ? "Date & Time" : "Event date / time",
    "Contact details",
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper
        alternativeLabel={xsMediaQuery ? true : false}
        activeStep={activeStep}
        sx={{
          "& .MuiSvgIcon-root": { color: "#d1d3d6" },
          "& .MuiStepIcon-root": {
            color: "#d1d3d6",
          },
          "& .MuiStepIcon-root.Mui-completed": {
            color: "#4BA540",
          },
          "& .MuiStepIcon-root.Mui-active": {
            color: "#4BA540",
          },
          "& .MuiStepIcon-text": {
            fill: "#fafafa",
            fontWeight: 700,
          },
        }}
      >
        {steps.map((label) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel
                sx={{
                  fontWeight: 500,
                }}
                {...labelProps}
              >
                <Typography variant="body2" fontWeight={700}>
                  {label}
                </Typography>
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
