import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.Yamaha.find((motor) => motor.id === "yamahaTenere700");

export default function () {
  return <MotorDetail motor={motor} />;
}
