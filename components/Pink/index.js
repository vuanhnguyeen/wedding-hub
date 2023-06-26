import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

const Pink = () => {
  return (
    <>
      <div className={styles.pinksection}>
        <div className={styles.contentadd}>
          <div className={styles.blockadd}>
            <div className={styles.partytext}>TIỆC CƯỚI</div>
            <div className={styles.ctnimg}>
              <div className={cn(styles.ctnimg_img, styles.ctnimg_girl)}></div>
            </div>
            <div className={styles.timing}>11:00 AM, 06/08/2023</div>
            <div className={styles.address}>Trung Tâm Hội Nghị Tiệc Cưới<br />Huỳnh Thảo Center</div>
            <a
              href="https://goo.gl/maps/uFbBfeYTonZMBxZT7"
              target="_blank"
              className={styles.btnmap}
            >
              <span>Xem bản đồ</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Pink;
