import { propsType } from "./SelfieHandlerTypes";

export const SelfieHandler = (props: propsType) => {
  switch (props.selfieType) {
    case "HD":
      if (!props.selfieHD) {
        props.setSelfieHD(true);
        props.setSelfieDM(false);
      } else {
        props.setSelfieHD(false);
      }
      break;

    case "DM":
      if (!props.selfieDM) {
        props.setSelfieDM(true);
        props.setSelfieHD(false);
      } else {
        props.setSelfieDM(false);
      }
      break;

    default:
      break;
  }
};
