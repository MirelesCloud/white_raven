import React from 'react'
import PropTypes from 'prop-types'
import { MuralsPageTemplate } from '../../templates/murals-page'

const MuralsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'main', 'gallery'])
  const gallery = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <MuralsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      main={{ gallery }}
    />
  )
}

MuralsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default MuralsPagePreview
