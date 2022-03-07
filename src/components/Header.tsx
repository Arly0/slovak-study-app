import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = () => {
  return (
    <View
      style={styles.header}
    >
      <View style={styles.row}>
        <Image style={styles.image} source={require('./../../assets/slovakstudy_logo.png')}></Image>
      </View>
      <View style={styles.row}>
        <Text style={styles.header__title}>Dev: Arly0</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#eee',
    width: '100%',
    height: 100,
    flexDirection: 'row'
  },
  header__title: {
    flexDirection: 'column',
    textAlign: 'center',
    color: '#333'
  },
  row: {
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center'
  },
  image: {
    width: 200,
    height: 90,
    resizeMode: 'contain'
  }
})

export default Header;