import { StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./pages/Home";
import About from "./pages/About";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitle: () => {
            return (
              <View>
                <Button title="left button" />
              </View>
            );
          },
          headerRight: () => {
            return (
              <View>
                <Button title="Right button" />
              </View>
            );
          },
          headerLeft: () => null,
          // headerTitleStyle: "green",
          // headerTintColor: "white", // this is also for title color
          // headerTitle: "All Screen",
          headerStyle: { backgroundColor: "yellow" },
          // headerShown: false,   this is for displaying header or not
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
