import { Box } from "@mui/material";
import Logo from "./Logo";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <Box className={styles.navbar}>
      <Box className={styles.container}>
        <Logo
          img={"/assets/header.svg"}
          alt={"Hirespace logo"}
          height={"40px"}
        />
      </Box>
    </Box>
  );
}
