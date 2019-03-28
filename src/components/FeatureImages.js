import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureImages = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <div className="section">
          <figure className="image">
            <PreviewCompatibleImage imageInfo={item} />
          </figure>
        </div>
      </div>
    ))}
  </div>
)

export default FeatureImages