import React from "react";
import { useTheme } from "@mui/material/styles";
import FormSelect from "../FormSelect";
import FormCheckbox from "../FormCheckbox";
import FormTextField from "../FormTextField";
import SubmitButton from "../SubmitButton";
import { Box, useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { SelectChangeEvent } from "@mui/material/Select";

function GridItem({
  children,
  xs,
  md,
}: {
  children: React.ReactNode;
  xs: number;
  md: number;
}) {
  const theme = useTheme();
  const xsMediaQuery = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Grid xs={xs} md={md} sx={{ width: "100%" }} mb={xsMediaQuery ? 0 : 2}>
      {children}
    </Grid>
  );
}

interface EventDetailsProps {
  errors: { [key: string]: boolean };
  handleSubmit: () => void;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement> | SelectChangeEvent | any
  ) => void;
  formDetails: {
    eventType: string;
    area: string;
    numberOfPeople: number;
    estimatedSpend: number;
    venueLayout: string;
    venueStyle: string;
    onlineElements: boolean;
    requirements: string;
  };
}

export default function EventDetails({
  errors,
  handleSubmit,
  handleChange,
  formDetails,
}: EventDetailsProps) {
  const theme = useTheme();
  const mdMediaQuery = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Grid
      columnSpacing={mdMediaQuery ? 2 : 0}
      rowSpacing={2}
      p={0}
      container
      sx={{ width: "100%" }}
    >
      <GridItem xs={12} md={6}>
        <FormSelect
          errorHelperText={"Please choose an event type"}
          error={errors.eventType}
          name={"eventType"}
          label={"Event Type"}
          value={formDetails.eventType}
          handleChange={handleChange}
          menuItems={["Standard", "Special", "Better"]}
        />
      </GridItem>
      <GridItem xs={12} md={6}>
        <FormSelect
          errorHelperText={"Please choose an event area"}
          error={errors.area}
          name={"area"}
          label={"Area"}
          value={formDetails.area}
          handleChange={handleChange}
          menuItems={["Virtual", "Standard"]}
        />
      </GridItem>
      <GridItem xs={12} md={6}>
        <FormTextField
          error={errors.numberOfPeople}
          errorHelperText={"Please input a value."}
          type="number"
          label={"Number of People"}
          name={"numberOfPeople"}
          handleChange={handleChange}
          multiline={false}
          rows={0}
        />
      </GridItem>
      <GridItem xs={12} md={6}>
        <FormTextField
          type="text"
          error={errors.estimatedSpend}
          errorHelperText={"Please input a value."}
          label={"Estimated total event spend"}
          name={"estimatedSpend"}
          handleChange={handleChange}
          multiline={false}
          rows={0}
        />
      </GridItem>
      <GridItem xs={12} md={6}>
        <FormSelect
          errorHelperText={"Please choose a venue layout"}
          error={errors.venueLayout}
          name={"venueLayout"}
          label={"Venue layout"}
          value={formDetails.venueLayout}
          handleChange={handleChange}
          menuItems={["Standard", "Special", "Better"]}
        />
      </GridItem>
      <GridItem xs={12} md={6}>
        <FormSelect
          errorHelperText={"Please choose a venue style"}
          error={errors.venueStyle}
          name={"venueStyle"}
          label={"Venue style"}
          value={formDetails.venueStyle}
          handleChange={handleChange}
          menuItems={["No style", "styled"]}
        />
      </GridItem>
      <GridItem xs={12} md={6}>
        <FormCheckbox
          name={"onlineElements"}
          handleChange={handleChange}
          checked={formDetails.onlineElements}
        />
      </GridItem>
      <GridItem xs={12} md={12}>
        <FormTextField
          type="text"
          errorHelperText={"Enter your requirements"}
          error={errors.requirements}
          label={"Specific requirements"}
          handleChange={handleChange}
          name={"requirements"}
          multiline={true}
          rows={4}
        />
      </GridItem>
      <GridItem xs={12} md={12}>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <SubmitButton handleSubmit={handleSubmit} />
        </Box>
      </GridItem>
    </Grid>
  );
}
