import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import colors from "../constants/colors";
import routes from "../constants/routes";
import GoalingScreen from "../screens/GoalingScreen";
import EstimationScreen from "../screens/EstimationScreen";
import MajorScreen from "../screens/MajorScreen";
import ToolBoxScreen from "../screens/ToolBoxScreen";

function StackNavigator({ screens }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name={routes.toolBox}
        component={ToolBoxScreen}
      />
      <Stack.Screen name={routes.estimation} component={EstimationScreen} />
      <Stack.Screen name={routes.goaling} component={GoalingScreen} />
      <Stack.Screen name={routes.major} component={MajorScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});

export default StackNavigator;
