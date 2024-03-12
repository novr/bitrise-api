// example.ts
import 'dotenv/config'

import { Configuration, BuildsApi } from '@novr/bitrise-api'

async function runExample() {
  // Set up the API client with your configuration
  const config = new Configuration({
    apiKey: process.env.API_KEY, // Update with your actual API key
  })

  try {
    // Example: Get a list of apps
    const buildsApi = new BuildsApi(config)
    const buildsList = await buildsApi.buildListAll()
    console.log('Builds List:', buildsList)
  } catch (error) {
    console.error('Error:', error)
  }
}

runExample()
