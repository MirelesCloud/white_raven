import React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

const FeatureTiles = ({ gridItems }) => (
  <div className="columns">
    <div className="column is-12">
      <div className="tile is-ancestor">
        <div className="tile is-6 is-vertical is-parent">
          <div className="tile is-child box">
            <figure className="image">
            </figure>
          </div>
          <div className="tile is-child box">
            <figure className="image">
            </figure>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box">
            <figure className="image">
            </figure>
          </div>
        </div>
      </div>
    </div>
  </div>
)
