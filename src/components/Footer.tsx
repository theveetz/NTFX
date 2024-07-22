import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <header className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerContainer}>
          <div className={styles.copyrightParent}>
            <div className={styles.copyright}>
              <h1 className={styles.nftx}>NftX</h1>
            </div>
            <div className={styles.copyrightDetails}>
              <div
                className={styles.nullaFacilisiVestibulum}
              >{`Nulla facilisi. Vestibulum non est nisl. Donec eget sodales nisl. Donec ut velit erat. `}</div>
              <div className={styles.allRightsReserved}>
                © 2022 All rights reserved.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.navigation}>
          <div className={styles.explore}>Explore</div>
          <div className={styles.feature}>Feature</div>
          <div className={styles.whoToWork}>Who to work</div>
          <a className={styles.pricing}>Pricing</a>
          <div className={styles.reviews}>Reviews</div>
        </div>
        <div className={styles.legalLinks}>
          <a className={styles.privacyPolicy}>Privacy policy</a>
          <div className={styles.legal}>Legal</div>
          <a className={styles.termsOfService}>Terms of service</a>
          <div className={styles.helpCenter}>Help center</div>
        </div>
        <div className={styles.socialMediaParent}>
          <b className={styles.socialMedia}>Social Media</b>
          <div className={styles.socialMediaIcons}>
            <div className={styles.icons}>
              <img
                className={styles.brandsSocialMedia}
                loading="lazy"
                alt=""
                src="/brands--social-media.svg"
              />
            </div>
            <div className={styles.icons1}>
              <img
                className={styles.brandsSocialMedia1}
                loading="lazy"
                alt=""
                src="/brands--social-media-1.svg"
              />
            </div>
            <div className={styles.icons2}>
              <img
                className={styles.brandsSocialMedia2}
                loading="lazy"
                alt=""
                src="/brands--social-media-2.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Footer;
