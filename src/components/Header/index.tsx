import * as style from "./style";
import { Banner } from "./Banner/Banner";
import { Buttons } from "./Buttons/Buttons";

export const Header = () => {
  return (
    <style.Header>
      <Banner />
      <Buttons />
    </style.Header>
  );
};
