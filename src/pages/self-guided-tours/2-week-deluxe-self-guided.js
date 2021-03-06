import React from "react";
import tours from "../../content/tours";
import TourPage from "../../components/TourPage";

const tour = tours.selfGuided[2];

const TwoWeekDeluxeTour = () => {
  return <TourPage tour={tour} />;
};

export default TwoWeekDeluxeTour;
