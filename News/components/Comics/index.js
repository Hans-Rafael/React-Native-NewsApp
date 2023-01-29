import React from "react";
import { Text, View, ScrollView, Image } from "react-native";
import styles from "./comicStyle.js";
import Hyperlink from "react-native-hyperlink";

export default function Comics({ url, image }) {
  return (
    <ScrollView style={styles.container}>
      <Hyperlink linkDefault={true}>
        <Text style={styles.title}>The sources of information:{"\n"} </Text>
        <Text style={styles.link}> {url} </Text>
      </Hyperlink>
      <Image
        style={styles.image}
        source={require("../../assets/img/news.jpg")}
      />
    </ScrollView>
  );
}
