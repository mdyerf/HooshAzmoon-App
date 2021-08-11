import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

function ListItem({ onPress, icon, text }) {
  return (
    <View
      onTouchEnd={onPress}
      style={styles.container}
    >
      <MaterialIcons name={icon} style={styles.icon} size={40} />
      <Text>{text}</Text>
      <MaterialIcons name={"chevron-right"} size={30} style={styles.arrow}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 20,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  icon: {
    color: colors.primary,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: '50%',
    padding: 5,
    backgroundColor: colors.secoundary
  },
  arrow: {
    color: colors.primary
  }
});

export default ListItem;
