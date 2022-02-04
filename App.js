import React from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';

export default function App() {
  return (
    <View style = {styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput
           placeholder='course goal'
           style = {styles.input}
          />
          <Button title="Submit"/>
        </View>
        <View/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10
  },
  input: {
      borderColor: 'black',
      borderWidth : 1,
      padding: 10,
      width: 200
  },

});
