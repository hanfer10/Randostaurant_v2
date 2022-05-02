import React, { useEffect } from 'react';
import { fetchRestaurant, clearRestaurant } from '../redux/restaurant';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const Restaurant = () => {
const dispatch = useDispatch();
const navigate = useNavigate();
const restaurantStatus = useSelector(state => state.restaurant.status);
const restaurant = useSelector(state => state.restaurant.restaurant);

useEffect(() => {
  if (restaurantStatus === 'idle') {
    dispatch(fetchRestaurant());
  }
}, [restaurantStatus, dispatch]);

const onClick = (event) => {
  event.preventDefault();
  dispatch(clearRestaurant());
  navigate('/preferences');
};

let content;
let price;

if (restaurantStatus === 'loading') {
  content = (
    <div className='restaurant'>
      <img
        className='logo'
        src='/images/randostaurant-logo.png'
        alt="hellos"
      ></img>
      <p>Loading</p>
    </div>
  )
} else if (restaurantStatus === 'succeeded') {
  price = restaurant.price_level;
  if (price === 1) {
    price = '$'
  } else if (price === 2) {
    price = '$$'
  } else if (price === 3) {
    price = '$$$'
  } else if (price === 4) {
    price = '$$$$'
  }
  content = (
    <div className='restaurant'>
      <img
        className='logo'
        src='/images/randostaurant-logo.png'
        alt="hellos"
      ></img>
      <p>This is where you're eating:</p>
      <h1 id='restaurant'>{restaurant.name}</h1>
      <p>{restaurant.vicinity}</p>
      <p>Rating:  {restaurant.rating}</p>
      <p>Price: {price}</p>
      <Button className='button' variant="dark" onClick={onClick}>Reroll</Button>
    </div>
  )
} else if (restaurantStatus === 'failed') {
  content = <div>{error}</div>
}
  return (
    <div>
      {content}
    </div>
  )
};

export default Restaurant;
