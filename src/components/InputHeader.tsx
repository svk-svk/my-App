import React, { useState } from "react";

import { COLORS } from "../theme/theme";

import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { BORDERRADIUS, FONTFAMILY, FONTSIZE, SPACING } from "../theme/theme";

const InputHeader = (props: any) => {
  const [searchText, setSearchText] = useState<string>("");
  return (
    <View style={styles.inputBox}>
      <TextInput
        style={styles.textInput}
        onChangeText={(textInput) => setSearchText(textInput)}
        placeholder="Search your Movies..."
        placeholderTextColor={COLORS.WhiteRGBA32}
      />
      <TouchableOpacity
        style={styles.searchIcon}
        onPress={() => props.searchFunction(searchText)}
      >
        <FontAwesome
          name="search"
          color={COLORS.Orange}
          size={FONTSIZE.size_20}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    display: "flex",
    paddingVertical: SPACING.space_8,
    paddingHorizontal: SPACING.space_24,
    borderWidth: 2,
    borderColor: COLORS.WhiteRGBA15,
    borderRadius: BORDERRADIUS.radius_25,
    flexDirection: "row",
  },
  textInput: {
    width: "90%",

    fontSize: FONTSIZE.size_14,
    color: COLORS.White,
  },
  searchIcon: {
    alignItems: "center",
    justifyContent: "center",
    padding: SPACING.space_10,
  },
});

export default InputHeader;
