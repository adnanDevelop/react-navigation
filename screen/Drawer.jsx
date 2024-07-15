import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  Image,
  FlatList,
} from "react-native";

const Drawer = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const apiData = await fetch("https://fakestoreapi.com/products/");
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
    <View style={{ paddingHorizontal: 10 }}>
      {/* calling api */}
      {loading ? (
        <ActivityIndicator size={50} color="blue" />
      ) : (
        <View>
          <FlatList
            data={data}
            renderItem={ProductCard}
            keyExtractor={(data) => data.id}
          />
        </View>
      )}
    </View>
  );
};

const ProductCard = ({ item }) => {
  return (
    <View style={{ marginBottom: 15 }}>
      <Text>Name: {item?.title}</Text>
      <Image
        source={{ uri: item?.image }}
        style={{ height: 250, objectFit: "cover" }}
      />
    </View>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
