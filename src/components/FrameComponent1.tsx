import { FunctionComponent } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={[styles.landingPageInner, className].join(" ")}>
      <div className={styles.frameParent}>
        <div className={styles.frameWrapper}>
          <div className={styles.howDoesItWorkParent}>
            <h1 className={styles.howDoesIt}>How Does It Work?</h1>
            <div className={styles.usingBasicSkillsYouCanImpWrapper}>
              <h3 className={styles.usingBasicSkills}>
                Using basic skills you can improve your business stuff with
                Around
              </h3>
            </div>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.groupParent}>
              <img className={styles.groupIcon} alt="" src="/group@2x.png" />
              <b className={styles.targetYouurAudienceContainer}>
                <ol className={styles.targetYouurAudienceEffectiv}>
                  <li>Target youur audience effectively</li>
                </ol>
              </b>
            </div>
            <div
              className={styles.usingBasicSkills1}
            >{`Using basic skills you can improve your business stuff with Around Using basic skills `}</div>
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.groupGroup}>
              <img className={styles.groupIcon1} alt="" src="/group-1@2x.png" />
              <b className={styles.buildDeshboardInContainer}>
                <p
                  className={styles.buildDeshboardIn}
                >{`2. Build deshboard in    `}</p>
                <p className={styles.minutes}> minutes</p>
              </b>
            </div>
            <div className={styles.usingBasicSkills2}>
              Using basic skills you can improve your business stuff with Around
              Using basic skills you can.
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.frameWrapper1}>
              <div className={styles.groupContainer}>
                <img
                  className={styles.groupIcon2}
                  alt=""
                  src="/group-2@2x.png"
                />
                <b className={styles.easilyDownloadYourContainer}>
                  <p
                    className={styles.easilyDownloadYour}
                  >{`3. Easily download your    `}</p>
                  <p className={styles.tablesAndData}> tables and data</p>
                </b>
              </div>
            </div>
            <div className={styles.usingBasicSkills3}>
              Using basic skills you can improve your business stuff with Around
              Using basic skills
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameWrapper2}>
              <div className={styles.groupParent1}>
                <img
                  className={styles.groupIcon3}
                  loading="lazy"
                  alt=""
                  src="/group-3@2x.png"
                />
                <b className={styles.accessToDashboardContainer}>
                  <p
                    className={styles.accessToDashboard}
                  >{`4. Access to dashboard `}</p>
                  <p className={styles.fromAllDevices}> from all devices</p>
                </b>
              </div>
            </div>
            <div className={styles.usingBasicSkills4}>
              Using basic skills you can improve your business stuff with Around
              Using basic skills
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
