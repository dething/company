import React, { Children } from "react";

const Card = ({ title, description, img }) => {
  return (
    <div className="card card-banner-2">
      <h5 className="card-title title-banner-color title-banner-box text-center">
        {title}
      </h5>
      <p className="card-text description-banner">{description}</p>
      <div className="pe-2">{img}</div>
    </div>
  );
};

export default Card;
