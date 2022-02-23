import { useState, useRef, useEffect, MutableRefObject } from "react";
import { MainVideo } from "./MainVideo";
import { RingsOfSaturn } from "./RingsOfSaturn";
import { CurvedScreen } from "./CurvedScreen";
import { RefreshRate } from "./RefreshRate";
import { Selfie } from "./Selfie";
import { DarkMagic } from "./DarkMagic";
import { SuperQuadCamera } from "./SuperQuadCamera";
import { Moments } from "./Moments";
import { Kirin } from "./Kirin";
import { Cooling } from "./Cooling";
import { Charging } from "./Charging";
import { Vibration } from "./Vibration";
import { AOD } from "./AOD";
import { AppGallery } from "./AppGallery";
import * as style from "./style";

export const Content = () => {
  let mainVideoRef = useRef<HTMLDivElement>();
  let curvedScreenVideoRef = useRef<HTMLDivElement>();
  let refreshRateVideoRef = useRef<HTMLDivElement>();
  let ringsOfSaturnAnimationRef = useRef<HTMLDivElement>();
  let selfieAnimationRef = useRef<HTMLDivElement>();

  let observerMainVideo = useRef<IntersectionObserver>();
  let observerCurvedScreenVideo = useRef<IntersectionObserver>();
  let observerRefreshRateVideo = useRef<IntersectionObserver>();
  let observerRingsOfSaturnAnimation = useRef<IntersectionObserver>();
  let observerSelfieAnimation = useRef<IntersectionObserver>();

  let [play, setPlay] = useState({
    mainVideo: false,
    curvedScreenVideo: false,
    refreshRateVideo: false,
    ringsOfSaturnAnimation: false,
    selfieAnimation: false
  });

  useEffect(() => {
    let mainVideoCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPlay((prevState) => ({ ...prevState, mainVideo: true }));
      }
      if (!entries[0].isIntersecting) {
        setPlay((prevState) => ({ ...prevState, mainVideo: false }));
      }
    };
    observerMainVideo.current = new IntersectionObserver(mainVideoCallback);
    observerMainVideo.current.observe(mainVideoRef.current as Element);

    let curvedScreenVideoCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPlay((prevState) => ({ ...prevState, curvedScreenVideo: true }));
      }
      if (!entries[0].isIntersecting) {
        setPlay((prevState) => ({ ...prevState, curvedScreenVideo: false }));
      }
    };
    observerCurvedScreenVideo.current = new IntersectionObserver(
      curvedScreenVideoCallback
    );
    observerCurvedScreenVideo.current.observe(
      curvedScreenVideoRef.current as Element
    );

    let refreshRateVideoCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPlay((prevState) => ({ ...prevState, refreshRateVideo: true }));
      }
      if (!entries[0].isIntersecting) {
        setPlay((prevState) => ({ ...prevState, refreshRateVideo: false }));
      }
    };
    observerRefreshRateVideo.current = new IntersectionObserver(
      refreshRateVideoCallback
    );
    observerRefreshRateVideo.current.observe(
      refreshRateVideoRef.current as Element
    );

    let ringsOfSaturnAnimationCallback = (
      entries: IntersectionObserverEntry[]
    ) => {
      if (entries[0].isIntersecting) {
        setPlay((prevState) => ({
          ...prevState,
          ringsOfSaturnAnimation: true
        }));
      }
    };
    observerRingsOfSaturnAnimation.current = new IntersectionObserver(
      ringsOfSaturnAnimationCallback
    );
    observerRingsOfSaturnAnimation.current.observe(
      ringsOfSaturnAnimationRef.current as Element
    );

    let selfieAnimationCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        setPlay((prevState) => ({
          ...prevState,
          selfieAnimation: true
        }));
      }
    };
    observerSelfieAnimation.current = new IntersectionObserver(
      selfieAnimationCallback
    );
    observerSelfieAnimation.current.observe(
      selfieAnimationRef.current as Element
    );
  }, []);

  return (
    <style.Content>
      <MainVideo playing={play.mainVideo} componentRef={mainVideoRef as MutableRefObject<HTMLDivElement>} />
      <RingsOfSaturn
        playing={play.ringsOfSaturnAnimation}
        componentRef={ringsOfSaturnAnimationRef}
      />
      <CurvedScreen
        playing={play.curvedScreenVideo}
        componentRef={curvedScreenVideoRef}
      />
      <RefreshRate
        playing={play.refreshRateVideo}
        componentRef={refreshRateVideoRef}
      />
      <Selfie
        playing={play.selfieAnimation}
        componentRef={selfieAnimationRef}
      />
      <DarkMagic />
      <SuperQuadCamera />
      <Moments />
      <Kirin />
      <Cooling />
      <Charging />
      <Vibration />
      <AOD />
      <AppGallery />
    </style.Content>
  );
};
