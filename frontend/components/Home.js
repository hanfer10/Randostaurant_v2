import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../redux/location';

const Home = () => {
  const { latitude } = useSelector(state => state.location);
  const dispatch = useDispatch();
  useEffect(() => {
    if (latitude == '') {
      navigator.geolocation.getCurrentPosition((geolocation) => dispatch(setLocation({
        latitude: geolocation.coords.latitude,
        longitude: geolocation.coords.longitude,
      })))
    }
  });

  return (
    <div>
      <p>Randostaurant</p>
      <Button variant="dark" href="/preferences">Preferences</Button>
    </div>
  )
};

export default Home;
