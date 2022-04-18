import React from 'react';
import { useSelector } from 'react-redux';

const Restaurant = () => {
  const preferences = useSelector(state => console.log(state))

  return (
    <div>
      <p>Restaurant page</p>
    </div>
  )
};

export default Restaurant;
