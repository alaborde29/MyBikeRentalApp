import { Keyboard, TouchableWithoutFeedback, Image, StyleSheet, View, Text, TextInput, Button, Pressable, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Control, Controller, FieldValue, useController, useForm } from 'react-hook-form';
import { Link, useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { AuthContext } from '@/context/authProvider';
import { Form } from 'react-hook-form';

type InputProps = {
  name: string,
  isPassword?: boolean,
  control: any,
}

interface IFormInput {
  email: string;
  password: string;
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
      autoCapitalize="none"
      autoCorrect={false}
      textContentType={isPassword ? 'password' : 'emailAddress'}
    />
  );
}

function Logo() {
  return (
    <View style={styles.logo}>
      <Image
        source={require('../../assets/images/notes.png')}
        style={styles.logo}
      />
    </View>
  )
}

function BackgroundRectangle() {
  return (
    <View style={styles.rectangle}>
    </View>
  )
}

export default function LoginScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const router = useRouter();
  const auth = useContext(AuthContext);

  function onSubmit(data: IFormInput) {
    if (!auth) {
      console.error("AuthContext is undefined!");
      return;
    }

    auth.login(data.email, data.password)
      .then((userCredential) => {
        console.log("login success");
        console.log(userCredential);
        console.log(auth.isAuthenticated)
        router.replace("/Plan")
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
        console.log(auth.isAuthenticated)
      });
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>E X P O    N O T E</Text>
        <Logo />
        <Controller
          control={control}
          name="email"
          rules={{
            required: {
              value: true,
              message: 'Email is required'
            },
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'Invalid email address'
            }
          }}
          render={({ field }) => (
            <Input
              control={control}
              name="email"
              isPassword={false}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          rules={{
            required: {
              value: true,
              message: 'Password is required'
            }
          }}
          render={({ field }) => (
            <Input
              control={control}
              name="password"
              isPassword={true}
            />
          )}
        />
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push('/Register')} // verifier les ()=> ca peut etre degueu
          style={styles.buttonAlt}
        >
          <Text style={styles.buttonTextAlt}>Register</Text>
        </TouchableOpacity>

        <Link href={'/ForgotPassword'} asChild style={styles.link}>
          <TouchableOpacity>
            <Text style={styles.link}>Forgot password ?</Text>
          </TouchableOpacity>
        </Link>
        <BackgroundRectangle />
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgb(250, 250, 250)",
  },
  title: {
    alignSelf: "center",
    fontSize: 40,
    fontWeight: "900",
    textDecorationLine: "underline",
    textDecorationColor: "rgb(255, 225, 0)",
  },
  logo: {
    alignItems: "center",
    justifyContent: "space-evenly",
    alignSelf: "center",
    width: "100%",
    height: 300,
    resizeMode: "contain",
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
    margin: 10,
    padding: 10,
    borderRadius: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  buttonAlt: {
    alignItems: "center",
    backgroundColor: "rgb(255, 255, 255)",
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
  buttonTextAlt: {
    fontWeight: "bold",
    color: "rgb(108, 108, 108)",
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
  rectangle: {
    backgroundColor: "rgb(255, 221, 0)",
    alignSelf: "flex-end",
    position: "absolute",
    width: "100%",
    height: "70%",
    borderRadius: 35,
    bottom: -50,
    zIndex: -1,
  }
});
