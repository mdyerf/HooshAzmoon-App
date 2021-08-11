import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import routes from "../constants/routes";

import LearningScreen from "../screens/LearningScreen";
import ProfileScreen from "../screens/ProfileScreen";
import GeneralTestScreen from "../screens/GeneralTestScreen";
import SubjectTestScreen from "../screens/SubjectTestScreen";
import EstimationScreen from "../screens/EstimationScreen";
import GoalingScreen from "../screens/GoalingScreen";
import MajorScreen from "../screens/MajorScreen";
import AppTabNavigator from "../components/AppTabNavigator";
import AppStackNavigator from "../components/AppStackNavigator";

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
            Component: () => (
              <AppStackNavigator mainName={routes.test} list={[
                {
                  name: routes.subjectTest,
                  icon: 'check',
                  Component: SubjectTestScreen,
                },
                {
                  name: routes.generalTest,
                  icon: 'grading',
                  Component: GeneralTestScreen
                }
              ]}/>
            ),
            icon: "check-box",
          },
          {
            name: routes.toolBox,
            Component: () => (
              <AppStackNavigator mainName={routes.toolBox} list={[
                {
                  name: routes.goaling,
                  icon: 'flag',
                  Component: GoalingScreen,
                },
                {
                  name: routes.estimation,
                  icon: 'emoji-objects',
                  Component: EstimationScreen
                },
                {
                  name: routes.major,
                  icon: 'fact-check',
                  Component: MajorScreen
                }
              ]}/>
            ),
            icon: "architecture",
          },
        ]}
      />
    </NavigationContainer>
  );
}

export default AppNavigator;
