import * as style from "./style";
import * as CONSTANTS from "../../../constants";

export const Banner = () => {
  return (
    <style.Banner>
      <style.BannerIMG
        linkL={CONSTANTS.HEADER_BANNER_L}
        linkS={CONSTANTS.HEADER_BANNER_S}
      />
    </style.Banner>
  );
};
