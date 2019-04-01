import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.has-background-grey' }

const FeatureImages = ({ gridItems }) => (
  <Masonry
    className={'columns is-multiline'}
    options={masonryOptions}
    disableImagesLoaded={false}
    updateOnEachImageLoad={true}
    imagesLoadedOptions={imagesLoadedOptions}
    >
      {gridItems.map(item => (
        <div key={item.text} className="column is-4 is-half-tablet is-full-mobile">
          <div className="image-frame">
            <div className="mat">
              <figure className="image">
                <PreviewCompatibleImage imageInfo={item} />
              </figure>
            </div>

          </div>

        </div>
      ))}
  </Masonry>
)

export default FeatureImages
