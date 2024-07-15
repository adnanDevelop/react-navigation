import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TopBar from "./TopBar";

const Tab = createBottomTabNavigator();

const Setting = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "blue",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: 800, color: "white" }}>
        Setting page
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("About", {
            name: "Adnan Tariq",
            age: 21,
            qualification: "Matric",
          })
        }
      >
        <Text
          style={{
            fontWeight: "bold",
            paddingHorizontal: 20,
            height: 45,
            lineHeight: 45,
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          Go to About
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Portfolio = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "yellow",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: 800, color: "white" }}>
        Portfolio page
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("About", {
            name: "Adnan Tariq",
            age: 21,
            qualification: "Matric",
          })
        }
      >
        <Text
          style={{
            fontWeight: "bold",
            paddingHorizontal: 20,
            height: 45,
            lineHeight: 45,
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          Go to About
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Custom = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "pink",
      }}
    >
      <Text style={{ fontSize: 40, fontWeight: 800, color: "white" }}>
        {" "}
        Custom page
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("About", {
            name: "Adnan Tariq",
            age: 21,
            qualification: "Matric",
          })
        }
      >
        <Text
          style={{
            fontWeight: "bold",
            paddingHorizontal: 20,
            height: 45,
            lineHeight: 45,
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          Go to About
        </Text>
      </TouchableOpacity>
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
        <Tab.Screen name="topbar" component={TopBar} />
        <Tab.Screen name="setting" component={Setting} />
        <Tab.Screen name="portfolio" component={Portfolio} />
        <Tab.Screen name="custom" component={Custom} />
      </Tab.Navigator>
    </>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({});
