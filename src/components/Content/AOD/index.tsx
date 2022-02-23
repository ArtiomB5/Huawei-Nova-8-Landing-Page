import * as CONSTANTS from "../../../constants";
import * as style from "./style";

export const AOD = () => {
  return (
    <style.AOD>
      <style.AOD__imgs>
        <style.AOD__img src={CONSTANTS.CONTENT_AOD_IMG} />
      </style.AOD__imgs>
      <style.AOD__text>
        <h2>{CONSTANTS.CONTENT_AOD_TITLE}</h2>
        {CONSTANTS.CONTENT_AOD_TEXT}
      </style.AOD__text>
    </style.AOD>
  );
};
