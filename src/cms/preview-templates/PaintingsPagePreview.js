import React from 'react'
import PropTypes from 'prop-types'
import { PaintingsPageTemplate } from '../../templates/paintings-page'

const MuralsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'main', 'gallery'])
  const gallery = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <PaintingsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      main={{ gallery }}
    />
  )
}

PaintingsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default PaintingsPagePreview
