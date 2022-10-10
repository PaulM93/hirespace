import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Form.module.css";

export default function SubmitButton({
  handleSubmit,
}: {
  handleSubmit: () => void;
}) {
  const [whileHover, setWhileHover] = useState(false);

  return (
    <motion.div
      onClick={() => handleSubmit()}
      onHoverStart={() => setWhileHover(true)}
      onHoverEnd={() => setWhileHover(false)}
      style={{ position: "relative" }}
    >
      <motion.button
        initial={{ opacity: 1 }}
        animate={{ opacity: whileHover ? 0 : 1 }}
        className={styles.submitButtonVis}
      >
        Next
      </motion.button>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: whileHover ? 1 : 0 }}
        className={styles.submitButtonHidden}
      >
        Next
      </motion.button>
    </motion.div>
  );
}
