import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 4
};

const imagesLoadedOptions = { background: '.has-background-grey' }

const MuralImages = ({ gridItems }) => (
  <Masonry
    className={'colums is-multiline'}
    options={masonryOptions}
    disableImagesLoaded={false}
    updateOnEachImageLoad={true}
    imagesLoadedOptions={imagesLoadedOptions}
    >
    {gridItems.map(item => (
      <div key={item.text} className="column is-6 is-half-tablet is-full-mobile">
        <div className="image-frame">
          <div className="art">
            <figure className="image">
              <PreviewCompatibleImage imageInfo={item} />

            </figure>
          </div>
        </div>
      </div>
    ))}
  </Masonry>
)

export default MuralImages
