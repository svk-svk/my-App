import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./src/navigators/TabNavigator";
import DetailScreen from "./src/screens/DetailScreen";
import SearchScreen from "./src/screens/SearchScreen";
import LoadScreen from "./src/screens/LoadScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Tab"
          component={TabNavigator}
          options={{ animation: "default" }}
        />
        <Stack.Screen
          name="Details"
          component={DetailScreen}
          options={{ animation: "slide_from_left" }}
        />
        <Stack.Screen
          name="Search"
          component={SearchScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Load"
          component={LoadScreen}
          options={{ animation: "slide_from_right" }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ animation: "slide_from_right" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
