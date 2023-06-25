import React from "react";
import tours from "../../content/tours";
import TourPage from "../../components/TourPage";

const tour = tours.guided[0];

const MKTour = () => {
  return <TourPage tour={tour} />;
};

export default MKTour;
