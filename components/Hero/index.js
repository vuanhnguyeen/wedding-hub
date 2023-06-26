import React from "react";
import styles from "./styles.module.scss";

const Hero = () => {
  return (
    <>
      <div className={styles.herosection}>
        <div className={styles.ctndate}>
          <h2 className={styles.savedate}>Lưu ngày chung đôi</h2>
          <h2 className={styles.name}>Minh Thi & Văn Ý</h2>
          <h2 className={styles.date}>06/08/2023</h2>
        </div>
      </div>
    </>
  );
};
export default Hero;
