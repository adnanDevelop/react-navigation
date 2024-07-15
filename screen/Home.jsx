import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {/* About page button */}
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

      {/* Bottom navigation page button */}
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("bottomnavigation", {
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
          Go to Tab Navigation
        </Text>
      </TouchableOpacity>

      {/* calling api */}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
