import * as style from "./style";
import * as CONSTANTS from "../../../constants";

export const Kirin = () => {
  return (
    <style.Kirin>
      <style.Text>
        <h2>{CONSTANTS.CONTENT_KIRIN_TITLE}</h2>
        {CONSTANTS.CONTENT_KIRIN_TEXT}
      </style.Text>
      <style.Kirin__img src={CONSTANTS.CONTENT_KIRIN_IMG} />
    </style.Kirin>
  );
};
