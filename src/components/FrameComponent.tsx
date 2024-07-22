import { FunctionComponent } from "react";
import Plan from "./Plan";
import styles from "./FrameComponent.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.pricingWrapper, className].join(" ")}>
      <div className={styles.pricing}>
        <div className={styles.pricingChild} />
        <div className={styles.pricingContent}>
          <div className={styles.pricingDescription}>
            <div className={styles.pricingHeader}>
              <h1 className={styles.pricing1}>Pricing</h1>
            </div>
            <h3 className={styles.usingBasicSkills}>
              Using basic skills you can improve your business stuff with Around
            </h3>
          </div>
        </div>
        <div className={styles.plansContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <Plan starter="Starter" />
            <div className={styles.featureList}>
              <div className={styles.featureItem}>
                <input
                  className={styles.userInterfaceApprove}
                  type="radio"
                  name="radioGroup-1"
                />
                <div className={styles.featureDescription}>
                  <div className={styles.usingBasicSkills1}>
                    Using basic skills you can
                  </div>
                </div>
              </div>
              <div className={styles.featureList1}>
                <input
                  className={styles.userInterfaceApprove1}
                  type="radio"
                  name="radioGroup-1"
                />
                <div className={styles.featureDescription1}>
                  <div className={styles.usingBasicSkills2}>
                    Using basic skills you can impr
                  </div>
                </div>
              </div>
              <div className={styles.featureList2}>
                <input
                  className={styles.userInterfaceApprove2}
                  type="radio"
                  name="radioGroup-1"
                />
                <div className={styles.featureDescription2}>
                  <div className={styles.usingBasicSkills3}>
                    Using basic skills you can improve
                  </div>
                </div>
              </div>
              <div className={styles.featureList3}>
                <img
                  className={styles.userInterfaceClose}
                  alt=""
                  src="/user-interface--close.svg"
                />
                <div className={styles.featureDescription3}>
                  <div
                    className={styles.usingBasicSkills4}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
              <div className={styles.featureList4}>
                <img
                  className={styles.userInterfaceClose1}
                  alt=""
                  src="/user-interface--close.svg"
                />
                <div className={styles.featureDescription4}>
                  <div
                    className={styles.usingBasicSkills5}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
              <div className={styles.featureList5}>
                <img
                  className={styles.userInterfaceClose2}
                  alt=""
                  src="/user-interface--close.svg"
                />
                <div className={styles.featureDescription5}>
                  <div
                    className={styles.usingBasicSkills6}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
            </div>
            <button className={styles.getStartWrapper}>
              <div className={styles.getStart}>Get Start</div>
            </button>
          </div>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/1.svg" />
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.iconContainerWrapper}>
                  <div className={styles.iconContainer}>
                    <img
                      className={styles.sportsCup}
                      loading="lazy"
                      alt=""
                      src="/sports--cup.svg"
                    />
                  </div>
                </div>
                <div className={styles.businessParent}>
                  <div className={styles.business}>Business</div>
                  <div className={styles.div}>
                    <span>$</span>
                    <span className={styles.span}> 75</span>
                  </div>
                </div>
                <div className={styles.featurePeriod}>
                  <i className={styles.perMonth}>Per month</i>
                </div>
                <button className={styles.recommendation}>
                  <div className={styles.recomented}>Recomented</div>
                </button>
              </div>
              <div className={styles.frameItem} />
            </div>
            <div className={styles.planButtonParent}>
              <div className={styles.planButton}>
                <input
                  className={styles.userInterfaceApprove3}
                  type="radio"
                  name="radioGroup-2"
                />
                <div className={styles.buttonLabel}>
                  <div className={styles.usingBasicSkills7}>
                    Using basic skills you can
                  </div>
                </div>
              </div>
              <div className={styles.planButton1}>
                <input
                  className={styles.userInterfaceApprove4}
                  type="radio"
                  name="radioGroup-2"
                />
                <div className={styles.buttonLabel1}>
                  <div className={styles.usingBasicSkills8}>
                    Using basic skills you can impr
                  </div>
                </div>
              </div>
              <div className={styles.planButton2}>
                <input
                  className={styles.userInterfaceApprove5}
                  type="radio"
                  name="radioGroup-2"
                />
                <div className={styles.buttonLabel2}>
                  <div className={styles.usingBasicSkills9}>
                    Using basic skills you can improve
                  </div>
                </div>
              </div>
              <div className={styles.userInterfaceApproveParent}>
                <input
                  className={styles.userInterfaceApprove6}
                  type="radio"
                  name="radioGroup-2"
                />
                <div className={styles.featureDesc}>
                  <div
                    className={styles.usingBasicSkills10}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
              <div className={styles.closeButton}>
                <img
                  className={styles.userInterfaceClose3}
                  alt=""
                  src="/user-interface--close.svg"
                />
                <div className={styles.closeDesc}>
                  <div
                    className={styles.usingBasicSkills11}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
              <div className={styles.closeButton1}>
                <img
                  className={styles.userInterfaceClose4}
                  alt=""
                  src="/user-interface--close.svg"
                />
                <div className={styles.closeDesc1}>
                  <div
                    className={styles.usingBasicSkills12}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
            </div>
            <div className={styles.trialButton}>
              <div className={styles.trialBackground} />
              <button className={styles.getStartContainer}>
                <div className={styles.getStart1}>Get Start</div>
              </button>
            </div>
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameInner} />
            <Plan starter="Premium" />
            <div className={styles.frameContainer}>
              <div className={styles.userInterfaceApproveGroup}>
                <input
                  className={styles.userInterfaceApprove7}
                  type="radio"
                  name="radioGroup-3"
                />
                <div className={styles.usingBasicSkillsYouCanWrapper}>
                  <div className={styles.usingBasicSkills13}>
                    Using basic skills you can
                  </div>
                </div>
              </div>
              <div className={styles.userInterfaceApproveContainer}>
                <input
                  className={styles.userInterfaceApprove8}
                  type="radio"
                  name="radioGroup-3"
                />
                <div className={styles.usingBasicSkillsYouCanImpWrapper}>
                  <div className={styles.usingBasicSkills14}>
                    Using basic skills you can impr
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <input
                  className={styles.userInterfaceApprove9}
                  type="radio"
                  name="radioGroup-3"
                />
                <div className={styles.usingBasicSkillsYouCanImpContainer}>
                  <div className={styles.usingBasicSkills15}>
                    Using basic skills you can improve
                  </div>
                </div>
              </div>
              <div className={styles.userInterfaceApproveParent1}>
                <input
                  className={styles.userInterfaceApprove10}
                  type="radio"
                  name="radioGroup-3"
                />
                <div className={styles.usingBasicSkillsYouCanContainer}>
                  <div
                    className={styles.usingBasicSkills16}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
              <div className={styles.userInterfaceApproveParent2}>
                <input
                  className={styles.userInterfaceApprove11}
                  type="radio"
                  name="radioGroup-3"
                />
                <div className={styles.usingBasicSkillsYouCanFrame}>
                  <div
                    className={styles.usingBasicSkills17}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
              <div className={styles.userInterfaceApproveParent3}>
                <input
                  className={styles.userInterfaceApprove12}
                  type="radio"
                  name="radioGroup-3"
                />
                <div className={styles.usingBasicSkillsYouCanWrapper1}>
                  <div
                    className={styles.usingBasicSkills18}
                  >{`Using basic skills you can `}</div>
                </div>
              </div>
            </div>
            <button className={styles.getStartFrame}>
              <div className={styles.getStart2}>Get Start</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
