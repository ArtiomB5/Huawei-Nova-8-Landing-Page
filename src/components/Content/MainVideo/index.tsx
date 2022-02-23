import { MutableRefObject } from "react";
import ReactPlayer from "react-player";
import * as style from "./style";
import * as CONSTANTS from "../../../constants";

interface IMainVideo {
  playing: boolean;
  componentRef: MutableRefObject<HTMLDivElement>;
}

export const MainVideo: React.FC<IMainVideo> = (props) => {
  return (
      <style.MainVideo ref={props.componentRef}>
      <ReactPlayer
        url={CONSTANTS.CONTENT_MAIN_VIDEO}
        playing={props.playing}
        width="100%"
        height="auto"
        muted={true}
        controls={true}
        style={{ margin: "0 auto" }}
      />
    </style.MainVideo>
  );
};
