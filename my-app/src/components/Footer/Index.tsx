import { Box, Typography } from "@mui/material";
import styles from "./Footer.module.css";

export default function Index() {
  return (
    <Box className={styles.footer}>
      <Typography variant="body2" component="p">
        Copyright Ⓒ Hire Space {new Date().getFullYear()}
      </Typography>
    </Box>
  );
}
