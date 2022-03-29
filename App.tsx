import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './src/components/Header';
import BasicPage from './src/core/BasicPage';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <ScrollView style={styles.scrollList}>
        <BasicPage></BasicPage>
      </ScrollView>
      {/* <Text>drop </Text> */}
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  scrollList: {
    width: '100%',
    height: '100%'
  }
});
