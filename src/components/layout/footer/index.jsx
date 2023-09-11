import styles from "./footer.module.css";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <span className={styles.developByNaim}>DEVELOP BY NAIM</span>
      <div className={styles.socialIconsParent}>
        <a className={styles.socialIcons} href="https://www.facebook.com/">
          <img className={styles.vectorIcon} alt="" src="/vector.svg" />
          <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
        </a>
        <a
          className={styles.vectorWrapper}
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
        </a>
        <a
          className={styles.socialIcons1}
          href="https://www.facebook.com/"
          target="_blank"
        >
          <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          <img className={styles.vectorIcon4} alt="" src="/vector4.svg" />
        </a>
      </div>
    </div>
  );
}

export default Footer