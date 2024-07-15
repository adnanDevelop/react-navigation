import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Chat = ({ navigation }) => {
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
        Chat Screen
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
          Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Group = ({ navigation }) => {
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
        Group Screen
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
          Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Call = ({ navigation }) => {
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
        Call Screen
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
          Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const Status = ({ navigation }) => {
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
        Status Screen
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
          Go to Home
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const TopBar = () => {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Group" component={Group} />
        <Tab.Screen name="Status" component={Status} />
        <Tab.Screen name="Call" component={Call} />
      </Tab.Navigator>
    </>
  );
};

export default TopBar;

const styles = StyleSheet.create({});
