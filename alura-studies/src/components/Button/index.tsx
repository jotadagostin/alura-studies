import React, { PropsWithChildren } from "react";
import style from "./Button.module.scss";

class Button extends React.Component<PropsWithChildren> {
  render() {
    return <button className={style.button}>{this.props.children}</button>;
  }
}

export default Button;
