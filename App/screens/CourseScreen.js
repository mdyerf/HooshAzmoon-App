import React from "react";
import { StyleSheet, Image } from "react-native";
import ChildListItem from "../components/ChildListItem";
import ParentListItem from "../components/ParentListItem";
import Screen from "../components/Screen";
import routes from "../constants/routes";

function CourseScreen({ navigation }) {
  return (
    <Screen>
      <ChildListItem
        text={"فصل ۱"}
        onPress={() => navigation.navigate(routes.chapter)}
      />
      <ChildListItem
        text={"فصل ۲"}
        onPress={() => navigation.navigate(routes.chapter)}
      />
    </Screen>
  );
}

export default CourseScreen;
