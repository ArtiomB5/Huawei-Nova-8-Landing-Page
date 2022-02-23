import { MutableRefObject, RefObject } from "react";
import * as style from "./style";
import * as CONSTANTS from "../../../constants";

interface ISelfie {
  playing: boolean;
  componentRef: MutableRefObject<HTMLDivElement | undefined>;
}

export const Selfie: React.FC<ISelfie> = (props) => {
  return (
    <>
      <div
        ref={props.componentRef as RefObject<HTMLDivElement>}
        style={{ width: "100%", height: "0px" }}
      ></div>
      {props.playing ? (
        <style.Selfie>
          <style.Text>
            <h2>{CONSTANTS.CONTENT_SELFIE_TITLE}</h2>
            {CONSTANTS.CONTENT_SELFIE_TEXT}
          </style.Text>

          <style.Image src={CONSTANTS.CONTENT_SELFIE_IMG} />
        </style.Selfie>
      ) : (
        <></>
      )}
    </>
  );
};
