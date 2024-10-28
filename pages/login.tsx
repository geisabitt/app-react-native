import * as yup from "yup";
import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../theme";
import { Formik } from "formik";
import { FormInput } from "../components/formInputs";
import axios from "axios";
import { config } from "../config";

const loginSchema = yup.object().shape({
  email: yup.string().email("O email deve ser um endereço de email válido.").required("O email é obrigatório."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .matches(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra.")
    .matches(/\d/, "A senha deve conter pelo menos um número."),
});

export default function LoginPage() {
  const initialValues = { email: "", password: "" };
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await axios.post(`${config.API_URL}/auth/login`, values);
      if (response.data.status === 200 && response.data.status === 201) {
        setMessage(response.data.message);
        setVisible(true);
      }
      setMessage(`${response.data.error}`);
      setVisible(true);
    } catch (error: any) {
      console.error(error);
      setMessage(`${error}` || "Erro ao Logar");
      setVisible(true);
    }
  };
  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} validationSchema={loginSchema} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <>
            <FormInput name="email" placeholder="Email" />
            <FormInput name="password" placeholder="Senha" secureTextEntry />
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
          </>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: colors.bg,
  },
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
    marginTop: 20,
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 5,
  },
  messageText: {
    color: "black",
  },
  closeText: {
    color: "blue",
    marginTop: 5,
    textAlign: "center",
  },
});
