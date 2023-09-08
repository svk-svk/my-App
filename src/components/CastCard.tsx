import * as React from "react";
import { Text, View, StyleSheet } from "react-native";

interface CardCastProps {}

const CardCast = (props: CardCastProps) => {
  return (
    <View style={styles.container}>
      <Text>CardCast</Text>
    </View>
  );
};

export default CardCast;

const styles = StyleSheet.create({
  container: {},
});
