import React, { useState, useEffect } from "react";
import { ActivityIndicator, RefreshControl } from "react-native";
import { Text, View, FlatList } from "react-native";
import CharacterCard from "../CharacterCard/index";
import { Searchbar,Button } from "react-native-paper";
import axios from "axios";
import { APINEWS,APIKEY,APIALLNEWS } from "@env";
import {
  Appbar,
  DarkTheme,
  DefaultTheme,
  Provider,
  Surface,
  ThemeProvider,
} from "react-native-paper";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import DropDown from "react-native-paper-dropdown";
import styles from './homeStyle.js'


export default function Home() {
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [nightMode, setNightmode] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [pais, setPais] = useState ("us");

  const ContriesArray = [
    {
      label: "us",
      value: "us"
    },
    {
      label: "ar",
      value: "ar"
    },
    {
      label: "ae",
      value: "ae"
    },
    {
      label: "au",
      value: "au"
    },
    {
      label: "br",
      value: "br"
    },
    {
      label: "ch",
      value: "ch"
    },
    {
      label: "co",
      value: "co"
    },
    {
      label: "eg",
      value: "eg"
    },
    {
      label: "fr",
      value: "fr"
    },
    {
      label: "gr",
      value: "gr"
    },
    {
      label: "id",
      value: "id"
    },
    {
      label: "ie",
      value: "ie"
    },
    {
      label: "it",
      value: "it"
    },
    {
      label: "jp",
      value: "jp"
    },
    {
      label: "mx",
      value: "mx"
    },
    {
      label: "rs",
      value: "rs"
    },
    {
      label: "ru",
      value: "ru"
    },
    {
      label: "ve",
      value: "ve"
    },
  ]

  useEffect(() => {
    axios
      .get(`${APINEWS}${pais}&apiKey=${APIKEY}`)
      .then((response) => setData(response.data.articles))
      .then((res) => {
        setRefreshing(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  function allCharacters() {
    axios
      .get(`${APINEWS}${pais}&apiKey=${APIKEY}`)
      .then((response) => setData(response.data.articles))
      .then((res) => {
        setRefreshing(false);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }


  function searchCharacter() {
    if (search) {
      setLoading(true);
      axios
        .get(`${APIALLNEWS}${search}&sortBy=popularity&apiKey=${APIKEY}&pageSize=10`)
        .then((response) => setData(response.data.articles))
        .then(setSearch(''))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }  
  }

 // cREo el provider deveria ir mejor an el app como en react normal ya veremos!
  return (
    <Provider theme={nightMode ? DarkTheme : DefaultTheme}> 
    <ThemeProvider theme={nightMode ? DarkTheme : DefaultTheme}>
    
    {/* <StatusBar
          backgroundColor={
            nightMode ? DarkTheme.colors.surface : DefaultTheme.colors.primary
          }
          barStyle={"light-content"}
        />
        <Appbar.Header>
          <Appbar.Content title="React Native Paper Dropdown" />
          <Appbar.Action
            icon={nightMode ? "brightness-7" : "brightness-3"}
            onPress={() => setNightmode(!nightMode)}
          />
        </Appbar.Header> */}
        <Surface style={styles.containerStyle}>
          <SafeAreaView style={styles.safeContainerStyle}>
            <DropDown
              label={"Top News by Country"}
              mode={"outlined"}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={pais}
              setValue={setPais}
              list={ContriesArray}
            />
            <Button icon="check" mode="contained" onPress={() => allCharacters()}>
    Submit a Country
  </Button>
            <View style={styles.spacerStyle} />
          </SafeAreaView>
        </Surface>
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
       <Searchbar
        placeholder="Search news by..."
        value={search}
        onChangeText={(value) => setSearch(value)}
        onIconPress={searchCharacter}
        onSubmitEditing={searchCharacter}
      />
      {isLoading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={allCharacters} />
          }
          data={data}
         // keyExtractor={({ id }) => id}//.toString()
          keyExtractor={(id, index) =>  id.toString()+index}
          renderItem={({ item }) => (
            <CharacterCard
              id={item.source.id}
              image={{ uri: item?.urlToImage }}
              name={item.title}
              content ={item.content} 
              publishedAt = {item.publishedAt} 
              url ={item.url} 
              author = {item?.author}           
            />
          )}
          //onEndReachedThreshold={0.2}
          //onEndReached={NextCharacters}
          
        />
      )}
    </View>
    </ThemeProvider>
    </Provider>
  );
}
