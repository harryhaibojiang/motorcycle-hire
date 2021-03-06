import React from "react";
import styles from "./MotorCard.module.scss";
import classnames from "classnames";
import Img from "gatsby-image";

export default function MotorCard({ img, name, brief }) {
  return (
    <div className={classnames(styles.MotorCard, "box")}>
      <Img className="block" fluid={img} alt={name} />
      <div className="block title is-5">{name}</div>
      <div className="block">{brief}</div>
      <a className="button block">Read more</a>
    </div>
  );
}
