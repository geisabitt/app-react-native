import { FlatList, StyleSheet, View } from "react-native";
import { Product } from "../components/product";
import { colors } from "../theme";

const products = [
  {
    id: "1",
    title: "Inteligência Emocional",
    price: 40.99,
    image: require("../assets/mock/1.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "2",
    title: "Deixe de ser Pobre",
    price: 40.99,
    image: require("../assets/mock/2.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "3",
    title: "Desenvolvendo Aplicativos com Chat GPT",
    price: 40.99,
    image: require("../assets/mock/3.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "4",
    title: "Código Limpo",
    price: 40.99,
    image: require("../assets/mock/4.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "5",
    title: "Gatilhos Mentais",
    price: 40.99,
    image: require("../assets/mock/5.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "6",
    title: "Inteligência Emocional",
    price: 40.99,
    image: require("../assets/mock/1.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "7",
    title: "Deixe de ser Pobre",
    price: 40.99,
    image: require("../assets/mock/2.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "8",
    title: "Desenvolvendo Aplicativos com Chat GPT",
    price: 40.99,
    image: require("../assets/mock/3.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "9",
    title: "Código Limpo",
    price: 40.99,
    image: require("../assets/mock/4.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: "10",
    title: "Gatilhos Mentais",
    price: 40.99,
    image: require("../assets/mock/5.png"),
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function ProductsPage() {
  return (
    <View style={styles.container}>
      <FlatList data={products} keyExtractor={(item) => item.id} renderItem={({ item }) => <Product id={item.id} title={item.title} price={item.price} image={item.image} description={item.description} />} numColumns={2} contentContainerStyle={styles.listContainer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    alignItems: "center",
    justifyContent: "center",
  },
  listContainer: {
    minWidth: "100%",
    maxWidth: 412,
    marginVertical: 0,
    marginHorizontal: "auto",
    padding: 0,
  },
  text: {
    color: colors.textLight,
    fontSize: 20,
  },
});
