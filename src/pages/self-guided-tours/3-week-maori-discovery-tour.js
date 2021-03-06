import React from "react";
import tours from "../../content/tours";
import TourPage from "../../components/TourPage";

const tour = tours.selfGuided[1];

const MaoriTour = () => {
  return <TourPage tour={tour} />;
};

export default MaoriTour;
