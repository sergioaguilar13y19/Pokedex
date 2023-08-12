import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//import all screens
import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Acerca from "../screens/Acerca";
//icons
import { AntDesign } from "@expo/vector-icons";

const SCREEN_OPTIONS = { tabBarShowLabel: false };
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator screenOptions={SCREEN_OPTIONS}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hearto" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Acerca"
        component={Acerca}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="infocirlceo" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
