import React from "react";
import { StyleSheet } from "react-native";
import "react-native-gesture-handler";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./Home";
import TopBar from "./TopBar";

const Drawer = createDrawerNavigator();

const About = () => {
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="topbar" component={TopBar} />
      </Drawer.Navigator>
    </>
  );
};

export default About;
const styles = StyleSheet.create({});
