import React from "react";
import styles from "./styles.module.scss";

const Bigdate = () => {
  return (
    <>
      <div className={styles.bigdate}>
        <div className={styles.content}>
          <div className={styles.textfirst}>Ngày trọng đại</div>
          <div className={styles.textsecond}>8 Tháng 4 Năm 2023</div>
          <div className={styles.textthird}>
            Hôm nay là ngày trọng đại của vợ chồng em. Xin gởi lời cảm ơn chân thành dến tất cả mọi người vì đã dành những
            lời chúc tốt đẹp nhất đến với vợ chồng em.
          </div>
        </div>
      </div>
    </>
  );
};
export default Bigdate;
