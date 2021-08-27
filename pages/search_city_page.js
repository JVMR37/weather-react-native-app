import { OPENCAGE_API_KEY } from "@env";

import * as Location from "expo-location";

import React, { useState, useCallback } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";

import PreviousSearch from "../components/PreviousSearch";
import { useSelector, useDispatch } from "react-redux";

import { addNewSearch } from "../stores/searchSlice";

const BASE_OPENCAGE_URL = "https://api.opencagedata.com/geocode/v1/json?";

const SearchCityPage = () => {
  const dispatch = useDispatch();
  const searchs = useSelector((state) => state.search.value);
  const [searchText, setSearchText] = useState("");

  const searchByLocationButtonHandler = useCallback(async () => {
    try {
      const location = await Location.getCurrentPositionAsync();

      const { latitude, longitude } = location.coords;

      const opencageUrl = `${BASE_OPENCAGE_URL}key=${OPENCAGE_API_KEY}&q=${latitude}+${longitude}&pretty=1&language=pt-BR`;

      console.log("========================");
      console.log(opencageUrl);
      console.log("========================");

      const response = await fetch(opencageUrl);

      const result = await response.json();

      console.log(result);

      if (response.ok) {
        dispatch(
          addNewSearch({
            city: result.results[0].components.city,
            location:
              result.results[0].components.state_code +
              ", " +
              result.results[0].components.country,
          })
        );
      } else throw result;
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const submitButtonHandler = useCallback(async () => {
    try {
      const opencageUrl = `${BASE_OPENCAGE_URL}key=${OPENCAGE_API_KEY}&q=${searchText}&pretty=1&language=pt-BR`;

      console.log("========================");
      console.log(opencageUrl);
      console.log("========================");

      const response = await fetch(opencageUrl);

      const result = await response.json();

      console.log(result);

      if (response.ok) {
        dispatch(
          addNewSearch({
            city: result.results[0].components.city,
            location:
              result.results[0].components.state_code +
              ", " +
              result.results[0].components.country,
          })
        );
      } else throw result;
    } catch (error) {
      console.log(error.message);
    }
  }, [searchText]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "700",
        }}
      >
        Type your location here:
      </Text>
      <TextInput
        value={searchText}
        style={styles.textInput}
        selectionColor="red"
        mode="outlined"
        onChangeText={setSearchText}
      ></TextInput>
      <View style={styles.buttonsRow}>
        <Button
          mode="contained"
          style={styles.button}
          uppercase={false}
          onPress={submitButtonHandler}
        >
          <Text>Submit</Text>
        </Button>

        <Button
          mode="contained"
          style={styles.button}
          onPress={searchByLocationButtonHandler}
        >
          <MaterialIcons name="my-location" size={24} color="white" />
        </Button>
      </View>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        Previous Searches
      </Text>
      {searchs.length > 0 &&
        searchs.map((search, index) => (
          <PreviousSearch
            key={index}
            cityName={search.city}
            locationInfos={search.location}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingTop: StatusBar.currentHeight,
    padding: 8,
  },
  buttonsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  textInput: {
    marginTop: 15,
  },
  button: {
    minWidth: 125,
  },
});

export default SearchCityPage;
