import { useTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
//Components
import Info from "../components/Info/Index";
import Form from "../components/Form/Index";

export default function Index() {
  const theme = useTheme();
  const lgMediaQuery = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Grid
      container
      sx={{ width: "90%", paddingTop: "20px", minHeight: "100vh" }}
    >
      <Grid xs={12} lg={6}>
        <Info />
        <Form />
      </Grid>
      <Grid
        xs={12}
        lg={6}
        sx={{
          display: lgMediaQuery ? "flex" : "none",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
        }}
      >
        <img src={"/assets/image.png"} alt="man" />
      </Grid>
    </Grid>
  );
}
