
import * as React from 'react'
import {Link} from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

import styled from 'styled-components'

const Product = styled.div `
  background-color: #fff;

`

function StoreImages(props) {
  return (<div className="columns is-multiline is-mobile">
    {
      props.gridItems.map((item) => {
        return (<div key={item.id} className="column is-3-desktop is-one-quarter-tablet is-full-mobile">
          <Link to={`/product/${item}`} state={{ fromFeed: true }} className="card ">
            <div className="card-image">
              <figure className="image">
                <PreviewCompatibleImage imageInfo={item}/>
              </figure>
            </div>
            <Product className="card-content" style={{
                borderTop: "1px solid #cccccc"
              }}>
              <div className="content">
                <p className="subtitle is-size-5 has-text-weight-bold">{item.title}</p>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </Product>
          </Link>
          <Link to="/product/">Click</Link>
        </div>)
      })
    }
  </div>)
}

export default StoreImages
