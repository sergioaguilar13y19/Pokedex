import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useFonts } from "expo-font";

interface CardProps {
  name: string;
  number: string;
}

const Card = ({name,number}: CardProps) => {
  const [fontsLoaded] = useFonts({
    "Neuzeit": require('../../../assets/fonts/Neuzeit.ttf'),
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await <Text>Hi</Text>
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.atributes}>{number}</Text>
          <Text style={styles.atributes}>Atribute 2</Text>
        </View>
        <Image
          source={{uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'}}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 150,
    backgroundColor: "grey",
    justifyContent: "space-evenly",
    borderRadius: 20,
    margin: '3%',
    padding: '3%',
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "white",
    width: '90%',
    height: '70%',
    alignSelf: 'center',
  },
  image: {
    width: '45%',
    height: '70%',
    backgroundColor: "red",
  },
  atributes: {
    textAlign: "center",
    fontSize: 13,
    marginVertical: '6%',
  },
  title: {
    fontSize: 20,
    fontFamily: "Neuzeit",
    marginHorizontal: '5%',
  },
});
export default Card;
