import { FunctionComponent } from "react";
import styles from "./Plan.module.css";

export type PlanType = {
  className?: string;
  starter?: string;
};

const Plan: FunctionComponent<PlanType> = ({ className = "", starter }) => {
  return (
    <div className={[styles.plan, className].join(" ")}>
      <div className={styles.planDetails}>
        <div className={styles.planIcon}>
          <img
            className={styles.sportsCup}
            loading="lazy"
            alt=""
            src="/sports--cup.svg"
          />
        </div>
        <div className={styles.planName}>
          <div className={styles.starter}>{starter}</div>
          <div className={styles.price}>
            <div className={styles.emptyPrice}>
              <span>$</span>
              <span className={styles.span}> 15</span>
            </div>
            <div className={styles.period}>
              <i className={styles.perMonth}>Per month</i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.divider} />
    </div>
  );
};

export default Plan;
