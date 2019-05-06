import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Masonry from 'react-masonry-component'

import styled from 'styled-components'

const masonryOptions = {
    transitionDuration: 4
};

const ImageFrame = styled.div`
  border: 8px solid rgba(102, 51, 0, 1);
  padding: 20px 20px;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5) inset;
  cursor: pointer;
  :hover {
    transform: scale(1.01);
  }
`

const imagesLoadedOptions = { background: '.has-background-grey' }

class MuralImages extends React.Component {
  render() {
    return (
      <div>
        <Masonry
          className={'colums is-multiline'}
          options={masonryOptions}
          disableImagesLoaded={false}
          updateOnEachImageLoad={true}
          imagesLoadedOptions={imagesLoadedOptions}
          >
          {this.props.gridItems.map(item => (
            <div key={item.text} className="column is-4 is-half-tablet is-full-mobile">
              <ImageFrame>
                  <figure>
                    <PreviewCompatibleImage imageInfo={item} />
                  </figure>
              </ImageFrame>
            </div>
          ))}
        </Masonry>
      </div>
    )
  }
}

export default MuralImages
