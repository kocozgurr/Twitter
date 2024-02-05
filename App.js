import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomTabNavigator from './screens/BottomTabNavigator';
import Tweets from './screens/Tweets';

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
