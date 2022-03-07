import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { BasicItemInterface } from '../interfaces/BasicItemInterface';

const BasicItem = () => {
  return (
    <View>
      <View>
        {/* <Image source={'/test.png'} /> */}
      </View>
      <View>
        <Text>Test1</Text>
        <Text>desc1</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  // some styes
});

export default BasicItem;