import { MouseEvent } from "react";
import "./style.scss";

export const Moments = () => {
  let onClickHandler = (ev: MouseEvent<HTMLDivElement>) => {
    ev.currentTarget.classList.toggle("fat");
  };
  let onOutkHandler = (ev: MouseEvent<HTMLDivElement>) => {
    ev.currentTarget.classList.remove("fat");
  };

  return (
    <div className="moments" id="moments">
      <div
        className={`moments__img hd`}
        onClick={onClickHandler}
        onMouseOut={onOutkHandler}
      >
        <h2 className="moments__title">HD</h2>
        <p className="moments__text">
          Every beautiful moment is reproduced in vivid detail.
        </p>
      </div>
      <div
        className={`moments__img uwa`}
        onClick={onClickHandler}
        onMouseOut={onOutkHandler}
      >
        <h2 className="moments__title">Ultra Wide Angle</h2>
        <p className="moments__text">Capture a vast waorld in your shots.</p>
      </div>
      <div
        className={`moments__img portrait`}
        onClick={onClickHandler}
        onMouseOut={onOutkHandler}
      >
        <h2 className="moments__title">Portrait</h2>
        <p className="moments__text">Blurred backgrounds, a stunning you.</p>
      </div>
      <div
        className={`moments__img macro`}
        onClick={onClickHandler}
        onMouseOut={onOutkHandler}
      >
        <h2 className="moments__title">Macro</h2>
        <p className="moments__text">The micro world is more vivid now.</p>
      </div>
    </div>
  );
};
