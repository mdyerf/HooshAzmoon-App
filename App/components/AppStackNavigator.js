import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import NavListScreen from "../components/NavListScreen";

function AppStackNavigator({ mainName, list }) {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen exact
        options={{ headerShown: false }}
        name={mainName}
        component={({ navigation }) => (
          <NavListScreen
            navigation={navigation}
            items={list.map((li) => ({ icon: li.icon, navigateTo: li.name }))}
          />
        )}
      />
      {list.map((li) => (
        <Stack.Screen key={li.name} name={li.name} component={li.Component} />
      ))}
    </Stack.Navigator>
  );
}

export default AppStackNavigator;
