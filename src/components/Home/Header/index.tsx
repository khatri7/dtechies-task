import React from "react";
import ArrowIcon from "assets/icons/arrow.png";
import styles from "./headerStyles.module.css";

const Header: React.FC = () => (
  <div className="d-flex">
    <div className="me-3">
      <img src={ArrowIcon} alt="grow" width="80" />
    </div>
    <div className={styles.headingContainer}>
      <h1 className={styles.heading}>Your Progress</h1>
      <h2 className={styles.subHeading}>IELTS Academic</h2>
    </div>
  </div>
);

export default Header;
