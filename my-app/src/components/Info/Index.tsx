import { Box, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function Index() {
  const theme = useTheme();
  const smMediaQuery = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      <Box mb={"10px"}>
        <Typography
          variant={smMediaQuery ? "h4" : "h5"}
          component={"h1"}
          fontWeight={700}
          mb={1}
        >
          Tell us about your event
        </Typography>
        <Typography variant="body1" component={"p"} sx={{ width: "90%" }}>
          Our concierge venue finding service is always free and we have a team
          of experts ready to help. The team is available for larger business
          events, weddings, and clients with Hire Space 360 accounts. Otherwise
          the quickest way to find and contact venues remains{" "}
          <motion.span
            whileHover={{ color: "#4BA440" }}
            style={{
              fontWeight: "700",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            via our search tool here <ArrowRightAltIcon />
          </motion.span>
        </Typography>
      </Box>
    </>
  );
}
