import { AsyncStorage } from 'react-native';

const SETTINGS_KEY = '@MyApp:settings';
const API_URL_KEY = '@MyApp:apiUrl';

class SettingsManager {
  static async getSettings() {
    try {
      const settings = await AsyncStorage.getItem(SETTINGS_KEY);
      return settings ? JSON.parse(settings) : {};
    } catch (error) {
      console.error('Error getting settings:', error);
      return {};
    }
  }

  static async saveSettings(settings) {
    try {
      await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch (error) {
      console.error('Error saving settings:', error);
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

  static async saveApiUrl(baseUrl) {
    try {
      await AsyncStorage.setItem(API_URL_KEY, baseUrl);
    } catch (error) {
      console.error('Error saving API URL:', error);
    }
  }

  static async toggleVeganOption(isVegan) {
    try {
      const settings = await this.getSettings();
      settings.isVegan = isVegan;
      await this.saveSettings(settings);
    } catch (error) {
      console.error('Error toggling vegan option:', error);
    }
  }
}

export default SettingsManager;
