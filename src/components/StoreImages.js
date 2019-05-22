import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

class StoreImages extends React.Component {
  render() {
    return (
      <div className="columns is-multiline">
        {this.props.gridItems.map( (item, idx) => {
          return (
            <div key={idx} className="column is-4">
              <div className="card">
                <div className="card-image">
                  <figure className="image">
                    <PreviewCompatibleImage imageInfo={item}/>
                  </figure>
                </div>
              </div>

            </div>
            )
          })}
      </div>
    )
  }
}

export default StoreImages
