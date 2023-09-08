import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { COLORS } from "../theme/theme";

const LoadScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoadScreen</Text>
    </View>
  );
};

export default LoadScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.Black,
  },
});
