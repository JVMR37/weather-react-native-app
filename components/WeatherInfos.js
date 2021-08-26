import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { colors } from "../utils/index";

const { PRIMARY_COLOR, SECONDARY_COLOR } = colors;

export default function WeatherInfos({ currentWeather }) {
  const {
    main: { temp },
    weather: [details],
    name,
  } = currentWeather;

  const { icon, main, description } = details;

  const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;

  return (
    <View style={styles.weatherInfos}>
      <Text>{name}</Text>
      <Image style={styles.weatherIcon} source={{ uri: iconUrl }} />
      <Text style={styles.textPrimary}>{temp}°</Text>
      <Text style={styles.weatherDescription}>{description}</Text>
      <Text style={styles.textSecondary}>{main}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  weatherInfos: {
    alignItems: "center",
  },

  weatherDescription: {
    textTransform: "capitalize",
  },

  weatherIcon: {
    width: 100,
    height: 100,
  },

  textPrimary: {
    fontSize: 40,
    fontWeight: 'bold',
    color: PRIMARY_COLOR,
  },

  textSecondary: {
    fontSize: 20,
    color: SECONDARY_COLOR,
    fontWeight: "700",
    marginTop: 10,
  },
});
