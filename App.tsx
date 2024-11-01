import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainLayout } from "./components/mainLayout";
import ProductsPage from "./pages/products";
import LoginPage from "./pages/login";
import AdminPage from "./pages/admin";
import RegisterPage from "./pages/registration";
import ViewProductPage from "./pages/viewProduct";
import ProductFormPage from "./pages/productFormPage";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainLayout>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={ProductsPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Cadastro" component={RegisterPage} />
          <Stack.Screen name="Novo Produto" component={ProductFormPage} />
          <Stack.Screen name="Produto" component={ViewProductPage} />
          <Stack.Screen name="Admin" component={AdminPage} />
        </Stack.Navigator>
      </MainLayout>
    </NavigationContainer>
  );
}
