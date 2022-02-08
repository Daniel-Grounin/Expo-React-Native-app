import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import FindScreen from '../screens/FindScreen';
import PostScreen from '../screens/PostScreen';
import ChatScreen from '../screens/ChatScreen';


const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        }
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
            <Ionicons name="home" size={24} color="black" />

          <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >Home</Text>
          </View>
        ),
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
            <Ionicons name="md-settings" size={24} color="black" />

          <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >Settings</Text>
          </View>
        ),
      }} 
      />
      <Tab.Screen name="Find" component={FindScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
            <Ionicons name="search" size={24} color="black" />

          <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >Find</Text>
          </View>
        ),
      }} 
      />
      <Tab.Screen name="Post" component={PostScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
           <Ionicons name="send" size={24} color="black" />

          <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >Post</Text>
          </View>
        ),
      }} 
      />
      <Tab.Screen name="Chat" component={ChatScreen} 
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
            <Ionicons name="chatbox" size={24} color="black" />

          <Text style={{ color: focused ? '#e32f45' : '#748c94', fontSize: 12 }} >Chat</Text>
          </View>
        ),
      }} 
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});

export default Tabs;