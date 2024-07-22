import { FunctionComponent } from "react";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent2.module.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.landingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.customersHaveConsistentlyRaWrapper}>
          <h1 className={styles.customersHaveConsistently}>
            Customers have consistently rated Around 4.7/5 stars
          </h1>
        </div>
        <div className={styles.starsAndDescription}>
          <FrameComponent3 />
          <FrameComponent3 />
          <FrameComponent3 />
        </div>
        <div className={styles.brandLogos}>
          <div className={styles.logos}>
            <img
              className={styles.googleIcon}
              loading="lazy"
              alt=""
              src="/google.svg"
            />
            <img
              className={styles.amazonIcon}
              loading="lazy"
              alt=""
              src="/amazon.svg"
            />
            <img
              className={styles.spotifyIcon}
              loading="lazy"
              alt=""
              src="/spotify.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
