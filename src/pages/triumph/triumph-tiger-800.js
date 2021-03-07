import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.Triumph.find((motor) => motor.id === "triumphTiger800");

export default function () {
  return <MotorDetail motor={motor} />;
}
