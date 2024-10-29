import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { config } from "../config";
import { colors } from "../theme";
import { ProductProps } from "../components/product";
import { useRoute } from "@react-navigation/native";

export default function ViewProductPage() {
  const route = useRoute();
  const { id } = route.params as { id: string | undefined };

  const [product, setProduct] = useState<ProductProps>();

  useEffect(() => {
    const fetchProductId = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (id) {
      fetchProductId();
    }
  }, []);

  return (
    <View style={styles.container}>
      {product ? (
        <>
          <Image style={styles.img} source={{ uri: product.image }} />
          <View style={styles.containerText}>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.description}>{product.description}</Text>
            <Text style={styles.price}>R$ {product.price}</Text>
          </View>
        </>
      ) : (
        <Text>Carregando produto...</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: colors.bg,
  },
  containerText: {
    padding: 10,
    gap: 5,
  },
  img: {
    maxWidth: "100%",
    maxHeight: 360,
    resizeMode: "cover",
    zIndex: 2,
  },
  title: {
    color: colors.textLight,
    fontFamily: "Roboto",
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "400",
  },
  description: {
    color: colors.textLight,
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  price: {
    color: colors.success,
    fontFamily: "Roboto",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "400",
  },
  message: {
    marginTop: 20,
    color: "red",
  },
});
