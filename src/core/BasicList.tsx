import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet } from 'react-native';
import Blog from "../api/Blog";
import { BasicItemDataInterface } from "../interfaces/BasicItemInterface";
import BasicItem from "./BasicItem";
import { DOMParser } from "@xmldom/xmldom";
import { NormilizeString } from "../services/Text";
// import Logs from "../services/Logs";

const BasicList = () => {
  const [news, setNews] = useState<Array<BasicItemDataInterface>>();

  useEffect(() => {
    getAllBLogs();
  }, []);

  const getAllBLogs = async() => {
    await Blog.get('blog/feed/')
      .then((resp:any) => {
        const parser   = new DOMParser(),
              doc      = parser.parseFromString(resp.data, 'application/xml'),
              newsList = doc.documentElement.getElementsByTagName('item');
        let tmp:any = [];
        Array.from(newsList).forEach(element => {
          const title       = NormilizeString (
            element.getElementsByTagName('title')[0]?.textContent
          );
          const description = NormilizeString(
            element.getElementsByTagName('description')[0]?.textContent
          );
          tmp.push({
            title: title,
            description: description
          });
        });
        setNews(tmp);
      })
      .catch((error) => {
        // Logs.error(error);
        console.error(error);
      });
  };

  return (
    <View style={styles.basicListContainer}>
      <FlatList
        style={styles.blog__flatStyle}
        data={news}
        renderItem={
          ({item}) => <BasicItem item={item} />
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  basicListContainer: {
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  blog__flatStyle: {
    width: '100%'
  }
})

export default BasicList;