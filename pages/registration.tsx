import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import { FormInput } from "../components/formInputs";
import { Types } from "../models/userTypes";
import { colors } from "../theme";
import { config } from "../config";

const userSchema = yup.object().shape({
  name: yup.string().required("O nome é obrigatório."),
  email: yup.string().email("O email deve ser um endereço de email válido.").required("O email é obrigatório."),
  password: yup
    .string()
    .required("A senha é obrigatória.")
    .min(8, "A senha deve ter pelo menos 8 caracteres.")
    .matches(/[a-zA-Z]/, "A senha deve conter pelo menos uma letra.")
    .matches(/\d/, "A senha deve conter pelo menos um número."),
  type: yup.mixed<Types>().oneOf(Object.values(Types), "Tipo de usuário inválido.").required("O tipo de usuário é obrigatório."),
});

export default function RegisterPage() {
  const initialValues = { name: "", email: "", password: "", type: "" };
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      const response = await axios.post(`${config.API_URL}/users`, values);
      if (response.data.status === 200 && response.data.status === 201) {
        setMessage(response.data.message);
        setVisible(true);
      }
      setMessage(response.data.error);
      setVisible(true);
    } catch (error: any) {
      console.error(error);
      setMessage(`${error}` || "Erro no registro.");
      setVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValues} validationSchema={userSchema} onSubmit={handleSubmit}>
        {({ handleSubmit }) => (
          <>
            <FormInput name="name" placeholder="Nome" />
            <FormInput name="email" placeholder="Email" />
            <FormInput name="password" placeholder="Senha" secureTextEntry />
            <FormInput name="type" placeholder="Tipo de Usuário" />
            <TouchableOpacity style={styles.button} onPress={() => handleSubmit()}>
              <Text style={styles.buttonText}>Cadastrar</Text>
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
