import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./CharacterStyle";
import { useNavigation } from "@react-navigation/native";

export default function CharacterCard({ image, name, id,content,url,author, publishedAt,}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Detail", { //by params
        id:id, content:content, url:url, author:author, publishedAt : publishedAt, image:image
         })}
    >
      <Image style={styles.image} source={image} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
