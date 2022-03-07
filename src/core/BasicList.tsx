import React from "react";
import { View, FlatList } from 'react-native';
import BasicItem from "./BasicItem";

const BasicList = () => {
  return (
    <View>
      <BasicItem></BasicItem>
      <BasicItem></BasicItem>
      <BasicItem></BasicItem>
    </View>
  )
}

export default BasicList;