import { StyleSheet } from 'react-native'

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      //alignItems: 'center',
      padding: 30,
    },
    titleText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 50,
        alignSelf: 'center',
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingLeft: 10,
      minWidth: 200,
      marginTop: 10,
    }
});