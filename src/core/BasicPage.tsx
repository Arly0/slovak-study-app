import React from 'react';
import { BasicPageInterface } from '../interfaces/BasicPageInterface';
import { View, Text, StyleSheet } from 'react-native';
import BasicList from './BasicList';

const BasicPage:React.FC<BasicPageInterface> = ({ type = 'default' }) => {
  return (
    <View style={styles.basicContainer}>
      <BasicList></BasicList>
    </View>
  )
}

const styles = StyleSheet.create({
  basicContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: '10% 15% 10% 15%',
    backgroundColor: '#eee'
  }
})

export default BasicPage;