import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";


export default function Filters({navigation}) {
  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}
     onPress={() => navigation.navigate('Home')}>Filters</Text>
    </View>
  )
}

