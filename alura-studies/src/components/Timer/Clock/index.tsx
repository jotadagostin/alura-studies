import React from "react";
import style from "./Clock.module.scss";

export default function Clock() {
  return (
    <React.Fragment>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockDivision}>:</span>
      <span className={style.clockNumber}>0</span>
      <span className={style.clockNumber}>0</span>
    </React.Fragment>
  );
}

//React Fragmento to avoid problem with the father div(because we can just have one)
