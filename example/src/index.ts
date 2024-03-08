// index.ts

import { BitriseApiClient, Configuration, UserApi, AppsApi } from 'bitrise-api';

async function runExample(apiKey: string) {
  // Set up the API client with your configuration
  const config = new Configuration({
    apiKey: apiKey, // Update with your actual API key
  });

  const apiClient = new BitriseApiClient(config);

  try {
    // Example: Get information about the authenticated user
    const userApi = new UserApi(apiClient);
    const userInfo = await userApi.me();
    console.log('User Information:', userInfo);

    // Example: Get a list of apps
    const appsApi = new AppsApi(apiClient);
    const appsList = await appsApi.listApps();
    console.log('Apps List:', appsList);
  } catch (error) {
    console.error('Error:', error.message || error);
  }
}

const apiKey = 'your-api-key'; // 本物のAPIキーを使用するか、Bitriseダッシュボードから取得したテスト用のAPIキーを使用してください
runExample(apiKey);
