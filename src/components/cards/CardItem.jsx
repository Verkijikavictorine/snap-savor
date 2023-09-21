import React from "react";
import "./card.css";

const CardItem = (props) => {
  const { day, image, title, description, price } = props.object;

  return (
    <div className="container">
      <h1>{day}</h1>
      <div className="row">
        <div className="col-12">
          <div className={`card shadow `}>
            <img src={image} alt="yummy" className="card-img-top" />
            <div className="card-img-overlay">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                />
                <span className="checkbox-custom"></span>
              </label>
            </div>
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <p className="card-text">{description}</p>
              <h1>{price}</h1>
              <input  type="number" placeholder="Quantity" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;