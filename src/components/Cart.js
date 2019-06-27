import React from 'react'

import Checkout from './checkout'

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
        <p>Items in Cart: {this.state.cart.length}</p>
        <Checkout cart={this.state.cart} />
        {React.cloneElement(this.props.children, {
          addToCart: this.addToCart.bind(this),
          cart: this.state.cart
        })}
        
      </div>
    )
  }
}

export default Cart