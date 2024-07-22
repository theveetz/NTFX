import { FunctionComponent } from "react";
import styles from "./AlalyzeOurData.module.css";

export type AlalyzeOurDataType = {
  className?: string;
};

const AlalyzeOurData: FunctionComponent<AlalyzeOurDataType> = ({
  className = "",
}) => {
  return (
    <section className={[styles.alalyzeOurData, className].join(" ")}>
      <div className={styles.alalyzeOurDataChild} />
      <div className={styles.alalyzeOurDataInner}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.analytiseWrapper}>
              <div className={styles.analytise}>Analytise</div>
            </div>
            <h1 className={styles.analyzeOurData}>
              Analyze our data in a few clicks without too many stteings
            </h1>
          </div>
          <div className={styles.dataAnalysisBenefits}>
            <div className={styles.benefitFourAndFiveImages}>
              <img
                className={styles.userInterfaceArchery}
                loading="lazy"
                alt=""
                src="/user-interface--archery.svg"
              />
              <div className={styles.skillsBenefit}>
                <div className={styles.usingBasicSkills}>
                  Using basic skills you can improve your business
                </div>
              </div>
            </div>
            <div className={styles.benefitFourAndFiveImages1}>
              <img
                className={styles.userInterfaceArchery1}
                loading="lazy"
                alt=""
                src="/user-interface--archery.svg"
              />
              <div className={styles.usingBasicSkillsYouCanImpWrapper}>
                <div className={styles.usingBasicSkills1}>
                  Using basic skills you can improve your business
                </div>
              </div>
            </div>
            <div className={styles.skillBenefitListParent}>
              <div className={styles.skillBenefitList}>
                <img
                  className={styles.userInterfaceArchery2}
                  loading="lazy"
                  alt=""
                  src="/user-interface--archery.svg"
                />
                <div className={styles.businessImprovementList}>
                  <div className={styles.usingBasicSkills2}>
                    Using basic skills you can improve your business
                  </div>
                </div>
              </div>
              <div className={styles.skillBenefitList1}>
                <img
                  className={styles.userInterfaceArchery3}
                  loading="lazy"
                  alt=""
                  src="/user-interface--archery.svg"
                />
                <div className={styles.usingBasicSkillsYouCanImpContainer}>
                  <div className={styles.usingBasicSkills3}>
                    Using basic skills you can improve your business
                  </div>
                </div>
              </div>
              <div className={styles.skillBenefitList2}>
                <img
                  className={styles.userInterfaceArchery4}
                  loading="lazy"
                  alt=""
                  src="/user-interface--archery.svg"
                />
                <div className={styles.usingBasicSkillsYouCanImpFrame}>
                  <div className={styles.usingBasicSkills4}>
                    Using basic skills you can improve your business
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.statisticsParent}>
        <div className={styles.statistics}>
          <div className={styles.circleGraph}>
            <div className={styles.circleGraphChild} />
            <img
              className={styles.circleGraphItem}
              loading="lazy"
              alt=""
              src="/group-10.svg"
            />
            <div className={styles.chartBars}>83%</div>
          </div>
          <div className={styles.graph}>
            <div className={styles.graphChild} />
            <div className={styles.earningsLabelWrapper}>
              <div className={styles.earningsLabel}>
                <h3 className={styles.sdfiaNasdm}>Sdfia Nasdm</h3>
                <div className={styles.k}>8,52k</div>
              </div>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
                <div className={styles.bar} />
              </div>
              <div className={styles.rectangleGroup}>
                <div className={styles.frameItem} />
                <div className={styles.bar1} />
              </div>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.bar2} />
              </div>
              <div className={styles.groupDiv}>
                <div className={styles.rectangleDiv} />
                <div className={styles.bar3} />
              </div>
              <div className={styles.rectangleParent1}>
                <div className={styles.frameChild1} />
                <div className={styles.bar4} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.graphContainer}>
          <div className={styles.graph1}>
            <div className={styles.graphItem} />
            <img
              className={styles.graphInner}
              loading="lazy"
              alt=""
              src="/group-18.svg"
            />
            <div className={styles.exceptedEarning}>Excepted Earning</div>
            <div className={styles.graphLabel}>
              <div className={styles.k1}>$ 8,52k</div>
              <div className={styles.emptyLabel}>
                <div className={styles.emptyLabelContent}>+24.5%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AlalyzeOurData;
