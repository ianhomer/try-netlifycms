import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import QuestionPreview from './preview-templates/QuestionPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('question', QuestionPreview)
