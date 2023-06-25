import React from "react";
import MotorDetail from "../../components/MotorDetail";
import { motors } from "../../content/motors";

const motor = motors.BMW.find((motor) => motor.id === "bmwR1250RT");

const BMWR1250GS = () => {
  return <MotorDetail motor={motor} />;
};

export default BMWR1250GS;
