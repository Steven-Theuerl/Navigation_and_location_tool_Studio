import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { googleMapsInput } from '@sanity/google-maps-input'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Testing-PreGFNav',

  projectId: 'tta7nwhf',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), 
      googleMapsInput({
          apiKey: 'AIzaSyBL4JbgNRTl__k80OfvvxR1SBcyl2v4Px0'
     })
  ],

  schema: {
    types: schemaTypes,
  },
})
