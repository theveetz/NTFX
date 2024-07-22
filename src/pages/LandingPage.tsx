import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonials from "../components/Testimonials";
import AlalyzeOurData from "../components/AlalyzeOurData";
import FrameComponent from "../components/FrameComponent";
import Footer1 from "../components/Footer1";
import Footer from "../components/Footer";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <div className={styles.landingPageChild} />
      <div className={styles.landingPageItem} />
      <section className={styles.dashboard1Parent}>
        <div className={styles.dashboard1} />
        <div className={styles.wrapper42Dashboard2}>
          <img
            className={styles.dashboard2Icon}
            loading="lazy"
            alt=""
            src="/42-dashboard-2@2x.png"
          />
        </div>
      </section>
      <FrameComponent4 />
      <FrameComponent2 />
      <FrameComponent1 />
      <Testimonials />
      <AlalyzeOurData />
      <div className={styles.shapeContainer}>
        <img
          className={styles.shapIcon}
          loading="lazy"
          alt=""
          src="/shap@2x.png"
        />
        <div className={styles.nWrapper}>
          <h1 className={styles.n}>N</h1>
        </div>
      </div>
      <FrameComponent />
      <img className={styles.groupIcon} alt="" src="/group-4@2x.png" />
      <img className={styles.landingPageInner} alt="" src="/vector-9.svg" />
      <Footer1 />
      <Footer />
    </div>
  );
};

export default LandingPage;
