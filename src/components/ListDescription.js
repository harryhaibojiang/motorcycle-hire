import React from "react";

const ListDescription = ({ title, lists }) => {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {lists.map((des, index) => (
          <li key={index} className="columns is-mobile">
            <div className="column is-narrow">
              <i className="arrow right mr-2" />
            </div>
            <p className="column">{des}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDescription;
