import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.Honda.find((motor) => motor.id === "hondaXL750TRASALP");

export default function () {
  return <MotorDetail motor={motor} />;
}
