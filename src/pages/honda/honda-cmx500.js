import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.Honda.find((motor) => motor.id === "hondaCMX500");

export default function () {
  return <MotorDetail motor={motor} />;
}
