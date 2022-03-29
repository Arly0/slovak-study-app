import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { BasicItemInterface, BasicItemDataInterface } from '../interfaces/BasicItemInterface';

const BasicItem:React.FC<BasicItemInterface> = ({item}) => {
  return (
    <View style={styles.basicItemContainer}>
      <View style={styles.blogPreviewImageContainer}>
        <Image 
          style={styles.blogPreviewImage} 
          source={require('./../../assets/blog_example.jpg')} 
        />
      </View>
      <View style={styles.blogPreviewTextContainer}>
        <Text 
          style={styles.blogPreviewTitle}
          numberOfLines={2}
          ellipsizeMode={'tail'}
        >{item.title}</Text>
        <Text 
          style={styles.blogPreviewDescription}
          numberOfLines={3}
          ellipsizeMode={'tail'}
        >
          {item.description}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  basicItemContainer: {
    backgroundColor: '#ccc',
    width: '100%',
    borderRadius: 5,
    marginTop: 3,
    marginBottom: 3,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  blogPreviewImageContainer: {
    // flexGrow: 2,
    maxWidth: '40%',
  },
  blogPreviewTextContainer: {
    // flexGrow: 1,
    maxWidth: '60%'
  },
  blogPreviewImage: {
    width: 100,
    height: 100,
    marginRight: 20,

  },
  blogPreviewTitle: {
    fontSize: 18,
  },
  blogPreviewDescription: {
    fontSize: 14,
  },
});

export default BasicItem;