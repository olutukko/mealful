import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { globalStyles } from "../styles/global";


export default function Home({navigation}) {
  return (
    <View style={globalStyles.container}>
    <Text style={globalStyles.titleText}
     onPress={() => alert('This is the "HOME" screen')}>Mealful</Text>
    </View>
  )
}
