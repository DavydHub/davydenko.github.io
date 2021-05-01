import React from "react";
import { View, StyleSheet, Text, Button, FlatList } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";
import { Post } from "../components/Post";
import { AppHeaderIcon } from "../components/AppHeaderIcon";

export const BookedScreen = (props) => {
  const openPostHeandler = (post) => {
    props.navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };
  return (
    <View style={styles.wrapper}>
      <FlatList
        data={DATA.filter((post) => post.booked)}
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <Post post={item} onOpen={openPostHeandler} />
        )}
      />
    </View>
  );
};
BookedScreen.navigationOptions = {
  headerTitle: "Избранное",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toogle Drawer"
        iconName="ios-menu"
        onPress={() => console.log("Pressed menu")}
      />
    </HeaderButtons>
  ),
};

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  wrapper: {
    padding: 10,
  },
});
