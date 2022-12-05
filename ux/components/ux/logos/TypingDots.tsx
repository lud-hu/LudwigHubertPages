import React from "react";
import styles from "./TypingDots.module.scss";

interface TypingDotsProps {
  dotColor?: string;
}

/**
 * Animation for "typing action": three blinking dots.
 */
const TypingDots: React.FC<TypingDotsProps> = (props: TypingDotsProps) => {
  return (
    <svg height="6" width="26" className={styles["loader"]}>
      <circle
        className={styles["dot"]}
        cx="3"
        cy="3"
        r="3"
        style={{ fill: props.dotColor }}
      />
      <circle
        className={styles["dot"]}
        cx="13"
        cy="3"
        r="3"
        style={{ fill: props.dotColor }}
      />
      <circle
        className={styles["dot"]}
        cx="23"
        cy="3"
        r="3"
        style={{ fill: props.dotColor }}
      />
    </svg>
  );
};

export default TypingDots;
