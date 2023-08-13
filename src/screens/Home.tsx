import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { FlashList } from "@shopify/flash-list";
//import component Card
import Card from "../components/card/Card";
//import Query
import { useInfiniteQuery } from "react-query";

const URI_POKEMON = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {

  const handleNewPage = (pageParam: number) => {
    return pageParam === 1 ? URI_POKEMON : pageParam;
  };
  const getAllPokemon = async ({ pageParam = 1 }) => {
    const response = await fetch(`${handleNewPage(pageParam)}`);
    return response.json();
  };
  const { data, isLoading, error, fetchNextPage, hasNextPage } =
    useInfiniteQuery(["getAllPokemon"], getAllPokemon, {
      getNextPageParam: (lastPage) => {
        return lastPage.next ? lastPage.next : false;
      },
    });

  const loadMorePokemon = () => {
    console.log(hasNextPage);
    if (hasNextPage) {
      fetchNextPage();
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Pokedex</Text>
      <View style={styles.renderContainer}>
        <FlashList
          data={data?.pages.map((pages) => pages.results).flat()}
          renderItem={({ item }) => <Card {...item} />}
          estimatedItemSize={4}
          numColumns={2}
          onEndReached={loadMorePokemon}
          onEndReachedThreshold={0.3}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
  },
  renderContainer: {
    width: "100%",
    height: "95%",
  },
});
export default Home;
