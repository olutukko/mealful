import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';

const AutocompleteInput = ({ value, onChangeText, placeholder, data, onSelect }) => {
  return (
    <Autocomplete
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      data={value.length > 0 ? data.map(item => item.name) : []}
      flatListProps={{
        keyExtractor: (_, idx) => idx.toString(),
        renderItem: ({ item }) => (
          <TouchableOpacity onPress={() => onSelect(item)}>
            <Text>{item}</Text>
          </TouchableOpacity>
        ),
      }}
    />
  );
};

export default AutocompleteInput;