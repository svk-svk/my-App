import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  StatusBar,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { COLORS, SPACING } from "../theme/theme";
import { baseImagePath, searchMovies } from "../api/apicall";
import InputHeader from "../components/InputHeader";
import MovieCard from "../components/MovieCard";

const { width, height } = Dimensions.get("screen");

const SearchScreen = ({ navigation }: any) => {
  const [searchList, setSearchList] = useState([]);

  const searchMoviesFunction = async (name: string) => {
    try {
      let response = await fetch(searchMovies(name));
      let json = await response.json();
      setSearchList(json.results);
    } catch (error) {
      console.error("Something went wrong in searchMoviesFunction ", error);
    }
  };
  if (searchList == undefined && searchList == null) {
    return (
      <ScrollView
        style={styles.container}
        bounces={false}
        contentContainerStyle={styles.scrollViewContainer}
      >
        <StatusBar hidden />
        <View style={styles.InputHeaderContainer}>
          <InputHeader searchFunction={searchMoviesFunction}></InputHeader>
        </View>
        <View style={styles.loadingContainer}>
          <ActivityIndicator size={"large"} color={COLORS.Orange} />
        </View>
      </ScrollView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />

      <View>
        <FlatList
          data={searchList}
          keyExtractor={(item: any) => item.id}
          bounces={false}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View style={styles.InputHeaderContainer}>
              <InputHeader searchFunction={searchMoviesFunction} />
            </View>
          }
          contentContainerStyle={styles.centerContainer}
          renderItem={({ item, index }) => (
            <MovieCard
              shoudlMarginatedAtEnd={false}
              shouldMarginatedAround={true}
              cardFunction={() => {
                navigation.push("Detail", { movieid: item.id });
              }}
              cardWidth={width / 2 - SPACING.space_12 * 2}
              title={item.original_title}
              imagePath={baseImagePath("w342", item.poster_path)}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    width,
    alignItems: "center",
    backgroundColor: COLORS.Black,
  },
  InputHeaderContainer: {
    display: "flex",
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
    marginBottom: SPACING.space_28 - SPACING.space_12,
  },
  centerContainer: {
    alignItems: "center",
  },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
});

export default SearchScreen;
