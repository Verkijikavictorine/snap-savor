import React from 'react';
import CardItem from './CardItem';
import NavBar from './../navbar/NavBar';

const CardContainer = ({ posts }) => {
  return (

    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h1>Tuesday</h1>
          <div className="row">
            {posts.map((post) => (
              <div
                key={post.id}
                className="col-12 mt-5 mb-5 col-lg-4 d-flex justify-content-center property-cards"
              >
                <CardItem post={post} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;