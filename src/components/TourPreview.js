import React, { useState } from "react";
import classnames from "classnames";
import { Link } from "gatsby";
import downloadIcon from "../images/download-pdf.jpeg";

export default function TourPreview({ tours }) {
  const [activeId, setActiveId] = useState(tours[0].title);
  const activeTour = tours.find((tour) => tour.title === activeId);
  return (
    <div className="TourPreview">
      <div className="is-flex">
        {tours.length > 1 &&
          tours.map((tour) => (
            <div key={tour.title}>
              <TourSelector
                {...tour}
                active={activeId === tour.title}
                showTourPreview={() => setActiveId(tour.title)}
              />
            </div>
          ))}
      </div>
      <div className="TourPreview__main-area columns is-vcentered">
        <div className="column is-half has-text-centered">
          <img
            src={activeTour.img}
            alt={activeTour.title}
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div className="column is-half">
          <Link to={activeTour.url}>
            <h2>{activeTour.title}</h2>
          </Link>

          <h5>{activeTour.subtitle}</h5>
          <h5>{activeTour.date}</h5>
          <h5>{activeTour.route}</h5>
          <br />
          <p>{activeTour.brief}</p>
          <br />
          {activeTour.pdf && (
            <a href={activeTour.pdf} target="_blank">
              <img src={downloadIcon} alt="tour download" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const TourSelector = ({ title, img, showTourPreview, active }) => (
  <div
    onClick={() => showTourPreview(title)}
    className={classnames({ "is-active": active }, "TourSelector")}
  >
    <img src={img} alt={title} style={{ width: "100%" }} />
  </div>
);
