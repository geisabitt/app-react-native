import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { config } from "../config";
import { FormInput } from "../components/formInputs";
import { useRoute } from "@react-navigation/native";
import { colors } from "../theme";

interface ProductUpdateProps {
  id?: string;
  title: string;
  price: number;
  image: any;
  description?: string;
}

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Título é obrigatório"),
  description: Yup.string().required("Descrição é obrigatória"),
  price: Yup.number().required("Preço é obrigatório").positive("O preço deve ser positivo"),
  image: Yup.string().url("URL da imagem inválida").required("URL da imagem é obrigatória"),
});

export default function ProductFormPage() {
  const route = useRoute();
  const { id } = (route.params as { id?: string }) || {};
  const [initialValues, setInitialValues] = useState<ProductUpdateProps>({
    title: "",
    description: "",
    price: 0,
    image: "",
  });
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${config.API_URL}/products/${id}`);
        setInitialValues(response.data);
      } catch (error) {
        console.error("Erro ao buscar produto", error);
      }
    };
    if (id) {
      fetchProduct();
    }
  }, []);

  const handleSubmit = async (values: ProductUpdateProps) => {
    const newValues = { ...values, price: parseFloat(values.price.toString()) };
    try {
      if (id) {
        await axios.patch(`${config.API_URL}/products/${id}`, newValues);
        setVisible(true);
        setMessage("Produto atualizado com sucesso!");
      } else {
        await axios.post(`${config.API_URL}/products`, newValues);
        setVisible(true);
        setMessage("Produto cadastrado com sucesso!");
      }
    } catch (error) {
      setVisible(true);
      setMessage("Erro ao salvar produto");
      console.error("Erro ao salvar produto", error);
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit} enableReinitialize>
        {({ handleSubmit }) => (
          <View style={styles.container}>
            <Text style={styles.title}>{id ? "Editar Produto" : "Cadastrar Produto"}</Text>
            <FormInput name="title" placeholder="Título" />
            <FormInput name="description" placeholder="Descrição" />
            <FormInput name="price" placeholder="Preço" keyboardType="numeric" />
            <FormInput name="image" placeholder="URL da Imagem" />
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>{id ? "Salvar Alterações" : "Cadastrar Produto"}</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
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
  container: { flex: 1, padding: 20, justifyContent: "center", backgroundColor: colors.bg },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, color: colors.textLight, textAlign: "center" },
  button: {
    backgroundColor: colors.secondary,
    borderWidth: 1,
    padding: 8,
    borderRadius: 20,
  },
  buttonText: {
    color: colors.textLight,
    textAlign: "center",
    padding: 5,
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
