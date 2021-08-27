import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { IconButton } from "react-native-paper";

import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../utils/index";

const PreviousSearch = ({ cityName, locationInfos }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationRow}>
        <View style={styles.locationColumn}>
          <Text style={styles.cityName}>{cityName}</Text>
          <Text style={styles.locationInfos}>{locationInfos}</Text>
        </View>
        <View style={styles.locationColumn}>
          <IconButton
            icon="arrow-right"
            size={24}
            color={colors.PRIMARY_COLOR}
            onPress={() => console.log("Pressed")}
          ></IconButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#D3D3D3",
    padding: 10,
    borderRadius: 15,
    marginBottom: 15,
    marginTop: 15,
  },
  locationRow: {
    display: "flex",
    flexDirection: "row",
    paddingLeft: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderLeftWidth: 3,
    borderLeftColor: "red",
  },
  locationColumn: {
    display: "flex",
    flexDirection: "column",
  },
  cityName: {
    fontWeight: "bold",
  },
  locationInfos: {},
});

export default PreviousSearch;
