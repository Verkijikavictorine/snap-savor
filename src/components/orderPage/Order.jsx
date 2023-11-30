import React from 'react';
import Card from '../cards/CardItem';
import NavBar from '../navbar/NavBar';

const OrderPage = ({ posts }) => {
    console.log(posts);
  return (
    <div>
      <NavBar/>
      {posts.map((post) => (
        <Card key={post.id} title={post.title} imageUrl={post.url} />
      ))}
    </div>
  );
};

export default OrderPage;