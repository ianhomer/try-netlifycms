import CMS from 'netlify-cms'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import QuestionPreview from './preview-templates/QuestionPreview'
import InfoPagePreview from './preview-templates/InfoPagePreview'
import { MyWidgetControl, MyWidgetPreview } from './MyWidget'

import { WidgetPreviewContainer } from "netlify-cms-ui-default"

CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('info', InfoPagePreview)
CMS.registerPreviewTemplate('question', QuestionPreview)

CMS.registerWidget('myWidget', MyWidgetControl, MyWidgetPreview);

console.log('Loaded custom CMS components')

