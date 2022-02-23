import * as CONSTANTS from "../../../constants";
import * as style from "./style";

export const AppGallery = () => {
  return (
    <style.AppGallery>
      <style.AppGallery__text>
        <h2>{CONSTANTS.CONTENT_APP_GALLERY_TITLE}</h2>
        <br />
        {CONSTANTS.CONTENT_APP_GALLERY_TEXT}
      </style.AppGallery__text>
      <style.AppGallery__imgs>
        <style.AppGallery__img
          src={CONSTANTS.CONTENT_APP_GALLERY_IMG_PHONE}
          alt="HUAWEI NOVA 8. AppGallery"
        />
      </style.AppGallery__imgs>
    </style.AppGallery>
  );
};
