import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { globalStyles } from "../styles/Global";

export default function Settings({navigation}) {
  const [allergies, setAllergies] = useState('');
  const [isVegan, setIsVegan] = useState(false);
  
  useEffect(() => {
    loadSettings();
  }, []);

  useEffect(() => {
    saveSettings();
  }, [allergies, isVegan]);

  const saveSettings = async () => {
    try {
      await AsyncStorage.setItem('settings', JSON.stringify({ allergies, isVegan }));
    } catch (error) {
      console.error('Error saving settings:', error);
    }
  };

  const loadSettings = async () => {
    try {
      const settings = await AsyncStorage.getItem('settings');
      if (settings !== null) {
        const { allergies, isVegan } = JSON.parse(settings);
        setAllergies(allergies);
        setIsVegan(isVegan);
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    }
  };
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}
       onPress={() => navigation.navigate('Home')}>Settings</Text>
      <View style={styles.setting}>
        <Text>Allergies:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setAllergies}
          value={allergies}
          placeholder="e.g. Peanuts, Shellfish"
        />
      </View>
      <View style={styles.setting}>
        <Text>Vegan:</Text>
        <Switch
          onValueChange={setIsVegan}
          value={isVegan}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  setting: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    MARGIN : 10,  
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  input: {
    flex: 1,
    marginLeft: 10,
    
  },
});