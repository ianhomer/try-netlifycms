import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import QuestionPreview from './preview-templates/QuestionPreview'
import InfoPagePreview from './preview-templates/InfoPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('info', InfoPagePreview)
CMS.registerPreviewTemplate('question', QuestionPreview)
