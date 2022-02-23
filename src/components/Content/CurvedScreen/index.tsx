import { MutableRefObject, RefObject } from "react";
import ReactPlayer from "react-player";
import * as style from "./style";
import * as CONSTANTS from "../../../constants";

interface ICurvedScreen {
  playing: boolean;
  componentRef: MutableRefObject<HTMLDivElement | undefined>;
}

export const CurvedScreen: React.FC<ICurvedScreen> = (props) => {
  return (
    <style.CurvedScreen>
      <style.Text>
        <h2>{CONSTANTS.CONTENT_CURVED_SCREEN_TITLE}</h2>
        <p>{CONSTANTS.CONTENT_CURVED_SCREEN_TEXT}</p>
      </style.Text>
      <style.Video ref={props.componentRef as RefObject<HTMLDivElement>}>
        <ReactPlayer
          url={CONSTANTS.CONTENT_CURVED_SCREEN_VIDEO}
          playing={props.playing}
          muted={true}
          width="100%"
          height="auto"
          controls={false}
          loop={true}
          style={{ margin: "0 auto" }}
        />
      </style.Video>
    </style.CurvedScreen>
  );
};
