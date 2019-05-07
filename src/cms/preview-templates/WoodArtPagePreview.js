import React from 'react'
import PropTypes from 'prop-types'
import { WoodArtPageTemplate } from '../../templates/wood-art-page'

const WoodArtPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'main', 'gallery'])
  const gallery = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <WoodArtPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      main={{ gallery }}
    />
  )
}

WoodArtPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default WoodArtPagePreview
