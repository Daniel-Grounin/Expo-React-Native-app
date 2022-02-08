import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { WeatherWidget } from 'react-native-weather';

const SupportScreen = () => {
  return(
    <WeatherWidget
      api={"your-DarkSky.net-api-here"}
      lat={"lat"}
      lng={"lng"}
      />
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});