import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import flowertemp from "../../public/flowertemp.png";
import nodata from "../../public/nodata.png";
import Image from "next/image";
import Photos from "../Photos";

import album1 from "../../public/album/1.jpg";
import album2 from "../../public/album/2.jpg";
import album3 from "../../public/album/3.jpg";
import album4 from "../../public/album/4.jpg";
import album5 from "../../public/album/5.jpg";
import album6 from "../../public/album/6.jpg";
import album7 from "../../public/album/7.jpg";
import album8 from "../../public/album/8.jpg";
import album9 from "../../public/album/9.jpg";
import album10 from "../../public/album/10.jpg";
import album11 from "../../public/album/11.jpg";
import album12 from "../../public/album/12.jpg";
import album13 from "../../public/album/13.jpg";
import album14 from "../../public/album/14.jpg";
import album15 from "../../public/album/15.jpg";
import album16 from "../../public/album/16.jpg";
import album17 from "../../public/album/17.jpg";
import album18 from "../../public/album/18.jpg";
import album19 from "../../public/album/19.jpg";
import album20 from "../../public/album/20.jpg";
import album21 from "../../public/album/21.jpg";
import album22 from "../../public/album/22.jpg";
import album23 from "../../public/album/23.jpg";
import album24 from "../../public/album/24.jpg";
import album25 from "../../public/album/25.jpg";
import album26 from "../../public/album/26.jpg";
import album27 from "../../public/album/27.jpg";
import album28 from "../../public/album/28.jpg";
import album29 from "../../public/album/29.jpg";
import album30 from "../../public/album/30.jpg";
import album31 from "../../public/album/31.jpg";
import album32 from "../../public/album/32.jpg";
import album33 from "../../public/album/33.jpg";
import album34 from "../../public/album/34.jpg";
import album35 from "../../public/album/35.jpg";
import album36 from "../../public/album/36.jpg";
import album37 from "../../public/album/37.jpg";
import album38 from "../../public/album/38.jpg";
import album39 from "../../public/album/39.jpg";
import album40 from "../../public/album/40.jpg";
import album41 from "../../public/album/41.jpg";

const cssActive = {
  fontWeight: "bold",
  color: "#cf1322",
  background: "#ffdddd85",
  borderColor: "#ffa39e",
};
const tabs = ["Ảnh cưới", "Nhà gái", "Nhà trai"];
const Album = (props) => {
  const { play } = props;
  const photos = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7,
    album8,
    album9,
    album10,
    album11,
    album12,
    album13,
    album14,
    album15,
    album16,
    album17,
    album18,
    album19,
    album20,
    album21,
    album22,
    album23,
    album24,
    album25,
    album26,
    album27,
    album28,
    album29,
    album30,
    album31,
    album32,
    album33,
    album34,
    album35,
    album36,
    album37,
    album38,
    album39,
    album40,
    album41,
  ];

  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState(0);

  const handleClickPhoto = (e, obj) => {
    try {
      if (obj && obj.index) {
        setPhotoIndex(obj.index);
        setIsOpen(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handlePlay = () => {
    play();
  };

  return (
    <>
      <div className={styles.albumsection}>
        <div className={styles.ctn}>
          <div className={styles.img}>
            <Image
              src={flowertemp}
              alt=""
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
            />
          </div>
          <div className={styles.textwedding}>Album Hình Cưới</div>
          <div className={styles.textquote}>
            Tình yêu không làm cho thế giới quay tròn. Tình yêu là những gì làm
            cho chuyến đi đáng giá.
          </div>

          <div className={styles.tab}>
            {tabs.map((item, index) => {
              return (
                <button
                  key={index}
                  style={active === index ? cssActive : {}}
                  className={styles.button}
                  onClick={() => setActive(index)}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div style={{ display: active === 0 ? "block" : "none" }}>
            <Photos data={photos} hasVideo play={handlePlay} />
          </div>
          <div style={{ display: active === 1 ? "block" : "none" }}>
            <div className={styles.nodata}>
              <Image src={nodata} alt="" width={300} height={300} />
              <span>
                Tụi em sẽ upload hình tiệc cưới nhà trai / nhà gái lên sớm nhất
              </span>
            </div>
          </div>
          <div style={{ display: active === 2 ? "block" : "none" }}>
            <div className={styles.nodata}>
              <Image src={nodata} alt="" width={300} height={300} />
              <span>
                Tụi em sẽ upload hình tiệc cưới nhà trai / nhà gái lên sớm nhất
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Album;
