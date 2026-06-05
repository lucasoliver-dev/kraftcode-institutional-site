"use client";

import { useEffect, useRef } from "react";
import styles from "./HeroVisual.module.scss";

const heroVideoUrl =
  "https://res.cloudinary.com/ddalk5ufc/video/upload/q_90,w_1080/v1780682106/kraftcode_rgb_video_enhanced_1080x1920_ngxr29.mp4";

export function HeroVisual() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const playVideo = () => {
      const video = videoRef.current;

      if (!video) {
        return;
      }

      video.play().catch(() => {});
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        playVideo();
      }
    };

    playVideo();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", playVideo);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", playVideo);
    };
  }, []);

  return (
    <figure className={styles.root} aria-label="KraftCode em movimento">
      <div className={styles.videoAura} aria-hidden="true" />
      <div className={styles.videoFrame}>
        <video
          ref={videoRef}
          className={styles.heroVideo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
        >
          <source src={heroVideoUrl} type="video/mp4" />
        </video>
      </div>
    </figure>
  );
}
