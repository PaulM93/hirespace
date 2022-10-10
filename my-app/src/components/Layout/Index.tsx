import { Box } from "@mui/material";
import Navbar from "../NavBar/Index";
import Footer from "../Footer/Index";
import CssBaseline from "@mui/material/CssBaseline";
import styles from "./Layout.module.css";

export default function Index({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <Box className={styles.container}>{children}</Box>
      <Footer />
    </>
  );
}
