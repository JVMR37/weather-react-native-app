import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";

import WeatherPage from "./pages/weather_page";
import SearchCityPage from "./pages/search_city_page";

const Stack = createNativeStackNavigator();

const theme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: "#ff304f",
    accent: "#f1c40f",
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="SearchPage">
          <Stack.Screen
            name="WeatherPage"
            component={WeatherPage}
            options={{
              title: "Weather",
            }}
          />
          <Stack.Screen
            name="SearchPage"
            component={SearchCityPage}
            options={{
              title: "Search",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
