import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPreferences } from '../redux/preference';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router';

export const Preferences = () => {
  const [distance, setDistance] = useState(10);
  const [price, setPrice] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onDistanceChanged = event => setDistance(event.target.value);

  const onPriceChanged = event => {
    const name = event.target.name;
    if(price[name] === undefined || price[name] === false) {
      price[name] = true;
    } else {
      price[name] = false;
    }
    setPrice(price);
  }

  const onSubmit = () => {
    if (distance && price) {
      dispatch(
        setPreferences({
          distance,
          price
        })
      )
      setDistance('');
      setPrice({});
    }
    navigate("/restaurant");
  }

  return (
    <Form className='form'>
      <img
        className='logo'
        src='/images/randostaurant-logo.png'
        alt="hellos"
      ></img>
      <Form.Group className="mb-3 distance" controlId="distance">
        <Form.Label className='label'>Distance:</Form.Label>
        <Form.Select onChange={onDistanceChanged}>
          <option>Select a distance</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label className='label'>Price:</Form.Label>
        <Form.Check
          onChange={onPriceChanged}
          inline
          label="low"
          name="low"
          type="checkbox"
        />
        <Form.Check
          onChange={onPriceChanged}
          inline
          label="medium"
          name="medium"
          type="checkbox"
        />
        <Form.Check
          onChange={onPriceChanged}
          inline
          label="high"
          name="high"
          type="checkbox"
        />
        <Form.Check
          onChange={onPriceChanged}
          inline
          label="extreme"
          name="extreme"
          type="checkbox"
        />
      </Form.Group>
      <Button onClick={onSubmit} className='button' variant="dark">Where Am I Eating?</Button>
    </Form>
  )
};
