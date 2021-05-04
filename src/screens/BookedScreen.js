import React, { useEffect } from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { PostList } from "../components/PostList";
import { loadPosts } from "../store/actions/postActions";

export const BookedScreen = (props) => {
  const openPostHeandler = (post) => {
    props.navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  const bookedPosts = useSelector((state) => state.post.bookedPosts);

  return <PostList data={bookedPosts} onOpen={openPostHeandler} />;
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
