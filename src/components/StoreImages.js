import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 4
};

const imagesLoadedOptions = { background: '.has-background-grey' }

class StoreImages extends React.Component {
  render() {
    return (
      <Masonry
        className="columns is-multiline"
        options={masonryOptions}
        disableImagesLoaded={false}
        updateOnEachImageLoad={true}
        imagesLoadedOptions={imagesLoadedOptions}
        >
        {this.props.gridItems.map( (item, idx) => {
          return (
            <div key={idx} className="column is-4 is-half-tablet is-full-mobile">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <PreviewCompatibleImage imageInfo={item}/>
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
      </Masonry>
    )
  }
}

export default StoreImages
