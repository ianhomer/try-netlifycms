import React from 'react'
import PropTypes from 'prop-types'
import { InfoPageTemplate } from '../../templates/info-page'

const InfoPagePreview = ({ entry, getAsset }) => {
  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryBucketThings = entry.getIn(['data', 'bucket', 'things'])
  const bucketThings = entryBucketThings ? entryBucketThings.toJS() : []

  return (
    <InfoPageTemplate
      image={entry.getIn(['data', 'image'])}
      title={entry.getIn(['data', 'title'])}
      heading={entry.getIn(['data', 'heading'])}
      description={entry.getIn(['data', 'description'])}
      intro={{ blurbs }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']),
        description: entry.getIn(['data', 'main', 'description']),
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])),
          alt: entry.getIn(['data', 'main', 'image1', 'alt']),
        },
      }}
      fullImage={entry.getIn(['data', 'full_image'])}
      bucket={{
        heading: entry.getIn(['data', 'bucket', 'heading']),
        description: entry.getIn(['data', 'bucket', 'description']),
        things: bucketThings,
      }}
    />
  )
}

InfoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default InfoPagePreview
