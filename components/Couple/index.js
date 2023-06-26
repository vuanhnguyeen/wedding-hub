import React from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import heart from "../../public/hearticon.gif";
import cn from "classnames";

const Couple = () => {
  return (
    <>
      <div className={styles.couplesection}>
        <h2 className={styles.textcouple}>Chú rể & Cô dâu</h2>
        <div className={styles.quote}>
          <span style={{ fontSize: "22px" }}>❝</span> Cuộc đời mỗi người đẹp
          nhất là thời thanh xuân và càng đẹp hơn khi thời thanh xuân ấy xuất
          hiện bóng hình để ta nhung nhớ và yêu thương...
        </div>
        <div className={styles.dsimg}>
          <div className={styles.couple_col}>
            <div className={styles.roundimg}>
              <div className={styles.frameimg}>
                <div className={styles.img1}></div>
              </div>
            </div>
            <div className={styles.name_cou}>Hà Thị Minh Thi</div>
            <div className={styles.name_sub}>Trưởng nữ</div>

          </div>
          <div className={styles.heart}>
            <Image src={heart} alt="" width={70} height={70} />
          </div>
          <div className={styles.couple_col}>
            <div className={styles.roundimg}>
              <div className={styles.frameimg}>
                <div className={styles.img2}></div>
              </div>
            </div>
            <div className={styles.name_cou}>Nguyễn Văn Ý</div>
            <div className={styles.name_sub}>Trưởng nam</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Couple;
