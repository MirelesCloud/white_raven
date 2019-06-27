import React from 'react'
import Img from 'gatsby-image'

import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
`

const Button = styled.button`
  font-size: 13px;
  text-align: center;
  color: #fff;
  outline: none;
  padding: 12px;
  box-shadow: 2px 5px 10px rgba(0,0,0,.1);
  background-color: rgb(255, 178, 56);
  border-radius: 6px;
  letter-spacing: 1.5px;
`

const formatPrice = (amount, currency) => {
  let price = (amount / 100).toFixed(2)
  let numberFormat = new Intl.NumberFormat(["en-US"], {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  })
  return numberFormat.format(price)
}

const SkuCard = class extends React.Component {
  state = {
    disabled: false,
    buttonText: 'ADD TO CART',
    paymentMessage: '',
  }

  resetButton() {
    this.setState({ disabled: false, buttonText: 'ADD ONE MORE!'})
  }

  addToCart(event, skuId, quantity = 1) {
    event.preventDefault()
    this.setState({ disabled: true, buttonText: 'ADDED...' })
    this.props.addToCart(skuId)
    setTimeout(this.resetButton.bind(this), 500)
  }

  render() {
    const sku = this.props.sku
    
    return (
      <Card className="card">
        <div className="card-image">
          <figure className="image">
            <Img fluid={sku.localFiles[0].childImageSharp.fluid}/>
          </figure>
        </div>
        <div className="card-content" >
          <div className="content">
            <p className="title is-4">{sku.attributes.name}</p>
            <p>{sku.product.description}</p>
            
          </div>
        </div>
        <footer className="card-footer" style={{marginTop: "auto"}}>
          <p className="card-footer-item">
            <p>Price: {formatPrice(sku.price, sku.currency)}</p>
          </p>
          <p className="card-footer-item">
            <Button
              onClick={event => this.addToCart(event, sku.id)}
              disabled={this.state.disabled}
            >
            {this.state.buttonText}
            </Button>
            {this.state.paymentMessage}
          </p>
        </footer>
      </Card>
    )
  }
}

export default SkuCard

/* */