import React, { use, useState } from "react";
import styles from "./styles.module.scss";
import thanks from "../../public/thanks.jpg";
import Image from "next/image";

const Thanks = () => {
  return (
    <>
      <div className={styles.thanksection}>
        <div className={styles.ctnimg}>
          <div className={styles.bdimg}>
            <Image
              src={thanks}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.text1}>
          Sự hiện diện của anh /chị là niềm vinh hạnh của chúng em
        </div>
        <div className={styles.text2}>Thank You!</div>
      </div>
    </>
  );
};
export default Thanks;
