import * as React from 'react'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

class StoreImages extends React.Component {
  render() {
    return (
      <div className="columns is-multiline">
        {this.props.gridItems.map( (item, idx) => {
          return (
            <div key={idx} className="column is-4">
              <PreviewCompatibleImage imageInfo={item}/>
            </div>
            )
          })}
      </div>
    )
  }
}

export default StoreImages
