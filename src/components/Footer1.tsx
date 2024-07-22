import { FunctionComponent } from "react";
import styles from "./Footer1.module.css";

export type Footer1Type = {
  className?: string;
};

const Footer1: FunctionComponent<Footer1Type> = ({ className = "" }) => {
  return (
    <section className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerContainer}>
          <div className={styles.testimonialContentParent}>
            <div className={styles.testimonialContent}>
              <div className={styles.testimonialHeader}>
                <div className={styles.testimonialTitle}>
                  <h1 className={styles.testimonial}>Testimonial</h1>
                </div>
                <h3 className={styles.usingBasicSkills}>
                  Using basic skills you can improve your business stuff with
                  Around
                </h3>
              </div>
            </div>
            <div className={styles.testimonialNavigation}>
              <div className={styles.testimonialNavigationInner}>
                <div className={styles.arrowsLeftArrowWrapper}>
                  <img
                    className={styles.arrowsLeftArrow}
                    loading="lazy"
                    alt=""
                    src="/arrows--left-arrow.svg"
                  />
                </div>
              </div>
              <div className={styles.testimonialCard}>
                <div className={styles.testimonialCardChild} />
                <img
                  className={styles.cardBackgroundIcon}
                  loading="lazy"
                  alt=""
                  src="/rectangle-31@2x.png"
                />
                <div className={styles.cardContent}>
                  <div className={styles.testimonialDetails}>
                    <div className={styles.author}>
                      <h3 className={styles.leslieAlexander}>
                        Leslie Alexander
                      </h3>
                    </div>
                    <div className={styles.position}>
                      <div className={styles.ceoDigitalPt}>CEO, Digital PT</div>
                    </div>
                    <div className={styles.testimonialDetailsInner}>
                      <div className={styles.frameChild} />
                    </div>
                    <h3 className={styles.nullaFacilisiVestibulum}>
                      Nulla facilisi. Vestibulum non est nisl. Donec eget
                      sodales nisl. Donec ut velit erat. Etiam non erat
                      volutpat, consectetur nunc vitae, posuere diam.
                    </h3>
                    <h3 className={styles.sedNislNisi}>
                      Sed nisl nisi, rhoncus nec orci at, convallis ullamcorper
                      purus. Suspendisse placerat tortor vitae neque iaculis
                      efficitur. Nulla sed consectetur mi, nec tempor lorem.
                      Aenean nec aliquet leo.
                    </h3>
                  </div>
                </div>
              </div>
              <div className={styles.testimonialNavigationChild}>
                <div className={styles.arrowsRightArrowWrapper}>
                  <img
                    className={styles.arrowsRightArrow}
                    loading="lazy"
                    alt=""
                    src="/arrows--right-arrow-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img
              className={styles.imageChild}
              loading="lazy"
              alt=""
              src="/group-26.svg"
            />
          </div>
        </div>
        <div className={styles.callToAction}>
          <div className={styles.callToActionContainer}>
            <div className={styles.callToActionContent}>
              <div className={styles.theBestFlowsOnThePlanetParent}>
                <h1 className={styles.theBestFlows}>
                  The best flows on the planet, at your fingertips.
                </h1>
                <h3
                  className={styles.nullaFacilisiVestibulum1}
                >{`Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. `}</h3>
              </div>
              <button className={styles.trialButton}>
                <div className={styles.startFree14TrialWrapper}>
                  <div className={styles.startFree14}>Start free 14 trial</div>
                </div>
                <img
                  className={styles.arrowsRightArrow1}
                  alt=""
                  src="/arrows--right-arrow.svg"
                />
              </button>
            </div>
          </div>
          <div className={styles.wrapper42Dashboard2}>
            <img
              className={styles.dashboard2Icon}
              loading="lazy"
              alt=""
              src="/42-dashboard-2-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.footerChild} />
    </section>
  );
};

export default Footer1;
