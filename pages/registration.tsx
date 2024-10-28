import React from "react";
import * as yup from "yup";
import { View, Button, StyleSheet } from "react-native";
import { Formik } from "formik";
import { FormInput } from "../components/formInputs";
import { Types } from "../models/userTypes";

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

  const handleSubmit = (values: typeof initialValues) => {
    console.log(values);
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
            <Button title="Cadastrar" onPress={() => handleSubmit()} />
          </>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
});
