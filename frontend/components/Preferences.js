import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPreferences } from '../redux/preference';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export const Preferences = () => {
  const [preferences, setPreferences] = useState('');

  return (
    <Form>
      <Form.Group className="mb-3" controlId="distance">
        <Form.Label>Distance:</Form.Label>
        <Form.Select>
          <option>Select a distance</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>Price:</Form.Label>
        <Form.Check
          inline
          label="low"
          type="checkbox"
        />
        <Form.Check
          inline
          label="medium"
          type="checkbox"
        />
        <Form.Check
          inline
          label="high"
          type="checkbox"
        />
        <Form.Check
          inline
          label="extreme"
          type="checkbox"
        />
      </Form.Group>
      <Button variant="dark" href="/restaurant">Where Am I Eating?</Button>
    </Form>
  )
};
