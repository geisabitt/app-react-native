import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { MainLayout } from "./components/mainLayout";
import ProductsPage from "./pages/products";
import ConfigPage from "./pages/config";
import LoginPage from "./pages/login";
import AdminPage from "./pages/admin";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainLayout>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={ProductsPage} />
          <Stack.Screen name="Config" component={ConfigPage} />
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Admin" component={AdminPage} />
        </Stack.Navigator>
      </MainLayout>
    </NavigationContainer>
  );
}
