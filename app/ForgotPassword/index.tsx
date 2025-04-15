import { Image, StyleSheet, View, Text, TextInput, Button, Pressable, TouchableOpacity, ScrollView } from 'react-native';
import { Control, FieldValue, useController, useForm } from 'react-hook-form';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

type InputProps = {
  name: string,
  isPassword?: boolean,
  control: any,
}

function Input({ name, isPassword, control }: InputProps) {
  const { field } = useController({
    name,
    control,
    defaultValue: '',
  })
  return (
    <TextInput
      style={styles.input}
      onChangeText={field.onChange}
      value={field.value}
      placeholder={name}
      secureTextEntry={isPassword}
    />
  );
}

export default function ForgotPasswordScreen() {
  const { control, handleSubmit } = useForm()

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Recover password</Text>
        {/*put the form in its own component*/}
        <View style={styles.form}>
          <Input
            control={control}
            name="Email"
          />
          <Input
            control={control}
            name="Comfirm email"
          />
          <TouchableOpacity
            onPress={handleSubmit((data) => {
              console.log(data);
            })}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "rgb(250, 250, 250)",
  },
  title: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "900",
    textDecorationLine: "underline",
    textDecorationColor: "rgb(255, 225, 0)",
    paddingVertical: 100
  },
  input: {
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "“rgb(207, 207, 207)",
    padding: 10,
    margin: 10,
  },
  button: {
    alignItems: "center",
    backgroundColor: "rgb(139, 216, 254)",
    marginHorizontal: 10,
    marginVertical: 30,
    padding: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  buttonAlt: {
    alignItems: "center",
    backgroundColor: "rgb(139, 216, 254)",
    margin: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
  },
  link: {
    alignItems: "center",
    color: "rgb(255, 255, 255)",
    fontWeight: "bold",
    padding: 5,
    margin: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  },
  form: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 100,
    backgroundColor: "rgb(255, 221, 0)",
    borderRadius: 35,
    paddingVertical: 20,
  }
});
