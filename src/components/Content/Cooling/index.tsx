import * as style from "./style";
import * as CONSTANTS from "../../../constants";

export const Cooling = () => {
  return (
    <style.Cooling>
      <style.Text>
        <h2>{CONSTANTS.CONTENT_COOLING_TITLE}</h2>
        {CONSTANTS.CONTENT_COOLING_TEXT}
      </style.Text>
      <style.Cooling__img src={CONSTANTS.CONTENT_COOLING_IMG} />
    </style.Cooling>
  );
};
