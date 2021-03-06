import React from "react";
import tours from "../../content/tours";
import TourPage from "../../components/TourPage";

const tour = tours.selfGuided[3];

const ThreeWeekDeluxeTour = () => {
  return <TourPage tour={tour} />;
};

export default ThreeWeekDeluxeTour;
