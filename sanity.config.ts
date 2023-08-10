import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

const config = defineConfig({
  name: 'default',
  title: 'Sanity Next.js Site',

  projectId: 'oewnjjzb',
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
  basePath: "/studio",
})
export default config