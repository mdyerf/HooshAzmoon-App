import React from "react";
import { StyleSheet } from "react-native";
import ChildListItem from "../components/ChildListItem";
import ParentListItem from "../components/ParentListItem";
import Screen from "../components/Screen";
import routes from "../constants/routes";

function LearningScreen({ navigation }) {
  return (
    <Screen>
      <ParentListItem text={"ادبیات و زبان فارسی"}>
        <ChildListItem
          text={"فارسی ۱"}
          onPress={() => navigation.navigate(routes.course)}
        />
        <ChildListItem
          text={"فارسی ۲"}
          onPress={() => navigation.navigate(routes.course)}
        />
        <ChildListItem
          text={"فارسی ۳"}
          onPress={() => navigation.navigate(routes.course)}
        />
      </ParentListItem>
      <ParentListItem text={"دین و زندگی"}>
        <ChildListItem
          text={"دین و زندگی ۱"}
          onPress={() => navigation.navigate(routes.course)}
        />
        <ChildListItem
          text={"دین و زندگی ۲"}
          onPress={() => navigation.navigate(routes.course)}
        />
        <ChildListItem
          text={"دین و زندگی ۳"}
          onPress={() => navigation.navigate(routes.course)}
        />
      </ParentListItem>
      <ParentListItem text={"عربی زبان قرآن"}>
        <ChildListItem
          text={"عربی زبان قرآن ۱"}
          onPress={() => navigation.navigate(routes.course)}
        />
        <ChildListItem
          text={"عربی زبان قرآن ۲"}
          onPress={() => navigation.navigate(routes.course)}
        />
        <ChildListItem
          text={"عربی زبان قرآن ۳"}
          onPress={() => navigation.navigate(routes.course)}
        />
      </ParentListItem>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    overflow: "scroll",
  },
});
export default LearningScreen;
