import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { 
  NavigationContainer, 
 
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { 
  Provider as PaperProvider, 
} from 'react-native-paper';

import { DrawerContent } from './screens/DrawerContent';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import SettingsScreen from './screens/SettingsScreen';
import BookmarkScreen from './screens/BookmarkScreen';


const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
  
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>
  
  </NavigationContainer>
   
  );
}

export default App;

// import React, { useState } from 'react';
// import { Component } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

// const Stack = createNativeStackNavigator();

// function App({ navigation }) {
//   const [enterGoal, setEnterGoal] = useState('');
//   const [courseGoals, setCourseGoals] = useState([]);

//   const goalInputHandler = (enteredText) => {
//     setEnterGoal(enteredText);
//   }

//   const addGoalHandler = () => {
//     setCourseGoals(currentGoals => [...courseGoals, enterGoal]);
//   }

//   return (

//     <View style={styles.screen}>
//       <Button
//         title="הרשמה"
//         color="black"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Button
//         title="התחברות"
//         color="black"
//         onPress={() => navigation.navigate('Details')}
//       />
//       <Button
//         title="צור קשר"
//         color="black"
//         onPress={() => navigation.navigate('Contact')}
//       />
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder='type here...'
//           style={styles.input}
//           onChangeText={goalInputHandler}
//           value={enterGoal}
//         />
//         <Button title="Submit" onPress={addGoalHandler} />
//       </View>

//       <ScrollView>
//         {courseGoals.map(goal => (
//           <View key={goal} style={styles.listItem}>
//             <Text>{goal}</Text>
//           </View>
//         ))}



//       </ScrollView>
//     </View>

//   );
// }

// function GaleryScreen({ navigation }) {
//   return (
//     <View style={styles.container}>

//       <Button title="חזור" onPress={() => navigation.goBack()} />
//       <Button
//         title="מסך הבית"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// function ContactScreen({ navigation }) {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.bigBlue}>Daniel Grounin</Text>

//       <Button title="חזור" onPress={() => navigation.goBack()} />
//       <Button
//         title="מסך הבית"
//         onPress={() => navigation.popToTop()}
//       />
//     </View>
//   );
// }

// function Nav() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" >
//         <Stack.Screen name="Home" component={App} options={{ title: 'Home' }} />
//         <Stack.Screen name="Details" component={App} />
//         <Stack.Screen name="Galery" component={GaleryScreen} />
//         <Stack.Screen name="Contact" component={ContactScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// const styles = StyleSheet.create({
//   buttonContainer: {
//     margin: 50,
//     justifyContent: 'center',
//     borderRadius: 10,
//     borderWidth: 10,
//     backgroundColor: '#ffb6c1',
//     fontWeight: 'bold',
//     alignItems: 'center',
//   },
//   screen: {
//     padding: 100
//   },

//   inputContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     padding: 10,
//   },

//   input: {
//     borderColor: 'black',
//     borderWidth: 1,
//     padding: 10,
//     width: 200
//   },

//   listItem: {
//     padding: 10,
//     backgroundColor: '#ccc',
//     borderColor: 'black',
//     borderWidth: 1,
//     marginVertical: 3
//   },
//   bigBlue: {
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 60,
//   },
//   bigerBlue: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     color: 'black',
//     fontWeight: 'bold',
//     fontSize: 30,
//   },

// });

// export default Nav;
