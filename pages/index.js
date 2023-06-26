import { useEffect, useState } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Couple from "../components/Couple";
import Time from "../components/Time";
import Bigdate from "../components/Bigdate";
import Pink from "../components/Pink";
import Album from "../components/Album";
import Notebook from "../components/Notebook";
import Thanks from "../components/Thanks";

export default function Home() {
  const overlay = {
    position: "fixed",
    width: "100vw",
    height: "100vh",
    zIndex: 100,
    left: 0,
    top: 0,
    background: "rgba(0,0,0,.451)",
    userSelect: "none",
  };
  const stylesYoutube = {
    position: "absolute",
    width: "90vw",
    height: "90vh",
    top: "5vh",
    left: "5vw",
  };
  const close = {
    fontSize: "24px",
    position: "absolute",
    right: "-24px",
    top: "-24px",
    color: "#fff",
    cursor: "pointer",
  };
  const [firstClick, setFirstClick] = useState(false);
  const [playYoutube, setPlayYoutube] = useState(false);
  useEffect(() => {
    const audioContainer = document.getElementById("audioContainer");
    audioContainer.addEventListener("ended", (event) => {
      setFirstClick(false);
    });
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const clickPage = () => {
    if (firstClick) return;
    const audioContainer = document.getElementById("audioContainer");
    if (audioContainer) {
      audioContainer.volume = 0.2;
      audioContainer.play();
      setFirstClick(true);
    }
  };
  const handlePlay = () => {
    setPlayYoutube(true);
    const audioContainer = document.getElementById("audioContainer");
    audioContainer.pause();
    setFirstClick(false);
  };
  const handleClickCloseYoutube = () => {
    setPlayYoutube(false);
    const audioContainer = document.getElementById("audioContainer");
    audioContainer.play();
    setFirstClick(true);
  };

  return (
    <>
      <Head>
        <title>Minh Thi & Văn Ý</title>
        <meta name="description" content="Wedding Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="" onClick={clickPage}>
        <audio
          id="audioContainer"
          style={{ display: "none" }}
          controls
          src="/music.mp3"
        >
          Your browser does not support the
          <code>audio</code> element.
        </audio>
        <Hero />
        <Couple />
        <Time />
        <Bigdate />
        <Pink />
        <Album play={handlePlay} />
        <div id="notebook"></div>
        <Notebook />
        <Thanks />
      </main>
    </>
  );
}
