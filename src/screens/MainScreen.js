import React from "react";
import { StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const MainScreen = (props) => {
  const openPostHeandler = (post) => {
    props.navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };
  return <PostList data={DATA} onOpen={openPostHeandler} />;
};
MainScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Мой блог",
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Take photo"
        iconName="ios-camera"
        onPress={() => navigation.push("Create")}
      />
    </HeaderButtons>
  ),
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toogle Drawer"
        iconName="ios-menu"
        onPress={() => navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
