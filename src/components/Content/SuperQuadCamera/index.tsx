import * as style from "./style";
import * as CONSTANTS from "../../../constants";

export const SuperQuadCamera = () => {
  return (
    <style.SuperQuadCamera IMG_URL={CONSTANTS.CONTENT_SUPER_QUAD_CAMERA_IMG} id={'camera'}>
      <style.Text>
        <h2>{CONSTANTS.CONTENT_SUPER_QUAD_CAMERA_TITLE}</h2>
        {CONSTANTS.CONTENT_SUPER_QUAD_CAMERA_TEXT}
      </style.Text>
    </style.SuperQuadCamera>
  );
};
