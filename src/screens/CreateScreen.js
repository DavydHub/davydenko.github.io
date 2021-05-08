import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useDispatch } from "react-redux";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { AppHeaderIcon } from "../components/AppHeaderIcon";
import { THEME } from "../theme";
import { addPost } from "../store/actions/postActions";

export const CreateScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState("");

  const img =
    "data:image/jpeg;base64,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";

  const saveHeandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: img,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate("Main");
  };

  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Создать новый пост</Text>
          <Image
            style={{ width: "100%", height: 200, marginBottom: 10 }}
            source={{
              uri: img,
            }}
          />
          <TextInput
            style={styles.textarea}
            placeholder="Введите текст заметки"
            value={text}
            onChangeText={setText}
            multiline
          />
          <Button
            title="Создать пост"
            color={THEME.MAIN_COLOR}
            onPress={saveHeandler}
          />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

CreateScreen.navigationOptions = ({ navigation }) => ({
  headerTitle: "Создать пост",
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

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "open-regular",
    marginVertical: 10,
  },
  textarea: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 10,
    height: "auto",
  },
});
