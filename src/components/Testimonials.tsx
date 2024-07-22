import { FunctionComponent } from "react";
import TestimonialOneImageAndName from "./TestimonialOneImageAndName";
import styles from "./Testimonials.module.css";

export type TestimonialsType = {
  className?: string;
};

const Testimonials: FunctionComponent<TestimonialsType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.testimonials, className].join(" ")}>
      <div className={styles.testimonialOne}>
        <div className={styles.testimonialOneImageAndNameParent}>
          <TestimonialOneImageAndName
            ellipse1="/ellipse-1@2x.png"
            ronaldRichards="Ronald Richards"
            vector10="/vector-10.svg"
          />
          <div className={styles.testimonialTwo}>
            <TestimonialOneImageAndName
              ellipse1="/ellipse-1-1@2x.png"
              ronaldRichards="kasdfi nasdm"
              vector10="/vector-10-1.svg"
              propWidth="unset"
              propFlex="1"
              propGap="20px"
            />
          </div>
          <TestimonialOneImageAndName
            ellipse1="/ellipse-1-2@2x.png"
            ronaldRichards="kasdfi nasdm"
            vector10="/vector-10-2.svg"
            propWidth="536px"
            propFlex="unset"
            propGap="59px"
          />
        </div>
        <div className={styles.testimonialOneInner}>
          <div className={styles.theRobustAndHighlyCustomizParent}>
            <h1 className={styles.theRobustAnd}>
              The robust and highly customizable data analysis tool
            </h1>
            <h3 className={styles.usingBasicSkills}>
              Using basic skills you can improve your business stuff with Around
              Using basic skills you can improve your business stuff with Around
              Using basic skills
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
