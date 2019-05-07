import React from 'react'
import PropTypes from 'prop-types'
import { LeisPageTemplate } from '../../templates/leis-page'

const LeisPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'main', 'gallery'])
  const gallery = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <LeisPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      main={{ gallery }}
    />
  )
}

LeisPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default LeisPagePreview
