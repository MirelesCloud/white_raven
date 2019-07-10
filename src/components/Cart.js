import React from 'react'

import Checkout from './checkout'
import styled from 'styled-components'

const ShoppingCart = styled.div`
  font-size: 13px;
  background-color: #fff;
  text-align: left;
  color: #000;
  outline: none;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0,0,0,.1);
  width: 250px;
  border-radius: 2px;
  letter-spacing: 1.5px;
  marginTop: 20px;
`

const Cart = class extends React.Component {
  state = {
    cart: [],
  }

  componentDidMount() {
    const existingCart = JSON.parse(
      localStorage.getItem('stripe_checout_items')
    )
    if (existingCart && existingCart.length) {
      this.setState({ cart: existingCart })
    }
  }

  getCart() {
    return this.state.cart
  }

  addToCart(newItem) {
    let itemExisted = false
    let updatedCart = this.state.cart.map(item => {
      if (newItem === item.sku) {
        itemExisted = true
        return { sku: item.sku, quanity: ++item.quantity }
      } else {
        return item
      }
    })
    if (!itemExisted) {
      updatedCart = [...updatedCart, { sku: newItem, quantity: 1 }]
    }
    this.setState({ cart: updatedCart })
    localStorage.setItem('stripe_checkout_items', JSON.stringify(updatedCart))
  }
  render() {
    return (
      <div>
        <Checkout cart={this.state.cart} />
        <ShoppingCart>
          Items in Cart: {this.state.cart.length}
        </ShoppingCart>
        {React.cloneElement(this.props.children, {
          addToCart: this.addToCart.bind(this),
          cart: this.state.cart
        })}
      </div>
    )
  }
}

export default Cart