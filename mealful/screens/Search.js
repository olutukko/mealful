import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, FlatList } from 'react-native';
import * as FileSystem from 'expo-file-system';
import DropDownPicker from 'react-native-dropdown-picker';
import { globalStyles } from "../styles/Global";
import AutocompleteInput from '../utils/AutoCompleteInput';

import ingredientsList from '../utils/IngredientsList.json';
import mealTypes from '../utils/MealTypes.json';

export default function SearchScreen() {
  const [includeIngredients, setIncludeIngredients] = useState('');
  const [excludeIngredients, setExcludeIngredients] = useState('');
  const [type, setType] = useState('');
  const [recipeTags, setRecipeTags] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedIncludeIngredients, setSelectedIncludeIngredients] = useState([]);
  const [selectedExcludeIngredients, setSelectedExcludeIngredients] = useState([]);
  const [includeInputText, setIncludeInputText] = useState('');
  const [excludeInputText, setExcludeInputText] = useState('');

  useEffect(() => {
    setIncludeIngredients(ingredientsList.map(ingredient => ingredient.name));
    setType(mealTypes.map(mealType => mealType.name));
  }, []);

  const handleSearch = async () => {
    const searchCriteria = {
      includeIngredients: selectedIncludeIngredients,
      excludeIngredients: selectedExcludeIngredients,
      type,
      recipeTags
    };
    await FileSystem.writeAsStringAsync(
      FileSystem.documentDirectory + 'utils/SearchCriteria.js',
      `export default ${JSON.stringify(searchCriteria)}`
    );
  };

  const handleIncludeIngredientChange = (text) => {
    setIncludeInputText(text);
  
    const newSuggestions = ingredientsList.filter(ingredient =>
      ingredient.name.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(newSuggestions);
  };

  const handleExcludeIngredientChange = (text) => {
    setExcludeInputText(text);
  
    const newSuggestions = ingredientsList.filter(ingredient =>
      ingredient.name.toLowerCase().includes(text.toLowerCase())
    );
    setSuggestions(newSuggestions);
  };
  
  const handleIncludeIngredientSelect = (ingredientName) => {
    setIncludeInputText('');
    setSelectedIncludeIngredients([...selectedIncludeIngredients, ingredientName]);
  };

  const handleExcludeIngredientSelect = (ingredientName) => {
    setExcludeInputText('');
    setSelectedExcludeIngredients([...selectedExcludeIngredients, ingredientName]);
  };

  const renderIngredient = ({ item }) => <Text>{item}</Text>;
  
  return (
    
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}
        onPress={() => navigation.navigate('Home')}>Search
      </Text>
      <Text>Include Ingredients:</Text>
      <AutocompleteInput
        value={includeInputText}
        onChangeText={handleIncludeIngredientChange}
        placeholder='Enter some text...'
        data={suggestions}
        onSelect={handleIncludeIngredientSelect}
      />
      <FlatList
        data={selectedIncludeIngredients}
        renderItem={renderIngredient}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Exclude Ingredients:</Text>
      <AutocompleteInput
        value={excludeInputText}
        onChangeText={handleExcludeIngredientChange}
        placeholder='Enter some text...'
        data={suggestions}
        onSelect={handleExcludeIngredientSelect}
      />
      <FlatList
        data={selectedExcludeIngredients}
        renderItem={renderIngredient}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text>Type:</Text>
      <DropDownPicker
        items={mealTypes.map(mealType => ({ label: mealType, value: mealType }))}
      />
      <Text>Recipe Tags:</Text>
      <TextInput value={recipeTags} onChangeText={setRecipeTags} style={globalStyles.input}/>
      <Button title="Search" onPress={handleSearch} />
    </View>
  );
}