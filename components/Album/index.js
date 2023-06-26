import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import flowertemp from "../../public/flowertemp.png";
import nodata from "../../public/nodata.png";
import Image from "next/image";
import Photos from "../Photos";


import img1 from "../../public/reduceV2/1.jpeg"
import img2 from "../../public/reduceV2/2.jpeg"
import img3 from "../../public/reduceV2/3.jpeg"
import img4 from "../../public/reduceV2/4.jpeg"
import img5 from "../../public/reduceV2/5.jpeg"
import img6 from "../../public/reduceV2/6.jpeg"
import img7 from "../../public/reduceV2/7.jpeg"
import img8 from "../../public/reduceV2/8.jpeg"
import img9 from "../../public/reduceV2/9.jpeg"
import img10 from "../../public/reduceV2/10.jpeg"
import img11 from "../../public/reduceV2/11.jpeg"
import img12 from "../../public/reduceV2/12.jpeg"
import img13 from "../../public/reduceV2/13.jpeg"
import img14 from "../../public/reduceV2/14.jpeg"
import img15 from "../../public/reduceV2/15.jpeg"
import img16 from "../../public/reduceV2/16.jpeg"
import img17 from "../../public/reduceV2/17.jpeg"
import img18 from "../../public/reduceV2/18.jpeg"
import img19 from "../../public/reduceV2/19.jpeg"
import img20 from "../../public/reduceV2/20.jpeg"
import img21 from "../../public/reduceV2/21.jpeg"
import img22 from "../../public/reduceV2/22.jpeg"
import img23 from "../../public/reduceV2/23.jpeg"
import img24 from "../../public/reduceV2/24.jpeg"
import img25 from "../../public/reduceV2/25.jpeg"
import img26 from "../../public/reduceV2/26.jpeg"
import img27 from "../../public/reduceV2/27.jpeg"
import img28 from "../../public/reduceV2/28.jpeg"
import img29 from "../../public/reduceV2/29.jpeg"
import img30 from "../../public/reduceV2/30.jpeg"
import img31 from "../../public/reduceV2/31.jpeg"
import img32 from "../../public/reduceV2/32.jpeg"
import img33 from "../../public/reduceV2/33.jpeg"
import img34 from "../../public/reduceV2/34.jpeg"
import img35 from "../../public/reduceV2/35.jpeg"
import img36 from "../../public/reduceV2/36.jpeg"
import img37 from "../../public/reduceV2/37.jpeg"
import img38 from "../../public/reduceV2/38.jpeg"
import img39 from "../../public/reduceV2/39.jpeg"
import img40 from "../../public/reduceV2/40.jpeg"
import img41 from "../../public/reduceV2/41.jpeg"
import img42 from "../../public/reduceV2/42.jpeg"
import img43 from "../../public/reduceV2/43.jpeg"


import imgL1 from "../../public/reduceV1/1.jpeg"
import imgL2 from "../../public/reduceV1/2.jpeg"
import imgL3 from "../../public/reduceV1/3.jpeg"
import imgL4 from "../../public/reduceV1/4.jpeg"
import imgL5 from "../../public/reduceV1/5.jpeg"
import imgL6 from "../../public/reduceV1/6.jpeg"
import imgL7 from "../../public/reduceV1/7.jpeg"
import imgL8 from "../../public/reduceV1/8.jpeg"
import imgL9 from "../../public/reduceV1/9.jpeg"
import imgL10 from "../../public/reduceV1/10.jpeg"
import imgL11 from "../../public/reduceV1/11.jpeg"
import imgL12 from "../../public/reduceV1/12.jpeg"
import imgL13 from "../../public/reduceV1/13.jpeg"
import imgL14 from "../../public/reduceV1/14.jpeg"
import imgL15 from "../../public/reduceV1/15.jpeg"
import imgL16 from "../../public/reduceV1/16.jpeg"
import imgL17 from "../../public/reduceV1/17.jpeg"
import imgL18 from "../../public/reduceV1/18.jpeg"
import imgL19 from "../../public/reduceV1/19.jpeg"
import imgL20 from "../../public/reduceV1/20.jpeg"
import imgL21 from "../../public/reduceV1/21.jpeg"
import imgL22 from "../../public/reduceV1/22.jpeg"
import imgL23 from "../../public/reduceV1/23.jpeg"
import imgL24 from "../../public/reduceV1/24.jpeg"
import imgL25 from "../../public/reduceV1/25.jpeg"
import imgL26 from "../../public/reduceV1/26.jpeg"
import imgL27 from "../../public/reduceV1/27.jpeg"
import imgL28 from "../../public/reduceV1/28.jpeg"
import imgL29 from "../../public/reduceV1/29.jpeg"
import imgL30 from "../../public/reduceV1/30.jpeg"
import imgL31 from "../../public/reduceV1/31.jpeg"
import imgL32 from "../../public/reduceV1/32.jpeg"
import imgL33 from "../../public/reduceV1/33.jpeg"
import imgL34 from "../../public/reduceV1/34.jpeg"
import imgL35 from "../../public/reduceV1/35.jpeg"
import imgL36 from "../../public/reduceV1/36.jpeg"
import imgL37 from "../../public/reduceV1/37.jpeg"
import imgL38 from "../../public/reduceV1/38.jpeg"
import imgL39 from "../../public/reduceV1/39.jpeg"
import imgL40 from "../../public/reduceV1/40.jpeg"
import imgL41 from "../../public/reduceV1/41.jpeg"
import imgL42 from "../../public/reduceV1/42.jpeg"
import imgL43 from "../../public/reduceV1/43.jpeg"

const cssActive = {
  fontWeight: "bold",
  color: "#cf1322",
  background: "#ffdddd85",
  borderColor: "#ffa39e",
};
const tabs = ["Ảnh cưới", "Nhà hàng"];
const Album = (props) => {
  const { play } = props;
  const photos = [
    img1, img2, img3, img4, img5, img6, img7, img8,img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18,img19, img20,
    img21, img22, img23, img24, img25, img26, img27, img28,img29, img30,
    img31, img32, img33, img34, img35, img36, img37, img38,img39, img40,
    img41, img42, img43
  ];
  const photosL = [
    imgL1, imgL2, imgL3, imgL4, imgL5, imgL6, imgL7, imgL8,imgL9, imgL10,
    imgL11, imgL12, imgL13, imgL14, imgL15, imgL16, imgL17, imgL18,imgL19, imgL20,
    imgL21, imgL22, imgL23, imgL24, imgL25, imgL26, imgL27, imgL28,imgL29, imgL30,
    imgL31, imgL32, imgL33, imgL34, imgL35, imgL36, imgL37, imgL38,imgL39, imgL40,
    imgL41, imgL42, imgL43
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
            <Photos data={photos} dataL={photosL} />
          </div>
          <div style={{ display: active === 1 ? "block" : "none" }}>
            <div className={styles.nodata}>
              <Image src={nodata} alt="" width={300} height={300} />
              <span>
                Tụi em sẽ upload hình tiệc cưới nhà hàng lên sớm nhất
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Album;
