import { registerRootComponent } from 'expo';
import React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';

const App = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

export default registerRootComponent(App);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1f1f1f',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
