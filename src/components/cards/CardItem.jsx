import React from 'react';

const CardItem = ({ post }) => {
  const { title, url } = post;

  return (
    <div className="card">
      <img src={url} alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
      </div>
    </div>
  );
};

export default CardItem;