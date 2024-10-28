import React from "react";
import { TextInput, Text, StyleSheet, View } from "react-native";
import { useField } from "formik";
import { colors } from "../theme";

interface FormInputProps {
  name: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({ name, placeholder, secureTextEntry }) => {
  const [field, meta] = useField(name);
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor={colors.bgForeground} value={field.value} onChangeText={field.onChange(name)} onBlur={field.onBlur(name)} secureTextEntry={secureTextEntry} />
      {meta.touched && meta.error && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  input: {
    borderColor: colors.bgForeground,
    borderWidth: 1,
    padding: 8,
    borderRadius: 20,
    color: colors.textLight,
  },
  errorText: {
    color: colors.warn,
    fontSize: 12,
  },
});
