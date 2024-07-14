import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const Profile = () => {
  return (
    <View>
      <Text>Profile page</Text>
    </View>
  );
};

const Setting = () => {
  return (
    <View>
      <Text>Setting page</Text>
    </View>
  );
};

const Portfolio = () => {
  return (
    <View>
      <Text>Portfolio page</Text>
    </View>
  );
};
const Custom = () => {
  return (
    <View>
      <Text>Custom page</Text>
    </View>
  );
};

const About = () => {
  return (
    <View>
      <Text>About page</Text>
    </View>
  );
};
const Contact = () => {
  return (
    <View>
      <Text>Contact page</Text>
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: { backgroundColor: "black" },
        }}
      >
        <Tab.Screen name="profile" component={Profile} />
        <Tab.Screen name="setting" component={Setting} />
        <Tab.Screen name="portfolio" component={Portfolio} />
        <Tab.Screen name="custom" component={Custom} />
        <Tab.Screen name="about" component={About} />
        <Tab.Screen name="contact" component={Contact} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
