import { Typography, Box, Divider, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "./Form.module.css";

export default function FormHeader({ title }: { title: string }) {
  const theme = useTheme();
  const mdMediaQuery = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <Box className={styles.formHeader}>
        <Typography component={"h2"} variant="h5" fontWeight={700}>
          {title}
        </Typography>
        <Divider
          style={{
            display: mdMediaQuery ? "none" : "inline-flex",
            border: "1px solid #EEEFF3",
            width: "65%",
          }}
        />
      </Box>
    </>
  );
}
