import React from "react";
import styles from "./styles.module.scss";
import calendar from "../../public/calendar.png";
import Image from "next/image";

const Hero = () => {
  const handleSend = () => {
    if (document) {
      const temp = document.getElementById("notebook");
      if(temp) {
        temp.scrollIntoView({ behavior: 'smooth' })
      }
    }
  };
  return (
    <>
      <div className={styles.timesection}>
        <div className={styles.ctnblock}>
          <div className={styles.bl_savedate}>
            <div className={styles.bl_savedate_content}>
              <h2 className={styles.savedatetext}>Lưu ngày cưới</h2>
              <div className={styles.text1}>Cho đám cưới của</div>
              <div className={styles.text2}>Anh Vũ & Mỹ Anh</div>
              <div className={styles.text1}>
                Một lời chúc của anh/chị/bạn<br /> sẽ làm cho đám cưới của
                chúng em<br />có thêm một niềm hạnh phúc 💝
              </div>
              <button className={styles.buttonsend} onClick={handleSend}>
                Gửi lời chúc ♡
              </button>
            </div>
          </div>
          <div className={styles.calendar}>
            <div className={styles.flowerthumb} />
            <div className={styles.content_calendar}>
              <Image
                src={calendar}
                alt=""
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <div className={styles.year}>2023</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
