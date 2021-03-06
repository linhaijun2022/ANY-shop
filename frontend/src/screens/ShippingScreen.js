import React, { useState,  } from 'react'
import { Form, Button} from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';



export default function ShippingScreen({history}) {

    const cart = useSelector((state) => state.cart)
    const {shippingAddress} = cart
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [state, setState] = useState(shippingAddress.state);
    const [zipcode, setZipCode] = useState(shippingAddress.zipcode);
    const [country, setCountry] = useState(shippingAddress.country);


    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress ({address, city, state, zipcode,country}))
        history.push('/payment');
      }



  return (
    <FormContainer >
        <CheckoutSteps step1 step2/>
        <h1>Shipping Information</h1>
        <Form onSubmit={submitHandler}>

        <Form.Group controlId='address'>
          <Form.Label>Enter Address</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter address"
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='city'>
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter city"
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='state'>
          <Form.Label>State</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter state"
            value={state}
            required
            onChange={(e) => setState(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId='zipcode'>
          <Form.Label>ZipCode</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter zipcode"
            value={zipcode}
            required
            onChange={(e) => setZipCode(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Form.Group controlId='country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter country"
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>


        <Button type="submit" variant="primary">Continue</Button>


        </Form>
   
    </FormContainer >
  )
}
