import ReactPlayer from "react-player";
import * as style from "./style";
import * as CONSTANTS from "../../../constants";

export const Charging = () => {
  return (
    <style.Charging id={'charge'}>
      <style.Charging_text>
        <h2>{CONSTANTS.CONTENT_CHARGING_TITLE}</h2>
        {CONSTANTS.CONTENT_CHARGING_TEXT}
      </style.Charging_text>
      <style.Charging_imgs>
        <style.Charging_img IMG_URL={CONSTANTS.CONTENT_CHARGING_IMG}>
          <ReactPlayer
            url={CONSTANTS.CONTENT_CHARGING_VIDEO}
            playing={true}
            muted={true}
            width="auto"
            height="45.7%"
            controls={true}
            loop={true}
            style={{
              borderRadius: "14px",
              overflow: "hidden",
              position: "relative",
              top: "-8%",
              left: "1.4px",
              zIndex: -1
            }}
          />
        </style.Charging_img>
      </style.Charging_imgs>
    </style.Charging>
  );
};
