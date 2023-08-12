import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Card = () => {
  const [fontsLoaded] = useFonts({
    "Neuzeit": require('../../../assets/fonts/Neuzeit.ttf'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pikachu</Text>
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.atributes}>Atribute 1</Text>
          <Text style={styles.atributes}>Atribute 2</Text>
        </View>
        <View style={styles.image}>
          <Text>Image</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 100,
    backgroundColor: "grey",
    justifyContent: "space-evenly",
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: '90%',
    alignSelf: 'center',
  },
  image: {
    width: 60,
    height: 60,
    backgroundColor: "red",
  },
  atributes: {
    textAlign: "center",
  },
  title: {
    fontSize: 20,
    fontFamily: "Neuzeit",
    marginHorizontal: '2%'
  },
});
export default Card;
