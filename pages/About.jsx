import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const About = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
