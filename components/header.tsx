import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../theme";

export function Header() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.link} onPress={() => navigation.navigate("Admin")}>
        <Image source={require("../assets/icons/admUser.png")} />
        <Text style={styles.text}>Admin</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 90,
    backgroundColor: colors.secondary,
    paddingTop: 20,
    paddingRight: 20,
    justifyContent: "center",
    alignItems: "flex-end",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  link: {
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: colors.accent,
    fontWeight: "bold",
  },
});
