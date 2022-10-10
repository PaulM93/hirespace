import React, { useState } from "react";
import { Box } from "@mui/material";
import FormHeader from "./FormHeader";
import FormStepper from "./FormStepper";
import EventDateTime from "./Stages/EventDateTime";
import EventDetails from "./Stages/EventDetails";
import { SelectChangeEvent } from "@mui/material/Select";
import { handleValidation } from "./UtilFunctions";

export default function Index() {
  const [activeStep, setActiveStep] = useState(0);
  const [formDetails, setFormDetails] = useState({
    eventType: "",
    area: "",
    numberOfPeople: 0,
    estimatedSpend: 0,
    venueLayout: "",
    venueStyle: "",
    onlineElements: false,
    requirements: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent | any
  ) => {
    setErrors({ ...errors, [e.target.name]: false });
    setFormDetails({
      ...formDetails,
      [e.target.name]:
        e.target.name !== "onlineElements" ? e.target.value : e.target.checked,
    });
  };

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({
    eventType: false,
    area: false,
    numberOfPeople: false,
    estimatedSpend: false,
    venueLayout: false,
    venueStyle: false,
  });
  const validate = () => {
    const details = {
      eventType: formDetails.eventType,
      area: formDetails.area,
      numberOfPeople: formDetails.numberOfPeople,
      estimatedSpend: formDetails.estimatedSpend,
      venueLayout: formDetails.venueLayout,
      venueStyle: formDetails.venueStyle,
    };
    const { errors, formIsValid } = handleValidation(details);
    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = () => {
    if (validate()) {
      setActiveStep(activeStep + 1);
      console.log("Form details", formDetails);
    }
  };

  let titles = ["Your event details", "Event date and time", "Contact details"];
  let markup;
  switch (activeStep) {
    case 0:
      markup = (
        <EventDetails
          errors={errors}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formDetails={formDetails}
        />
      );
      break;
    case 1:
      markup = <EventDateTime />;
  }

  return (
    <>
      <Box mt={4}>
        <FormStepper activeStep={activeStep} />
        <Box mt={5} minHeight={"80vh"}>
          <Box>
            <Box mr={2}>
              <FormHeader title={titles[activeStep]} />
            </Box>
            {markup}
          </Box>
        </Box>
      </Box>
    </>
  );
}
