import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import LoginScreen from './Login';
import { Redirect } from 'expo-router';

export default function App() {
  return (
    <Redirect href={'/Plan'} />
  )
}

const styles = StyleSheet.create({
});
