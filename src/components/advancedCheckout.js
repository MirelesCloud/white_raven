import React from 'react'

import styled from 'styled-components'

const Button = styled.button`
  font-size: 13px;
  text-align: center;
  color: #fff;
  outline: none;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0,0,0,.1);
  background-color: rgb(255, 178, 56);
  border-radius: 6px;
  letter-spacing: 1.5px;
`

const Checkout = class extends React.Component {
  
  componentDidMount() {
    this.stripe = window.Stripe("pk_test_ZJkiq6Dd3MtdzVqLbA3Psxrh00auJ33HZK", {
        betas: ["checkout_beta_4"],
    })
   }

   async redirectToCheckout(event) {
    event.preventDefault()
    const { error } = await this.stripe.redirectToCheckout({
      items: [{ sku: "sku_FFVQ3uXkGdIMef", quantity: 1 }],
      successUrl: `http://localhost:8000/success/`,
      cancelUrl: 'http://localhost:8000/advanced',
    })

    if (error) {
      console.warn("Error", error)
    }
  }

  render() {
    return (
      <Button onClick={event => this.redirectToCheckout(event)}
       
      >
        GO TO CHECKOUT
      </Button>
    )
  }
}

export default Checkout