import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const About = ({ navigation, route }) => {
  console.log(route?.params);
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>My name is: {route?.params.name}</Text>
      <Text>My age is: {route?.params.age}</Text>
      <Text>And my qualification is: {route?.params.age}</Text>

      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text
          style={{
            fontWeight: "bold",
            width: 120,
            height: 40,
            lineHeight: 40,
            backgroundColor: "blue",
            color: "white",
            textAlign: "center",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          Go to Home Screen
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
