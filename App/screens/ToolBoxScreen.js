import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";
import routes from "../constants/routes";
import ListItem from "../components/ListItem";

function ToolBoxScreen({ navigation }) {
  return (
    <>
      <ListItem
        icon="flag"
        text={routes.goaling}
        onPress={() => navigation.navigate(routes.goaling)}
      />
      <ListItem
        icon="emoji-objects"
        text={routes.estimation}
        onPress={() => navigation.navigate(routes.estimation)}
      />
      <ListItem
        icon="fact-check"
        text={routes.major}
        onPress={() => navigation.navigate(routes.major)}
      />
    </>
  );
}

export default ToolBoxScreen;
