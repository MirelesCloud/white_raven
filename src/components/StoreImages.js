import * as React from 'react'
import { Link } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'
import styled from 'styled-components'

const Product = styled.div`
  background-color: #fff;

`

const masonryOptions = {
    transitionDuration: 4
};

const imagesLoadedOptions = { background: '.has-background-grey' }

class StoreImages extends React.Component {
  render() {
    return (
      <Masonry
        className="columns is-multiline is-mobile"
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={true}
        imagesLoadedOptions={imagesLoadedOptions}
        >
        {this.props.gridItems.map( (item, idx) => {
          return (
            <div key={idx} className="column is-3-desktop is-one-quarter-tablet is-full-mobile">
              <div className="card ">
                <div className="card-image">
                  <figure className="image">
                    <PreviewCompatibleImage imageInfo={item}/>
                  </figure>
                </div>
                <Product className="card-content" style={{borderTop:"1px solid #cccccc"}}>
                  <div className="content">
                    <p className="subtitle is-size-5 has-text-weight-bold">{item.title}</p>
                    <p>{item.description}</p>
                    <p>{item.price}</p>
                  </div>
                </Product>
              </div>
              <Link to="/product/">Click</Link>
            </div>
            )
          })}
      </Masonry>
    )
  }
}

export default StoreImages
