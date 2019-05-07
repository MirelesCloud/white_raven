import React from 'react'
import PropTypes from 'prop-types'
import { CommissionsPageTemplate } from '../../templates/commissions-page'

const CommissionsPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'main', 'gallery'])
  const gallery = entryBlurbs ? entryBlurbs.toJS() : []

  return (
    <CommissionsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      main={{ gallery }}
    />
  )
}

CommissionsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default CommissionsPagePreview
