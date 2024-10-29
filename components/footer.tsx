import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { colors } from "../theme";

export function Footer() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Home")}>
        <Image source={require("../assets/icons/home.png")} />
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Login")}>
        <Image source={require("../assets/icons/user.png")} />
        <Text style={styles.text}>Acesso</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Novo Produto")}>
        <Image source={require("../assets/icons/bagShop.png")} />
        <Text style={styles.text}>Novo Produto</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 60,
    backgroundColor: colors.secondary,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    position: "absolute",
    bottom: 0,
    zIndex: 1,
  },
  link: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.accent,
  },
});
