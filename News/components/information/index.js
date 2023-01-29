import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./informationStyle";

export default function Information({ author, content, publishedAt }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Author:{'\n'} {author}</Text> 
      <Text style={styles.description}>{'\n'}Content:{' '}{content} {'\n'}{'\n'}
      PublishedAt:{' '} {publishedAt}</Text> 
    </View>
  );
}
