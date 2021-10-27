import SWORDHealthLogo from "../../assets/images/SWORD_Health_logo.svg";

import styles from "./styles.module.scss";

export default function Header() {
  return (
    <header className={styles.wrapperContainer}>
      <div className={styles.container}>
        <img
          className={styles.logoImg}
          src={SWORDHealthLogo}
          alt="Logo SWORD Health"
        />
        <div className={styles.contentInfo}>
          <strong>Frontend developer</strong>
          <span>Challenge</span>
        </div>
      </div>
    </header>
  );
}
