import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

function ChildListItem({ text, onPress, percent }) {
  return (
    <View onTouchEnd={onPress} style={styles.container}>
      <AnimatedCircularProgress
        size={30}
        width={3}
        fill={percent}
        tintColor="#00e0ff"
        backgroundColor="white"
      >
        {(fill) => <Text>{fill}</Text>}
      </AnimatedCircularProgress>
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 1,
    marginLeft: 10,
    marginBottom: 2,
    padding: 10,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default ChildListItem;
