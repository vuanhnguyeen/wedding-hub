import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

const Pink = () => {
  return (
    <>
      <div className={styles.pinksection}>
        <div className={styles.contentadd}>
          <div className={styles.blockadd}>
            <div className={styles.partytext}>TIỆC NHÀ GÁI</div>
            <div className={styles.ctnimg}>
              <div className={cn(styles.ctnimg_img, styles.ctnimg_girl)}></div>
            </div>
            <div className={styles.timing}>11:00 AM , 08/04/2023</div>
            <div className={styles.address}>Châu Đức, BR-VT</div>
            <a
              href="https://www.google.com/maps/place/10%C2%B039'12.6%22N+107%C2%B018'26.8%22E/@10.653496,107.3048561,17z/data=!3m1!4b1!4m6!3m5!1s0x0:0x45069b514623b269!7e2!8m2!3d10.6534955!4d107.3074313?hl=vi"
              target="_blank"
              className={styles.btnmap}
            >
              <span>Xem bản đồ</span>
            </a>
          </div>
          <div className={styles.blockadd}>
            <div className={styles.partytext}>TIỆC NHÀ TRAI</div>
            <div className={styles.ctnimg}>
            <div className={cn(styles.ctnimg_img, styles.ctnimg_boy)}></div>
            </div>
            <div className={styles.timing}>11:00 AM , 09/04/2023</div>
            <div className={styles.address}>Đức Linh, Bình Thuận</div>
            <a
              href="https://www.google.com/maps/place/V%C3%A2%CC%A3t+t%C6%B0+n%C3%B4ng+nghi%C3%AA%CC%A3p+Vinh+Ki%C3%AA%CC%80n/@11.2590428,107.6394636,17z/data=!3m1!4b1!4m5!3m4!1s0x31746c9e4a14511b:0xad529a7b64043287!8m2!3d11.2590553!4d107.6420172?hl=vi"
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
