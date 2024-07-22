import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.landingPageInner, className].join(" ")}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameParent}>
          <div className={styles.nFTParentParent}>
            <div className={styles.nFTParent}>
              <div className={styles.nWrapper}>
                <h1 className={styles.n}>N</h1>
              </div>
              <div className={styles.nftxWrapper}>
                <a className={styles.nftx}>NftX</a>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.homeParent}>
                <a className={styles.home}>Home</a>
                <a className={styles.feature}>Feature</a>
                <a className={styles.whoToWork}>Who to work</a>
                <a className={styles.pricing}>Pricing</a>
                <a className={styles.reviews}>Reviews</a>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <button className={styles.frameGroup}>
                <div className={styles.startFree14TrialWrapper}>
                  <a className={styles.startFree14}>Start free 14 trial</a>
                </div>
                <img
                  className={styles.arrowsRightArrow}
                  alt=""
                  src="/arrows--right-arrow.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <div className={styles.usingBasicSkillsYouCanImpWrapper}>
                <h3 className={styles.usingBasicSkills}>
                  Using basic skills you can improve your business stuff with
                  Around
                </h3>
              </div>
              <h1 className={styles.oneDashboardToContainer}>
                <p className={styles.oneDashboardTo}>One Dashboard to Manage</p>
                <p className={styles.allYourBusinesses}>all Your businesses</p>
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.mailInputParent}>
            <div className={styles.mailInput}>
              <div className={styles.inputYourMail}>Input your mail...</div>
            </div>
            <div className={styles.frameItem} />
            <button className={styles.rectangleGroup}>
              <div className={styles.frameInner} />
              <b className={styles.tryForFree}>Try for Free</b>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
