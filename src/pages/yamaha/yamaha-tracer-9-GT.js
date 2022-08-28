import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.Yamaha.find((motor) => motor.id === "yamahaTracer9GT");

export default function () {
  return <MotorDetail motor={motor} />;
}
