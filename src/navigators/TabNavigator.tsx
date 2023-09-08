import DetailScreen from "../screens/DetailScreen";
import LoadScreen from "../screens/LoadScreen";
import MoviesScreen from "../screens/MoviesScreen";
import SearchScreen from "../screens/SearchScreen";
import { COLORS, FONTSIZE, FONTFAMILY, SPACING } from "../theme/theme";
import FontAwesome from "@expo/vector-icons/FontAwesome"; //https://fontawesome.com/v4/icons/
import Evil from "@expo/vector-icons/EvilIcons"; //https://evil-icons.io/
import { View, StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as React from "react";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.Black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.Orange } : {},
                ]}
              >
                <FontAwesome name="home" size={20} color={COLORS.White} />
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarStyle: {
            borderTopWidth: 0,
            backgroundColor: COLORS.Black,
            height: SPACING.space_10 * 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <View
                style={[
                  styles.activeTabBackground,
                  focused ? { backgroundColor: COLORS.Orange } : {},
                ]}
              >
                <FontAwesome name="search" size={20} color={COLORS.White} />
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.Grey,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
