import React from 'react'
import PropTypes from 'prop-types'
import { QuestionTemplate } from '../../templates/question'

const QuestionPreview = ({ entry, widgetFor }) => (
  <QuestionTemplate
    content={widgetFor('body')}
    description={entry.getIn(['data', 'description'])}
    tags={entry.getIn(['data', 'tags'])}
    title={entry.getIn(['data', 'title'])}
  />
)

QuestionPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default QuestionPreview
