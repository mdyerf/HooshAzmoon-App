import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import routes from "../constants/routes";

import EstimationScreen from "../screens/EstimationScreen";
import GoalingScreen from "../screens/GoalingScreen";
import LearningScreen from "../screens/LearningScreen";
import MajorScreen from "../screens/MajorScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TestScreen from "../screens/TestScreen";
import AppTabNavigator from "../components/AppTabNavigator";
import ToolBoxScreen from "../screens/ToolBoxScreen";

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
            Component: ToolBoxScreen,
            icon: "architecture",
          },
        ]}
      />
    </NavigationContainer>
  );
}

export default AppNavigator;
