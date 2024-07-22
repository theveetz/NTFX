import { FunctionComponent } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={[styles.firstStarRowParent, className].join(" ")}>
      <div className={styles.firstStarRow}>
        <div className={styles.secondStarRow}>
          <img className={styles.starCopy} alt="" src="/star--copy.svg" />
          <img className={styles.starCopy1} alt="" src="/star--copy.svg" />
          <img className={styles.starCopy2} alt="" src="/star--copy.svg" />
          <img className={styles.starCopy3} alt="" src="/star--copy.svg" />
          <img className={styles.starCopy4} alt="" src="/star--copy.svg" />
        </div>
      </div>
      <div className={styles.maecenasConvallisNon}>
        Maecenas convallis non sapien in commodo. Nulla semper pulvinar luctus.
        Proin luctus.
      </div>
    </div>
  );
};

export default FrameComponent3;
