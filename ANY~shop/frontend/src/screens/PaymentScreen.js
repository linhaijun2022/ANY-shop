import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress, paymentMethod: payment } = cart;

  if (Object.keys(shippingAddress).length === 0) {
    history.push('/shipping');
  }

  const [paymentMethod, setPaymentMethod] = useState(payment);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  }

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='address'>
          <Form.Label as="legend">Select Method</Form.Label>
          <Form.Check
            type="radio"
            label="PayPal or Credit Card"
            id='PayPal'
            name="paymentMethod"
            value='PayPal'
            checked={paymentMethod === 'PayPal'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check>
           {/* <Form.Check
            type="radio"
            label="Stripe"
            id='Stripe'
            name="paymentMethod"
            value='Stripe'
            checked={paymentMethod === 'Stripe'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          ></Form.Check> */}
        </Form.Group>

        <Button type="submit" variant="primary">Continue</Button>
      </Form>
    </FormContainer>
  )
}
