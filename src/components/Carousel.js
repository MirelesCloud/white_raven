import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Carousel = ({ gridItems }) => (
  <div className="columns">
    {gridItems.map((item, key) => (
      <div className="column is-3 is-4-mobile">
        <PreviewCompatibleImage imageInfo={item}/>
      </div>
    ))}
  </div>
)

export default Carousel
