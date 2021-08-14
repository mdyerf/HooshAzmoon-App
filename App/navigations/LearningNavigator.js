import React from "react";
import AppStackNavigator from "../components/AppStackNavigator";
import routes from "../constants/routes";
import LearningScreen from "../screens/LearningScreen";
import ChapterScreen from "../screens/ChapterScreen";
import CourseScreen from "../screens/CourseScreen";

function LearningNavigator() {
  return (
    <AppStackNavigator
      MainComponent={LearningScreen}
      mainName={routes.learning}
      list={[
        {
          name: routes.course,
          Component: CourseScreen,
        },
        {
          name: routes.chapter,
          Component: ChapterScreen,
        },
      ]}
    />
  );
}

export default LearningNavigator;
