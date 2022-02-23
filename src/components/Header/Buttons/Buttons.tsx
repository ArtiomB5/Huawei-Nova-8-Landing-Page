import * as style from "./style";
import * as CONSTANTS from "../../../constants";
import { Link } from "react-scroll";

export const Buttons = () => {
  return (
    <style.Buttons>
      <style.DesignArea>
        <style.ButtonLink IMG_URL={CONSTANTS.HEADER_DESIGN} to={"ringsOfSaturn"} spy={true} smooth={true}>
          <style.ButtonTitle>{CONSTANTS.HEADER_DESIGN_TITLE}</style.ButtonTitle>
          <style.ButtonText>{CONSTANTS.HEADER_DESIGN_TEXT}</style.ButtonText>
        </style.ButtonLink>
      </style.DesignArea>
      <style.CameraArea>
        <style.ButtonLink IMG_URL={CONSTANTS.HEADER_CAMERA} IMG_POS={"left"} to={"camera"} spy={true} smooth={true}>
          <style.ButtonTitle POS={"center"}>
            {CONSTANTS.HEADER_CAMERA_TITLE}
          </style.ButtonTitle>
          <style.ButtonText POS={"center"}>
            {CONSTANTS.HEADER_CAMERA_TEXT}
          </style.ButtonText>
        </style.ButtonLink>
      </style.CameraArea>
      <style.ChargeArea>
        <style.ButtonLink IMG_URL={CONSTANTS.HEADER_CHARGE} IMG_POS={"right"} to={"charge"} spy={true} smooth={true}>
          <style.ButtonTitle POS={"center"}>
            {CONSTANTS.HEADER_CHARGE_TITLE}
          </style.ButtonTitle>
          <style.ButtonText POS={"center"}>
            {CONSTANTS.HEADER_CHARGE_TEXT}
          </style.ButtonText>
        </style.ButtonLink>
      </style.ChargeArea>
      <style.DisplayArea>
        <style.ButtonLink IMG_URL={CONSTANTS.HEADER_DISPLAY} to={"display"} spy={true} smooth={true}>
          <style.ButtonTitle POS={"center"}>
            {CONSTANTS.HEADER_DISPLAY_TITLE}
          </style.ButtonTitle>
          <style.ButtonText POS={"center"}>
            {CONSTANTS.HEADER_DISPLAY_TEXT}
          </style.ButtonText>
        </style.ButtonLink>
      </style.DisplayArea>
    </style.Buttons>
  );
};
