import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeIcon from "../assets/Home";
import SerchIcon from "../assets/SerchIcon";
import AddPostIcon from "../assets/AddPostIcon";
import LikeIcon from "../assets/LikeIcon";
import ProfilIcon from "../assets/ProfilIcon";
import { Text } from "react-native";
import Home from "./Home";

const Tab = createBottomTabNavigator();

const SettingsScreen = () => {
  return <Text>setting</Text>;
};

function Mytabs() {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: () => <HomeIcon name="home" />,
        }}
      />
      <Tab.Screen
        name="SerchPage"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => <SerchIcon name="setting" />,
        }}
      />
      <Tab.Screen
        name="AddPost"
        component={SettingsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => <AddPostIcon name="setting" />,
        }}
      />
      <Tab.Screen
        name="LikePage"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => <LikeIcon name="setting" />,
        }}
      />
      <Tab.Screen
        name="ProfilPage"
        component={SettingsScreen}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ color }) => <ProfilIcon name="setting" />,
        }}
      />
    </Tab.Navigator>
  );
}

export default Mytabs;
