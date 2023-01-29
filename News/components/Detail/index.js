import React, { useState, useEffect } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/Ionicons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Information from "../information";
import Comics from "../Comics";
import axios from "axios";
import { APINEWS, APIKEY, APIALLNEWS } from "@env";

const Tab = createBottomTabNavigator();

export default function Detail({ route }) {
  const [isLoading, setLoading] = useState(true);
  //const [data, setData] = useState([]);

  const { id, content, url, author, publishedAt, image} = route.params;
  useEffect(() => {
    axios.get(`${APINEWS}us&APIKEY=${APIKEY}`)
      //.then((response) => setData(response.data.articles))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Enlaces"
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="information-circle"
              color={color}
              size={size}
            />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Information
              //image={data?.image}
              author={author}
              content={content}
              publishedAt={publishedAt}
            />
          )
        }
      </Tab.Screen>
      <Tab.Screen
        name="Source Links"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name={"link"} color={color} size={size} />
          ),
        }}
      >
        {() =>
          isLoading ? (
            <ActivityIndicator size="large" color="#00ff00" />
          ) : (
            <Comics 
            image={image} 
            url={url} />
          )
        }
      </Tab.Screen>
    </Tab.Navigator>
  );
}
