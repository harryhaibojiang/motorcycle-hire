import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.BMW.find((motor) => motor.id === "bmwF700GS");

export default function () {
  return <MotorDetail motor={motor} />;
}
