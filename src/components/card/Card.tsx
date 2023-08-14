import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { useFonts } from "expo-font";
//import Query
import { useQuery } from "react-query";

interface CardProps {
  name: string;
  number: string;
  url: string;
}

const URI_IMAGE_POKEMON = "https://pokeapi.co/api/v2/pokemon-color/";

const { height } = Dimensions.get("window");

const colors:any = {
  grass: "#49d0b3",
  electric: "#f9cf4b",
  fire: "#f66c6c",
  water: "#73bdff",
  rock: "#B8A058",
  ghost: "#d5d4d4",
  shadow: "#d5d4d4",
  dragon: "#d95f63",
  dark: "#c4c4c4",
  steel: "#c4c2db",
  fairy: "#E79FE7",
  bug: "#A8B820",
  psychic: "#F870A0",
  flying: "#f5f5f5",
  ground: "#E9D6A4",
  poison: "#d5bde6",
  fighting: "#e6e0d4",
  ice: "#58C8E0",
  normal: "#5F5F5F",
  unknown: "#f5f5f5",
};

const Card = ({ name, number, url }: CardProps) => {
  const getPokemon = async () => {
    const response = await fetch(`${url}`);
    return response.json();
  };
  const getColor = async () => {
    const response = await fetch(`${URI_IMAGE_POKEMON}${name}`);
    return response.json();
  };
  const { data, isLoading, isFetching, error } = useQuery(
    ["getPokemon", url],
    getPokemon
  );

  const [fontsLoaded] = useFonts({
    Neuzeit: require("../../../assets/fonts/Neuzeit.ttf"),
  });
  const onLayoutRootView = React.useCallback(async () => {
    if (fontsLoaded) {
      await (<Text>Hi</Text>);
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors[data?.types[0]?.type?.name] },
      ]}
    >
      <Text style={styles.title}>{data?.name}</Text>
      <View style={styles.secondContainer}>
        <View>
          <Text style={styles.atributes}>{data?.order}</Text>
          <Text style={styles.atributes}>{data?.types[0]?.type?.name}</Text>
        </View>
        <Image
          source={{
            uri: data?.sprites.other["official-artwork"].front_default,
          }}
          style={styles.image}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: height * 0.17,
    width: "90%",
    justifyContent: "center",
    borderRadius: 23,
    margin: "3%",
    padding: "2%",
  },
  secondContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "90%",
    height: "70%",
    alignSelf: "center",
  },
  image: {
    width: "45%",
    height: "70%",
  },
  atributes: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: "6%",
    color: "#fff",
  },
  title: {
    fontSize: 23,
    fontFamily: "Neuzeit",
    fontWeight: "bold",
    marginHorizontal: "5%",
    color: "#fff",
  },
});
export default Card;
