import React from "react";
import {
  Alert,
  Share,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
} from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "../theme/theme";
import { baseImagePath, movieCastDetails, movieDetails } from "../api/apicall";
const ShareFunc = (props: any) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        title: props.title_p,
        message: props.text_p,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconBG} onPress={onShare}>
        <FontAwesome name={"share-square-o"} style={styles.iconStyle} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  iconStyle: {
    color: COLORS.White,
    fontSize: FONTSIZE.size_24,
  },

  iconBG: {
    height: SPACING.space_20 * 2,
    width: SPACING.space_20 * 2,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: BORDERRADIUS.radius_20,
    backgroundColor: COLORS.Orange,
  },
});

export default ShareFunc;
