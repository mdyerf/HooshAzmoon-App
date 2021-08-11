import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import colors from "../constants/colors";

function AppTabNavigator({ screens }) {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      {screens.map((screen) => (
        <Tab.Screen
          exact
          key={screen.name}
          name={screen.name}
          component={screen.Component}
          options={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarLabelStyle: styles.tabBarLabel,
            tabBarActiveBackgroundColor: colors.secoundary,
            tabBarIcon: () => (
              <MaterialIcons name={screen.icon} size={25} style={styles.icon} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  icon: {
    color: colors.primary,
  },
  tabBarLabel: {
    color: colors.primary,
    marginBottom: 7,
    fontSize: 12,
  },
  tabBar: {
    height: 60,
  },
});

export default AppTabNavigator;
