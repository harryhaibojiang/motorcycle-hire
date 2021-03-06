import React from "react";
import tours from "../../content/tours";
import TourPage from "../../components/TourPage";

const tour = tours.selfGuided[0];

const MoonlightTour = () => {
  return <TourPage tour={tour} />;
};

export default MoonlightTour;
