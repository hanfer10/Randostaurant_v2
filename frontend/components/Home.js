import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { setLocation } from '../redux/location';

const Home = () => {
  const { latitude } = useSelector(state => state.location);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (latitude == '') {
      navigator.geolocation.getCurrentPosition((geolocation) => dispatch(setLocation({
        latitude: geolocation.coords.latitude,
        longitude: geolocation.coords.longitude,
      })))
    }
  });

  const onClick = (event) => {
    event.preventDefault();
    navigate('/preferences');
  }
  return (
    <div className='home'>
      <img
        className='logo'
        src='/images/randostaurant-logo.png'
        alt="hellos"
      ></img>
      <Button className='button' variant='dark' onClick={onClick}>Preferences</Button>
    </div>
  )
};

export default Home;
