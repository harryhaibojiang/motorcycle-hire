import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.Suzuki.find((motor) => motor.id === "suzukiDL650");

export default function () {
  return <MotorDetail motor={motor} />;
}
