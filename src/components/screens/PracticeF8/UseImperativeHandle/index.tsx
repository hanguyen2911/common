import react, { useEffect } from "react";
import Video from "../../../../Video";
import { useRef } from "react";
import clsx from "clsx";

import styles from "./Video.module.scss";

export default function PlayVideo() {
  const videoRef = useRef<any>();
  useEffect(() => {
    console.log("ref", videoRef.current);
  });
  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div>
      <Video ref={videoRef} />
      <button onClick={handlePause} className={styles.btn}>
        pause
      </button>
      <button
        onClick={handlePlay}
        className={clsx(styles.btn, { [styles.active]: true })}
      >
        play
      </button>
    </div>
  );
}

///clsx(styles.btn, {[styles.active: true, 'd-flex':true]})
