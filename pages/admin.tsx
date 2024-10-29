import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from "react-native";
import { ProductProps } from "../components/product";
import { colors } from "../theme";
import { config } from "../config";
import { NavigationProp, useNavigation } from "@react-navigation/native";

function Product(props: ProductProps) {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View id={props.id} style={styles.containerProduct}>
      <Image style={styles.img} source={props.image} />
      <View style={styles.containerText}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {props.title}
        </Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {props.description}
        </Text>
        <Text style={styles.price}>R$ {props.price}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={() => navigation.navigate("Novo Produto", { id: props.id })}>
          <Image source={require("../assets/icons/pencil.png")} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Novo Produto", { id: props.id })}>
          <Image source={require("../assets/icons/trash.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function AdminPage() {
  const [product, setProduct] = useState<ProductProps[]>();
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/products`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);
  return (
    <>
      <View style={styles.container}>
        <FlatList data={product} keyExtractor={(item) => item.id} renderItem={({ item }) => <Product id={item.id} title={item.title} price={item.price} image={{ uri: item.image }} description={item.description} />} numColumns={1} contentContainerStyle={styles.listContainer} />
      </View>
      {visible && (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>{message}</Text>
          <TouchableOpacity onPress={() => setVisible(false)}>
            <Text style={styles.closeText}>Fechar</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
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
    maxWidth: 400,
    padding: 0,
  },
  text: {
    color: colors.textLight,
    fontSize: 20,
  },
  containerProduct: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    maxWidth: 400,
    maxHeight: 280,
    margin: 10,
    borderRadius: 10,
    backgroundColor: colors.bgForeground,
  },
  containerText: {
    maxWidth: "54%",
    padding: 10,
  },
  img: {
    width: "20%",
    maxWidth: "100%",
    maxHeight: 80,
    resizeMode: "cover",
    borderRadius: 10,
  },
  title: {
    color: colors.textLight,
    fontFamily: "Roboto",
    fontSize: 14,
    fontStyle: "normal",
    fontWeight: "400",
  },
  description: {
    color: colors.textLight,
    fontFamily: "Roboto",
    fontSize: 10,
    fontStyle: "normal",
    fontWeight: "400",
  },
  price: {
    color: colors.success,
    fontFamily: "Roboto",
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: "400",
  },
  actions: {
    maxWidth: "22%",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  messageContainer: {
    position: "absolute",
    backgroundColor: colors.bgForeground,
    padding: 30,
    borderRadius: 20,
    top: "50%",
    left: "50%",
    transform: [{ translateX: -130 }, { translateY: -10 }],
  },
  messageText: {
    color: colors.textLight,
  },
  closeText: {
    backgroundColor: colors.textLight,
    color: colors.primary,
    marginTop: 15,
    padding: 10,
    borderRadius: 10,
    textAlign: "center",
  },
});
