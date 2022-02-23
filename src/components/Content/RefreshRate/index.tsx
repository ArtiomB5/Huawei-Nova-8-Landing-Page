import { RefObject, MutableRefObject } from "react";
import ReactPlayer from "react-player";
import * as style from "./style";
import * as CONSTANTS from "../../../constants";

interface IRefreshRate {
  playing: boolean;
  componentRef: MutableRefObject<HTMLDivElement | undefined>;
}

export const RefreshRate: React.FC<IRefreshRate> = (props) => {
  return (
    <style.RefreshRate id={"display"}>
      <style.Text>
        <h2>{CONSTANTS.CONTENT_REFRESH_RATE_TITLE}</h2>
        {CONSTANTS.CONTENT_REFRESH_RATE_TEXT}
      </style.Text>
      <style.Video ref={props.componentRef as RefObject<HTMLDivElement>}>
        <ReactPlayer
          url={CONSTANTS.CONTENT_REFRESH_RATE_VIDEO}
          playing={props.playing}
          muted={true}
          width="100%"
          height="auto"
          controls={false}
          loop={props.playing}
        />
      </style.Video>
    </style.RefreshRate>
  );
};
