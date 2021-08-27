import { OPENCAGE_API_KEY } from "@env";

import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import { TextInput, Button } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";

const SearchCityPage = () => {
  const [text, setText] = React.useState("");

  return (
    <View style={styles.container}>
      <Text>Type your location here:</Text>
      <TextInput
        value={text}
        selectionColor="red"
        mode="outlined"
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <View style={styles.buttonsRow}>
        <Button
          mode="contained"
          style={styles.button}
          uppercase={false}
          onPress={() => {}}
        >
          <Text style={styles.text}>Submit</Text>
        </Button>

        <Button mode="contained" style={styles.button} onPress={() => {}}>
          <MaterialIcons name="my-location" size={24} color="black" />
        </Button>
      </View>
      <Text>Previous Searches</Text>
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
  touchable: {
    borderColor: "black",
    borderWidth: 1,
    backgroundColor: "#ff1744",
  },
  text: { alignSelf: "center" },
  buttonsRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
    marginBottom: 15,
  },
  textInput: {
    color: "red",
  },
  button: {
    backgroundColor: "#ff1744",
    borderRadius: 15,
    minWidth: 125,
    //   border: "1px solid black"
  },
});

export default SearchCityPage;
