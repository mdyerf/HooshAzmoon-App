import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import routes from "../constants/routes";

import LearningScreen from "../screens/LearningScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TestScreen from "../screens/TestScreen";
import AppTabNavigator from "../components/AppTabNavigator";
import StackNavigator from "./StackNavigator";

function AppNavigator(props) {
  return (
    <NavigationContainer>
      <AppTabNavigator
        screens={[
          {
            name: routes.profile,
            Component: ProfileScreen,
            icon: "portrait",
          },
          {
            name: routes.learning,
            Component: LearningScreen,
            icon: "psychology",
          },
          {
            name: routes.test,
            Component: TestScreen,
            icon: "check-box",
          },
          {
            name: routes.toolBox,
            Component: StackNavigator,
            icon: "architecture",
          },
        ]}
      />
    </NavigationContainer>
  );
}

export default AppNavigator;
