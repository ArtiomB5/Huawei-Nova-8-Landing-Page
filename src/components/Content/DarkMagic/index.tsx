import { useState } from "react";
import "./style.scss";
import * as CONSTANTS from "../../../constants";

export const DarkMagic = () => {
  let [hideSHD, setHideSHD] = useState(false);
  let [hideSDM, setHideSDM] = useState(false);

  const showSelfieHandler1 = () => {
    if (!hideSHD) {
      setHideSHD(true);
      setHideSDM(false);
    } else {
      setHideSHD(false);
    }
  };

  const showSelfieHandler2 = () => {
    if (!hideSDM) {
      setHideSDM(true);
      setHideSHD(false);
    } else {
      setHideSDM(false);
    }
  };

  return (
    <div className="darkMagic">
      <div
        className={`darkMagic__content ${
          hideSHD || hideSDM ? "hideContent" : ""
        }`}
      >
        <h2 className="darkMagic__title">
          {CONSTANTS.CONTENT_DARK_MAGIC_TITLE}
        </h2>
        <p className="darkMagic__text">{CONSTANTS.CONTENT_DARK_MAGIC_TEXT}</p>
      </div>
      <div
        className={`darkMagic__photo selfieHD ${
          hideSHD ? "showSelfieHD" : "fixSelfie"
        }`}
        onClick={showSelfieHandler1}
      ></div>
      <div
        className={`darkMagic__photo selfieDM ${
          hideSDM ? "showSelfieMD" : "fixSelfie"
        }`}
        onClick={showSelfieHandler2}
      ></div>
    </div>
  );
};
