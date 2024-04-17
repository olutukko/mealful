import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/Global";


export default function Search({navigation}) {
  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}
     onPress={() => navigation.navigate('Home')}>Search</Text>
    </View>
  )
}

