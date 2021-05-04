import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { DATA } from "../data";

import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";

export const BookedScreen = (props) => {
  const openPostHeandler = (post) => {
    props.navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };
  const dataBooked = DATA.filter((post) => post.booked);
  return <PostList data={dataBooked} onOpen={openPostHeandler} />;
};
BookedScreen.navigationOptions = (props) => ({
  headerTitle: "Избранное",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
      <Item
        title="Toogle Drawer"
        iconName="ios-menu"
        onPress={() => props.navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
});
