import { StyleSheet, Image, Text, View } from "react-native";
import { colors } from "../theme";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  image: any;
  description?: string;
}

export function Product(props: ProductProps) {
  return (
    <View id={props.id} style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: 192,
    maxHeight: 280,
    marginVertical: 10,
    marginHorizontal: 6,
    borderRadius: 10,
    backgroundColor: colors.bgForeground,
  },
  containerText: {
    padding: 10,
  },
  img: {
    maxWidth: "100%",
    maxHeight: 190,
    resizeMode: "cover",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
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
});
