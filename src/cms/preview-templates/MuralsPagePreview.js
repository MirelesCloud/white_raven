import React from 'react'
import PropTypes from 'prop-types'
import { MuralsPageTemplate } from '../../templates/murals-page'

const MuralsPagePreview = ({ entry, getAsset }) => {
  



  return (
    <MuralsPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}

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
