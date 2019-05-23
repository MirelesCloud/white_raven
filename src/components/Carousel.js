import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const Carousel = ({ gridItems }) => (
  <div className="columns is-mobile">
    {gridItems.map((item, key) => (
      <div key={key} className="column is-2">
        <PreviewCompatibleImage imageInfo={item}/>
      </div>
    ))}
  </div>
)

export default Carousel
