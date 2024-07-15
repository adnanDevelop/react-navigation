import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Home = ({ navigation }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiData = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      const response = await apiData.json();
      setLoading(false);
      setData(response);
    } catch (error) {
      console.log("Error while fetching data", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
      <View style={{ marginTop: 20 }}>
        {loading ? (
          <ActivityIndicator size={50} color="blue" />
        ) : (
          <>
            <Text>Data from api</Text>
            <Text>Name: {data?.name}</Text>
            <Text>Email: {data?.email}</Text>
          </>
        )}
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
