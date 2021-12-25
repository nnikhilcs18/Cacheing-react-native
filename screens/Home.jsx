import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, FlatList, ScrollView } from "react-native";
import CustomImage from "../components/CustomImage";


const url = "https://www.breakingbadapi.com/api/characters";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => alert(error));
  },[]);


  const renderImages = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <CustomImage style={styles.image} uri={item.img} />
      </View>
    );
  };
  const dataAvailable = data && data.length > 0;
  return (
    <>
      <View style={styles.container}>
          {dataAvailable && (
            <FlatList
              data={data}
              renderItem={renderImages}
              ketExtractor={(item, index) => index.toString()}
            />
          )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
  },
  item:{
    margin:1,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  image: {
     height: 300,
     width: 200,
  },
});
export default Home;
