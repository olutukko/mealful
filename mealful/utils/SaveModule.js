import { AsyncStorage } from 'react-native';

const API_URL_KEY = '@MyApp:apiUrl';

class SavingModule {
  static async saveApiUrl(apiUrl) {
    try {
      await AsyncStorage.s,etItem(API_URL_KEY, apiUrl);
    } catch (error) {
      console.error('Error saving API URL:', error);
    }
  }

  static async getApiUrl() {
    try {
      const apiUrl = await AsyncStorage.getItem(API_URL_KEY);
      return apiUrl;
    } catch (error) {
      console.error('Error getting API URL:', error);
      return null;
    }
  }

  static async removeApiUrl() {
    try {
      await AsyncStorage.removeItem(API_URL_KEY);
    } catch (error) {
      console.error('Error removing API URL:', error);
    }
  }
}

export default SavingModule;