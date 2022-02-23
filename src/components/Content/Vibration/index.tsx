import * as CONSTANTS from "../../../constants";
import * as style from "./style";

export const Vibration = () => {
  return (
    <style.Vibration>
      <style.Vibration__imgs>
        <style.Vibration__img_wrapper
          IMG_URL={CONSTANTS.CONTENT_VIBRATION_ANIMATION}
        >
          <style.Vibration__img
            src={CONSTANTS.CONTENT_VIBRATION_IMG}
            alt="HUAWEI NOVA 8"
          />
        </style.Vibration__img_wrapper>
      </style.Vibration__imgs>
      <style.Vibration__text>
        <h2>{CONSTANTS.CONTENT_VIBRATION_TITLE}</h2>
        {CONSTANTS.CONTENT_VIBRATION_TEXT}
      </style.Vibration__text>
    </style.Vibration>
  );
};
