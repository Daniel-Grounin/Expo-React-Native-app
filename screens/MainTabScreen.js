import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons';


import SettingsScreen from './SettingsScreen';
import FindScreen from './FindScreen';
import PostScreen from './PostScreen';
import ChatScreen from './ChatScreen';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';


const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
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


          </View>
        ),
      }} />
    <Tab.Screen name="Settings" component={SettingsScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
            <Ionicons name="md-settings" size={24} color="black" />


          </View>
        ),
      }}
    />
    <Tab.Screen name="Find" component={FindScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
            <Ionicons name="search" size={24} color="black" />


          </View>
        ),
      }}
    />
    <Tab.Screen name="weather" component={PostScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
           <MaterialCommunityIcons name="weather-cloudy" size={24} color="black" />


          </View>
        ),
      }}
    />
    <Tab.Screen name="Chat" component={ChatScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }} >
            <Ionicons name="chatbox" size={24} color="black" />


          </View>
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#009387',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
      title: 'Overview',

    }} />
  </HomeStack.Navigator>
);

const DetailsStackScreen = ({ navigation }) => (
  <DetailsStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <DetailsStack.Screen name="Details" component={DetailsScreen} options={{

    }} />
  </DetailsStack.Navigator>
);

const styles = StyleSheet.create({
  shadow: {
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  }
});
