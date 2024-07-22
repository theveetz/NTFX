import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialOneImageAndName.module.css";

export type TestimonialOneImageAndNameType = {
  className?: string;
  ellipse1?: string;
  ronaldRichards?: string;
  vector10?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
};

const TestimonialOneImageAndName: FunctionComponent<
  TestimonialOneImageAndNameType
> = ({
  className = "",
  ellipse1,
  ronaldRichards,
  vector10,
  propWidth,
  propFlex,
  propGap,
}) => {
  const testimonialOneImageAndNameStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      gap: propGap,
    };
  }, [propWidth, propFlex, propGap]);

  return (
    <div
      className={[styles.testimonialOneImageAndName, className].join(" ")}
      style={testimonialOneImageAndNameStyle}
    >
      <div className={styles.testimonialOneImages}>
        <img
          className={styles.testimonialOneImagesChild}
          loading="lazy"
          alt=""
          src={ellipse1}
        />
        <div className={styles.ronaldRichardsWrapper}>
          <h3 className={styles.ronaldRichards}>{ronaldRichards}</h3>
        </div>
      </div>
      <div className={styles.vectorParent}>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={vector10}
        />
        <div className={styles.wrapper}>
          <div className={styles.div}>+43%</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialOneImageAndName;
