import { Alert, StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, Platform } from 'react-native';
import { Controller, useController, useForm } from 'react-hook-form';
import { useRouter } from 'expo-router';
import { useContext } from 'react';
import { AuthContext } from '@/context/authProvider';
import { UserType } from '@/services/firestore/user';

type InputProps = {
  field: {
    onChange: (value: string) => void,
    onBlur: () => void,
    value: string,
  },
  isPassword?: boolean,
  rawInput?: boolean,
  placeholder: string
};

interface IRegisterInput {
  username: string,
  firstName: string,
  lastName: string,
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
}

function Input({ field, isPassword, rawInput, placeholder }: InputProps) {
  return (
    <TextInput
      style={styles.input}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      value={field.value}
      placeholder={placeholder}
      secureTextEntry={isPassword}
      autoCapitalize={rawInput ? 'none' : 'sentences'}
      autoCorrect={!rawInput}
    />
  );
}

export default function RegisterScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm<IRegisterInput>()
  const router = useRouter();
  const auth = useContext(AuthContext);

  function onSubmit(data: IRegisterInput) {
    const userInfos: UserType = { email: data.email, username: data.username, firstName: data.firstName, lastName: data.lastName }
    console.log("inside onSubmit")
    if (data.email !== data.confirmEmail) {
      Alert.alert("Error", "Emails do not match");
      return;
    }

    if (data.password !== data.confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    auth.register(userInfos, data.password)
      .then((userCredential) => {
        console.log("registeration success");
        console.log(userCredential);
        router.replace('/Plan');
      })
      .catch((error) => {
        Alert.alert("Error", error.message);
      });
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <Text style={styles.title}>Registeration</Text>
          {/*put the form in its own component*/}
          <View style={styles.form}>
            <Controller
              control={control}
              name="username"
              rules={{
                required: {
                  value: true,
                  message: 'Username is required'
                },
              }}
              render={({ field }) => (
                <Input
                  field={field}
                  placeholder="Username"
                  isPassword={false}
                  rawInput
                />
              )}
            />
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: {
                  value: true,
                  message: 'First name is required'
                },
              }}
              render={({ field }) => (
                <Input
                  field={field}
                  placeholder="First name"
                  isPassword={false}
                />
              )}
            />
            <Controller
              control={control}
              name="lastName"
              rules={{
                required: {
                  value: true,
                  message: 'Last name is required'
                },
              }}
              render={({ field }) => (
                <Input
                  field={field}
                  placeholder="Last name"
                  isPassword={false}
                />
              )}
            />
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
                  field={field}
                  placeholder="Email"
                  isPassword={false}
                  rawInput
                />
              )}
            />
            <Controller
              control={control}
              name="confirmEmail"
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
                  field={field}
                  placeholder="Comfirm email"
                  isPassword={false}
                  rawInput
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
                  field={field}
                  placeholder="Password"
                  isPassword={true}
                  rawInput
                />
              )}
            />
            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: {
                  value: true,
                  message: 'Password is required'
                }
              }}
              render={({ field }) => (
                <Input
                  field={field}
                  placeholder="Comfirm password"
                  isPassword={true}
                  rawInput
                />
              )}
            />
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
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
