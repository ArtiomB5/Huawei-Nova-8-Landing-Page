import { useEffect, MutableRefObject, RefObject } from "react";
import * as style from "./style";
import * as CONSTANTS from "../../../constants";

interface IRingsOfSaturn {
  playing: boolean;
  componentRef: MutableRefObject<HTMLDivElement | undefined>;
}

export const RingsOfSaturn: React.FC<IRingsOfSaturn> = (props) => {
  useEffect(() => console.log("useEffect"), []);
  return (
    <style.RingsOfSaturn ref={props.componentRef as RefObject<HTMLDivElement>} id="ringsOfSaturn">
      <style.Text>
        <h2>{CONSTANTS.CONTENT_RING_OF_SATURN_TITLE}</h2>
        <p>{CONSTANTS.CONTENT_RING_OF_SATURN_TEXT}</p>
      </style.Text>
      {props.playing ? (
        <>
          <style.Image1 src={CONSTANTS.CONTENT_RING_OF_SATURN_IMG1} />
          <style.Image2 src={CONSTANTS.CONTENT_RING_OF_SATURN_IMG2} />
        </>
      ) : (
        <></>
      )}
    </style.RingsOfSaturn>
  );
};
