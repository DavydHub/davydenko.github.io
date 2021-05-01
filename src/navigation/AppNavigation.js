import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MainScreen } from "../screens/MainScreen";
import { PostScreen } from "../screens/PostScreen";
import { THEME } from "../theme";
import { BookedScreen } from "../screens/BookedScreen";

const PostNavigator = createStackNavigator(
  {
    Main: MainScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: "Main",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "IOS" ? THEME.MAIN_COLOR : "#fff",
    },
  }
);

const BookedNavigator = createStackNavigator(
  {
    Booked: BookedScreen,
    Post: {
      screen: PostScreen,
    },
  },
  {
    initialRouteName: "Booked",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "IOS" ? THEME.MAIN_COLOR : "#fff",
    },
  }
);

const BottomNavigator = createBottomTabNavigator(
  {
    Post: {
      screen: PostNavigator,
      navigationOptions: {
        tabBarLabel: "Все",
        tabBarIcon: (info) => (
          <Ionicons name="ios-albums" size={25} color={info.tintColor} />
        ),
      },
    },
    Booked: {
      screen: BookedNavigator,
      navigationOptions: {
        tabBarLabel: "Избранное",
        tabBarIcon: (info) => (
          <Ionicons name="ios-star" size={25} color={info.tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: THEME.MAIN_COLOR,
    },
  }
);

export const AppNavigation = createAppContainer(BottomNavigator);
