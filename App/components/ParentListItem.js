import React, { useState } from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AnimatedCircularProgress } from "react-native-circular-progress";

import colors from "../constants/colors";

function ParentListItem({ text, children }) {
  const [open, setOpen] = useState(false);
  function handleTap() {
    setOpen(!open);
  }
  return (
    <>
      <View onTouchEnd={handleTap} style={styles.container}>
        <AnimatedCircularProgress
          size={30}
          width={3}
          fill={45}
          tintColor="#00e0ff"
          backgroundColor="white"
        >
          {(fill) => <Text>{fill}</Text>}
        </AnimatedCircularProgress>
        <Text>{text}</Text>
        <MaterialIcons
          name={"expand-more"}
          size={30}
          style={[
            styles.arrow,
            { transform: [{ rotate: open ? "180deg" : "0deg" }] },
          ]}
        />
      </View>
      <View style={styles.children}>{open && children}</View>
    </>
  );
}

const styles = StyleSheet.create({
  arrow: {
    color: colors.primary,
  },
  container: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    marginHorizontal: 10,
    marginTop: 10,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  children: {
    borderRightColor: colors.secoundary,
    borderRightWidth: 2,
    marginRight: 20,
  },
});

export default ParentListItem;
