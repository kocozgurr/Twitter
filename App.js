import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';



export default function App()
{
  return (
    <View style={styles.container}>
      <BottomTabNavigator />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

});
