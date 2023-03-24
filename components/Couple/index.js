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
          <span style={{ fontSize: "20px" }}>❝</span> Cuộc đời mỗi người đẹp
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
            <div className={styles.name_cou}>Nguyễn Anh Vũ</div>
            <div className={styles.name_sub}>Thứ nam</div>
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

            <div className={styles.name_cou}>Trần Thị Mỹ Anh</div>
            <div className={styles.name_sub}>Thứ nữ</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Couple;
