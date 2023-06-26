import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import cn from "classnames";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const Photos = React.memo((props) => {
  const { data,dataL, hasVideo, play } = props;
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const handleClickPhoto = (index) => {
    try {
      setPhotoIndex(index);
      setIsOpen(true);
    } catch (error) {
      console.log(error);
    }
  };
  const playYoutube = () => {
    play();
  };

  return (
    <>
      <div className={styles.ctnphoto}>
        {data && data.length
          ? data.map((item, index) => (
              <div
                key={index}
                className={styles.itemchild}
                onClick={() => handleClickPhoto(index)}
              >
                <div className={styles.itemphoto}>
                  <Image
                    src={item.src}
                    alt=""
                    fill
                    style={{ objectFit: "cover" }}
                    loading="lazy"
                  />
                </div>
              </div>
            ))
          : null}
        {hasVideo ? (
          <div className={styles.itemchild}>
            <div
              className={cn(styles.itemphoto, styles.youtube)}
              onClick={playYoutube}
            >
              <svg
                style={{ fill: "#E1E4E2" }}
                className={styles.play}
                focusable="false"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path>
              </svg>
            </div>
          </div>
        ) : null}
      </div>
      <div>
        {isOpen && (
          <Lightbox
            mainSrc={dataL[photoIndex].src}
            nextSrc={dataL[(photoIndex + 1) % dataL.length].src}
            prevSrc={dataL[(photoIndex + dataL.length - 1) % dataL.length].src}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + dataL.length - 1) % dataL.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + dataL.length + 1) % dataL.length)
            }
            enableZoom
          />
        )}
      </div>
    </>
  );
});
export default Photos;
