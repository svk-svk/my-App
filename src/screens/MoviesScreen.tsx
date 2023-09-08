import React, { useEffect, useState } from "react";
import { COLORS, FONTSIZE, FONTFAMILY, SPACING } from "../theme/theme";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  ActivityIndicator,
  FlatList,
} from "react-native";

import {
  upcomingMovies,
  popularMovies,
  searchMovies,
  baseImagePath,
} from "../api/apicall";
import InputHeader from "../components/InputHeader";
import CategoryHeader from "../components/CategoryHeader";
import MovieCard from "../components/MovieCard";

const { width, height } = Dimensions.get("window"); //pentru a fi responsive

const getUpcomingMoviesList = async () => {
  try {
    let response = await fetch(upcomingMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      " Something went wrong in getUpcomingMoviesList Function",
      error
    );
  }
};

const getPopularMoviesList = async () => {
  try {
    let response = await fetch(popularMovies);
    let json = await response.json();
    return json;
  } catch (error) {
    console.error(
      " Something went wrong in getPopularMoviesList Function",
      error
    );
  }
};

const MoviesScreen = ({ navigation }: any) => {
  const [popularMoviesList, setPopularMoviesList] = useState<any>(undefined);
  const [upcomingMoviesList, setUpcomingMoviesList] = useState<any>(undefined);

  useEffect(() => {
    (async () => {
      let tempPopular = await getPopularMoviesList();
      setPopularMoviesList(tempPopular.results);

      let tempUpcoming = await getUpcomingMoviesList();
      setUpcomingMoviesList(tempUpcoming.results);
    })();
  }, []);

  const searchMoviesFunction = () => {
    navigation.navigate("Search");
  };

  if (
    popularMoviesList == undefined &&
    popularMoviesList == null &&
    upcomingMoviesList == undefined &&
    upcomingMoviesList == null
  ) {
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
    <ScrollView
      style={styles.container}
      bounces={false}
      contentContainerStyle={styles.scrollViewContainer}
    >
      <StatusBar hidden />
      <View style={styles.InputHeaderContainer}>
        <InputHeader searchFunction={searchMoviesFunction}></InputHeader>
      </View>
      <CategoryHeader title={"Now Playing"}></CategoryHeader>
      <FlatList
        data={upcomingMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <MovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push("Detail", { movieid: item.id });
            }}
            cardWidth={width / 3 - 10}
            isFirst={index == 0 ? true : false}
            isLast={index == upcomingMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath("w342", item.poster_path)}
          />
        )}
      />

      <CategoryHeader title={"Popular"}></CategoryHeader>
      <FlatList
        data={popularMoviesList}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.containerGap36}
        renderItem={({ item, index }) => (
          <MovieCard
            shoudlMarginatedAtEnd={true}
            cardFunction={() => {
              navigation.push("Detail", { movieid: item.id });
            }}
            cardWidth={width / 3 - 10}
            isFirst={index == 0 ? true : false}
            isLast={index == popularMoviesList?.length - 1 ? true : false}
            title={item.original_title}
            imagePath={baseImagePath("w342", item.poster_path)}
          />
        )}
      />
    </ScrollView>
  );
};

export default MoviesScreen;

const styles = StyleSheet.create({
  container: { display: "flex", backgroundColor: COLORS.Black },
  scrollViewContainer: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
  },
  InputHeaderContainer: {
    marginHorizontal: SPACING.space_36,
    marginTop: SPACING.space_28,
  },
  containerGap36: {
    gap: SPACING.space_36,
  },
});
